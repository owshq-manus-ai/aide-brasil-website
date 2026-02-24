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
  // Add class hint for CSS-based animation control.
  // Actual visibility is handled by scoped CSS rules in mobile-scroll-fix.css
  // (forces opacity:1 / transform:none for non-[data-page] elements).
  // IntersectionObserver is NOT patched — scoped pages (bootcamp etc.)
  // rely on IO for whileInView animations.
  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('disable-scroll-animations');
  }
};