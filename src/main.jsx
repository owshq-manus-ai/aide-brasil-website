import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initPerformanceMonitoring } from './utils/performance'
import { initMobileOptimizations } from './utils/mobile-performance'
import { initGTM, testGTM, debugDataLayer, checkLeadData, monitorDataLayer } from './lib/gtm'

// Initialize Google Tag Manager
initGTM()

// Make GTM debug tools available globally
if (typeof window !== 'undefined') {
  window.gtmDebug = {
    test: testGTM,
    debug: debugDataLayer,
    checkLeads: checkLeadData,
    monitor: monitorDataLayer
  }

  console.log('🔧 GTM Debug Tools Available:')
  console.log('  - window.gtmDebug.test() - Run GTM integration test')
  console.log('  - window.gtmDebug.debug() - Show full dataLayer')
  console.log('  - window.gtmDebug.checkLeads() - Check lead data')
  console.log('  - window.gtmDebug.monitor() - Monitor new events')
}

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
