import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Layers, Database } from 'lucide-react'

// Shared styles
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Terraform SVG Icon component - memoized
const TerraformIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M8.283 2v6.662l5.717 3.306v-6.66zM14.57 5.308v6.66l5.714-3.306V2zM2 5.308v6.66l5.715 3.307V8.614zM8.283 15.342L14 18.65V12l-5.717-3.306z"/>
  </svg>
))
TerraformIcon.displayName = 'TerraformIcon'

// Static data - defined outside component
const STACK_CATEGORIES = [
  {
    category: 'Cloud',
    description: 'Onde seu sistema roda',
    image: '/images/logos/google-cloud-logo.png',
    items: [
      { name: 'GCS', description: 'Recebe arquivos' },
      { name: 'Cloud Run', description: 'Processa dados' },
      { name: 'BigQuery', description: 'Armazena tudo' }
    ],
    color: 'gcp'
  },
  {
    category: 'GenAI',
    description: 'Extração inteligente',
    image: '/images/logos/google-gemini-icon.webp',
    items: [
      { name: 'Gemini', description: 'Extrai dados' },
      { name: 'Langfuse', description: 'Monitora custo' }
    ],
    color: 'gemini'
  },
  {
    category: 'Analytics',
    description: 'Visualize resultados',
    image: '/images/logos/hex-icon.png',
    items: [
      { name: 'Hex', description: 'Dashboards live' }
    ],
    color: 'hex',
    largeIcon: true
  },
  {
    category: 'CI/CD',
    description: 'Deploy automático',
    image: '/images/logos/github-icon.png',
    items: [
      { name: 'GitHub Actions', description: 'Push →Produção' }
    ],
    color: 'github',
    largeIcon: true
  },
  {
    category: 'DataOps',
    description: 'Agentes trabalhando',
    image: '/images/logos/crewai-icon.png',
    items: [
      { name: 'CrewAI', description: 'Opera sozinho' }
    ],
    color: 'crewai'
  },
  {
    category: 'Infra',
    description: 'Crie e destrua ambientes',
    isTerraform: true,
    items: [
      { name: 'Terraform', description: '1 comando' },
      { name: 'Terragrunt', description: 'Sem repetição' }
    ],
    color: 'terraform'
  }
]

const COLOR_CLASSES = {
  gcp: {
    bg: 'bg-[#4285f4]/10',
    border: 'border-[#4285f4]/30',
    text: 'text-[#4285f4]',
    glow: 'hover:shadow-[#4285f4]/20',
    iconBg: '#4285f4'
  },
  gemini: {
    bg: 'bg-[#8e44ef]/10',
    border: 'border-[#8e44ef]/30',
    text: 'text-[#8e44ef]',
    glow: 'hover:shadow-[#8e44ef]/20',
    iconBg: '#8e44ef'
  },
  hex: {
    bg: 'bg-[#ff6b6b]/10',
    border: 'border-[#ff6b6b]/30',
    text: 'text-[#ff6b6b]',
    glow: 'hover:shadow-[#ff6b6b]/20',
    iconBg: '#ff6b6b'
  },
  github: {
    bg: 'bg-white/10',
    border: 'border-white/30',
    text: 'text-white',
    glow: 'hover:shadow-white/20',
    iconBg: '#24292e'
  },
  crewai: {
    bg: 'bg-[#ec4899]/10',
    border: 'border-[#ec4899]/30',
    text: 'text-[#ec4899]',
    glow: 'hover:shadow-[#ec4899]/20',
    iconBg: '#ec4899'
  },
  terraform: {
    bg: 'bg-[#7b42bc]/10',
    border: 'border-[#7b42bc]/30',
    text: 'text-[#7b42bc]',
    glow: 'hover:shadow-[#7b42bc]/20',
    iconBg: '#7b42bc'
  }
}

// Stack Card component - memoized
const StackCard = memo(({ category, index }) => {
  const colors = COLOR_CLASSES[category.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`
        relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-2xl p-6
        border ${colors.border} transition-all duration-300 hover:shadow-lg ${colors.glow}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${colors.iconBg}20` }}
        >
          {category.isTerraform ? (
            <div style={{ color: colors.iconBg }}>
              <TerraformIcon />
            </div>
          ) : (
            <img
              src={category.image}
              alt={category.category}
              className={`${category.largeIcon ? 'w-7 h-7' : 'w-6 h-6'} object-contain`}
              loading="lazy"
            />
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{category.category}</h3>
          <p className="text-white/50 text-sm">{category.description}</p>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {category.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2"
          >
            <span className="text-white font-medium">{item.name}</span>
            <span className={`text-sm ${colors.text}`}>{item.description}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
})
StackCard.displayName = 'StackCard'

const StackSection = memo(() => {
  const categories = useMemo(() => STACK_CATEGORIES, [])

  return (
    <section id="stack" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 600px 300px at 80% 20%, rgba(224, 122, 95, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 500px 250px at 20% 80%, rgba(224, 122, 95, 0.04) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224, 122, 95, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224, 122, 95, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
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
            <Layers className="w-4 h-4" style={{ color: '#E07A5F' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#E07A5F' }}>Seu Toolkit de Produção</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            A Stack que{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #E07A5F 0%, #F0A090 50%, #E07A5F 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Empresas Usam
            </span>
            {' '}— Não Tutoriais
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-2 sm:px-0">
            <span style={{ color: '#E07A5F' }} className="font-bold">Ferramentas de Fortune 500.</span>{' '}
            GCP na prática, mas com arquitetura portável —migre para AWS ou Azure quando quiser.
          </p>
        </motion.div>

        {/* Stack Grid - Mobile: single column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <StackCard key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Architecture Note - Mobile: stacked layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 rounded-xl px-4 sm:px-6 py-3 sm:py-4 mx-2 sm:mx-0" style={{ background: 'linear-gradient(90deg, rgba(224, 122, 95, 0.1) 0%, rgba(224, 122, 95, 0.05) 100%)', border: '1px solid rgba(224, 122, 95, 0.2)' }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <Database className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#E07A5F' }} />
              <span className="text-white/80 text-sm sm:text-base">
                <span style={{ color: '#E07A5F' }} className="font-bold">Adapter Pattern</span> —troque de cloud sem reescrever
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <span className="text-white/60 text-xs sm:text-sm">
              GCP {'→ '}<span className="text-blue-400">AWS</span> ou <span className="text-cyan-400">Azure</span>
            </span>
          </div>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

StackSection.displayName = 'StackSection'

export default StackSection
