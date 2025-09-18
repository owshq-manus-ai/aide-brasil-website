import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Brain, Sparkles, ChevronRight, BookOpen, X } from 'lucide-react'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0f2a] to-[#0a0a0a] py-20 overflow-hidden">
      {/* Smooth Transition Gradient from Hero */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1a0f2a]/50"
        style={{ marginTop: '-2rem' }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Neural Network Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(180deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, '-20px', null],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Descubra como você pode aprender as tecnologias{' '}
            <span
              className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))',
              }}
            >
              mais valorizadas do mercado
            </span>
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          onMouseMove={handleMouseMove}
        >
          {/* Video Cover with Brain Visual */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Premium Dark Background with Tech Grid */}
                <div className="absolute inset-0">
                  {/* Deep dark gradient background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                        radial-gradient(circle at 50% 50%,
                          rgba(88, 28, 135, 0.15) 0%,
                          rgba(30, 10, 60, 0.4) 40%,
                          rgba(10, 10, 10, 0.95) 100%),
                        linear-gradient(180deg, #0a0a0a 0%, #1a0f2a 50%, #0a0a0a 100%)
                      `,
                    }}
                  />

                  {/* Tech Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                        linear-gradient(180deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                        linear-gradient(45deg, transparent 48%, rgba(168, 85, 247, 0.05) 49%, rgba(168, 85, 247, 0.05) 51%, transparent 52%)
                      `,
                      backgroundSize: '40px 40px, 40px 40px, 80px 80px',
                    }}
                  />

                  {/* Binary/Matrix Rain Effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-10">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-purple-400 font-mono text-xs"
                        style={{
                          left: `${i * 7}%`,
                          fontSize: '10px',
                        }}
                        initial={{ y: -100 }}
                        animate={{ y: '100vh' }}
                        transition={{
                          duration: 8 + Math.random() * 4,
                          repeat: Infinity,
                          delay: Math.random() * 5,
                          ease: "linear"
                        }}
                      >
                        {'01101001010'}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 3D Brain Visual Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main Brain Structure */}
                  <motion.div
                    animate={{
                      rotateY: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                    }}
                  >
                    {/* Brain Hemispheres with 3D effect */}
                    <div className="relative w-80 h-80">
                      {/* Left Hemisphere */}
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-64"
                        style={{
                          background: `
                            radial-gradient(ellipse at 30% 50%,
                              rgba(236, 72, 153, 0.4) 0%,
                              rgba(168, 85, 247, 0.3) 30%,
                              rgba(109, 40, 217, 0.2) 60%,
                              transparent 100%)
                          `,
                          filter: 'blur(20px)',
                          transform: 'rotateY(-10deg) translateZ(-20px)',
                        }}
                      />

                      {/* Right Hemisphere */}
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-64"
                        style={{
                          background: `
                            radial-gradient(ellipse at 70% 50%,
                              rgba(251, 146, 60, 0.4) 0%,
                              rgba(168, 85, 247, 0.3) 30%,
                              rgba(109, 40, 217, 0.2) 60%,
                              transparent 100%)
                          `,
                          filter: 'blur(20px)',
                          transform: 'rotateY(10deg) translateZ(-20px)',
                        }}
                      />

                      {/* Central Core Glow */}
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: `
                            radial-gradient(circle at center,
                              rgba(168, 85, 247, 0.6) 0%,
                              rgba(139, 92, 246, 0.3) 20%,
                              transparent 60%)
                          `,
                          filter: 'blur(30px)',
                        }}
                      />

                      {/* Circuit Pattern Overlay */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                        {/* Neural Pathways */}
                        {[...Array(12)].map((_, i) => {
                          const angle = (i * 30) * Math.PI / 180;
                          const startX = 160 + Math.cos(angle) * 60;
                          const startY = 160 + Math.sin(angle) * 60;
                          const endX = 160 + Math.cos(angle) * 140;
                          const endY = 160 + Math.sin(angle) * 140;

                          return (
                            <g key={i}>
                              <motion.line
                                x1={startX}
                                y1={startY}
                                x2={endX}
                                y2={endY}
                                stroke="url(#neural-gradient)"
                                strokeWidth="1"
                                opacity="0.6"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.1,
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                }}
                              />
                              <motion.circle
                                cx={endX}
                                cy={endY}
                                r="3"
                                fill="url(#node-gradient)"
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{
                                  duration: 1,
                                  delay: i * 0.1 + 1,
                                  repeat: Infinity,
                                  repeatDelay: 4,
                                }}
                              />
                            </g>
                          );
                        })}

                        {/* Curved Synapses */}
                        {[...Array(8)].map((_, i) => {
                          const angle1 = (i * 45) * Math.PI / 180;
                          const angle2 = ((i + 1) * 45) * Math.PI / 180;

                          return (
                            <motion.path
                              key={`synapse-${i}`}
                              d={`M ${160 + Math.cos(angle1) * 100} ${160 + Math.sin(angle1) * 100}
                                  Q ${160} ${160}
                                  ${160 + Math.cos(angle2) * 100} ${160 + Math.sin(angle2) * 100}`}
                              fill="none"
                              stroke="url(#synapse-gradient)"
                              strokeWidth="0.5"
                              opacity="0.4"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: [0, 1, 0] }}
                              transition={{
                                duration: 3,
                                delay: i * 0.3,
                                repeat: Infinity,
                              }}
                            />
                          );
                        })}

                        <defs>
                          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                          </linearGradient>
                          <radialGradient id="node-gradient">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.3" />
                          </radialGradient>
                          <linearGradient id="synapse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Particle Effects Around Brain */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          filter: 'blur(1px)',
                          boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)',
                        }}
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 0,
                        }}
                        animate={{
                          x: Math.cos(i * Math.PI / 10) * 200,
                          y: Math.sin(i * Math.PI / 10) * 200,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Play Button with Circular Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    {/* Circular Text */}
                    <svg className="absolute -inset-20 w-40 h-40 animate-spin-slow" style={{ animationDuration: '20s' }}>
                      <defs>
                        <path
                          id="circle"
                          d="M 80, 80
                             m -60, 0
                             a 60,60 0 1,1 120,0
                             a 60,60 0 1,1 -120,0"
                        />
                      </defs>
                      <text fill="white" fontSize="14" fontWeight="bold" className="uppercase">
                        <textPath href="#circle" startOffset="25%">
                          ASSISTA AO VÍDEO • ASSISTA AO VÍDEO •
                        </textPath>
                      </text>
                    </svg>

                    {/* Play Button */}
                    <div className="relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-white/20 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 left-0 right-0 text-center"
                >
                  <p className="text-white text-xl font-oswald">
                    Assista o vídeo e seguir
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* YouTube Player */}
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="AI Data Engineer Bootcamp"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-oswald font-bold text-white text-lg uppercase tracking-wider shadow-lg overflow-hidden"
            style={{
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.5), 0 0 60px rgba(16, 185, 129, 0.3)',
            }}
          >
            {/* Button Shine Effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['200% 0%', '-200% 0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <span className="relative flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              Conferir Ementa
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* CSS for spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default VideoSection