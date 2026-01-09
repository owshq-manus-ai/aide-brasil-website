import React from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  Bot,
  Cloud,
  BarChart3,
  Settings,
  AlertTriangle,
  CheckCircle,
  Trophy,
  Zap
} from 'lucide-react'

const differentiators = [
  {
    title: 'Começa pelo Problema',
    description: 'Não pela ferramenta. Você enfrenta um caso de negócio real desde o primeiro dia — invoice intelligence com extração de dados de notas fiscais reais.',
    icon: Target,
    highlight: 'invoice intelligence'
  },
  {
    title: 'Claude Code como Engenheiro',
    description: 'IA não é autocomplete. Claude Code é seu par de programação que entende arquitetura, escreve código limpo e segue as melhores práticas do projeto.',
    icon: Bot,
    highlight: 'par de programação'
  },
  {
    title: 'Multi-Cloud Ready',
    description: 'GCP na prática, mas com arquitetura 100% portável. Os conceitos e padrões aplicam para AWS, Azure ou qualquer provider cloud.',
    icon: Cloud,
    highlight: '100% portável'
  },
  {
    title: 'LLMOps Completo',
    description: 'Vai além de prompt engineering. Implementamos observabilidade com Langfuse, testes automatizados, monitoramento de drift e custos.',
    icon: BarChart3,
    highlight: 'observabilidade com Langfuse'
  },
  {
    title: 'DataOps com Agents',
    description: 'Fecha o ciclo de automação com CrewAI Agents. Operações de dados rodando autonomamente, com supervisão e alertas inteligentes.',
    icon: Settings,
    highlight: 'CrewAI Agents'
  },
  {
    title: 'Portfolio de Produção',
    description: 'Ao final, você tem um sistema completo rodando — não um tutorial. Um projeto real para mostrar em entrevistas e no LinkedIn.',
    icon: Trophy,
    highlight: 'sistema completo rodando'
  }
]

const DifferentiatorSection = () => {
  return (
    <section id="differentiator" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0a0a 0%, #0f0a0a 50%, #0a0a0a 100%)`,
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
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">Por que isso não é mais um curso</span>
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
              Diferente
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Chega de cursos que ficam na teoria. Este bootcamp foi desenhado por quem{' '}
            <span className="text-orange-400 font-semibold">constrói sistemas em produção</span> —
            para quem quer fazer o mesmo.
          </p>
        </motion.div>

        {/* Differentiators Grid - Same style as AudienceSection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.highlight ? (
                      <>
                        {item.description.split(item.highlight)[0]}
                        <span className="text-green-400 font-semibold">{item.highlight}</span>
                        {item.description.split(item.highlight)[1]}
                      </>
                    ) : item.description}
                  </p>
                </div>
              </div>
            </motion.div>
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
          <div className="inline-block bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl px-8 py-6">
            <p className="text-2xl font-oswald text-white mb-2">
              Não é curso de prompt.{' '}
              <span className="text-orange-400">Não é demo.</span>
            </p>
            <p className="text-xl text-white/80">
              É <span className="text-orange-400 font-bold">engenharia aplicada</span> com IA.
            </p>
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

export default DifferentiatorSection
