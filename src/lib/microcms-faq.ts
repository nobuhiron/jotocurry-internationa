/**
 * FAQ用のmicroCMS取得関数
 */
import { getContents } from './microcms';
import type { FaqContent } from '../types/microcms';
import type { Locale } from './i18n';

/**
 * FAQ一覧を取得
 * @param locale - 言語（現在は使用していないが、将来的な拡張のため保持）
 * @returns FAQ一覧（order, questionJa, answerJa, questionEn, answerEnを含む）
 */
export async function getFaqs(locale: Locale = 'ja'): Promise<FaqContent[]> {
  try {
    const { contents } = await getContents<FaqContent>('faq', {
      orders: 'order', // orderフィールドでソート
    });

    // フィールドの存在確認とバリデーション
    return contents.map((faq) => ({
      ...faq,
      questionJa: faq.questionJa || '',
      answerJa: faq.answerJa || '',
      questionEn: faq.questionEn || '',
      answerEn: faq.answerEn || '',
      order: faq.order || 0,
    }));
  } catch (error) {
    console.error('microCMSからFAQを取得中にエラーが発生しました:', error);
    throw error;
  }
}
