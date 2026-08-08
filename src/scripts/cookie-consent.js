/**
 * アクセス解析Cookie（GA4）の同意管理
 * - 同意（granted）を保存済みの場合のみgtagを読み込む
 * - 未選択の場合はバナーを表示し、選択後に反映する
 * - 選択はCookieではなくlocalStorageに保存する（Cookieポリシー§2に記載）
 */
const STORAGE_KEY = 'cookie-consent';

function readStoredConsent() {
  // プライベートブラウジング等でlocalStorageが使えない環境では毎回バナーを出す
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeConsent(choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // 保存できなくても選択自体はこのページ内で有効
  }
}

function loadGtag(gaId) {
  if (window.__gtagLoaded) return;
  window.__gtagLoaded = true;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', gaId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);
}

export default function initCookieConsent() {
  const banner = document.getElementById('cookie-consent');
  if (!banner) return;

  const gaId = banner.dataset.gaId;

  // 「Cookie設定を変更する」で再表示された場合にも効くよう、常にハンドラを張っておく
  banner.querySelectorAll('[data-consent]').forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.consent;
      storeConsent(choice);
      banner.hidden = true;
      if (choice === 'granted') {
        window[`ga-disable-${gaId}`] = false;
        loadGtag(gaId);
      } else {
        // 読み込み済みのgtagも以降の送信を止める（GA公式のオプトアウトフラグ）
        window[`ga-disable-${gaId}`] = true;
      }
    });
  });

  const stored = readStoredConsent();
  if (stored === 'granted') {
    loadGtag(gaId);
  } else if (stored === null) {
    banner.hidden = false;
  }
}
