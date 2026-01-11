/**
 * 統計情報用のmicroCMS取得関数
 */
import { getContent } from './microcms';
import type { StatsContent } from '../types/microcms';

/**
 * 統計情報を取得
 * @returns 統計情報（mealsValue, domesticStoreCount, overseasStoreCountを含む）
 */
export async function getStats(): Promise<StatsContent> {
  try {
    const stats = await getContent<StatsContent>('stats');
    return {
      ...stats,
      mealsValue: stats.mealsValue ?? 5000, // フォールバック値
      domesticStoreCount: stats.domesticStoreCount ?? 44, // フォールバック値
      overseasStoreCount: stats.overseasStoreCount ?? 11, // フォールバック値
    };
  } catch (error) {
    console.warn(
      'microCMSから統計情報を取得できませんでした。デフォルト値を使用します。',
      error
    );
    // エラー時はフォールバック値を返す
    return {
      id: 'fallback',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      mealsValue: 5000,
      domesticStoreCount: 44,
      overseasStoreCount: 11,
    };
  }
}
