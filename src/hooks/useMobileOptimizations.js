import { useState, useEffect } from 'react';

export const useMobileOptimizations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     window.innerWidth <= 768;
      setIsMobile(mobile);

      // Check for low performance device
      if (mobile) {
        // Check device memory
        const deviceMemory = navigator.deviceMemory;
        const lowMemory = deviceMemory && deviceMemory < 4;

        // Check connection speed
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');

        // Check CPU cores
        const hardwareConcurrency = navigator.hardwareConcurrency;
        const lowCPU = hardwareConcurrency && hardwareConcurrency < 4;

        setIsLowPerformance(lowMemory || slowConnection || lowCPU);
      }
    };

    checkMobile();

    // Listen for resize events
    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isLowPerformance };
};