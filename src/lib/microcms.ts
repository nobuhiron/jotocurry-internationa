/**
 * microCMS API クライアント
 */

const MICROCMS_SERVICE_DOMAIN = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const MICROCMS_API_KEY = import.meta.env.MICROCMS_API_KEY;

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_API_KEY) {
  throw new Error(
    'microCMSの環境変数が設定されていません。.envファイルにMICROCMS_SERVICE_DOMAINとMICROCMS_API_KEYを設定してください。'
  );
}

const API_BASE_URL = `https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1`;

/**
 * microCMS API リクエスト用のヘッダー
 */
const getHeaders = () => ({
  'X-MICROCMS-API-KEY': MICROCMS_API_KEY,
});

/**
 * microCMSからコンテンツを取得
 * @param endpoint - APIエンドポイント（例: 'hero', 'about'）
 * @param queries - クエリパラメータ（オプション）
 * @returns コンテンツデータ
 */
export async function getContent<T = any>(
  endpoint: string,
  queries?: Record<string, string | number | boolean>
): Promise<T> {
  const queryString = queries
    ? '?' +
      Object.entries(queries)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&')
    : '';

  const url = `${API_BASE_URL}/${endpoint}${queryString}`;

  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(
      `microCMS API エラー: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * microCMSからコンテンツ一覧を取得
 * @param endpoint - APIエンドポイント
 * @param queries - クエリパラメータ（オプション）
 * @returns コンテンツ一覧データ
 */
export async function getContents<T = any>(
  endpoint: string,
  queries?: Record<string, string | number | boolean>
): Promise<{
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}> {
  const queryString = queries
    ? '?' +
      Object.entries(queries)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&')
    : '';

  const url = `${API_BASE_URL}/${endpoint}${queryString}`;

  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(
      `microCMS API エラー: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * microCMSから特定のIDのコンテンツを取得
 * @param endpoint - APIエンドポイント
 * @param contentId - コンテンツID
 * @param queries - クエリパラメータ（オプション）
 * @returns コンテンツデータ
 */
export async function getContentById<T = any>(
  endpoint: string,
  contentId: string,
  queries?: Record<string, string | number | boolean>
): Promise<T> {
  const queryString = queries
    ? '?' +
      Object.entries(queries)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&')
    : '';

  const url = `${API_BASE_URL}/${endpoint}/${contentId}${queryString}`;

  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(
      `microCMS API エラー: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
