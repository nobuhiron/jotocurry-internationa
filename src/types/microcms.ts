/**
 * microCMSの型定義
 */

/**
 * microCMSの基本コンテンツ型
 */
export interface MicroCMSContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
}

/**
 * microCMSの画像型
 */
export interface MicroCMSImage {
  url: string;
  width: number;
  height: number;
}

/**
 * 店舗情報用の型定義
 */
export interface StoreContent extends MicroCMSContent {
  name: string;
  nameEn?: string;
  location: string;
  locationEn?: string;
  country: string;
  countryEn?: string;
  image?: MicroCMSImage;
  order?: number;
}

/**
 * FAQ用の型定義
 */
export interface FaqContent extends MicroCMSContent {
  questionJa: string;
  answerJa: string;
  questionEn: string;
  answerEn: string;
  order?: number;
}

/**
 * 統計情報用の型定義
 */
export interface StatsContent extends MicroCMSContent {
  mealsValue: number;
  domesticStoreCount: number;
  overseasStoreCount: number;
}

/**
 * フランチャイズボイス（お客様の声）用の型定義
 */
export interface TestimonialContent extends MicroCMSContent {
  textJa: string;
  textEn: string;
  storeNameJa: string;
  storeNameEn: string;
  image?: MicroCMSImage;
}

/**
 * 多言語対応コンテンツの基本型
 */
export interface MultilingualContent extends MicroCMSContent {
  [key: string]: any;
}
