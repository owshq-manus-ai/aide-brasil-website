/**
 * Data Layer Management
 *
 * Utilities for pushing data to GTM's dataLayer
 */

import { GTM_CONFIG } from './index'

/**
 * Push data to GTM dataLayer
 * @param {Object} data - Data to push to dataLayer
 */
export const pushToDataLayer = (data) => {
  if (!window.dataLayer) {
    console.warn('[GTM] dataLayer not initialized')
    return
  }

  try {
    window.dataLayer.push(data)

    if (GTM_CONFIG.debug) {
      console.log('[GTM] Data pushed to dataLayer:', data)
    }
  } catch (error) {
    console.error('[GTM] Error pushing to dataLayer:', error)
  }
}

/**
 * Clear specific variables from dataLayer
 * Useful for preventing data leakage between events
 */
export const clearDataLayer = (keys = []) => {
  if (!window.dataLayer) return

  const clearObject = keys.reduce((acc, key) => {
    acc[key] = undefined
    return acc
  }, {})

  pushToDataLayer(clearObject)
}

/**
 * Get current dataLayer state (for debugging)
 */
export const getDataLayer = () => {
  return window.dataLayer || []
}

/**
 * Set user properties in dataLayer
 * Call this when user logs in or user data changes
 */
export const setUserProperties = (userData) => {
  pushToDataLayer({
    event: 'user_properties_set',
    user_id: userData.id,
    user_type: userData.type || 'visitor',
    user_status: userData.status || 'active',
    ...userData,
  })
}

/**
 * Enhanced e-commerce data layer push
 * For tracking product views, purchases, etc.
 */
export const pushEcommerceData = (action, ecommerceData) => {
  // Clear previous ecommerce data
  pushToDataLayer({ ecommerce: null })

  // Push new ecommerce data
  pushToDataLayer({
    event: action,
    ecommerce: ecommerceData,
  })
}
