import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Cloud,
  BarChart3,
  Settings,
  Trophy,
  ArrowRight,
  X,
  Check,
  AlertTriangle
} from 'lucide-react'
import { V2_COLORS, V2_SURFACES } from './theme'

const CORAL = V2_COLORS.coral
const TERMINAL = V2_COLORS.terminal
const NEUTRAL = V2_COLORS.neutral

const DIFFERENTIATORS = [
  {
    before: 'Prompt solto',
    after: 'Spec + critérios de aceite',
    icon: ArrowRight,
  },
  {
    before: 'Dataset toy',
    after: 'Pipeline invoice-intelligence',
    icon: Bot,
  },
  {
    before: 'Sem observabilidade',
    after: 'Langfuse com custo/latência',
    icon: Cloud,
  },
  {
    before: '1 cloud apenas',
    after: 'Adapter multi-cloud',
    icon: BarChart3,
  },
  {
    before: 'Você executa tudo',
    after: 'Agentes com runbooks',
    icon: Settings,
  },
  {
    before: 'Certificado genérico',
    after: 'Repo pronto para entrevistas',
    icon: Trophy,
  }
]

const DifferentiatorCard = memo(({ item, index }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full rounded-xl p-4 transition-all duration-300 hover:scale-[1.01] v2-card-soft"
        style={{
          border: `1px solid ${NEUTRAL.border}`,
        }}
      >
        {/* Before (crossed out) */}
        <div className="flex items-center gap-2 mb-3 opacity-60">
          <X className="w-4 h-4" style={{ color: TERMINAL.red }} />
          <span className="text-white/50 text-sm line-through">{item.before}</span>
        </div>

        {/* After (highlighted) */}
        <div className="flex items-start gap-2">
          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: TERMINAL.green }} />
          <span className="text-white font-medium text-sm">{item.after}</span>
        </div>

        {/* Icon */}
        <div
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity"
          style={{ backgroundColor: `${CORAL.primary}20` }}
        >
          <Icon className="w-4 h-4" style={{ color: CORAL.primary }} />
        </div>
      </div>
    </motion.div>
  )
})
DifferentiatorCard.displayName = 'DifferentiatorCard'

const DifferentiatorSectionV2 = memo(() => {
  const differentiators = useMemo(() => DIFFERENTIATORS, [])

  return (
    <section id="differentiator" className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 520px 260px at 25% 20%, ${CORAL.subtle} 0%, transparent 55%),
              radial-gradient(ellipse 420px 220px at 70% 75%, rgba(180, 140, 255, 0.12) 0%, transparent 55%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: `${CORAL.primary}15`, border: `1px solid ${CORAL.primary}30` }}
          >
            <AlertTriangle className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              O Que Muda o Jogo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Não é Mais Um Curso.
            {' '}
            <span style={{ color: CORAL.primary }}>É Virada de Nível.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Cada bloco foi pensado para converter conhecimento em ativo técnico que você usa em produção.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {differentiators.map((item, index) => (
            <DifferentiatorCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="inline-block rounded-xl px-6 py-4"
            style={{
              background: V2_SURFACES.panel,
              border: `1px solid ${NEUTRAL.borderStrong}`,
            }}
          >
            <p className="text-lg sm:text-xl font-oswald text-white">
              <span className="text-white/50">Outros vendem</span>{' '}
              <span className="text-red-400 line-through">efeito wow</span>.
              {' '}Aqui você constrói{' '}
              <span style={{ color: CORAL.primary }} className="font-bold">sistemas reais</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

DifferentiatorSectionV2.displayName = 'DifferentiatorSectionV2'

export default DifferentiatorSectionV2
