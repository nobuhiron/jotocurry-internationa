/**
 * 多言語対応ユーティリティ
 */

export type Locale = 'ja' | 'en';

export const SUPPORTED_LOCALES: Locale[] = ['ja', 'en'];
export const DEFAULT_LOCALE: Locale = 'ja';

/**
 * 現在の言語を取得
 * @param url - URLオブジェクト（Astro.request.urlから取得）
 * @returns 現在の言語
 */
export function getLocale(url: URL): Locale {
  const pathname = url.pathname;
  const langMatch = pathname.match(/^\/(ja|en)\//);

  if (langMatch && (langMatch[1] === 'ja' || langMatch[1] === 'en')) {
    return langMatch[1] as Locale;
  }

  // デフォルトは日本語
  return DEFAULT_LOCALE;
}

/**
 * 言語付きパスを生成
 * @param path - パス（例: '/brand', '/contact'）
 * @param locale - 言語
 * @returns 言語付きパス（例: '/ja/brand', '/en/contact'）
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  const [pathname, hash] = path.split('#', 2);

  // 先頭のスラッシュを除去
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;

  // 既に言語プレフィックスが含まれている場合は除去
  const pathWithoutLang = cleanPath
    .replace(/^(ja|en)(?:\/|$)/, '')
    .replace(/\/+$/, '');

  const localizedPath = pathWithoutLang
    ? `/${locale}/${pathWithoutLang}/`
    : `/${locale}/`;

  return hash ? `${localizedPath}#${hash}` : localizedPath;
}

/**
 * 言語に応じたコンテンツを取得
 * @param content - 多言語対応コンテンツ
 * @param field - フィールド名（例: 'title', 'description'）
 * @param locale - 言語
 * @returns 言語に応じたコンテンツ
 */
export function getLocalizedContent(
  content: Record<string, unknown>,
  field: string,
  locale: Locale
): string {
  const localizedField = `${field}${locale === 'ja' ? 'Ja' : 'En'}`;
  const localizedValue = content[localizedField];
  if (typeof localizedValue === 'string' && localizedValue.length > 0) {
    return localizedValue;
  }

  const fallbackValue = content[field];
  return typeof fallbackValue === 'string' ? fallbackValue : '';
}

/**
 * 言語に応じたFAQコンテンツを取得
 * @param faq - FAQコンテンツ
 * @param locale - 言語
 * @returns 言語に応じた質問と回答
 */
export function getLocalizedFaq(
  faq: { questionJa: string; answerJa: string; questionEn: string; answerEn: string },
  locale: Locale
): { question: string; answer: string } {
  if (locale === 'en') {
    return {
      question: faq.questionEn || faq.questionJa,
      answer: faq.answerEn || faq.answerJa,
    };
  }

  return {
    question: faq.questionJa,
    answer: faq.answerJa,
  };
}

/**
 * 言語に応じた店舗情報を取得
 * @param store - 店舗コンテンツ
 * @param locale - 言語
 * @returns 言語に応じた店舗情報
 */
export function getLocalizedStore(
  store: { name: string; nameEn?: string; location: string; locationEn?: string; country: string; countryEn?: string },
  locale: Locale
): { name: string; location: string; country: string } {
  if (locale === 'en') {
    return {
      name: store.nameEn || store.name,
      location: store.locationEn || store.location,
      country: store.countryEn || store.country,
    };
  }

  return {
    name: store.name,
    location: store.location,
    country: store.country,
  };
}

/**
 * 言語に応じたフランチャイズボイスコンテンツを取得
 * @param testimonial - フランチャイズボイスコンテンツ
 * @param locale - 言語
 * @returns 言語に応じたコメントと店舗名
 */
export function getLocalizedTestimonial(
  testimonial: { textJa: string; textEn: string; storeNameJa: string; storeNameEn: string },
  locale: Locale
): { text: string; storeName: string } {
  if (locale === 'en') {
    return {
      text: testimonial.textEn || testimonial.textJa,
      storeName: testimonial.storeNameEn || testimonial.storeNameJa,
    };
  }

  return {
    text: testimonial.textJa,
    storeName: testimonial.storeNameJa,
  };
}
