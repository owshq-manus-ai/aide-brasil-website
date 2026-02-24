import React, { memo } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  BadgeCheck
} from 'lucide-react'
import { CORAL, TERMINAL, WHATSAPP } from '../theme'

const PRIMARY_OFFER = {
  name: 'Acesso Completo',
  subtitle: 'Implementação guiada para Data + Analytics Engineers',
  price: '1.997',
  installment: '12x R$ 206,54',
  highlights: [
    'Acesso completo ao bootcamp',
    'Playbook AgentSpec + SDD para produção',
    '8 entregas técnicas aplicáveis no trabalho',
    'Atendimento comercial consultivo no WhatsApp'
  ]
}

const DELIVERABLES = [
  { text: 'Repositório production-ready', value: 'Setup rápido para onboarding' },
  { text: 'Pipeline GenAI em produção', value: 'Invoice → BigQuery → Dashboard' },
  { text: 'Infra GCP via Terraform', value: 'Provisionamento reproduzível' },
  { text: 'CI/CD com GitHub Actions', value: 'Pipeline com quality gates' },
  { text: 'Observabilidade com Langfuse', value: 'Custo, latência, qualidade' },
  { text: 'DataOps com CrewAI Agents', value: 'Operação assistida por agentes' },
  { text: 'Arquitetura Multi-Cloud', value: 'Portabilidade por adapter pattern' },
  { text: 'Projeto para portfólio', value: 'Prova técnica para entrevistas' }
]

const DeliverableItem = memo(({ item }) => (
  <div className="flex items-start gap-2.5 rounded-lg p-2.5" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.10)' }}>
    <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
    <div>
      <p className="text-white font-medium text-xs sm:text-[13px] leading-snug">{item.text}</p>
      <p className="text-xs mt-0.5 leading-snug" style={{ color: CORAL.light }}>{item.value}</p>
    </div>
  </div>
))
DeliverableItem.displayName = 'DeliverableItem'

const PricingSection = memo(({ variant = 'default' }) => {
  const deliverables = DELIVERABLES
  const whatsAppUrl = WHATSAPP.buildUrl(
    `Olá! Quero conversar sobre o ${PRIMARY_OFFER.name} do Bootcamp Zero ao Prod Claude Code.`
  )

  return (
    <section id="pricing" className="relative py-16 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 850px 430px at 50% 38%, rgba(224,122,95,0.14) 0%, transparent 60%),
              radial-gradient(ellipse 600px 320px at 80% 82%, rgba(224,122,95,0.10) 0%, transparent 60%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] hidden sm:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224,122,95,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224,122,95,0.25) 1px, transparent 1px)
            `,
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5"
            style={{ backgroundColor: `${CORAL.primary}15`, border: `1px solid ${CORAL.primary}35` }}
          >
            <ShieldCheck className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              Investimento
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Entrada direta no
            {' '}
            <span style={{ color: CORAL.primary }}>bootcamp completo</span>
          </h2>

          <p className="text-base sm:text-lg text-white/68 max-w-3xl mx-auto leading-relaxed">
            Sem escassez artificial. Um plano claro para você implementar AgentSpec + SDD e elevar sua entrega técnica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-5 sm:p-8 mb-8"
          style={{
            background: 'linear-gradient(155deg, rgba(224,122,95,0.2) 0%, rgba(13,17,23,0.95) 55%)',
            border: `1px solid ${CORAL.primary}55`,
            boxShadow: '0 0 40px rgba(224,122,95,0.16)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 760px 280px at 50% 100%, rgba(224,122,95,0.14) 0%, transparent 70%)',
            }}
          />

          <div className="relative grid gap-6 lg:gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-white">Acesso único</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-oswald font-bold text-white mb-1">{PRIMARY_OFFER.name}</h3>
              <p className="text-sm text-white/70 mb-4">{PRIMARY_OFFER.subtitle}</p>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-lg" style={{ color: CORAL.primary }}>R$</span>
                <span className="text-4xl sm:text-5xl font-oswald font-black text-white">{PRIMARY_OFFER.price}</span>
              </div>
              <p className="text-sm" style={{ color: CORAL.light }}>{PRIMARY_OFFER.installment}</p>
            </div>

            <div className="lg:col-span-7 w-full lg:max-w-[620px] lg:justify-self-end">
              <div className="space-y-1.5">
                {PRIMARY_OFFER.highlights.map((feature) => (
                  <div
                    key={feature}
                    className="w-fit flex items-center gap-2.5 rounded-full px-4 py-2 min-h-[44px]"
                    style={{ backgroundColor: 'rgba(10,20,38,0.72)', border: '1px solid rgba(255,255,255,0.18)' }}
                  >
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span className="text-[15px] text-white/88 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 w-full flex lg:justify-start">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-[22px] px-7 py-3.5 min-h-[56px] font-oswald font-bold uppercase tracking-wider text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:ring-white/50"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)',
                    boxShadow: '0 0 34px rgba(34,197,94,0.42)',
                  }}
                  data-variant={variant}
                >
                  <MessageCircle className="w-4 h-4" />
                  FALAR COM TIME COMERCIAL
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-xl p-5 sm:p-6"
          style={{
            background: 'linear-gradient(155deg, rgba(13,17,23,0.98) 0%, rgba(13,17,23,0.78) 100%)',
            border: `1px solid ${CORAL.primary}30`,
          }}
        >
          <div className="mb-5 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.14em] text-white/60 mb-2">Pacote Técnico</p>
            <h3 className="text-2xl sm:text-3xl font-oswald font-bold text-white leading-tight">
              8 Entregas Concretas
              <br />
              <span style={{ color: CORAL.primary }}>Integradas em um fluxo único de produção</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {deliverables.map((item) => (
              <DeliverableItem key={item.text} item={item} />
            ))}
          </div>

          <div
            className="rounded-lg px-4 py-4 text-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            <p className="text-sm text-white/70 mb-2">Se você montasse isso separadamente:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-white/75 mb-2">
              <span>Cloud/Data ~R$ 500</span>
              <span className="text-white/25">+</span>
              <span>Terraform/CI-CD ~R$ 400</span>
              <span className="text-white/25">+</span>
              <span>GenAI/Agents ~R$ 600</span>
              <span className="text-white/25">=</span>
              <span className="text-red-400 line-through font-bold">R$ 1.500+</span>
            </div>
            <p className="text-sm" style={{ color: TERMINAL.green }}>
              Aqui você leva tudo integrado com padrão técnico consistente.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
})

PricingSection.displayName = 'PricingSection'

export default PricingSection
