const origin = process.env.JOTO_AUDIT_ORIGIN || 'http://127.0.0.1:4321';

const routes = [
  '/ja/',
  '/ja/brand/',
  '/ja/franchise/',
  '/ja/contact/',
  '/ja/privacy/',
  '/ja/cookie/',
  '/en/',
  '/en/brand/',
  '/en/franchise/',
  '/en/contact/',
  '/en/privacy/',
  '/en/cookie/',
];

const failures = [];
const warnings = [];
const checkedUrls = new Map();

function addFailure(route, message) {
  failures.push(`${route}: ${message}`);
}

function addWarning(route, message) {
  warnings.push(`${route}: ${message}`);
}

function getMatches(html, pattern) {
  return Array.from(html.matchAll(pattern));
}

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=(?:\"([^\"]*)\"|'([^']*)')`, 'i'));
  return match ? (match[1] ?? match[2] ?? '') : null;
}

function hasAttribute(tag, name) {
  return new RegExp(`\\s${name}(?:\\s|=|\\/?>)`, 'i').test(tag);
}

function normalizeInternalUrl(value, route) {
  if (
    !value ||
    value.startsWith('#') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:') ||
    value.startsWith('data:') ||
    value.startsWith('javascript:')
  ) {
    return null;
  }

  const url = new URL(value, `${origin}${route}`);
  if (url.origin !== origin) {
    return null;
  }
  url.hash = '';
  return url.href;
}

async function inspectRoute(route) {
  const response = await fetch(`${origin}${route}`, { redirect: 'manual' });
  checkedUrls.set(`${origin}${route}`, response.status);
  if (response.status !== 200) {
    addFailure(route, `expected HTTP 200, received ${response.status}`);
    return;
  }

  const html = await response.text();
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] || '';
  const lang = getAttribute(htmlTag, 'lang');
  const expectedLang = route.startsWith('/en/') || route === '/en' ? 'en' : 'ja';
  if (lang !== expectedLang) {
    addFailure(route, `expected html lang="${expectedLang}", received "${lang}"`);
  }

  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  if (!title) {
    addFailure(route, 'missing document title');
  }

  const descriptionTag = html.match(/<meta\b[^>]*name=(?:\"description\"|'description')[^>]*>/i)?.[0];
  if (!descriptionTag || !getAttribute(descriptionTag, 'content')) {
    addFailure(route, 'missing meta description');
  }

  const h1Count = getMatches(html, /<h1\b/gi).length;
  if (h1Count !== 1) {
    addFailure(route, `expected exactly one h1, received ${h1Count}`);
  }

  const ids = getMatches(html, /\sid=(?:\"([^\"]+)\"|'([^']+)')/gi).map(
    (match) => match[1] ?? match[2]
  );
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    addFailure(route, `duplicate IDs: ${Array.from(new Set(duplicateIds)).join(', ')}`);
  }

  for (const match of getMatches(html, /<img\b[^>]*>/gi)) {
    const tag = match[0];
    if (!hasAttribute(tag, 'alt')) {
      addFailure(route, `image missing alt attribute: ${tag.slice(0, 120)}`);
    }
    if (!getAttribute(tag, 'width') || !getAttribute(tag, 'height')) {
      addWarning(route, `image missing intrinsic dimensions: ${tag.slice(0, 120)}`);
    }
  }

  const resourceTags = getMatches(html, /<(?:a|img|script|link)\b[^>]*>/gi);
  for (const match of resourceTags) {
    const tag = match[0];
    const value = getAttribute(tag, tag.startsWith('<a') || tag.startsWith('<link') ? 'href' : 'src');
    const url = normalizeInternalUrl(value, route);
    if (url) {
      checkedUrls.set(url, checkedUrls.get(url) ?? null);
    }
  }

  for (const match of getMatches(html, /\ssrcset=(?:\"([^\"]+)\"|'([^']+)')/gi)) {
    const srcset = match[1] ?? match[2] ?? '';
    for (const candidate of srcset.split(',')) {
      const value = candidate.trim().split(/\s+/)[0];
      const url = normalizeInternalUrl(value, route);
      if (url) {
        checkedUrls.set(url, checkedUrls.get(url) ?? null);
      }
    }
  }
}

for (const route of routes) {
  await inspectRoute(route);
}

for (const [url, knownStatus] of checkedUrls) {
  if (knownStatus !== null) {
    continue;
  }
  let response = await fetch(url, { method: 'HEAD', redirect: 'manual' });
  if (response.status >= 400) {
    response = await fetch(url, { redirect: 'manual' });
  }
  checkedUrls.set(url, response.status);
  if (response.status < 200 || response.status >= 300) {
    addFailure(new URL(url).pathname, `linked resource returned HTTP ${response.status}`);
  }
}

const rootResponse = await fetch(`${origin}/`, { redirect: 'manual' });
if (rootResponse.status !== 307 || rootResponse.headers.get('location') !== '/ja/') {
  addFailure('/', `expected 307 redirect to /ja/, received ${rootResponse.status} ${rootResponse.headers.get('location') || ''}`.trim());
}

const notFoundResponse = await fetch(`${origin}/en/definitely-not-found/`, { redirect: 'manual' });
if (notFoundResponse.status !== 404) {
  addFailure('/en/definitely-not-found', `expected HTTP 404, received ${notFoundResponse.status}`);
} else {
  const html = await notFoundResponse.text();
  if (!/<html\b[^>]*\slang=(?:\"en\"|'en')/i.test(html)) {
    addFailure('/en/definitely-not-found', 'English 404 page does not use lang="en"');
  }
}

const invalidContactResponse = await fetch(`${origin}/api/contact/`, {
  method: 'POST',
  headers: {
    Origin: origin,
  },
  body: new FormData(),
});
const invalidContactResult = await invalidContactResponse.json().catch(() => ({}));
if (invalidContactResponse.status !== 400 || invalidContactResult.error !== 'validation_error') {
  addFailure(
    '/api/contact',
    `invalid payload should return 400 validation_error, received ${invalidContactResponse.status} ${invalidContactResult.error || 'unknown_error'}`
  );
}

console.log(`Audited ${routes.length} routes and ${checkedUrls.size} internal URLs.`);

if (warnings.length > 0) {
  console.log('\nWarnings:');
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (failures.length > 0) {
  console.error('\nFailures:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log('\nAll automated site audit checks passed.');
}
