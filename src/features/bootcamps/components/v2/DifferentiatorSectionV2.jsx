import React, { memo } from 'react'
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
  AlertTriangle,
  ShieldCheck,
  Gauge,
  GitBranch
} from 'lucide-react'
import { CORAL, TERMINAL } from '../../theme'

const DIFFERENTIATORS = [
  {
    before: 'Datasets de exemplo',
    after: 'Invoice intelligence real',
    icon: ArrowRight,
  },
  {
    before: 'ChatGPT como assistente',
    after: 'Claude Code como par de programação',
    icon: Bot,
  },
  {
    before: 'Amarrado em um provider',
    after: 'Arquitetura 100% portável',
    icon: Cloud,
  },
  {
    before: 'Param no prompt',
    after: 'Observabilidade com Langfuse',
    icon: BarChart3,
  },
  {
    before: 'Você executa tudo',
    after: 'CrewAI Agents operando sozinhos',
    icon: Settings,
  },
  {
    before: 'PDF no LinkedIn',
    after: 'Sistema completo rodando',
    icon: Trophy,
  }
]

const PRODUCTION_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Qualidade por padrão',
    detail: 'Checkpoints com testes, segurança e revisão técnica'
  },
  {
    icon: Gauge,
    title: 'Measurement contínuo',
    detail: 'Custo, latência e qualidade monitorados na operação'
  },
  {
    icon: GitBranch,
    title: 'Escala de time',
    detail: 'Fluxo reproduzível para manter ritmo de entrega'
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
        className="relative h-full rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
          border: '1px solid rgba(48, 54, 61, 0.8)',
        }}
      >
        {/* Before (crossed out) */}
        <div className="flex items-center gap-2 mb-3 opacity-60">
          <X className="w-4 h-4" style={{ color: TERMINAL.red }} />
          <span className="text-white/70 text-sm line-through">{item.before}</span>
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
  const differentiators = DIFFERENTIATORS
  const pillars = PRODUCTION_PILLARS

  return (
    <section id="differentiator" className="relative py-20 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 500px 250px at 30% 30%, ${CORAL.primary}08 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 70% 70%, ${CORAL.primary}05 0%, transparent 50%)
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
              Diferencial de Produção
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Diferencial de Produção de Verdade.
            <br />
            É um{' '}
            <span style={{ color: CORAL.primary }}>playbook técnico para entrega confiável</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Aqui você aprende a operar uma rotina completa de engenharia:
            {' '}contexto versionado, agentes com papel definido, quality gates e visibilidade de operação.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl p-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4" style={{ color: CORAL.primary }} />
                  <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{pillar.detail}</p>
              </motion.div>
            )
          })}
        </div>

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
            className="inline-block rounded-xl px-6 py-4 max-w-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
              border: `1px solid ${CORAL.primary}20`,
            }}
          >
            <p className="text-lg sm:text-xl font-oswald text-white">
              <span className="text-white/70">Outros ensinam</span>{' '}
              <span className="text-red-400 line-through">ferramentas</span>.
              {' '}Aqui você aprende a{' '}
              <span style={{ color: CORAL.primary }} className="font-bold">entregar sistemas auditáveis</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

DifferentiatorSectionV2.displayName = 'DifferentiatorSectionV2'

export default DifferentiatorSectionV2
