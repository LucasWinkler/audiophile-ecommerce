import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          'removeDimensions',
          'removeStyleElement',
          'removeScriptElement',
          'removeComments',
          {
            name: 'cleanupIDs',
            active: true,
            params: {
              minify: true,
              remove: false,
            },
          },
          'cleanupAttrs',
          'removeMetadata',
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },
      png: {
        quality: 75,
      },
      jpeg: {
        quality: 75,
        progressive: true,
      },
      jpg: {
        quality: 75,
        progressive: true,
      },
      tiff: {
        quality: 75,
      },
      gif: {},
      webp: {
        quality: 75,
        lossless: false,
      },
      avif: {
        quality: 75,
        lossless: false,
      },
    }),
  ],
});
