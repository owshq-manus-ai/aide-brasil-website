import { memo, useState, useEffect, useRef } from 'react';

const LazySection = memo(({ children, threshold = 0.1, rootMargin = '100px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? children : (
        <div style={{ height: '400px' }} className="flex items-center justify-center">
          <div className="skeleton w-full h-32 rounded-lg"></div>
        </div>
      )}
    </div>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;