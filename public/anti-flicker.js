// Anti-flicker script for mobile
(function() {
  // Check if mobile
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                 window.innerWidth <= 768;

  if (isMobile) {
    // Add classes to disable animations
    document.documentElement.classList.add('no-scroll-animations');
    document.documentElement.classList.add('disable-framer-motion');
    document.documentElement.classList.add('mobile-no-animations');

    // Ensure all content is visible
    document.documentElement.style.opacity = '1';

    // Completely disable Framer Motion animations
    window.FramerMotionConfig = {
      reducedMotion: 'always',
      transition: { duration: 0 }
    };

    // Completely override IntersectionObserver to prevent scroll-triggered animations
    window.IntersectionObserver = function() {
      return {
        observe: function() {},
        unobserve: function() {},
        disconnect: function() {},
        takeRecords: function() { return []; },
        root: null,
        rootMargin: '',
        thresholds: []
      };
    };

    // Add styles to force visibility and disable transforms
    var style = document.createElement('style');
    style.textContent = [
      '.mobile-no-animations * {',
      '  animation-duration: 0s !important;',
      '  animation-delay: 0s !important;',
      '  transition-duration: 0s !important;',
      '  transition-delay: 0s !important;',
      '}',
      // Force ALL motion elements to be visible - more robust selectors
      '.mobile-no-animations [style] {',
      '  opacity: 1 !important;',
      '  transform: none !important;',
      '  visibility: visible !important;',
      '}',
      // Target Framer Motion components specifically
      '.mobile-no-animations [data-framer-appear-id],',
      '.mobile-no-animations [data-projection-id],',
      '.mobile-no-animations [style*="opacity"],',
      '.mobile-no-animations [style*="transform"] {',
      '  opacity: 1 !important;',
      '  transform: none !important;',
      '  visibility: visible !important;',
      '}',
      // Ensure all sections and containers are visible
      '.mobile-no-animations section,',
      '.mobile-no-animations div,',
      '.mobile-no-animations main,',
      '.mobile-no-animations article {',
      '  opacity: 1 !important;',
      '  visibility: visible !important;',
      '}'
    ].join('\n');
    document.head.appendChild(style);

    // Mark as loaded when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('loaded');
        document.body.classList.add('mobile-optimized');
      });
    } else {
      document.body.classList.add('loaded');
      document.body.classList.add('mobile-optimized');
    }
  }
})();