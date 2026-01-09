import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Database,
  BarChart3,
  Code2,
  CheckCircle,
  AlertCircle,
  Terminal,
  GitBranch
} from 'lucide-react'

const targetAudiences = [
  {
    title: 'Data Engineers',
    description: 'Que querem dominar GenAI em pipelines de produção',
    icon: Database,
    fit: 'perfect'
  },
  {
    title: 'Analytics Engineers',
    description: 'Que buscam evoluir para AI-powered analytics',
    icon: BarChart3,
    fit: 'perfect'
  },
  {
    title: 'Software Engineers',
    description: 'Migrando para Data/AI com fundamentos sólidos',
    icon: Code2,
    fit: 'good'
  }
]

const prerequisites = [
  {
    requirement: 'SQL e Python básicos',
    description: 'Conhecimento fundamental de queries e scripting',
    icon: Code2,
    level: 'required'
  },
  {
    requirement: 'Git',
    description: 'Versionamento básico de código',
    icon: GitBranch,
    level: 'required'
  },
  {
    requirement: 'Assinatura do Claude Code',
    description: 'Necessário para acompanhar as aulas práticas',
    icon: Terminal,
    level: 'required'
  }
]

const AudienceSection = () => {
  return (
    <section id="audience" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0a0a 0%, #0a0a0f 50%, #0a0a0a 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 500px 250px at 30% 30%, rgba(251, 146, 60, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 70% 70%, rgba(245, 158, 11, 0.04) 0%, transparent 50%)
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
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Users className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">Para Quem É</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            Este Bootcamp é{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #f97316 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Para Você?
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Profissionais de dados e engenharia que querem dominar GenAI em produção.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Target Audiences */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Público-Alvo
            </h3>

            <div className="space-y-4">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className={`
                    relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-5
                    border transition-all duration-300
                    ${audience.fit === 'perfect'
                      ? 'border-green-500/30 hover:border-green-500/50'
                      : 'border-white/10 hover:border-orange-500/30'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                      ${audience.fit === 'perfect'
                        ? 'bg-green-500/20'
                        : 'bg-orange-500/20'
                      }
                    `}>
                      <audience.icon className={`w-6 h-6 ${audience.fit === 'perfect' ? 'text-green-400' : 'text-orange-400'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-white">{audience.title}</h4>
                        {audience.fit === 'perfect' && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Fit Perfeito</span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm">{audience.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Prerequisites */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-orange-400" />
              Pré-requisitos
            </h3>

            <div className="space-y-4">
              {prerequisites.map((prereq, index) => (
                <motion.div
                  key={prereq.requirement}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-5 border border-orange-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <prereq.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-white">{prereq.requirement}</h4>
                        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">Obrigatório</span>
                      </div>
                      <p className="text-white/60 text-sm">{prereq.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl"
            >
              <p className="text-white/70 text-sm">
                <span className="text-orange-400 font-semibold">💡 Dica:</span> Se você já trabalha com dados e tem familiaridade com Python, você está pronto para o bootcamp!
              </p>
            </motion.div>
          </motion.div>
        </div>
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

export default AudienceSection
