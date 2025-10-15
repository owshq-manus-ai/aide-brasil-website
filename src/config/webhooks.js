// Centralized webhook configuration
// Easily manage all integration endpoints and settings

import { storeLeadData } from '../lib/gtm/cookies'
import { trackFormSubmission } from '../lib/gtm/events'

export const webhookConfig = {
  // n8n Webhook Endpoints
  n8n: {
    // Premium waitlist webhook
    premium: {
      url: import.meta.env.VITE_N8N_WEBHOOK_PREMIUM ||
           import.meta.env.VITE_N8N_WEBHOOK_URL ||
           'https://primary-production-1ebc.up.railway.app/webhook/473f499e-bcf5-4ff8-b17d-08f4fee8b9a7',
      enabled: import.meta.env.VITE_N8N_ENABLED !== 'false',
      source: 'premium-waitlist'
    },
    // Free tier signup webhook (can use same as premium with routing)
    free: {
      url: import.meta.env.VITE_N8N_WEBHOOK_FREE ||
           import.meta.env.VITE_N8N_WEBHOOK_URL ||
           'https://primary-production-1ebc.up.railway.app/webhook/473f499e-bcf5-4ff8-b17d-08f4fee8b9a7',
      enabled: import.meta.env.VITE_N8N_ENABLED !== 'false',
      source: 'free-signup'
    },
    // Newsletter subscription webhook
    newsletter: {
      url: import.meta.env.VITE_N8N_WEBHOOK_NEWSLETTER ||
           'https://primary-production-1ebc.up.railway.app/webhook/your-newsletter-webhook-id',
      enabled: import.meta.env.VITE_N8N_ENABLED !== 'false',
      source: 'newsletter'
    }
  },

  // Analytics and tracking
  analytics: {
    trackEvents: import.meta.env.VITE_TRACK_EVENTS === 'true',
    trackUtm: import.meta.env.VITE_TRACK_UTM !== 'false',
    trackDevice: import.meta.env.VITE_TRACK_DEVICE !== 'false'
  },

  // Submission behavior
  behavior: {
    showSuccessMessage: true,
    successMessageDuration: 3000,
    redirectAfterSubmit: false,
    redirectUrl: '/obrigado',
    closeFormOnSuccess: true
  },

  // Error handling
  errorHandling: {
    logErrors: import.meta.env.VITE_LOG_ERRORS !== 'false',
    showErrorToUser: import.meta.env.VITE_SHOW_ERRORS === 'true',
    fallbackBehavior: 'continue' // 'continue' | 'block' | 'retry'
  }
}

// Reusable webhook submission function
export async function submitToWebhook(data, webhookType = 'premium') {
  const config = webhookConfig.n8n[webhookType]

  if (!config || !config.enabled) {
    // Webhook disabled
    return { success: true, skipped: true }
  }

  // Enrich data with tracking information
  const enrichedData = {
    ...data,
    source: config.source,
    timestamp: new Date().toISOString(),
    ...(webhookConfig.analytics.trackUtm && {
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'organic',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      utm_term: new URLSearchParams(window.location.search).get('utm_term') || '',
      utm_content: new URLSearchParams(window.location.search).get('utm_content') || ''
    }),
    ...(webhookConfig.analytics.trackDevice && {
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      language: navigator.language,
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer || 'direct'
    })
  }

  try {
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrichedData)
    })

    if (!response.ok) {
      throw new Error(`Webhook submission failed: ${response.status}`)
    }

    // Store lead data in GTM (cookies + JS variables + dataLayer)
    if (webhookConfig.analytics.trackEvents) {
      storeLeadData({
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || ''
      })

      // Track form submission with new GTM implementation
      trackFormSubmission({
        formId: `${webhookType}-form`,
        formName: config.source,
        formType: 'lead',
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        billing_plan: data.billing_plan || '',
        price: data.price || ''
      })
    }

    // Webhook submission successful
    return { success: true, data: enrichedData }

  } catch (error) {
    if (webhookConfig.errorHandling.logErrors) {
      console.error(`Error submitting to ${webhookType} webhook:`, error)
    }

    // Handle error based on configuration
    if (webhookConfig.errorHandling.fallbackBehavior === 'retry') {
      // Implement retry logic if needed
      // Retrying submission
    }

    return {
      success: webhookConfig.errorHandling.fallbackBehavior === 'continue',
      error: error.message
    }
  }
}

// Helper function to validate form data
export function validateFormData(data, requiredFields = ['email']) {
  const errors = {}

  requiredFields.forEach(field => {
    if (!data[field] || data[field].trim() === '') {
      errors[field] = `${field} is required`
    }
  })

  // Email validation
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format'
  }

  // Phone validation (Brazilian format)
  if (data.phone && !/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Invalid phone format'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}