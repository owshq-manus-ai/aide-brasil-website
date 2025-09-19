import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Brain, Sparkles, ChevronRight, BookOpen, X, Zap } from 'lucide-react'

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
    <section className="relative min-h-screen bg-[#0a0a0a] py-20 overflow-hidden">
      {/* Simplified Consistent Background - Same as Hero */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              #0a0a0a 0%,
              #1a0f2a 50%,
              #0a0a0a 100%)`,
          }}
        />

        {/* Purple gradient orbs */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 20% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%),
              radial-gradient(ellipse 600px 300px at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 40%)`,
            filter: 'blur(60px)',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header with Metallic Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* Eyebrow Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">Aula Exclusiva</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6">
            <span className="block text-3xl md:text-4xl text-white/80 mb-2">Descubra o Método que</span>
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg,
                  #a855f7 0%,
                  #c084fc 25%,
                  #e9d5ff 50%,
                  #c084fc 75%,
                  #a855f7 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
                filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))',
              }}
            >
              Transforma Dados
            </span>
            {' '}em{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg,
                  #f97316 0%,
                  #fb923c 25%,
                  #fed7aa 50%,
                  #fb923c 75%,
                  #f97316 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite 1s',
                filter: 'drop-shadow(0 0 30px rgba(249, 115, 22, 0.5))',
              }}
            >
              Inteligência
            </span>
          </h2>

          {/* Compelling Description */}
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Em apenas <span className="text-purple-400 font-bold">37 minutos</span>, você vai descobrir como os
            melhores engenheiros de dados estão usando <span className="text-violet-400 font-bold">AI e automação</span> para
            construir pipelines que processam <span className="text-orange-400 font-bold">milhões de dados em segundos</span> e
            ganhar salários de <span className="text-green-400 font-bold">R$ 15.000 a R$ 35.000</span> por mês.
          </p>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-purple-400" />
              <span className="text-white/60 text-sm">37 min de conteúdo</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-white/60 text-sm">100% prático</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-white/60 text-sm">Resultados imediatos</span>
            </div>
          </motion.div>
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
                {/* Video Cover Background */}
                <div className="absolute inset-0">
                  {/* Gradient background matching the course theme */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                        radial-gradient(circle at 50% 50%,
                          rgba(168, 85, 247, 0.2) 0%,
                          rgba(139, 92, 246, 0.15) 20%,
                          rgba(88, 28, 135, 0.3) 40%,
                          rgba(10, 10, 10, 0.95) 80%),
                        linear-gradient(135deg, #1a0f2a 0%, #2a0f3a 50%, #1a0f2a 100%)
                      `,
                    }}
                  />

                  {/* Simplified overlay for better visibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.3) 50%, rgba(10, 10, 10, 0.6) 100%)',
                    }}
                  />
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

                {/* Video Title Overlay */}
                <div className="absolute top-0 left-0 right-0 p-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-oswald font-bold text-white mb-2">
                      Masterclass: AI Data Engineering
                    </h3>
                    <p className="text-white/70 text-lg">
                      O futuro da engenharia de dados com Inteligência Artificial
                    </p>
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
                    <div className="relative w-24 h-24 bg-gradient-to-r from-purple-500/80 to-violet-500/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:from-purple-600 group-hover:to-violet-600 transition-all duration-300 shadow-2xl">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 left-0 right-0"
                >
                  <div className="text-center mb-4">
                    <p className="text-white text-xl font-oswald mb-2">
                      Assista o vídeo completo
                    </p>
                    <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        37 minutos
                      </span>
                      <span>•</span>
                      <span>Aula Gratuita</span>
                      <span>•</span>
                      <span>HD Quality</span>
                    </div>
                  </div>
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

        {/* CTA Button - Styled to Match Page Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(139, 92, 246, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 rounded-lg font-oswald font-bold uppercase tracking-wider
                     bg-gradient-to-r from-purple-500 to-violet-500 text-white transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: `0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)`
            }}
          >
            {/* Animated Shine Effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
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

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-3 text-lg">
              <BookOpen className="w-5 h-5" />
              Conferir Ementa Completa
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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