import functionsPlugin from 'postcss-functions';
import fns from './src/assets/js/functions.js';
import postcssImport from 'postcss-import';
import postcssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport(),
    functionsPlugin({
      functions: fns,
    }),
    postcssGlobalData({
      files: ['src/styles/global/custom_media.css'],
    }),
    postcssCustomMedia(),
    postcssPresetEnv({ stage: 1 }),
    autoprefixer(),
  ],
};

