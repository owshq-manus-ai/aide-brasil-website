import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Layers, Database } from 'lucide-react'

const CORAL = {
  primary: '#E07A5F',
  light: '#F0A090',
}

const STACK_CATEGORIES = [
  {
    category: 'Cloud',
    items: ['GCS', 'Cloud Run', 'BigQuery'],
    image: '/images/logos/google-cloud-logo.webp',
    color: '#4285f4'
  },
  {
    category: 'GenAI',
    items: ['Gemini', 'Langfuse'],
    image: '/images/logos/google-gemini-icon.webp',
    color: '#8e44ef'
  },
  {
    category: 'Analytics',
    items: ['Hex Dashboards'],
    image: '/images/logos/hex-icon.webp',
    color: '#ff6b6b'
  },
  {
    category: 'CI/CD',
    items: ['GitHub Actions'],
    image: '/images/logos/github-icon.webp',
    color: '#ffffff'
  },
  {
    category: 'DataOps',
    items: ['CrewAI Agents'],
    image: '/images/logos/crewai-icon.webp',
    color: '#ec4899'
  },
  {
    category: 'Infra',
    items: ['Terraform', 'Terragrunt'],
    isTerraform: true,
    color: '#7b42bc'
  }
]

const TerraformIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M8.283 2v6.662l5.717 3.306v-6.66zM14.57 5.308v6.66l5.714-3.306V2zM2 5.308v6.66l5.715 3.307V8.614zM8.283 15.342L14 18.65V12l-5.717-3.306z"/>
  </svg>
))
TerraformIcon.displayName = 'TerraformIcon'

const StackCard = memo(({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    viewport={{ once: true }}
    whileHover={{ y: -3 }}
    className="group"
  >
    <div
      className="relative h-full rounded-xl p-4 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
        border: `1px solid ${category.color}30`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg"
        style={{ backgroundColor: category.color }}
      />

      {/* Header */}
      <div className="relative flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${category.color}20` }}
        >
          {category.isTerraform ? (
            <div style={{ color: category.color }}>
              <TerraformIcon />
            </div>
          ) : (
            <img
              src={category.image}
              alt={category.category}
              className="w-6 h-6 object-contain"
              loading="lazy"
            />
          )}
        </div>
        <h3 className="text-lg font-bold text-white">{category.category}</h3>
      </div>

      {/* Items */}
      <div className="relative flex flex-wrap gap-2">
        {category.items.map((item, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded text-sm font-medium"
            style={{ backgroundColor: `${category.color}15`, color: category.color }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
))
StackCard.displayName = 'StackCard'

const StackSectionV2 = memo(() => {
  const categories = useMemo(() => STACK_CATEGORIES, [])

  return (
    <section id="stack" className="relative py-20 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224, 122, 95, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224, 122, 95, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
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
            <Layers className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              Production Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            A Stack que{' '}
            <span style={{ color: CORAL.primary }}>Empresas Usam</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
            GCP na prática, mas com arquitetura portável — migre para AWS ou Azure quando quiser
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {categories.map((category, index) => (
            <StackCard key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Adapter Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-3 rounded-xl px-5 py-3"
            style={{
              background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
              border: `1px solid ${CORAL.primary}20`,
            }}
          >
            <Database className="w-5 h-5" style={{ color: CORAL.primary }} />
            <span className="text-white/80 text-sm">
              <span style={{ color: CORAL.primary }} className="font-bold">Adapter Pattern</span>
              {' '}— troque de cloud sem reescrever
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

StackSectionV2.displayName = 'StackSectionV2'

export default StackSectionV2
