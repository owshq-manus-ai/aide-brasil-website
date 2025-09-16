import React, { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'

const EnhancedWebinarBackground = memo(() => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    console.log('🎨 EnhancedWebinarBackground component mounted!')
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (e) => {
    if (!isMobile) {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -10 }}
      onMouseMove={handleMouseMove}
    >
      {/* HIGHLY VISIBLE TEST BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900" />

      {/* BRIGHT TEST ELEMENTS */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 opacity-80 rounded-lg" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-500 opacity-80 rounded-lg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500 opacity-60 rounded-full" />

      {/* Base Technical Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#030303] to-gray-800 opacity-0" />

      {/* Metallic Network Pattern Layer */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(192, 192, 192, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(169, 169, 169, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(156, 163, 175, 0.20) 0%, transparent 50%)
          `
        }}
      />

      {/* Hexagonal Technical Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(192, 192, 192, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192, 192, 192, 0.15) 1px, transparent 1px),
            linear-gradient(150deg, rgba(192, 192, 192, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 60px 60px',
        }}
      />

      {/* Data Flow Lines */}
      <div className="absolute inset-0">
        {/* Horizontal scanning lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400/60 to-transparent animate-pulse" />
        <div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400/60 to-transparent animate-pulse"
          style={{ animationDelay: '2s' }}
        />

        {/* Vertical data streams */}
        <div
          className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-gray-400/50 to-transparent animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-gray-300/45 to-transparent animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Interactive Metallic Orbs - Desktop Only */}
      {!isMobile && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-40"
            style={{
              background: `radial-gradient(circle,
                rgba(192, 192, 192, 0.3) 0%,
                rgba(169, 169, 169, 0.2) 30%,
                transparent 70%
              )`,
              left: `${20 + mousePos.x * 0.1}%`,
              top: `${10 + mousePos.y * 0.05}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute w-80 h-80 rounded-full blur-2xl opacity-30"
            style={{
              background: `radial-gradient(circle,
                rgba(156, 163, 175, 0.4) 0%,
                rgba(107, 114, 128, 0.2) 40%,
                transparent 70%
              )`,
              right: `${15 + mousePos.x * 0.08}%`,
              bottom: `${20 + mousePos.y * 0.06}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      )}

      {/* Mobile Static Orbs */}
      {isMobile && (
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl opacity-25"
            style={{
              background: `radial-gradient(circle, rgba(192, 192, 192, 0.4) 0%, transparent 70%)`
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-24 h-24 rounded-full blur-xl opacity-20"
            style={{
              background: `radial-gradient(circle, rgba(156, 163, 175, 0.4) 0%, transparent 70%)`
            }}
          />
        </div>
      )}

      {/* Geometric Technical Elements - Desktop Only */}
      {!isMobile && (
        <div className="absolute inset-0">
          {/* Rotating technical frames */}
          <motion.div
            className="absolute top-40 right-32 w-32 h-32 border border-gray-400/20"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute bottom-40 left-32 w-24 h-24 border border-gray-300/25"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Data connection nodes */}
          <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-gray-400/60 rounded-full animate-ping" />
          <div
            className="absolute top-2/3 right-1/5 w-2 h-2 bg-gray-300/60 rounded-full animate-ping"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-gray-400/50 rounded-full animate-ping"
            style={{ animationDelay: '2s' }}
          />
        </div>
      )}

      {/* Simplified Mobile Geometric Elements */}
      {isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-32 right-8 w-8 h-8 border border-gray-400/20 rotate-45" />
          <div className="absolute bottom-32 left-8 w-6 h-6 border border-gray-300/25" />
          <div className="absolute top-1/2 right-12 w-2 h-2 bg-gray-400/40 rounded-full animate-pulse" />
        </div>
      )}

      {/* Corner Technical Accents */}
      <div className="absolute top-0 left-0 w-40 h-40">
        <div className="absolute top-8 left-8 w-24 h-px bg-gradient-to-r from-gray-400/50 to-transparent" />
        <div className="absolute top-8 left-8 h-24 w-px bg-gradient-to-b from-gray-400/50 to-transparent" />
        <div className="absolute top-12 left-12 w-4 h-4 border border-gray-400/30 rotate-45" />
      </div>

      <div className="absolute top-0 right-0 w-40 h-40">
        <div className="absolute top-8 right-8 w-24 h-px bg-gradient-to-l from-gray-400/50 to-transparent" />
        <div className="absolute top-8 right-8 h-24 w-px bg-gradient-to-b from-gray-400/50 to-transparent" />
        <div className="absolute top-12 right-12 w-4 h-4 border border-gray-300/30" />
      </div>

      <div className="absolute bottom-0 left-0 w-40 h-40">
        <div className="absolute bottom-8 left-8 w-24 h-px bg-gradient-to-r from-gray-400/50 to-transparent" />
        <div className="absolute bottom-8 left-8 h-24 w-px bg-gradient-to-t from-gray-400/50 to-transparent" />
        <div className="absolute bottom-12 left-12 w-4 h-4 border border-gray-400/30 rotate-45" />
      </div>

      <div className="absolute bottom-0 right-0 w-40 h-40">
        <div className="absolute bottom-8 right-8 w-24 h-px bg-gradient-to-l from-gray-400/50 to-transparent" />
        <div className="absolute bottom-8 right-8 h-24 w-px bg-gradient-to-t from-gray-400/50 to-transparent" />
        <div className="absolute bottom-12 right-12 w-4 h-4 border border-gray-300/30" />
      </div>

      {/* Subtle shimmer overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(
            45deg,
            transparent 30%,
            rgba(192, 192, 192, 0.03) 35%,
            rgba(192, 192, 192, 0.08) 40%,
            rgba(192, 192, 192, 0.03) 45%,
            transparent 50%
          )`
        }}
      />
    </div>
  )
})

EnhancedWebinarBackground.displayName = 'EnhancedWebinarBackground'

export default EnhancedWebinarBackground