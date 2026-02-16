import React, { memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Bot,
  ArrowRight,
  Terminal
} from 'lucide-react'
import { V2_COLORS } from './theme'

const CORAL = V2_COLORS.coral
const TERMINAL = V2_COLORS.terminal

const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

const FinalCTASectionV2 = memo(() => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handlePricingClick = useCallback(() => scrollToSection('pricing'), [scrollToSection])

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 1000px 520px at 50% 45%, ${CORAL.subtle} 0%, transparent 60%),
              radial-gradient(ellipse 600px 320px at 20% 75%, rgba(70, 199, 255, 0.12) 0%, transparent 55%)
            `
          }}
        />

        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: `${CORAL.primary}50`,
              left: `${15 + i * 15}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}
            animate={{ y: [-20, 20], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-xl px-6 py-5 v2-panel"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <div className="text-center sm:text-right">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Estado atual</p>
              <p className="text-white/50">Prompts isolados e retrabalho</p>
            </div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" style={{ color: CORAL.primary }} />
            </motion.div>

            <div className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-wider mb-1 font-bold" style={{ color: CORAL.primary }}>
                Estado de elite
              </p>
              <p className="text-white font-bold">Sistema operável e escalável</p>
            </div>
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white mb-6 leading-tight">
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${CORAL.primary}, ${CORAL.light}, ${CORAL.primary})`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 5s ease-in-out infinite',
              }}
            >
              A decisão técnica
            </span>
            {' '}é simples:
            <br />
            <span className="text-white">liderar com IA ou continuar apagando incêndios.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-8">
            Seu próximo projeto pode nascer com previsibilidade, qualidade e padrão de engenharia desde a primeira task.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handlePricingClick}
            className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-oswald font-bold uppercase tracking-wider text-base sm:text-lg text-white transition-all duration-300 relative overflow-hidden group"
            whileHover={{
              y: -2,
              boxShadow: `0 24px 60px ${CORAL.glow}`
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: `linear-gradient(135deg, ${CORAL.primary}, ${CORAL.dark})`,
              boxShadow: `0 18px 45px ${CORAL.glow}`
            }}
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
                backgroundSize: '200% 200%',
              }}
              animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>QUERO OPERAR EM PRODUÇÃO</span>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>

          {/* Subtext */}
          <div className="mt-6 space-y-1">
            <p className="text-white/50 text-sm">
              Acesso total • implementação aplicada • <span style={{ color: TERMINAL.green }}>garantia de satisfação</span>
            </p>
            <p className="text-sm" style={{ color: CORAL.light }}>
              Investimento atual: R$ 1.397 ou 12x de R$ 119,63
            </p>
          </div>
        </motion.div>

        {/* Final Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 pt-6 border-t border-white/10"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" style={{ color: CORAL.primary }} />
              <span className="text-white/40 text-xs uppercase tracking-wider">A diferença</span>
            </div>
            <p className="text-xl sm:text-2xl font-oswald text-white">
              <span className="text-white/30 line-through">Vibe coding</span>
              {' → '}
              <span
                className="bg-clip-text text-transparent font-bold"
                style={{ backgroundImage: `linear-gradient(90deg, ${CORAL.primary}, ${CORAL.light})` }}
              >
                AI-Native Workflow
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

FinalCTASectionV2.displayName = 'FinalCTASectionV2'

export default FinalCTASectionV2
