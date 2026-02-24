import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, Terminal, ShieldCheck, Sparkles } from 'lucide-react'
import { CORAL, WHATSAPP, sharedKeyframes } from '../../theme'

const WHATSAPP_URL = WHATSAPP.buildUrl('Olá! Quero conversar sobre o Bootcamp Zero ao Prod Claude Code.')

const FinalCTASectionV2 = memo(() => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 1000px 500px at 50% 50%, ${CORAL.primary}18 0%, transparent 60%),
              radial-gradient(ellipse 700px 350px at 20% 80%, ${CORAL.primary}12 0%, transparent 60%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-9"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 rounded-xl px-5 py-4"
            style={{
              background: 'linear-gradient(135deg, rgba(13,17,23,0.9) 0%, rgba(13,17,23,0.72) 100%)',
              border: '1px solid rgba(48,54,61,0.8)',
            }}
          >
            <div className="text-center sm:text-right">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Hoje</p>
              <p className="text-white/70">Execução manual, sem previsibilidade</p>
            </div>

            <ArrowRight className="w-5 h-5" style={{ color: CORAL.primary }} />

            <div className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-wider mb-1 font-semibold" style={{ color: CORAL.primary }}>
                Depois do Bootcamp
              </p>
              <p className="text-white font-semibold">Fluxo com AgentSpec, qualidade e measurement</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white mb-6 leading-tight">
            Pare de improvisar o futuro técnico.
            <br />
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${CORAL.primary}, ${CORAL.light}, ${CORAL.primary})`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 5s ease-in-out infinite',
              }}
            >
              Comece a operar com padrão de produção.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            O próximo passo é simples: conversar com o comercial, validar seu momento e receber o caminho certo para sua entrada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-oswald font-bold uppercase tracking-wider text-base sm:text-lg text-white transition-all duration-300 relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:ring-white/50"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              boxShadow: '0 0 45px rgba(37, 211, 102, 0.35)',
            }}
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Falar com time comercial</span>
          </a>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
              <span className="text-white/75">Atendimento consultivo</span>
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: CORAL.light }} />
              <span className="text-white/75">Plano alinhado ao seu cenário</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 pt-6 border-t border-white/10"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" style={{ color: CORAL.primary }} />
              <span className="text-white/50 text-xs uppercase tracking-wider">Mindset</span>
            </div>
            <p className="text-xl sm:text-2xl font-oswald text-white">
              <span className="text-white/35 line-through">Vibe coding</span>
              {' → '}
              <span
                className="bg-clip-text text-transparent font-bold"
                style={{ backgroundImage: `linear-gradient(90deg, ${CORAL.primary}, ${CORAL.light})` }}
              >
                Engenharia AI-Native
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      <style>{sharedKeyframes}</style>
    </section>
  )
})

FinalCTASectionV2.displayName = 'FinalCTASectionV2'

export default FinalCTASectionV2
