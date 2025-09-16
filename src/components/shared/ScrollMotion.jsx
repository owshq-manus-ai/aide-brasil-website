import React from 'react';
import { motion } from 'framer-motion';
import { useMobileOptimizations } from '../../hooks/useMobileOptimizations';

/**
 * ScrollMotion - A wrapper that disables whileInView animations on mobile to prevent flicker
 */
export const ScrollMotion = ({
  children,
  initial,
  whileInView,
  viewport,
  transition,
  className,
  ...props
}) => {
  const { isMobile } = useMobileOptimizations();

  // On mobile, render with immediate visibility, no scroll animations
  if (isMobile) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  // On desktop, use normal scroll animations
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;