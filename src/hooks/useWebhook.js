import { useState, useCallback } from 'react'
import { webhookEndpoints, getWebhookByPath } from '../config/webhook-endpoints'

export function useWebhook(webhookType, customConfig = {}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState(null)

  // Get webhook config based on type or path
  const getConfig = useCallback(() => {
    // If webhookType contains slashes, treat it as a path
    if (webhookType?.includes('/')) {
      return getWebhookByPath(webhookType)
    }

    // Check if it's a simple endpoint
    if (webhookEndpoints[webhookType]) {
      return webhookEndpoints[webhookType]
    }

    // Check nested endpoints (bootcamps, workshops, webinars)
    const [category, name] = webhookType.split('-')
    if (webhookEndpoints[category]?.[name]) {
      return webhookEndpoints[category][name]
    }

    // Fallback to newsletter
    console.warn(`Unknown webhook type: ${webhookType}, falling back to newsletter`)
    return webhookEndpoints.newsletter
  }, [webhookType])

  const submit = useCallback(async (formData) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    const config = getConfig()

    if (!config) {
      setError('Invalid webhook configuration')
      setLoading(false)
      return { success: false, error: 'Invalid webhook configuration' }
    }

    // Merge custom config
    const finalConfig = {
      ...config,
      ...customConfig
    }

    // Validate required fields
    const missingFields = finalConfig.fields?.filter(field =>
      !formData[field] || formData[field].trim() === ''
    ) || []

    if (missingFields.length > 0) {
      const errorMsg = `Missing required fields: ${missingFields.join(', ')}`
      setError(errorMsg)
      setLoading(false)
      return { success: false, error: errorMsg }
    }

    // Enrich data with metadata and tracking
    const enrichedData = {
      ...formData,
      ...finalConfig.metadata,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      language: navigator.language,
      referrer: document.referrer || 'direct',

      // UTM parameters
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'organic',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      utm_term: new URLSearchParams(window.location.search).get('utm_term') || '',
      utm_content: new URLSearchParams(window.location.search).get('utm_content') || ''
    }

    try {
      const response = await fetch(finalConfig.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrichedData)
      })

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`)
      }

      // Track event if gtag is available
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'lead_capture',
          event_label: finalConfig.metadata?.product || webhookType,
          value: 1
        })
      }

      setSuccess(true)
      setData(enrichedData)
      setLoading(false)

      return { success: true, data: enrichedData }

    } catch (err) {
      console.error('Webhook submission error:', err)
      setError(err.message)
      setLoading(false)
      return { success: false, error: err.message }
    }
  }, [getConfig, customConfig, webhookType])

  const reset = useCallback(() => {
    setLoading(false)
    setError(null)
    setSuccess(false)
    setData(null)
  }, [])

  return {
    submit,
    reset,
    loading,
    error,
    success,
    data
  }
}