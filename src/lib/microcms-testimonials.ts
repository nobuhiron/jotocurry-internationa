/**
 * フランチャイズボイス用のmicroCMS取得関数
 */
import { getContents } from './microcms';
import type { TestimonialContent } from '../types/microcms';
import type { Locale } from './i18n';

/**
 * フランチャイズボイス一覧を取得
 * @param locale - 言語（現在は使用していないが、将来的な拡張のため保持）
 * @returns フランチャイズボイス一覧（textJa, textEn, storeNameJa, storeNameEn, imageを含む）
 */
export async function getTestimonials(locale: Locale = 'ja'): Promise<TestimonialContent[]> {
  try {
    const { contents } = await getContents<TestimonialContent>('testimonials', {
      orders: '-createdAt', // 作成日時降順でソート
    });

    // フィールドの存在確認とバリデーション
    return contents.map((testimonial) => ({
      ...testimonial,
      textJa: testimonial.textJa || '',
      textEn: testimonial.textEn || '',
      storeNameJa: testimonial.storeNameJa || '',
      storeNameEn: testimonial.storeNameEn || '',
    }));
  } catch (error) {
    console.error('microCMSからフランチャイズボイスを取得中にエラーが発生しました:', error);
    throw error;
  }
}
