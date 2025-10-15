/**
 * Google Tag Manager Integration
 *
 * Main GTM initialization and configuration.
 * Handles both web and server-side GTM containers.
 */

import { pushToDataLayer, clearDataLayer } from './dataLayer'
import { trackEvent } from './events'

/**
 * GTM Configuration from environment variables
 */
export const GTM_CONFIG = {
  webId: import.meta.env.VITE_GTM_WEB_ID,
  serverId: import.meta.env.VITE_GTM_SERVER_ID,
  serverUrl: import.meta.env.VITE_GTM_SERVER_URL,
  enabled: import.meta.env.VITE_GTM_ENABLED_IN_DEV === 'true' || import.meta.env.PROD,
  debug: import.meta.env.VITE_GTM_DEBUG === 'true',
}

/**
 * Check if GTM is properly configured
 */
export const isGTMEnabled = () => {
  if (!GTM_CONFIG.enabled) {
    if (GTM_CONFIG.debug) {
      console.log('[GTM] Disabled in current environment')
    }
    return false
  }

  if (!GTM_CONFIG.webId) {
    console.warn('[GTM] Web container ID not configured')
    return false
  }

  return true
}

/**
 * Initialize Google Tag Manager
 * Should be called once on app startup
 */
export const initGTM = () => {
  if (!isGTMEnabled()) {
    return
  }

  try {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []

    // Push initial GTM config
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    })

    if (GTM_CONFIG.debug) {
      console.log('[GTM] Initialized', {
        webId: GTM_CONFIG.webId,
        hasServerId: !!GTM_CONFIG.serverId,
        environment: import.meta.env.MODE,
      })
    }

    // Track initial page view
    trackPageView({
      page_path: window.location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    })

  } catch (error) {
    console.error('[GTM] Initialization error:', error)
  }
}

/**
 * Track page view
 * Call this on route changes in SPA
 */
export const trackPageView = (pageData = {}) => {
  if (!isGTMEnabled()) return

  const data = {
    event: 'page_view',
    page_path: window.location.pathname,
    page_title: document.title,
    page_location: window.location.href,
    ...pageData,
  }

  pushToDataLayer(data)

  if (GTM_CONFIG.debug) {
    console.log('[GTM] Page view tracked:', data)
  }
}

/**
 * Get GTM script URLs for injection
 */
export const getGTMScriptUrl = () => {
  if (GTM_CONFIG.serverUrl && GTM_CONFIG.serverId) {
    // Use server-side GTM if configured
    return `${GTM_CONFIG.serverUrl}/gtm.js?id=${GTM_CONFIG.webId}`
  }

  // Default to Google's GTM server
  return `https://www.googletagmanager.com/gtm.js?id=${GTM_CONFIG.webId}`
}

/**
 * Get GTM noscript iframe URL
 */
export const getGTMNoScriptUrl = () => {
  if (GTM_CONFIG.serverUrl && GTM_CONFIG.serverId) {
    return `${GTM_CONFIG.serverUrl}/ns.html?id=${GTM_CONFIG.webId}`
  }

  return `https://www.googletagmanager.com/ns.html?id=${GTM_CONFIG.webId}`
}

// Export sub-modules
export { pushToDataLayer, clearDataLayer } from './dataLayer'
export {
  trackEvent,
  trackFormSubmission,
  trackWebinarRegistration,
  trackCTAClick,
  trackOutboundClick,
  trackVideoInteraction,
  trackScrollDepth,
  trackDownload,
  trackSearch,
  trackError,
  trackSocialShare,
  trackNewsletterSignup,
  trackEngagement
} from './events'
export {
  debugDataLayer,
  checkLeadData,
  monitorDataLayer,
  testGTM
} from './debug'
