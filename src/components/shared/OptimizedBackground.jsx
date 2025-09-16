import { memo, useEffect, useState, useMemo } from 'react';

const OptimizedBackground = memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [webpSupported, setWebpSupported] = useState(true);
  
  // Check WebP support once
  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const dataURL = canvas.toDataURL('image/webp');
      setWebpSupported(dataURL.indexOf('data:image/webp') === 0);
    };
    
    checkWebPSupport();
  }, []);
  
  useEffect(() => {
    // Simplified mobile check - no debouncing for better performance
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Memoize image URLs for better performance - using ultra-optimized images
  const imageUrls = useMemo(() => {
    if (!webpSupported) {
      return {
        primary: '/background-option-2-geometric.png',
        fallback: '/background-option-2-geometric.png'
      };
    }
    
    if (isMobile) {
      return {
        primary: '/background-mobile.webp', // 1.4KB ultra-optimized mobile version
        fallback: '/background-option-2-geometric.png'
      };
    }
    
    return {
      primary: '/background-ultra-optimized.webp', // 7KB ultra-optimized desktop version
      fallback: '/background-optimized.webp' // 10KB fallback
    };
  }, [isMobile, webpSupported]);
  
  // Optimized background image string
  const backgroundImage = useMemo(() => {
    return `url('${imageUrls.primary}'), url('${imageUrls.fallback}')`;
  }, [imageUrls]);
  
  // Mobile-optimized static background
  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll', // Scroll attachment for better mobile performance
          transform: 'translateZ(0)', // Force hardware acceleration
          willChange: 'auto', // Reduced will-change for better performance
        }}
        aria-hidden="true"
      />
    );
  }
  
  // Desktop version - hide background to prevent overlay issues
  return null; // No background on desktop to prevent text overlap
});

OptimizedBackground.displayName = 'OptimizedBackground';

export default OptimizedBackground;