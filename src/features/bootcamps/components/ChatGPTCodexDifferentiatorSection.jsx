import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Cloud,
  Play,
  GitBranch,
  Upload,
  Trophy,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

// Gray theme colors - ChatGPT Codex
const THEME = {
  primary: '#6b7280',
  secondary: '#9ca3af',
  accent: '#374151',
  light: '#d1d5db',
}

// Shared styles
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// EXACTLY 6 differentiators with "Outros cursos: X. Aqui: Y" pattern
const DIFFERENTIATORS = [
  {
    title: 'Cloud, Não Local',
    description: 'Outros cursos: você configura ambiente. Aqui: Codex roda na nuvem — zero setup, zero conflito de dependências.',
    icon: Cloud,
    highlight: 'zero setup'
  },
  {
    title: 'Execução, Não Sugestão',
    description: 'Outros cursos: IA sugere código. Aqui: Codex executa, testa e entrega resultado — você vê funcionando.',
    icon: Play,
    highlight: 'executa, testa e entrega'
  },
  {
    title: 'Autonomia Real',
    description: 'Outros cursos: você copia e cola. Aqui: Codex resolve problemas sozinho — debug, retry e adaptação automáticos.',
    icon: Bot,
    highlight: 'resolve problemas sozinho'
  },
  {
    title: 'Pipeline Completo',
    description: 'Outros cursos: funções isoladas. Aqui: sistema end-to-end — da entrada de dados ao dashboard final.',
    icon: GitBranch,
    highlight: 'end-to-end'
  },
  {
    title: 'Production Export',
    description: 'Outros cursos: código fica no chat. Aqui: exporta para GitHub, deploya em cloud — código real em produção.',
    icon: Upload,
    highlight: 'código real em produção'
  },
  {
    title: 'Portfólio Concreto',
    description: 'Outros cursos: certificado PDF. Aqui: projeto funcionando no GitHub — mostre o que você construiu.',
    icon: Trophy,
    highlight: 'projeto funcionando'
  }
]

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
      className="relative group bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-6 transition-all duration-300"
      style={{
        border: `1px solid ${THEME.primary}30`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
          style={{
            backgroundColor: `${THEME.primary}25`,
            border: `1px solid ${THEME.primary}40`
          }}
        >
          <Icon className="w-6 h-6" style={{ color: THEME.secondary }} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-lg font-bold text-white">{item.title}</h4>
            <CheckCircle className="w-4 h-4" style={{ color: THEME.secondary }} />
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            {parts[0]}
            {item.highlight && (
              <span style={{ color: THEME.secondary }} className="font-semibold">{item.highlight}</span>
            )}
            {parts[1]}
          </p>
        </div>
      </div>
    </motion.div>
  )
})
DifferentiatorCard.displayName = 'DifferentiatorCard'

const ChatGPTCodexDifferentiatorSection = memo(() => {
  const differentiators = useMemo(() => DIFFERENTIATORS, [])

  return (
    <section id="differentiator" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0a0a 0%, #0c0b0c 50%, #0a0a0a 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 500px 250px at 30% 30%, ${THEME.primary}08 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 70% 70%, ${THEME.primary}06 0%, transparent 50%)
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
            style={{ backgroundColor: `${THEME.primary}15`, border: `1px solid ${THEME.primary}40` }}
          >
            <AlertTriangle className="w-4 h-4" style={{ color: THEME.secondary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: THEME.secondary }}>O Que Faz a Diferença</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            6 Razões Para{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.secondary} 0%, ${THEME.light} 50%, ${THEME.secondary} 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Nunca Mais
            </span>
            {' '}Fazer Curso de Prompt
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-2 sm:px-0">
            <span style={{ color: THEME.secondary }} className="font-bold">Tutoriais te dão teoria.</span>{' '}
            Aqui você sai com um <span className="text-white font-semibold">sistema funcionando em produção</span> —e a metodologia para replicar em qualquer projeto.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {differentiators.map((item, index) => (
            <DifferentiatorCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Statement - "Outros ensinam..." - MUST BE INCLUDED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div
            className="inline-block rounded-xl sm:rounded-2xl px-4 sm:px-8 py-4 sm:py-6 mx-2 sm:mx-0"
            style={{ background: `linear-gradient(90deg, ${THEME.primary}15 0%, ${THEME.primary}08 100%)`, border: `1px solid ${THEME.primary}30` }}
          >
            <p className="text-lg sm:text-2xl font-oswald text-white mb-1 sm:mb-2">
              <span className="text-white/60">Outros ensinam</span>{' '}
              <span className="text-red-400 line-through">prompts</span>.
            </p>
            <p className="text-base sm:text-xl text-white/80">
              Nós ensinamos a <span style={{ color: THEME.light }} className="font-bold">operar agentes autônomos</span> com eles.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

ChatGPTCodexDifferentiatorSection.displayName = 'ChatGPTCodexDifferentiatorSection'

export default ChatGPTCodexDifferentiatorSection
