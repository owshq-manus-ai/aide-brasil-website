import React, { useState, useCallback } from 'react'

const LazyImage = React.memo(({
  src,
  alt,
  className = '',
  fallback = null,
  placeholder = null,
  onLoad = () => {},
  onError = () => {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad()
  }, [onLoad])

  const handleError = useCallback(() => {
    setHasError(true)
    onError()
  }, [onError])

  if (hasError && fallback) {
    return fallback
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          {placeholder}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  )
})

LazyImage.displayName = 'LazyImage'

export default LazyImage