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
          // Split vendor chunks more granularly
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
            // Group other smaller dependencies
            return 'vendor';
          }
        },
        // Use content hash for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    // Enable minification with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      mangle: true,
      format: {
        comments: false
      }
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Inline assets smaller than 4kb
    assetsInlineLimit: 4096,
    // Enable CSS code splitting  
    cssCodeSplit: true,
    // Target modern browsers
    target: 'es2020',
    // Aggressive CSS minification
    cssMinify: 'lightningcss'
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
