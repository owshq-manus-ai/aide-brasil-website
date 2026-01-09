import React, { memo, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Cloud,
  BarChart3,
  Settings,
  AlertTriangle,
  CheckCircle,
  Trophy,
  ArrowRight
} from 'lucide-react'

// Shared styles
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Static data - defined outside component
const DIFFERENTIATORS = [
  {
    title: 'Problema Real, Não Demo',
    description: 'Outros cursos: datasets de exemplo. Aqui: invoice intelligence —extraindo dados de notas fiscais reais desde o dia 1.',
    icon: ArrowRight,
    highlight: 'invoice intelligence'
  },
  {
    title: 'Agente, Não Autocomplete',
    description: 'Outros cursos: ChatGPT como assistente. Aqui: Claude Code como seu par de programação —escreve, revisa e deploya código.',
    icon: Bot,
    highlight: 'par de programação'
  },
  {
    title: 'Multi-Cloud, Não Vendor Lock',
    description: 'Outros cursos: amarrados em um provider. Aqui: arquitetura 100% portável —GCP hoje, AWS ou Azure amanhã.',
    icon: Cloud,
    highlight: '100% portável'
  },
  {
    title: 'LLMOps, Não Só Prompt',
    description: 'Outros cursos: param no prompt. Aqui: observabilidade com Langfuse —custo, latência, qualidade e drift monitorados.',
    icon: BarChart3,
    highlight: 'observabilidade com Langfuse'
  },
  {
    title: 'Autonomia, Não Manual',
    description: 'Outros cursos: você executa tudo. Aqui: CrewAI Agents operando sozinhos —com supervisão e alertas inteligentes.',
    icon: Settings,
    highlight: 'CrewAI Agents'
  },
  {
    title: 'Produção, Não Certificado',
    description: 'Outros cursos: PDF no LinkedIn. Aqui: sistema completo rodando —projeto real para mostrar em entrevistas.',
    icon: Trophy,
    highlight: 'sistema completo rodando'
  }
]

// Card hover styles - using CSS classes instead of inline event handlers
const cardBaseStyle = {
  borderColor: 'rgba(224, 122, 95, 0.2)',
}

// Differentiator Card component - memoized
const DifferentiatorCard = memo(({ item, index }) => {
  const Icon = item.icon

  // Split description for highlighting
  const parts = item.highlight
    ? item.description.split(item.highlight)
    : [item.description, '']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-6 border border-[#E07A5F]/20 hover:border-[#E07A5F]/40 hover:shadow-lg hover:shadow-[#E07A5F]/10 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
          style={{
            backgroundColor: 'rgba(224, 122, 95, 0.2)',
            border: '1px solid rgba(224, 122, 95, 0.3)'
          }}
        >
          <Icon className="w-6 h-6" style={{ color: '#E07A5F' }} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-lg font-bold text-white">{item.title}</h4>
            <CheckCircle className="w-4 h-4" style={{ color: '#E07A5F' }} />
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            {parts[0]}
            {item.highlight && (
              <span style={{ color: '#E07A5F' }} className="font-semibold">{item.highlight}</span>
            )}
            {parts[1]}
          </p>
        </div>
      </div>
    </motion.div>
  )
})
DifferentiatorCard.displayName = 'DifferentiatorCard'

const DifferentiatorSection = memo(() => {
  const differentiators = useMemo(() => DIFFERENTIATORS, [])

  return (
    <section id="differentiator" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0a0a 0%, #0c0908 50%, #0a0a0a 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 500px 250px at 30% 30%, rgba(224, 122, 95, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 70% 70%, rgba(224, 122, 95, 0.04) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.3)' }}
          >
            <AlertTriangle className="w-4 h-4" style={{ color: '#E07A5F' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#E07A5F' }}>O Que Faz a Diferença</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            6 Razões Para{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #E07A5F 0%, #F0A090 50%, #E07A5F 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Nunca Mais
            </span>
            {' '}Fazer Curso de Prompt
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            <span style={{ color: '#E07A5F' }} className="font-bold">Tutoriais te dão teoria.</span>{' '}
            Aqui você sai com um <span className="text-white font-semibold">sistema funcionando em produção</span> —e a metodologia para replicar em qualquer projeto.
          </p>
        </motion.div>

        {/* Differentiators Grid - Same style as AudienceSection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <DifferentiatorCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-2xl px-8 py-6" style={{ background: 'linear-gradient(90deg, rgba(224, 122, 95, 0.1) 0%, rgba(224, 122, 95, 0.05) 100%)', border: '1px solid rgba(224, 122, 95, 0.2)' }}>
            <p className="text-2xl font-oswald text-white mb-2">
              <span className="text-white/60">Outros ensinam</span>{' '}
              <span className="text-red-400 line-through">ferramentas</span>.
            </p>
            <p className="text-xl text-white/80">
              Nós ensinamos a <span style={{ color: '#E07A5F' }} className="font-bold">construir e operar sistemas</span> com elas.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

DifferentiatorSection.displayName = 'DifferentiatorSection'

export default DifferentiatorSection
