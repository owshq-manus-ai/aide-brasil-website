import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ChevronRight,
  Rocket,
  Award,
  TrendingUp,
  Clock
} from 'lucide-react'

const FinalCTASection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background with intense gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 1000px 500px at 50% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 600px 300px at 30% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 70% 30%, rgba(234, 88, 12, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { icon: Clock, value: '12h', label: 'Hands-on' },
            { icon: Rocket, value: '8', label: 'Passos' },
            { icon: Award, value: '100%', label: 'Prático' },
            { icon: TrendingUp, value: '2026', label: 'Ready' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-oswald font-bold text-white">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 leading-tight">
            <span className="block mb-2">
              Construa{' '}
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #f97316 100%)`,
                  backgroundSize: '200% 100%',
                  animation: 'subtle-metallic 6s ease-in-out infinite',
                }}
              >
                GenAI Real
              </span>
            </span>
            <span className="block text-3xl md:text-4xl text-white/80">
              e se posicione como{' '}
              <span className="text-orange-400 font-bold">AI Data Engineer</span>
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Pare de assistir tutoriais. Comece a construir sistemas que vão para produção.
            <span className="block mt-2 text-orange-400 font-semibold">
              Sua carreira agradece.
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
          <motion.button
            onClick={() => scrollToSection('pricing')}
            className="inline-flex items-center gap-3 px-12 py-6 rounded-2xl font-oswald font-bold uppercase tracking-wider text-xl
                     bg-gradient-to-r from-orange-500 to-amber-500 text-white transition-all duration-300
                     relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(251, 146, 60, 0.6), 0 0 100px rgba(245, 158, 11, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: '0 0 40px rgba(251, 146, 60, 0.5), 0 0 80px rgba(245, 158, 11, 0.3)'
            }}
          >
            {/* Shine effect */}
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

            <Sparkles className="w-6 h-6" />
            <span>QUERO GARANTIR MINHA VAGA</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm mt-6"
          >
            28-31 Janeiro 2026 • 12h Hands-on • R$ 1.197
          </motion.p>
        </motion.div>

        {/* Final tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/50 text-lg font-oswald">
            Não é curso de prompt. Não é demo.{' '}
            <span className="text-orange-400">É engenharia aplicada com IA.</span>
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes subtle-metallic {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}

export default FinalCTASection
