import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initPerformanceMonitoring } from './utils/performance'
import { initMobileOptimizations } from './utils/mobile-performance'

// Initialize performance monitoring
if (import.meta.env.PROD) {
  initPerformanceMonitoring()
}

// Initialize mobile optimizations
initMobileOptimizations()

// Register service worker for PWA
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        // Service worker registered successfully
      })
      .catch(error => console.error('SW registration failed:', error))
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
