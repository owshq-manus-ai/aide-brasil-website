import React, { useState, memo, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Sparkles, ChevronRight, X, Terminal, Bot, Rocket } from 'lucide-react'

// Shared styles - extracted to module level
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Optimized shimmer animation config
const shimmerAnimation = {
  backgroundPosition: ['200% 0%', '-200% 0%']
}
const shimmerTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "linear"
}

// Pre-generated particle positions to avoid recalculation on re-renders
// Reduced from 20 to 8 particles for better performance while maintaining visual effect
const PARTICLE_POSITIONS = [
  { left: '15%', top: '20%', duration: 4.2, delay: 0.3 },
  { left: '75%', top: '15%', duration: 3.8, delay: 0.8 },
  { left: '25%', top: '70%', duration: 4.5, delay: 0.1 },
  { left: '85%', top: '65%', duration: 3.5, delay: 1.2 },
  { left: '45%', top: '30%', duration: 4.0, delay: 0.6 },
  { left: '60%', top: '80%', duration: 3.9, delay: 0.9 },
  { left: '35%', top: '50%', duration: 4.3, delay: 0.4 },
  { left: '70%', top: '40%', duration: 3.7, delay: 1.0 },
]

// Memoized Particle component with GPU-accelerated animations
const Particle = memo(({ position }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full will-change-transform"
    style={{
      left: position.left,
      top: position.top,
      backgroundColor: 'rgba(224, 122, 95, 0.6)',
      boxShadow: '0 0 6px rgba(224, 122, 95, 0.6)',
    }}
    animate={{
      y: [-10, 10, -10],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: position.duration,
      delay: position.delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
))
Particle.displayName = 'Particle'

// Memoized rotating text animation
const rotatingTextAnimation = { rotate: 360 }
const rotatingTextTransition = { duration: 15, repeat: Infinity, ease: "linear" }

// Pulse animation for play button
const pulseAnimation = { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }
const pulseTransition = { duration: 2, repeat: Infinity }

// Video Stats Badge component
const StatBadge = memo(({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(224, 122, 95, 0.1)' }}>
    <Icon className="w-4 h-4" style={{ color: '#E07A5F' }} />
    <span className="text-white/80 text-sm">{text}</span>
  </div>
))
StatBadge.displayName = 'StatBadge'

const BootcampVideoSection = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false)

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handlePlayClick = useCallback(() => setIsPlaying(true), [])
  const handleCloseClick = useCallback(() => setIsPlaying(false), [])
  const handlePricingClick = useCallback(() => scrollToSection('pricing'), [scrollToSection])

  // Memoized particles render
  const particles = useMemo(() =>
    PARTICLE_POSITIONS.map((position, i) => (
      <Particle key={i} position={position} />
    )), []
  )

  return (
    <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background with Coral Theme */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              #0a0a0a 0%,
              #120a08 50%,
              #0a0a0a 100%)`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 20% 20%, rgba(224, 122, 95, 0.08) 0%, transparent 40%),
              radial-gradient(ellipse 600px 300px at 80% 80%, rgba(224, 122, 95, 0.06) 0%, transparent 40%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224, 122, 95, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224, 122, 95, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Aggressive Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.3)' }}
          >
            <Play className="w-4 h-4" style={{ color: '#E07A5F' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#E07A5F' }}>Veja em 3 Minutos</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6">
            <span className="block text-2xl md:text-3xl text-white/70 mb-2">Pare de Adivinhar.</span>
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg,
                  #E07A5F 0%,
                  #F0A090 25%,
                  #F5C4B8 50%,
                  #F0A090 75%,
                  #E07A5F 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
                filter: 'drop-shadow(0 0 30px rgba(224, 122, 95, 0.5))',
              }}
            >
              Engenharia de Verdade
            </span>
            {' '}com{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg,
                  #E07A5F 0%,
                  #F0A090 25%,
                  #F5C4B8 50%,
                  #F0A090 75%,
                  #E07A5F 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite 1s',
                filter: 'drop-shadow(0 0 30px rgba(224, 122, 95, 0.5))',
              }}
            >
              Claude Code
            </span>
          </h2>

          {/* Aggressive Copy - Transformation promise */}
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            <span style={{ color: '#E07A5F' }} className="font-bold">Não é tutorial. Não é demo.</span>{' '}
            É o processo completo para <span className="text-white font-bold">transformar requisitos em código de produção</span> -- com agentes que <span style={{ color: '#E07A5F' }} className="font-bold">executam, não sugerem</span>.
          </p>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            <StatBadge icon={Terminal} text="Metodologia Guiada" />
            <StatBadge icon={Bot} text="Agentes que Executam" />
            <StatBadge icon={Rocket} text="Produção Real" />
          </motion.div>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: '1px solid rgba(224, 122, 95, 0.2)' }}
        >
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 cursor-pointer group"
                onClick={handlePlayClick}
              >
                {/* Video Cover Background with Hero Image */}
                <div className="absolute inset-0">
                  {/* Background Image - Full screen, fills entire box */}
                  <img
                    src="/images/team/luan-moreno-4.png"
                    alt="Luan Moreno - AI Data Engineer"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Coral Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg,
                        rgba(224, 122, 95, 0.2) 0%,
                        rgba(10, 10, 10, 0.3) 40%,
                        rgba(10, 10, 10, 0.5) 70%,
                        rgba(10, 10, 10, 0.7) 100%)`,
                    }}
                  />

                  {/* Subtle vignette for depth */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, transparent 30%, rgba(10, 10, 10, 0.4) 100%)',
                    }}
                  />
                </div>

                {/* Floating Particles Effect - Optimized with fewer, pre-positioned particles */}
                <div className="absolute inset-0">
                  {particles}
                </div>

                {/* Play Button with Rotating Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Rotating ASSISTA AGORA text */}
                    <motion.div
                      className="absolute w-44 h-44 will-change-transform"
                      animate={rotatingTextAnimation}
                      transition={rotatingTextTransition}
                    >
                      <svg className="w-full h-full" viewBox="0 0 180 180">
                        <defs>
                          <path
                            id="circle-video"
                            d="M 90, 90
                               m -70, 0
                               a 70,70 0 1,1 140,0
                               a 70,70 0 1,1 -140,0"
                          />
                        </defs>
                        <text fill="white" fontSize="13" fontWeight="bold" letterSpacing="3" className="uppercase">
                          <textPath href="#circle-video" startOffset="0%">
                            ASSISTA AGORA * ASSISTA AGORA *
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>

                    {/* Play button in center */}
                    <div className="relative w-24 h-24 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 transition-all duration-300 shadow-2xl"
                      style={{
                        background: 'linear-gradient(135deg, #E07A5F 0%, #C96A50 100%)',
                        boxShadow: '0 0 40px rgba(224, 122, 95, 0.5), 0 0 80px rgba(224, 122, 95, 0.3)'
                      }}
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={pulseAnimation}
                        transition={pulseTransition}
                      />
                    </div>
                  </motion.div>
                </div>

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
                title="AI Data Engineer Bootcamp - Zero a Produção"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />

              <button
                onClick={handleCloseClick}
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
            onClick={handlePricingClick}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(224, 122, 95, 0.8), 0 0 80px rgba(224, 122, 95, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 rounded-lg font-oswald font-bold uppercase tracking-wider text-white transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #E07A5F 0%, #C96A50 100%)',
              boxShadow: '0 0 30px rgba(224, 122, 95, 0.5), 0 0 60px rgba(224, 122, 95, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
                backgroundSize: '200% 200%',
              }}
              animate={shimmerAnimation}
              transition={shimmerTransition}
            />

            <span className="relative z-10 flex items-center gap-3 text-lg">
              <Sparkles className="w-5 h-5" />
              GARANTIR MINHA VAGA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

BootcampVideoSection.displayName = 'BootcampVideoSection'

export default BootcampVideoSection
