import { defineConfig } from 'astro/config';

export default defineConfig({
  // [lang]ディレクトリ構造でも画像パスが正しく解決されるように設定
  base: '/',
  image: {
    // 店舗紹介セクションで使用するmicroCMSの画像ドメインを許可
    // 注意: サイト全体の画像はローカル/ホスティングから取得し、CMSからは取得しない
    domains: ['images.microcms-assets.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.microcms-assets.io',
      },
    ],
  },
});
