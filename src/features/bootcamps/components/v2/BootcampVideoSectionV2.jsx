import React, { memo, useCallback, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Sparkles, ShieldCheck, Workflow, Bot, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { V2_COLORS, V2_SURFACES } from './theme'

const CORAL = V2_COLORS.coral
const TERMINAL = V2_COLORS.terminal
const NEUTRAL = V2_COLORS.neutral

const VSL_EMBED_URL = import.meta.env.VITE_CLAUDE_BOOTCAMP_VSL_EMBED_URL || 'https://www.youtube.com/embed/dQw4w9WgXcQ'

const POINTS = [
  { icon: Workflow, text: 'AgentSpec completo: contexto -> plano -> execução' },
  { icon: ShieldCheck, text: 'Qualidade local com guardrails e gates' },
  { icon: Bot, text: 'Fluxo operacional para agentes em produção' }
]

const InfoPill = memo(({ icon: Icon, text }) => (
  <div
    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs border"
    style={{
      backgroundColor: 'rgba(255,255,255,0.03)',
      borderColor: NEUTRAL.borderStrong,
      color: 'rgba(255,255,255,0.78)'
    }}
  >
    <Icon className="w-3.5 h-3.5" style={{ color: CORAL.primary }} />
    <span>{text}</span>
  </div>
))
InfoPill.displayName = 'InfoPill'

const BootcampVideoSectionV2 = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false)
  const points = useMemo(() => POINTS, [])

  const scrollToPricing = useCallback(() => {
    const element = document.getElementById('pricing')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section id="vsl" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 700px 340px at 20% 20%, ${CORAL.subtle} 0%, transparent 58%),
              radial-gradient(ellipse 560px 300px at 85% 70%, rgba(70, 199, 255, 0.12) 0%, transparent 60%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: `${CORAL.primary}18`, border: `1px solid ${CORAL.primary}40` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              VSL Estratégica
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-3">
            Veja o Método em Ação
          </h2>
          <p className="text-base sm:text-lg text-white/65 max-w-3xl mx-auto">
            A VSL mostra como um requisito vira arquitetura, tarefas e entrega de produção com AgentSpec + Claude Code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: V2_SURFACES.panel,
            border: `1px solid ${NEUTRAL.borderStrong}`,
            boxShadow: '0 30px 70px rgba(0,0,0,0.45)'
          }}
        >
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '34px 34px'
            }}
          />

          <div className="relative z-10 p-4 sm:p-5 border-b" style={{ borderColor: NEUTRAL.border }}>
            <div className="flex flex-wrap gap-2">
              {points.map((point) => (
                <InfoPill key={point.text} icon={point.icon} text={point.text} />
              ))}
            </div>
          </div>

          <div className="relative z-10 aspect-video bg-black/45">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.button
                  key="cover"
                  type="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full group"
                  aria-label="Assistir VSL"
                >
                  <img
                    src="/images/team/luan-moreno-4.png"
                    alt="Luan Moreno"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/40 to-[#ff7a5c]/25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ border: `1px solid ${CORAL.primary}70` }}
                        animate={{ scale: [1, 1.35], opacity: [0.55, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      />
                      <div
                        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(140deg, ${CORAL.primary}, ${CORAL.dark})`,
                          boxShadow: `0 0 36px ${CORAL.glow}`
                        }}
                      >
                        <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              ) : (
                <motion.div
                  key="player"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`${VSL_EMBED_URL}${VSL_EMBED_URL.includes('?') ? '&' : '?'}autoplay=1&rel=0`}
                    title="VSL Bootcamp Claude Code"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-3 right-3 w-11 h-11 rounded-full border flex items-center justify-center bg-black/50 text-white/80 hover:text-white"
                    style={{ borderColor: NEUTRAL.borderStrong }}
                    aria-label="Fechar vídeo"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button
            type="button"
            size="lg"
            onClick={scrollToPricing}
            className="rounded-xl font-oswald uppercase tracking-wider px-8 py-6 text-base"
            style={{
              background: `linear-gradient(140deg, ${CORAL.primary}, ${CORAL.dark})`,
              boxShadow: `0 18px 45px ${CORAL.glow}`
            }}
          >
            Quero Aplicar no Meu Projeto
            <ChevronRight className="w-5 h-5" />
          </Button>
          <p className="text-white/55 text-sm mt-3">
            Conteúdo gravado + implementação guiada + atualização contínua.
          </p>
        </motion.div>
      </div>
    </section>
  )
})

BootcampVideoSectionV2.displayName = 'BootcampVideoSectionV2'

export default BootcampVideoSectionV2
