// Anti-flicker script for mobile
(function() {
  // Check if mobile
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                 window.innerWidth <= 768;

  if (isMobile) {
    // Add class to reduce motion immediately
    document.documentElement.classList.add('framer-motion-reduce-motion');

    // Ensure all content is visible
    document.documentElement.style.opacity = '1';

    // Mark as loaded when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('loaded');
      });
    } else {
      document.body.classList.add('loaded');
    }

    // Disable all initial animations
    window.addEventListener('load', function() {
      document.body.classList.add('animations-ready');
    });
  }
})();