import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Sitemap from 'vite-plugin-sitemap'

// Define your routes for the sitemap with custom priorities
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.9 },
  { url: '/projects', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'yearly', priority: 0.7 },
]

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  // Get site URL from environment, fallback to localhost for development
  const siteUrl = env.VITE_SITE_URL || 'http://localhost:5173'
  
  return {
    base: '/',
    plugins: [
      react(),
      Sitemap({
        hostname: siteUrl,
        dynamicRoutes: routes.map(r => r.url),
        robots: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
        outDir: 'dist',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'query-vendor': ['@tanstack/react-query'],
            'animation-vendor': ['framer-motion'],
            'ui-vendor': ['lucide-react'],
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      cssCodeSplit: true,
      sourcemap: false,
      assetsInlineLimit: 4096,
    },
  }
})
