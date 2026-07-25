import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // 静的生成ページのcanonical/OGP/構造化データの絶対URLに使用される
  // 未設定だとlocalhostのURLが出力されるため本番ドメインを指定する
  site: 'https://international.tokumasa.net',
  // [lang]ディレクトリ構造でも画像パスが正しく解決されるように設定
  base: '/',
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
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
    // WebP 化・圧縮（sharp がビルド時に適用）
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
});
