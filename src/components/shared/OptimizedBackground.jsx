import { memo, useEffect, useState, useMemo } from 'react';

const OptimizedBackground = memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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
    // Optimized resize handler with debouncing
    let timeoutId;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
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
  
  useEffect(() => {
    // Preload the appropriate image with better error handling
    const img = new Image();
    
    const handleLoad = () => {
      setImageLoaded(true);
    };
    
    const handleError = () => {
      // Try fallback image
      if (imageUrls.primary !== imageUrls.fallback) {
        const fallbackImg = new Image();
        fallbackImg.onload = handleLoad;
        fallbackImg.onerror = () => setImageLoaded(true); // Still show something
        fallbackImg.src = imageUrls.fallback;
      } else {
        setImageLoaded(true);
      }
    };
    
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = imageUrls.primary;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrls]);
  
  // Optimized background image string
  const backgroundImage = useMemo(() => {
    return `url('${imageUrls.primary}'), url('${imageUrls.fallback}')`;
  }, [imageUrls]);
  
  return (
    <div 
      className="fixed inset-0 z-0 opacity-60"
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        willChange: imageLoaded ? 'auto' : 'opacity',
        transform: 'translateZ(0)', // Force hardware acceleration
        transition: imageLoaded ? 'opacity 0.3s ease-in-out' : 'none'
      }}
      aria-hidden="true"
    />
  );
});

OptimizedBackground.displayName = 'OptimizedBackground';

export default OptimizedBackground;