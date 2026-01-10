/**
 * 店舗情報用のmicroCMS取得関数
 */
import { getContents } from './microcms';
import type { StoreContent } from '../types/microcms';
import type { Locale } from './i18n';

/**
 * 店舗一覧を取得
 * @param locale - 言語
 * @returns 店舗一覧
 */
export async function getStores(locale: Locale = 'ja') {
  const { contents } = await getContents<StoreContent>('stores', {
    orders: 'order',
  });

  return contents;
}

/**
 * 店舗数を取得
 * @returns 店舗数
 */
export async function getStoreCount(): Promise<number> {
  const { totalCount } = await getContents<StoreContent>('stores', {
    limit: 1, // カウントのみ取得
  });

  return totalCount;
}
