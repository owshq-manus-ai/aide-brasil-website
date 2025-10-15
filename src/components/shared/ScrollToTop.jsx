import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop Component
 *
 * Automatically scrolls to the top of the page when the route changes.
 * This ensures that users start at the hero section of each page
 * instead of maintaining scroll position from the previous page.
 *
 * Usage: Place inside Router but outside Routes
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate effect
    })
  }, [pathname]) // Trigger on pathname change

  return null // This component doesn't render anything
}

export default ScrollToTop
