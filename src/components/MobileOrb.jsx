import React from 'react'
import { motion } from 'framer-motion'

// Simplified mobile-friendly orb component
const MobileOrb = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-gray-700/10 to-gray-800/20 rounded-full blur-xl" />

        {/* Main orb - simplified for mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 sm:w-56 sm:h-56"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-gray-600/10 rounded-full blur-md" />

          {/* Main sphere */}
          <div className="absolute inset-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-full shadow-2xl">
            {/* Simple shine effect */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl" />
            <div className="absolute top-8 left-8 w-6 h-6 bg-white/20 rounded-full blur-md" />
          </div>

          {/* Center icon or logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600/30 to-gray-800/30 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-300">O</span>
            </div>
          </div>
        </motion.div>

        {/* Simple rotation animation */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-gray-400/50 rounded-full -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-gray-400/50 rounded-full -translate-x-1/2" />
          <div className="absolute left-0 top-1/2 w-1 h-1 bg-gray-400/50 rounded-full -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 w-1 h-1 bg-gray-400/50 rounded-full -translate-y-1/2" />
        </motion.div>
      </div>
    </div>
  )
}

export default MobileOrb