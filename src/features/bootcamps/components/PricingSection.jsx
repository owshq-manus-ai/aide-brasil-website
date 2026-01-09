import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  ChevronRight,
  Timer,
  Shield,
  Award,
  Zap,
  Gift,
  AlertCircle,
  Phone,
  Mail,
  User,
  X,
  Lock,
  Flame,
  TrendingUp
} from 'lucide-react'

const deliverables = [
  { text: 'Repositório GitHub production-ready', value: 'Clone e rode em 5 minutos' },
  { text: 'Pipeline GenAI completo em produção', value: 'Invoice → BigQuery → Dashboard' },
  { text: 'Infra GCP via Terraform', value: 'Destrua e recrie em 1 comando' },
  { text: 'CI/CD com GitHub Actions', value: 'Push = Deploy automático' },
  { text: 'Observabilidade com Langfuse', value: 'Custo, latência, qualidade' },
  { text: 'DataOps com CrewAI Agents', value: 'Eles operam, você supervisiona' },
  { text: 'Arquitetura Multi-Cloud', value: 'GCP hoje, AWS/Azure amanhã' },
  { text: 'Projeto pronto para portfólio', value: 'Mostre em entrevistas' }
]

const pricingTiers = [
  {
    id: 'lote1',
    name: 'Early Birds',
    subtitle: 'Quem chegou primeiro',
    price: '897',
    originalPrice: null,
    status: 'sold_out',
    highlight: false,
    icon: Lock,
    color: 'gray'
  },
  {
    id: 'lote2',
    name: 'Lote Decisão',
    subtitle: 'Última chance neste valor',
    price: '1.197',
    originalPrice: '1.997',
    status: 'current',
    highlight: true,
    icon: Flame,
    color: 'orange',
    savings: '800'
  },
  {
    id: 'lote3',
    name: 'Lote Final',
    subtitle: 'Preço cheio',
    price: '1.397',
    originalPrice: null,
    status: 'upcoming',
    highlight: false,
    icon: TrendingUp,
    color: 'amber'
  }
]

const PricingSection = () => {
  const [spotsLeft] = useState(47)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Countdown timer - Fixed to 2026
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-01-28T00:00:00-03:00')

    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate - now

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setShowSuccess(true)
    setIsModalOpen(false)

    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <section id="pricing" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 50% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium uppercase tracking-wider">Hora da Decisão</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Continuar{' '}
            <span className="text-white/40 line-through">Copiando Código</span>
            {' '}ou{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #f97316 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Liderar com IA?
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            <span className="text-orange-400 font-bold">12 horas de hands-on</span> que mudam como você trabalha para sempre — ou seu dinheiro de volta em 7 dias.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-4 bg-red-500/10 border border-red-500/30 rounded-2xl px-6 py-4">
            <Timer className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Preço sobe em:</span>
            <div className="flex items-center gap-2">
              {[
                { value: countdown.days, label: 'd' },
                { value: countdown.hours, label: 'h' },
                { value: countdown.minutes, label: 'm' },
                { value: countdown.seconds, label: 's' }
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-red-500/20 rounded-lg px-3 py-2 min-w-[48px] text-center">
                    <span className="text-white font-bold text-xl font-mono">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-red-400 text-xs ml-1">{item.label}</span>
                  </div>
                  {i < 3 && <span className="text-red-400 mx-1">:</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3-Tier Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${tier.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <div
                className={`
                  relative h-full rounded-2xl p-6 border transition-all duration-300
                  ${tier.status === 'sold_out'
                    ? 'bg-white/[0.02] border-white/10 opacity-60'
                    : tier.highlight
                      ? 'bg-gradient-to-br from-orange-500/15 to-amber-500/10 border-orange-500/40 shadow-lg shadow-orange-500/10'
                      : 'bg-white/[0.03] border-white/10 hover:border-orange-500/30'
                  }
                `}
              >
                {/* Badge for current tier */}
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full px-3 py-1 shadow-lg">
                      <Flame className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-bold uppercase">Melhor Oferta</span>
                    </div>
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-6 pt-2">
                  <div className={`
                    w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center
                    ${tier.status === 'sold_out'
                      ? 'bg-white/10'
                      : tier.highlight
                        ? 'bg-gradient-to-br from-orange-500 to-amber-500'
                        : 'bg-amber-500/20'
                    }
                  `}>
                    <tier.icon className={`w-6 h-6 ${tier.status === 'sold_out' ? 'text-white/40' : 'text-white'}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${tier.status === 'sold_out' ? 'text-white/40' : 'text-white'}`}>
                    {tier.name}
                  </h3>
                  {tier.subtitle && (
                    <p className={`text-sm mt-1 ${tier.status === 'sold_out' ? 'text-white/30' : 'text-white/50'}`}>
                      {tier.subtitle}
                    </p>
                  )}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  {tier.originalPrice && (
                    <div className="text-white/40 text-sm line-through mb-1">De R$ {tier.originalPrice}</div>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-lg ${tier.status === 'sold_out' ? 'text-white/30' : 'text-orange-400'}`}>R$</span>
                    <span
                      className={`
                        text-5xl font-oswald font-black
                        ${tier.status === 'sold_out'
                          ? 'text-white/30 line-through'
                          : tier.highlight
                            ? 'bg-clip-text text-transparent'
                            : 'text-white'
                        }
                      `}
                      style={tier.highlight ? {
                        backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #fbbf24 50%, #f97316 100%)',
                      } : undefined}
                    >
                      {tier.price}
                    </span>
                  </div>
                  {tier.highlight && (
                    <>
                      <p className="text-orange-300 text-sm mt-2">ou 12x de R$ 119,63</p>
                      {tier.savings && (
                        <div className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full px-3 py-1 mt-2">
                          <Gift className="w-3 h-3" />
                          Economia de R$ {tier.savings}
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Status indicator */}
                <div className="text-center">
                  {tier.status === 'sold_out' && (
                    <span className="inline-flex items-center gap-1.5 text-white/40 text-sm">
                      <Lock className="w-4 h-4" />
                      Esgotado
                    </span>
                  )}
                  {tier.status === 'current' && (
                    <motion.button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-3 rounded-xl font-oswald font-bold uppercase tracking-wider
                               bg-gradient-to-r from-orange-500 to-amber-500 text-white transition-all duration-300
                               relative overflow-hidden"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(251, 146, 60, 0.5)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        QUERO LIDERAR COM IA
                      </span>
                    </motion.button>
                  )}
                  {tier.status === 'upcoming' && (
                    <span className="inline-flex items-center gap-1.5 text-amber-400/60 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      Em breve
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deliverables Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-2xl p-8 border border-white/10"
        >
          {/* Format & Dates */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-orange-500/30 transition-colors">
              <Calendar className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <p className="text-white font-bold">28-31 Janeiro</p>
              <p className="text-white/50 text-sm">4 dias intensivos</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-orange-500/30 transition-colors">
              <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <p className="text-white font-bold">12h de código</p>
              <p className="text-white/50 text-sm">Zero teoria solta</p>
            </div>
            <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
              <Shield className="w-5 h-5 text-green-400 mx-auto mb-2" />
              <p className="text-white font-bold">7 dias garantia</p>
              <p className="text-green-400/70 text-sm">Risco zero</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-orange-500/30 transition-colors">
              <Award className="w-5 h-5 text-orange-400 mx-auto mb-2" />
              <p className="text-white font-bold">Certificado</p>
              <p className="text-white/50 text-sm">+ Repo completo</p>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <p className="text-orange-400 text-sm uppercase tracking-wider mb-4 text-center font-bold">8 Entregas Concretas — Não Promessas</p>
            <div className="grid md:grid-cols-2 gap-3">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/[0.02] rounded-lg p-3 border border-white/5 hover:border-orange-500/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium text-sm block">{item.text}</span>
                    <span className="text-orange-400/70 text-xs">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Anchor + Spots Left */}
          <div className="mt-8 space-y-4">
            {/* Value Comparison */}
            <div className="text-center">
              <p className="text-white/50 text-sm mb-2">Se você montasse isso sozinho:</p>
              <div className="inline-flex items-center gap-3 text-white/40 text-sm">
                <span>Cursos GCP: ~R$ 500</span>
                <span className="text-white/20">+</span>
                <span>Terraform: ~R$ 400</span>
                <span className="text-white/20">+</span>
                <span>GenAI: ~R$ 600</span>
                <span className="text-white/20">=</span>
                <span className="text-red-400 line-through font-bold">R$ 1.500+</span>
              </div>
              <p className="text-green-400 text-sm mt-2 font-medium">Aqui você leva tudo integrado por menos — e funcionando em 4 dias</p>
            </div>

            {/* Spots Left */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-red-400 bg-red-500/10 rounded-full px-4 py-2">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{spotsLeft} vagas restantes — depois sobe para R$ 1.397</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-orange-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2 text-center">Última Etapa</h3>
            <p className="text-white/60 text-center mb-6">Preencha para garantir o preço do <span className="text-orange-400 font-semibold">Lote Decisão</span></p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white/60 text-sm mb-2 block">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-sm mb-2 block">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-sm mb-2 block">WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold uppercase tracking-wider
                         bg-gradient-to-r from-orange-500 to-amber-500 text-white
                         disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Processando...' : 'CONFIRMAR MINHA VAGA'}
              </motion.button>
              <p className="text-white/40 text-xs text-center mt-3">
                Garantia de 7 dias — se não gostar, devolvemos 100%
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg z-50 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Inscrição confirmada! Verifique seu e-mail.</span>
        </motion.div>
      )}

      <style>{`
        @keyframes subtle-metallic {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}

export default PricingSection
