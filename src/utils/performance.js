// Performance monitoring utilities

// Report Web Vitals
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

// Custom performance marks
export const markPerformance = (name) => {
  if ('performance' in window && 'mark' in window.performance) {
    window.performance.mark(name)
  }
}

// Measure performance between marks
export const measurePerformance = (name, startMark, endMark) => {
  if ('performance' in window && 'measure' in window.performance) {
    try {
      window.performance.measure(name, startMark, endMark)
      const measure = window.performance.getEntriesByName(name)[0]
      console.log(`${name}: ${measure.duration.toFixed(2)}ms`)
      return measure.duration
    } catch (e) {
      console.error('Performance measurement failed:', e)
    }
  }
}

// Log performance metrics
export const logPerformanceMetrics = () => {
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0]

    if (navigation) {
      console.group('📊 Performance Metrics')
      console.log('DNS Lookup:', (navigation.domainLookupEnd - navigation.domainLookupStart).toFixed(2), 'ms')
      console.log('TCP Connection:', (navigation.connectEnd - navigation.connectStart).toFixed(2), 'ms')
      console.log('Request Time:', (navigation.responseStart - navigation.requestStart).toFixed(2), 'ms')
      console.log('Response Time:', (navigation.responseEnd - navigation.responseStart).toFixed(2), 'ms')
      console.log('DOM Processing:', (navigation.domInteractive - navigation.responseEnd).toFixed(2), 'ms')
      console.log('DOM Content Loaded:', (navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart).toFixed(2), 'ms')
      console.log('Load Complete:', (navigation.loadEventEnd - navigation.loadEventStart).toFixed(2), 'ms')
      console.log('Total Page Load:', (navigation.loadEventEnd - navigation.fetchStart).toFixed(2), 'ms')
      console.groupEnd()
    }

    // Log resource timings
    const resources = performance.getEntriesByType('resource')
    const slowResources = resources.filter(r => r.duration > 100).sort((a, b) => b.duration - a.duration)

    if (slowResources.length > 0) {
      console.group('🐌 Slow Resources (>100ms)')
      slowResources.slice(0, 5).forEach(resource => {
        console.log(`${resource.name.split('/').pop()}: ${resource.duration.toFixed(2)}ms`)
      })
      console.groupEnd()
    }
  }
}

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Log metrics when page is fully loaded
  if (document.readyState === 'complete') {
    logPerformanceMetrics()
  } else {
    window.addEventListener('load', logPerformanceMetrics)
  }

  // Report Web Vitals
  reportWebVitals((metric) => {
    console.log(`${metric.name}: ${metric.value.toFixed(2)}`)

    // Send to analytics if needed
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
      })
    }
  })
}