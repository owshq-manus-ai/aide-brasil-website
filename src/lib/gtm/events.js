/**
 * GTM Event Tracking
 *
 * Pre-defined event tracking functions for common actions
 */

import { pushToDataLayer } from './dataLayer'

/**
 * Track generic custom event
 */
export const trackEvent = (eventName, eventData = {}) => {
  pushToDataLayer({
    event: eventName,
    ...eventData,
  })
}

/**
 * Track form submission
 */
export const trackFormSubmission = (formData) => {
  trackEvent('form_submission', {
    // Form metadata
    form_id: formData.formId || 'unknown',
    form_name: formData.formName || 'unknown',
    form_type: formData.formType || 'lead',
    form_location: window.location.pathname,

    // Lead data (explicitly named for GTM variables)
    lead_name: formData.name || '',
    lead_email: formData.email || '',
    lead_phone: formData.phone || '',
    lead_company: formData.company || '',
    lead_experience_level: formData.experience_level || '',
    lead_current_role: formData.current_role || '',
    lead_interest: formData.interest || '',
    lead_message: formData.message || '',

    // Include all other fields
    ...formData,
  })
}

/**
 * Track webinar registration
 */
export const trackWebinarRegistration = (webinarData) => {
  trackEvent('webinar_registration', {
    // Webinar metadata
    webinar_id: webinarData.webinarId,
    webinar_title: webinarData.webinarTitle,
    webinar_date: webinarData.webinarDate,
    registration_source: window.location.pathname,

    // Lead data (explicitly named for GTM variables)
    lead_name: webinarData.userName || webinarData.name || '',
    lead_email: webinarData.userEmail || webinarData.email || '',
    lead_phone: webinarData.userPhone || webinarData.phone || '',

    // Legacy field names (for backward compatibility)
    user_email: webinarData.userEmail || webinarData.email || '',
    user_phone: webinarData.userPhone || webinarData.phone || '',
    user_name: webinarData.userName || webinarData.name || '',

    // Include all other fields
    ...webinarData,
  })
}

/**
 * Track CTA button click
 */
export const trackCTAClick = (ctaData) => {
  trackEvent('cta_click', {
    cta_id: ctaData.ctaId || 'unknown',
    cta_text: ctaData.ctaText,
    cta_location: ctaData.ctaLocation || 'unknown',
    cta_type: ctaData.ctaType || 'button',
    destination_url: ctaData.destinationUrl,
    ...ctaData,
  })
}

/**
 * Track outbound link click
 */
export const trackOutboundClick = (url, linkText) => {
  trackEvent('outbound_click', {
    link_url: url,
    link_text: linkText,
    link_domain: new URL(url).hostname,
  })
}

/**
 * Track video interaction
 */
export const trackVideoInteraction = (videoData) => {
  trackEvent('video_interaction', {
    video_id: videoData.videoId,
    video_title: videoData.videoTitle,
    video_action: videoData.action, // play, pause, complete
    video_percent: videoData.percent || 0,
    video_duration: videoData.duration,
    video_current_time: videoData.currentTime,
    ...videoData,
  })
}

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percent) => {
  trackEvent('scroll_depth', {
    scroll_depth: percent,
    page_path: window.location.pathname,
  })
}

/**
 * Track file download
 */
export const trackDownload = (fileData) => {
  trackEvent('file_download', {
    file_name: fileData.fileName,
    file_type: fileData.fileType,
    file_url: fileData.fileUrl,
    download_location: window.location.pathname,
    ...fileData,
  })
}

/**
 * Track search
 */
export const trackSearch = (searchData) => {
  trackEvent('search', {
    search_term: searchData.searchTerm,
    search_results: searchData.resultsCount,
    search_location: window.location.pathname,
    ...searchData,
  })
}

/**
 * Track error
 */
export const trackError = (errorData) => {
  trackEvent('error', {
    error_message: errorData.message,
    error_type: errorData.type || 'unknown',
    error_location: errorData.location || window.location.pathname,
    error_stack: errorData.stack,
    ...errorData,
  })
}

/**
 * Track social share
 */
export const trackSocialShare = (platform, url) => {
  trackEvent('social_share', {
    social_platform: platform,
    shared_url: url,
    page_location: window.location.pathname,
  })
}

/**
 * Track newsletter signup
 */
export const trackNewsletterSignup = (email, source) => {
  trackEvent('newsletter_signup', {
    signup_email: email,
    signup_source: source || window.location.pathname,
  })
}

/**
 * Track user engagement (time on page, scroll, clicks)
 */
export const trackEngagement = (engagementData) => {
  trackEvent('user_engagement', {
    engagement_time: engagementData.timeOnPage,
    engagement_scrolls: engagementData.scrollCount,
    engagement_clicks: engagementData.clickCount,
    page_path: window.location.pathname,
    ...engagementData,
  })
}
