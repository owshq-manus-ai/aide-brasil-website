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
            // Core React
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            // Animation libraries
            if (id.includes('framer-motion')) {
              return 'animation';
            }
            // Icons
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // UI Components
            if (id.includes('@radix-ui')) {
              return 'ui';
            }
            // Charts (lazy loaded)
            if (id.includes('recharts') || id.includes('d3')) {
              return 'charts';
            }
            // Router
            if (id.includes('react-router')) {
              return 'router';
            }
            // Date utilities
            if (id.includes('date-fns')) {
              return 'date';
            }
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('zod')) {
              return 'forms';
            }
            // Group other smaller dependencies
            return 'vendor';
          }
          // Split page components
          if (id.includes('src/pages/HomePage')) {
            return 'home';
          }
        },
        // Use content hash for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Optimize chunk size for better mobile loading
    chunkSizeWarningLimit: 300, // Adjusted for modern React apps
    // Enable minification with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn', 'console.error'],
        passes: 3, // Increased compression passes
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        dead_code: true,
        evaluate: true,
        hoist_funs: true,
        hoist_props: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        loops: true,
        negate_iife: true,
        properties: true,
        reduce_funcs: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        switches: true,
        typeofs: true,
        unused: true,
        conditionals: true,
        collapse_vars: true,
        inline: 3, // Aggressive inlining
        keep_fargs: false,
        keep_fnames: false,
        toplevel: true,
        top_retain: false
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true,
        beautify: false,
        semicolons: false
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
    emptyOutDir: true,
    // Mobile-specific optimizations
    modulePreload: {
      polyfill: false // Reduce bundle size for modern browsers
    }
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
