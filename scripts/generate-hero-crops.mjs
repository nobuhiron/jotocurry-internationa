#!/usr/bin/env node
/**
 * hero-img.jpg (7680x4320) からヒーロー用のアートディレクション済みクロップを生成する
 * - hero-img-wide.jpg : PC用 2.4:1（卵黄をやや右寄り上部に配置）
 * - hero-img-tall.jpg : スマホ用 約1:1.05（卵黄を上部に配置）
 *
 * 元画像の構図を変えたいときはこのスクリプトの数値を調整して再実行する:
 *   node scripts/generate-hero-crops.mjs
 * (prebuildには含めない一回性のツール。生成物は src/assets/images にコミットする)
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const inputPath = join(rootDir, 'src', 'assets', 'images', 'hero-img.jpg');
const outDir = join(rootDir, 'src', 'assets', 'images');

// 元画像上の卵黄のおおよその中心 (7680x4320 基準)
const EGG = { x: 3610, y: 1469 };

const crops = [
  {
    name: 'hero-img-wide.jpg',
    // 2.4:1 / 卵黄をクロップ内 x58%・y32% に置く
    width: 5400,
    height: 2250,
    eggAt: { x: 0.58, y: 0.32 },
    resize: { width: 2880, height: 1200 },
  },
  {
    name: 'hero-img-tall.jpg',
    // 左上の文字ブロック（バッジ+見出し+実績）の下に卵黄が来るよう y64% に配置。
    // 上端の暗い背景帯が文字の下地になる。cover表示でサイドが切れる前提の広めクロップ
    width: 3000,
    height: 2295,
    eggAt: { x: 0.5, y: 0.64 },
    resize: { width: 2100, height: 1607 },
  },
];

const meta = await sharp(inputPath).metadata();

for (const crop of crops) {
  const left = Math.round(
    Math.min(Math.max(EGG.x - crop.width * crop.eggAt.x, 0), meta.width - crop.width),
  );
  const top = Math.round(
    Math.min(Math.max(EGG.y - crop.height * crop.eggAt.y, 0), meta.height - crop.height),
  );
  await sharp(inputPath)
    .extract({ left, top, width: crop.width, height: crop.height })
    .resize(crop.resize.width, crop.resize.height)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(join(outDir, crop.name));
  console.log(`[hero-crops] ${crop.name}: extract(${left},${top},${crop.width}x${crop.height})`);
}
