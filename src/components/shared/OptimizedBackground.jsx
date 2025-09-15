import { memo, useEffect, useState } from 'react';

const OptimizedBackground = memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Check mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Preload the appropriate image
    const img = new Image();
    const imageUrl = window.innerWidth < 768 
      ? '/optimized/background-mobile.webp'
      : '/optimized/background-option-2-geometric.webp';
    
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // Fallback to PNG if WebP fails
      const fallbackImg = new Image();
      fallbackImg.src = '/background-option-2-geometric.png';
      fallbackImg.onload = () => setImageLoaded(true);
    };
    img.src = imageUrl;
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Start with PNG for immediate display, then switch to WebP when ready
  const getBackgroundImage = () => {
    // Always try WebP first, browser will fallback if not supported
    if (isMobile) {
      return `url('/optimized/background-mobile.webp'), url('/background-option-2-geometric.png')`;
    }
    return `url('/optimized/background-option-2-geometric.webp'), url('/background-option-2-geometric.png')`;
  };
  
  return (
    <div 
      className="fixed inset-0 z-0 opacity-60"
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: imageLoaded ? 'opacity 0.3s ease-in-out' : 'none'
      }}
    />
  );
});

OptimizedBackground.displayName = 'OptimizedBackground';

export default OptimizedBackground;