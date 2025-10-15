/**
 * useGTMTracking Hook
 *
 * React hook for easy GTM event tracking in components
 */

import { useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView, trackEvent, trackCTAClick, trackFormSubmission } from '../lib/gtm'

/**
 * Hook for tracking page views on route changes
 */
export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    trackPageView({
      page_path: location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [location])
}

/**
 * Hook for tracking events
 * Returns memoized tracking functions
 */
export const useGTMTracking = () => {
  const trackCustomEvent = useCallback((eventName, eventData) => {
    trackEvent(eventName, eventData)
  }, [])

  const trackCTA = useCallback((ctaData) => {
    trackCTAClick(ctaData)
  }, [])

  const trackForm = useCallback((formData) => {
    trackFormSubmission(formData)
  }, [])

  return {
    trackEvent: trackCustomEvent,
    trackCTA,
    trackForm,
  }
}

/**
 * Hook for tracking scroll depth
 */
export const useScrollTracking = (thresholds = [25, 50, 75, 90, 100]) => {
  useEffect(() => {
    const tracked = new Set()

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold)
          trackEvent('scroll_depth', {
            scroll_depth: threshold,
            page_path: window.location.pathname,
          })
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [thresholds])
}

/**
 * Hook for tracking time on page
 */
export const useTimeTracking = (intervalSeconds = 30) => {
  const location = useLocation()

  useEffect(() => {
    const startTime = Date.now()
    let lastTrackedInterval = 0

    const trackTimeInterval = () => {
      const timeOnPage = Math.floor((Date.now() - startTime) / 1000)
      const currentInterval = Math.floor(timeOnPage / intervalSeconds)

      if (currentInterval > lastTrackedInterval) {
        lastTrackedInterval = currentInterval
        trackEvent('time_on_page', {
          time_seconds: timeOnPage,
          page_path: location.pathname,
        })
      }
    }

    const interval = setInterval(trackTimeInterval, intervalSeconds * 1000)

    return () => {
      clearInterval(interval)
      // Track final time on page
      const finalTime = Math.floor((Date.now() - startTime) / 1000)
      trackEvent('page_exit', {
        time_on_page: finalTime,
        page_path: location.pathname,
      })
    }
  }, [location, intervalSeconds])
}

/**
 * Hook for tracking video interactions
 */
export const useVideoTracking = (videoId, videoTitle) => {
  const trackPlay = useCallback(() => {
    trackEvent('video_interaction', {
      video_id: videoId,
      video_title: videoTitle,
      video_action: 'play',
    })
  }, [videoId, videoTitle])

  const trackPause = useCallback((currentTime, duration) => {
    trackEvent('video_interaction', {
      video_id: videoId,
      video_title: videoTitle,
      video_action: 'pause',
      video_current_time: currentTime,
      video_duration: duration,
      video_percent: Math.round((currentTime / duration) * 100),
    })
  }, [videoId, videoTitle])

  const trackComplete = useCallback((duration) => {
    trackEvent('video_interaction', {
      video_id: videoId,
      video_title: videoTitle,
      video_action: 'complete',
      video_duration: duration,
      video_percent: 100,
    })
  }, [videoId, videoTitle])

  return {
    trackPlay,
    trackPause,
    trackComplete,
  }
}

export default useGTMTracking
