/**
 * ブランドパワー用画像のmicroCMS取得関数
 */
import { getContents } from './microcms';
import type { BrandPowerImageContent } from '../types/microcms';

/**
 * ブランドパワーの画像一覧を取得
 * @returns 画像一覧（image を含む）
 */
export async function getBrandPowerImages(): Promise<BrandPowerImageContent[]> {
  try {
    const { contents } = await getContents<BrandPowerImageContent>('brandpowerimages', {
      orders: 'order,createdAt',
      limit: 100,
    });

    return contents.filter((content) => Boolean(content.image));
  } catch (error) {
    console.error('microCMSからブランドパワー画像を取得中にエラーが発生しました:', error);
    throw error;
  }
}
