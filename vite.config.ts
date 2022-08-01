import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import path from 'path'

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
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
