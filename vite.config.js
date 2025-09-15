import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor chunks more granularly for optimal caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            if (id.includes('recharts')) {
              return 'charts';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            // Group other smaller dependencies
            return 'vendor';
          }
          // Split large components into separate chunks
          if (id.includes('src/components/ui/community-hero')) {
            return 'community-hero';
          }
        },
        // Use content hash for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Optimize chunk size for better loading
    chunkSizeWarningLimit: 300,
    // Enable minification with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        dead_code: true,
        evaluate: true,
        hoist_funs: true,
        hoist_props: true,
        if_return: true,
        join_vars: true,
        loops: true,
        properties: true,
        reduce_funcs: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        switches: true,
        typeofs: true,
        unused: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    // Disable source maps for production
    sourcemap: false,
    // Inline smaller assets for fewer requests
    assetsInlineLimit: 8192,
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Target modern browsers for smaller bundles
    target: ['es2020', 'chrome80', 'firefox78', 'safari14', 'edge88'],
    // Aggressive CSS minification
    cssMinify: 'lightningcss',
    // Enable experimental features for better optimization
    reportCompressedSize: false,
    // Optimize for production
    emptyOutDir: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom'],
    exclude: ['@radix-ui/*']
  },
  // Enable CSS optimization
  css: {
    devSourcemap: false,
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
