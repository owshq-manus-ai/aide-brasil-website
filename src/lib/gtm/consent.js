/**
 * LGPD/GDPR Consent Management
 *
 * Manages user consent for tracking and analytics
 * Compatible with GTM Consent Mode v2
 */

import { pushToDataLayer } from './dataLayer'

/**
 * Default consent state (denied until user accepts)
 */
export const setDefaultConsent = () => {
  pushToDataLayer({
    event: 'consent_default',
    'gtm.consent': {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted', // Always allow functional cookies
      personalization_storage: 'denied',
      security_storage: 'granted', // Always allow security cookies
    },
  })
}

/**
 * Update consent when user accepts/rejects
 */
export const updateConsent = (consentSettings) => {
  pushToDataLayer({
    event: 'consent_update',
    'gtm.consent': {
      ad_storage: consentSettings.marketing ? 'granted' : 'denied',
      ad_user_data: consentSettings.marketing ? 'granted' : 'denied',
      ad_personalization: consentSettings.marketing ? 'granted' : 'denied',
      analytics_storage: consentSettings.analytics ? 'granted' : 'denied',
      functionality_storage: 'granted',
      personalization_storage: consentSettings.preferences ? 'granted' : 'denied',
      security_storage: 'granted',
    },
  })
}

/**
 * Grant all consents (user clicks "Accept All")
 */
export const grantAllConsent = () => {
  updateConsent({
    marketing: true,
    analytics: true,
    preferences: true,
  })

  // Store consent in localStorage
  localStorage.setItem('gtm_consent', JSON.stringify({
    marketing: true,
    analytics: true,
    preferences: true,
    timestamp: new Date().toISOString(),
  }))
}

/**
 * Deny all consents (user clicks "Reject All")
 */
export const denyAllConsent = () => {
  updateConsent({
    marketing: false,
    analytics: false,
    preferences: false,
  })

  // Store consent in localStorage
  localStorage.setItem('gtm_consent', JSON.stringify({
    marketing: false,
    analytics: false,
    preferences: false,
    timestamp: new Date().toISOString(),
  }))
}

/**
 * Get stored consent from localStorage
 */
export const getStoredConsent = () => {
  try {
    const stored = localStorage.getItem('gtm_consent')
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    console.error('[GTM] Error reading consent:', error)
    return null
  }
}

/**
 * Check if user has made a consent choice
 */
export const hasConsentChoice = () => {
  return getStoredConsent() !== null
}

/**
 * Apply stored consent on page load
 */
export const applyStoredConsent = () => {
  const consent = getStoredConsent()

  if (consent) {
    updateConsent({
      marketing: consent.marketing,
      analytics: consent.analytics,
      preferences: consent.preferences,
    })
    return true
  }

  // No stored consent, set defaults
  setDefaultConsent()
  return false
}
