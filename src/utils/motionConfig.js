/**
 * Framer Motion configuration to disable animations on mobile
 */

export const getMotionProps = (isMobile, props = {}) => {
  if (isMobile) {
    // Return static props for mobile - no animations
    return {
      initial: false,
      animate: false,
      whileInView: undefined,
      viewport: undefined,
      transition: { duration: 0 },
      whileHover: undefined,
      whileTap: undefined,
      style: props.style || {}
    };
  }

  // Return normal animation props for desktop
  return props;
};

export const disableScrollAnimations = () => {
  // Disable all Framer Motion scroll-triggered animations
  if (typeof window !== 'undefined') {
    // Add class to disable animations
    document.documentElement.classList.add('disable-scroll-animations');

    // Override Framer Motion config
    if (window.FramerMotionConfig) {
      window.FramerMotionConfig = {
        ...window.FramerMotionConfig,
        reducedMotion: 'always'
      };
    }

    // Disable IntersectionObserver for animations
    const originalIntersectionObserver = window.IntersectionObserver;
    window.IntersectionObserver = function(callback, options) {
      // If this is likely for animations (checking for threshold), disable it
      if (options && (options.threshold || options.rootMargin)) {
        return {
          observe: () => {},
          unobserve: () => {},
          disconnect: () => {},
          takeRecords: () => []
        };
      }
      return new originalIntersectionObserver(callback, options);
    };
  }
};