import React from 'react'
import { motion } from 'framer-motion'
import {
  Cloud,
  Brain,
  BarChart3,
  GitBranch,
  Bot,
  Server,
  Layers,
  Database,
  Eye,
  Code2
} from 'lucide-react'

const stackCategories = [
  {
    category: 'Cloud',
    description: 'Google Cloud Platform',
    icon: Cloud,
    items: [
      { name: 'GCS', description: 'Landing Zone' },
      { name: 'Cloud Run', description: 'Execution' },
      { name: 'BigQuery', description: 'Warehouse' }
    ],
    color: 'blue'
  },
  {
    category: 'GenAI',
    description: 'LLM & Observability',
    icon: Brain,
    items: [
      { name: 'Gemini', description: 'Vertex AI' },
      { name: 'Langfuse', description: 'LLMOps' }
    ],
    color: 'purple'
  },
  {
    category: 'Analytics',
    description: 'Data Exploration',
    icon: BarChart3,
    items: [
      { name: 'Hex', description: 'Dashboards' }
    ],
    color: 'pink'
  },
  {
    category: 'CI/CD',
    description: 'Automation Pipeline',
    icon: GitBranch,
    items: [
      { name: 'GitHub Actions', description: 'Workflows' }
    ],
    color: 'green'
  },
  {
    category: 'DataOps',
    description: 'Autonomous Operations',
    icon: Bot,
    items: [
      { name: 'CrewAI', description: 'Agents' }
    ],
    color: 'orange'
  },
  {
    category: 'Infra',
    description: 'Infrastructure as Code',
    icon: Server,
    items: [
      { name: 'Terraform', description: 'IaC' },
      { name: 'Terragrunt', description: 'DRY Config' }
    ],
    color: 'cyan'
  }
]

const colorClasses = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    glow: 'hover:shadow-blue-500/20'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    glow: 'hover:shadow-purple-500/20'
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    text: 'text-pink-400',
    glow: 'hover:shadow-pink-500/20'
  },
  green: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-400',
    glow: 'hover:shadow-green-500/20'
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    glow: 'hover:shadow-orange-500/20'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    glow: 'hover:shadow-cyan-500/20'
  }
}

const StackSection = () => {
  return (
    <section id="stack" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 600px 300px at 80% 20%, rgba(251, 146, 60, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 500px 250px at 20% 80%, rgba(245, 158, 11, 0.04) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)`,
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
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Layers className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">Stack Utilizada</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            Tecnologias de{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #f97316 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Produção
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Stack moderna e battle-tested usada por empresas Fortune 500.
            Multi-cloud por design, GCP na prática.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((category, index) => {
            const colors = colorClasses[category.color]
            const Icon = category.icon

            return (
              <motion.div
                key={category.category}
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
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
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
          })}
        </div>

        {/* Architecture Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl px-6 py-4">
            <Database className="w-5 h-5 text-orange-400" />
            <span className="text-white/80">
              Arquitetura <span className="text-orange-400 font-semibold">Adapter Pattern</span> — portável para AWS e Azure
            </span>
          </div>
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

export default StackSection
