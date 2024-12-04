import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Mon Blog PWA',
        short_name: 'Blog PWA',
        description: 'Blog accessible présentant des articles intéressants',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/favicon.svg',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/svg+xml'
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});