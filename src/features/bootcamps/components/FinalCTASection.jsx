import React, { memo, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Bot,
  ArrowRight
} from 'lucide-react'

// Shared styles
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Pre-generated particle positions - reduced from 20 to 6 for better performance
const PARTICLE_POSITIONS = [
  { left: '20%', top: '30%', duration: 4.5, delay: 0.2 },
  { left: '80%', top: '25%', duration: 4.0, delay: 0.8 },
  { left: '35%', top: '70%', duration: 3.8, delay: 0.5 },
  { left: '65%', top: '60%', duration: 4.2, delay: 1.0 },
  { left: '50%', top: '40%', duration: 3.5, delay: 0.3 },
  { left: '15%', top: '55%', duration: 4.3, delay: 0.7 },
]

// Optimized shimmer animation config
const shimmerAnimation = {
  backgroundPosition: ['200% 0%', '-200% 0%']
}
const shimmerTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "linear"
}

// Arrow animation config
const arrowAnimation = { x: [0, 5, 0] }
const arrowTransition = { duration: 1.5, repeat: Infinity }

// Memoized Particle component
const Particle = memo(({ position }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full will-change-transform"
    style={{
      backgroundColor: 'rgba(224, 122, 95, 0.3)',
      left: position.left,
      top: position.top,
    }}
    animate={{
      y: [-20, 20],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: position.duration,
      delay: position.delay,
      repeat: Infinity,
    }}
  />
))
Particle.displayName = 'Particle'

const FinalCTASection = memo(() => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handlePricingClick = useCallback(() => scrollToSection('pricing'), [scrollToSection])

  // Memoized particles render
  const particles = useMemo(() =>
    PARTICLE_POSITIONS.map((position, i) => (
      <Particle key={i} position={position} />
    )), []
  )

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background with intense gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 1000px 500px at 50% 50%, rgba(224, 122, 95, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 600px 300px at 30% 70%, rgba(224, 122, 95, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 70% 30%, rgba(224, 122, 95, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        {/* Animated particles - optimized with fewer elements */}
        {particles}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Transformation Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Before/After comparison */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-r from-white/[0.03] to-white/[0.01] rounded-2xl px-8 py-6 border border-white/10">
            <div className="text-center sm:text-right">
              <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Hoje</p>
              <p className="text-white/60 text-lg">Copiando código do ChatGPT</p>
            </div>

            <motion.div
              animate={arrowAnimation}
              transition={arrowTransition}
            >
              <ArrowRight className="w-8 h-8" style={{ color: '#E07A5F' }} />
            </motion.div>

            <div className="text-center sm:text-left">
              <p className="text-sm uppercase tracking-wider mb-1 font-bold" style={{ color: '#E07A5F' }}>Em 4 dias</p>
              <p className="text-white text-lg font-bold">Operando uma frota de agentes</p>
            </div>
          </div>
        </motion.div>

        {/* Main CTA Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-oswald font-bold text-white mb-6 leading-tight">
            <span className="block text-lg sm:text-2xl md:text-3xl text-white/50 mb-2 sm:mb-3">Daqui a 6 meses você vai estar...</span>
            <span className="block mb-2">
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, #E07A5F 0%, #F0A090 50%, #E07A5F 100%)`,
                  backgroundSize: '200% 100%',
                  animation: 'subtle-metallic 6s ease-in-out infinite',
                }}
              >
                Liderando com IA
              </span>
              {' '}ou Correndo Atrás?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
            <span className="text-white font-bold">O mercado não vai esperar.</span>{' '}
            Enquanto você decide, outros já estão deployando sistemas com agentes autônomos.
            <span className="block mt-2 sm:mt-3 font-semibold text-sm sm:text-lg" style={{ color: '#E07A5F' }}>
              A escolha é sua. O momento é agora.
            </span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* CTA Button: mobile-optimized with min touch target */}
          <motion.button
            onClick={handlePricingClick}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-12 py-4 sm:py-6 min-h-[52px] rounded-xl sm:rounded-2xl font-oswald font-bold uppercase tracking-wider text-base sm:text-xl text-white transition-all duration-300 relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(224, 122, 95, 0.6), 0 0 100px rgba(224, 122, 95, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(90deg, #E07A5F, #F0A090)',
              boxShadow: '0 0 40px rgba(224, 122, 95, 0.5), 0 0 80px rgba(224, 122, 95, 0.3)'
            }}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
                backgroundSize: '200% 200%',
              }}
              animate={shimmerAnimation}
              transition={shimmerTransition}
            />

            <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">QUERO LIDERAR COM IA</span>
            <span className="sm:hidden">LIDERAR COM IA</span>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>

          {/* Subtext with urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 space-y-1 sm:space-y-2"
          >
            <p className="text-white/60 text-xs sm:text-sm">
              28-31 Jan 2026 * 12h código * <span className="text-green-400 font-semibold">7 dias garantia</span>
            </p>
            <p className="text-xs sm:text-sm font-medium" style={{ color: 'rgba(224, 122, 95, 0.7)' }}>
              Lote Decisão: R$ 1.197
            </p>
          </motion.div>
        </motion.div>

        {/* Final tagline - Mobile: smaller text, better spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <p className="text-white/40 text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest text-center px-2">A diferença entre quem usa IA e quem lidera com IA</p>
            <p className="text-lg sm:text-2xl md:text-3xl font-oswald text-white text-center">
              <span className="text-white/40 line-through">Vibe coding</span>
              {' '}
              <span
                className="bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #E07A5F, #F0A090)',
                }}
              >
                AI-Native Workflow
              </span>
            </p>
            <p className="text-white/50 text-xs sm:text-sm mt-1 sm:mt-2 text-center px-4">
              Zero prompts vagos. <span style={{ color: '#E07A5F' }} className="font-semibold">100% engenharia.</span>
            </p>
          </div>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

FinalCTASection.displayName = 'FinalCTASection'

export default FinalCTASection
