import React from 'react';
import { motion } from 'framer-motion';
import { useMobileOptimizations } from '../../hooks/useMobileOptimizations';

/**
 * Mobile-optimized motion component that disables animations on mobile devices
 */
export const MobileMotion = ({
  children,
  initial,
  animate,
  whileInView,
  transition,
  whileHover,
  whileTap,
  ...props
}) => {
  const { isMobile } = useMobileOptimizations();

  // On mobile, render without animations
  if (isMobile) {
    return <div {...props}>{children}</div>;
  }

  // On desktop, use full animations
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {children}
    </motion.div>
  );
};