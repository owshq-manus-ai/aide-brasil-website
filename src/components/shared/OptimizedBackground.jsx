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
  
  // Memoize image URLs for better performance
  const imageUrls = useMemo(() => {
    if (!webpSupported) {
      return {
        primary: '/background-option-2-geometric.png',
        fallback: '/background-option-2-geometric.png'
      };
    }
    
    if (isMobile) {
      return {
        primary: '/optimized/background-mobile.webp',
        fallback: '/background-option-2-geometric.png'
      };
    }
    
    return {
      primary: '/optimized/background-option-2-geometric.webp',
      fallback: '/background-option-2-geometric.png'
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
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Static background for mobile
          transform: 'translateZ(0)', // Force hardware acceleration
        }}
        aria-hidden="true"
      />
    );
  }
  
  // Desktop version with minimal effects
  return (
    <div 
      className="fixed inset-0 z-0 opacity-60"
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'translateZ(0)', // Force hardware acceleration
      }}
      aria-hidden="true"
    />
  );
});

OptimizedBackground.displayName = 'OptimizedBackground';

export default OptimizedBackground;