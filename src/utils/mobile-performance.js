// Mobile Performance Detection and Optimization

// Detect if user is on mobile
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768
}

// Detect if device is low-end
export const isLowEndDevice = () => {
  // Check for low memory
  const memory = navigator.deviceMemory
  if (memory && memory < 4) return true

  // Check for slow connection
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection) {
    const effectiveType = connection.effectiveType
    if (effectiveType === 'slow-2g' || effectiveType === '2g') return true
  }

  // Check for low core count
  const cores = navigator.hardwareConcurrency
  if (cores && cores < 4) return true

  return false
}

// Apply mobile optimizations
export const applyMobileOptimizations = () => {
  if (!isMobile()) return

  const root = document.documentElement

  // Add mobile class for CSS targeting
  root.classList.add('is-mobile')

  // If low-end device, add performance mode
  if (isLowEndDevice()) {
    root.classList.add('performance-mode')
  }

  // Disable heavy animations on mobile
  if (isMobile()) {
    // Add class to disable complex animations
    root.classList.add('reduce-motion')

    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const animatedElements = document.querySelectorAll('[data-animate]')

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      })

      animatedElements.forEach(el => observer.observe(el))
    }
  }
}

// Optimize images for mobile
export const optimizeImagesForMobile = () => {
  if (!isMobile()) return

  const images = document.querySelectorAll('img[data-mobile-src]')
  images.forEach(img => {
    const mobileSrc = img.getAttribute('data-mobile-src')
    if (mobileSrc) {
      img.src = mobileSrc
    }
  })
}

// Reduce motion for accessibility and performance
export const reduceMotionIfNeeded = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion || (isMobile() && isLowEndDevice())) {
    document.documentElement.classList.add('reduce-motion')

    // Disable Framer Motion animations
    if (window.FramerMotionConfig) {
      window.FramerMotionConfig.reducedMotion = 'always'
    }
  }
}

// Initialize all mobile optimizations
export const initMobileOptimizations = () => {
  // Run on load
  applyMobileOptimizations()
  optimizeImagesForMobile()
  reduceMotionIfNeeded()

  // Re-check on resize
  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      applyMobileOptimizations()
    }, 250)
  })
}