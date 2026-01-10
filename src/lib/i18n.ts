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

  if (langMatch && langMatch[1] === 'ja' || langMatch[1] === 'en') {
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
  // 先頭のスラッシュを除去
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // 既に言語プレフィックスが含まれている場合は除去
  const pathWithoutLang = cleanPath.replace(/^(ja|en)\//, '');

  return `/${locale}/${pathWithoutLang}`;
}

/**
 * 言語に応じたコンテンツを取得
 * @param content - 多言語対応コンテンツ
 * @param field - フィールド名（例: 'title', 'description'）
 * @param locale - 言語
 * @returns 言語に応じたコンテンツ
 */
export function getLocalizedContent(
  content: Record<string, any>,
  field: string,
  locale: Locale
): string {
  const localizedField = `${field}${locale === 'ja' ? 'Ja' : 'En'}`;
  return content[localizedField] || content[field] || '';
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
