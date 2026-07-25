/// <reference types="astro/client" />

/**
 * Cloudflare の Secret / 環境変数
 * 本番は Cloudflare ダッシュボードで設定し、Astro.locals.runtime.env から参照する
 */
interface CloudflareEnv {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_EMAIL_FROM?: string;
  MICROCMS_SERVICE_DOMAIN?: string;
  MICROCMS_API_KEY?: string;
}

type CloudflareRuntime = import('@astrojs/cloudflare').Runtime<CloudflareEnv>;

declare namespace App {
  interface Locals extends CloudflareRuntime {}
}
