import type { MiddlewareHandler } from 'astro';
import { getLocale, DEFAULT_LOCALE, SUPPORTED_LOCALES } from './lib/i18n';

/**
 * 言語判定とリダイレクト処理
 * ルートパス（/）にアクセスした場合、デフォルト言語にリダイレクト
 */
export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url, request } = context;
  const urlObj = new URL(request.url);
  const pathname = urlObj.pathname;

  // ルートパス（/）にアクセスした場合、デフォルト言語にリダイレクト
  if (pathname === '/') {
    return new Response(null, {
      status: 307,
      headers: {
        Location: `/${DEFAULT_LOCALE}/`,
      },
    });
  }

  // 言語プレフィックスが含まれているか確認
  const langMatch = pathname.match(/^\/(ja|en)\//);

  if (langMatch && SUPPORTED_LOCALES.includes(langMatch[1] as any)) {
    // 有効な言語プレフィックスが含まれている場合はそのまま処理
    return next();
  }

  // 言語プレフィックスがない場合、デフォルト言語にリダイレクト
  // ただし、静的ファイル（.js, .css, .jpg など）とAstroの内部エンドポイントは除外
  const isStaticFile = /\.(js|css|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot|json)$/i.test(pathname);
  const isAstroInternal = pathname.startsWith('/_image') || pathname.startsWith('/_astro') || pathname.startsWith('/@');

  if (!isStaticFile && !isAstroInternal) {
    return new Response(null, {
      status: 307,
      headers: {
        Location: `/${DEFAULT_LOCALE}${pathname}`,
      },
    });
  }

  return next();
};
