/// <reference types="vitest" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    solidPlugin(),
    Pages(),
    Unocss(),
    AutoImport({
      imports: [
        "solid-js",
        "@solidjs/router",
      ],
      dts: true,
      dirs: [
        'src/primitives',
      ],
    }),

  ],
  build: {
    target: 'esnext',
  },
  test: {
    deps: {
      inline: [/solid-js/, /@solidjs\/router/],
    },
  },
});
