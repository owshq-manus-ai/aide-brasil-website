import React, { useState, useEffect, memo, useCallback, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  CheckCircle,
  Sparkles,
  Timer,
  Shield,
  Award,
  Zap,
  AlertCircle,
  Phone,
  Mail,
  User,
  X,
  Lock,
  Flame,
  TrendingUp
} from 'lucide-react'
import { webhookEndpoints } from '../../../config/webhook-endpoints'

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

// EXACTLY 8 deliverables
const DELIVERABLES = [
  { text: 'Repositório GitHub completo', value: 'Clone e rode em 5 minutos' },
  { text: 'Pipeline ETL funcionando', value: 'API → Transformação → Output' },
  { text: 'Dashboard de visualização', value: 'Gráficos prontos para apresentar' },
  { text: 'Suite de testes pytest', value: 'Coverage > 80%' },
  { text: 'Documentação automática', value: 'Docstrings e README gerados' },
  { text: 'CI/CD configurado', value: 'GitHub Actions pronto' },
  { text: 'Deploy em cloud', value: 'AWS Lambda ou GCP Cloud Run' },
  { text: 'Projeto portfólio', value: 'Mostre em entrevistas' }
]

// 3 Pricing tiers
const PRICING_TIERS = [
  {
    id: 'lote1',
    name: 'Early Birds',
    subtitle: 'Quem chegou primeiro',
    price: '897',
    originalPrice: null,
    status: 'current',
    highlight: false,
    icon: Sparkles,
    color: 'theme'
  },
  {
    id: 'lote2',
    name: 'Lote Decisão',
    subtitle: 'Última chance neste valor',
    price: '1.197',
    originalPrice: '1.397',
    status: 'upcoming',
    highlight: true,
    icon: Flame,
    color: 'theme'
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

// Countdown timer labels
const COUNTDOWN_LABELS = [
  { key: 'days', label: 'd' },
  { key: 'hours', label: 'h' },
  { key: 'minutes', label: 'm' },
  { key: 'seconds', label: 's' }
]

// Brazilian phone number formatting
const formatPhoneNumber = (value) => {
  const phoneNumber = value.replace(/\D/g, '')
  if (phoneNumber.length <= 2) {
    return phoneNumber
  } else if (phoneNumber.length <= 7) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
  } else if (phoneNumber.length <= 11) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`
}

// Deliverable Item component - memoized
const DeliverableItem = memo(({ item }) => (
  <div className="flex items-start gap-3 bg-white/[0.02] rounded-lg p-3 border border-white/5 transition-colors" style={{ '--hover-border': `${THEME.primary}30` }}>
    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
    <div>
      <span className="text-white font-medium text-sm block">{item.text}</span>
      <span className="text-xs" style={{ color: `${THEME.secondary}aa` }}>{item.value}</span>
    </div>
  </div>
))
DeliverableItem.displayName = 'DeliverableItem'

// Pricing Tier Card component - memoized
const PricingTierCard = memo(({ tier, index, onOpenModal }) => {
  const Icon = tier.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative ${tier.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
    >
      <div
        className={`
          relative h-full rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-300
          ${tier.status === 'sold_out'
            ? 'bg-white/[0.02] border-white/10 opacity-60'
            : tier.highlight
              ? 'shadow-lg'
              : 'bg-white/[0.03] border-white/10'
          }
        `}
        style={
          tier.highlight
            ? {
                background: `linear-gradient(135deg, ${THEME.primary}20 0%, ${THEME.secondary}15 100%)`,
                borderColor: `${THEME.primary}60`,
                boxShadow: `0 10px 40px ${THEME.primary}15`
              }
            : tier.status === 'current'
              ? { borderColor: `${THEME.primary}40` }
              : undefined
        }
      >
        {/* Badge for current tier */}
        {tier.highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 shadow-lg"
              style={{ background: `linear-gradient(90deg, ${THEME.primary}, ${THEME.secondary})` }}
            >
              <Flame className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-bold uppercase">Melhor Oferta</span>
            </div>
          </div>
        )}

        {/* Tier Header */}
        <div className="text-center mb-6 pt-2">
          <div
            className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
            style={
              tier.status === 'sold_out'
                ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                : tier.highlight
                  ? { background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.secondary})` }
                  : { backgroundColor: `${THEME.primary}25` }
            }
          >
            <Icon className={`w-6 h-6 ${tier.status === 'sold_out' ? 'text-white/40' : 'text-white'}`} />
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
            <span
              className={`text-lg ${tier.status === 'sold_out' ? 'text-white/30' : ''}`}
              style={tier.status !== 'sold_out' ? { color: THEME.secondary } : undefined}
            >
              R$
            </span>
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
                backgroundImage: `linear-gradient(180deg, #ffffff 0%, ${THEME.secondary} 50%, ${THEME.primary} 100%)`,
              } : undefined}
            >
              {tier.price}
            </span>
          </div>
          {tier.highlight && (
            <p className="text-sm mt-2" style={{ color: THEME.secondary }}>ou 12x de R$ 119,63</p>
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
            <>
              <motion.button
                onClick={onOpenModal}
                className="w-full py-3 sm:py-3 min-h-[44px] rounded-xl font-oswald font-bold uppercase tracking-wider text-white transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
                style={{ background: `linear-gradient(90deg, ${THEME.primary}, ${THEME.secondary})` }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${THEME.primary}80` }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">GARANTIR MINHA VAGA</span>
                  <span className="sm:hidden">GARANTIR VAGA</span>
                </span>
              </motion.button>
              <div className="mt-3 flex items-center justify-center gap-1.5 sm:gap-2 bg-green-500/10 rounded-full px-2 sm:px-3 py-1.5">
                <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 text-green-400" />
                <span className="text-[10px] sm:text-xs font-medium text-green-400">100 vagas disponíveis</span>
              </div>
            </>
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
  )
})
PricingTierCard.displayName = 'PricingTierCard'

// Registration Modal component - memoized
const RegistrationModal = memo(({ isOpen, onClose, formData, setFormData, onSubmit, isSubmitting }) => {
  const handleInputChange = useCallback((field) => (e) => {
    const value = field === 'phone' ? formatPhoneNumber(e.target.value) : e.target.value
    setFormData(prev => ({ ...prev, [field]: value }))
  }, [setFormData])

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border max-h-[90vh] overflow-y-auto"
        style={{ borderColor: `${THEME.primary}40` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-8 sm:h-8 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5 sm:w-4 sm:h-4" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2 text-center">Última Etapa</h3>
        <p className="text-white/60 text-center mb-6">
          Preencha para garantir o preço do{' '}
          <span style={{ color: THEME.secondary }} className="font-semibold">Early Birds</span>
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-white/60 text-sm mb-2 block">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange('name')}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none transition-colors"
                style={{ '--focus-border': `${THEME.primary}80` }}
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
                autoComplete="email"
                inputMode="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none transition-colors"
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
                autoComplete="tel"
                inputMode="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none transition-colors"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 min-h-[48px] rounded-xl font-bold uppercase tracking-wider text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            style={{ background: `linear-gradient(90deg, ${THEME.primary}, ${THEME.secondary})` }}
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
    </motion.div>,
    document.body
  )
})
RegistrationModal.displayName = 'RegistrationModal'

const ChatGPTCodexPricingSection = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Countdown timer
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const intervalRef = useRef(null)

  useEffect(() => {
    const targetDate = new Date('2026-02-07T00:00:00-03:00')

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
    intervalRef.current = setInterval(updateCountdown, 1000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleOpenModal = useCallback(() => setIsModalOpen(true), [])
  const handleCloseModal = useCallback(() => setIsModalOpen(false), [])

  // Eduzz payment gateway URL (placeholder - needs to be configured)
  const EDUZZ_CHECKOUT_URL = 'https://sun.eduzz.com/XXXXXXXX'

  const buildEduzzUrl = useCallback((data) => {
    const phoneDigits = data.phone.replace(/\D/g, '')
    const ddd = phoneDigits.slice(0, 2)
    const celularNum = phoneDigits.slice(2)

    const params = new URLSearchParams({
      utm_source: 'landingpage',
      utm_medium: 'direta',
      name: data.name,
      email: data.email,
      email_confirmation: data.email,
      ddi: '55',
      ddd: ddd,
      celular: celularNum,
      phone: phoneDigits,
      cellphone: phoneDigits
    })

    return `${EDUZZ_CHECKOUT_URL}?${params.toString()}`
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const webhookConfig = webhookEndpoints.bootcamps['zero-prod-chatgpt-codex']

      const submissionData = {
        ...formData,
        ...webhookConfig?.metadata,
        source: 'bootcamp-zero-prod-chatgpt-codex',
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        bootcamp_dates: '11-14 Fevereiro 2026',
        bootcamp_time: '20:00 BRT'
      }

      if (webhookConfig?.url) {
        fetch(webhookConfig.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData)
        }).catch(err => console.error('Webhook error:', err))
      }

      const eduzzUrl = buildEduzzUrl(formData)
      setFormData({ name: '', email: '', phone: '' })
      setIsModalOpen(false)
      window.location.href = eduzzUrl

    } catch (error) {
      console.error('Error submitting form:', error)
      const eduzzUrl = buildEduzzUrl(formData)
      window.location.href = eduzzUrl
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, buildEduzzUrl])

  const deliverables = useMemo(() => DELIVERABLES, [])
  const pricingTiers = useMemo(() => PRICING_TIERS, [])

  return (
    <section id="pricing" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 800px 400px at 50% 50%, ${THEME.primary}12 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(${THEME.primary}15 1px, transparent 1px),
              linear-gradient(90deg, ${THEME.primary}15 1px, transparent 1px)`,
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
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium uppercase tracking-wider">Hora da Decisão</span>
          </motion.div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Continuar{' '}
            <span className="text-white/40 line-through">Pedindo Código</span>
            {' '}ou{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.secondary} 0%, ${THEME.light} 50%, ${THEME.secondary} 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Automatizar com Codex?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-2 sm:px-0">
            <span style={{ color: THEME.secondary }} className="font-bold">12 horas de hands-on</span> que mudam como você trabalha para sempre — ou seu dinheiro de volta em 7 dias.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12 -mx-4 sm:mx-0 px-4 sm:px-0"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto"
            style={{ background: `${THEME.primary}15`, border: `1px solid ${THEME.primary}40` }}
          >
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: THEME.secondary }} />
              <span style={{ color: THEME.secondary }} className="font-medium text-sm sm:text-base">Lote Decisão em:</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {COUNTDOWN_LABELS.map((item, i) => (
                <div key={item.key} className="flex items-center">
                  <div
                    className="rounded-md sm:rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 min-w-[40px] sm:min-w-[48px] text-center"
                    style={{ backgroundColor: `${THEME.primary}25` }}
                  >
                    <span className="text-white font-bold text-base sm:text-xl font-mono">
                      {String(countdown[item.key]).padStart(2, '0')}
                    </span>
                    <span style={{ color: THEME.secondary }} className="text-[10px] sm:text-xs ml-0.5 sm:ml-1">{item.label}</span>
                  </div>
                  {i < 3 && <span style={{ color: THEME.secondary }} className="mx-0.5 sm:mx-1 text-sm">:</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3-Tier Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {pricingTiers.map((tier, index) => (
            <PricingTierCard
              key={tier.id}
              tier={tier}
              index={index}
              onOpenModal={handleOpenModal}
            />
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10 transition-colors">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2" style={{ color: THEME.secondary }} />
              <p className="text-white font-bold text-sm sm:text-base">11-14 Fev</p>
              <p className="text-white/50 text-xs sm:text-sm">4 dias</p>
            </div>
            <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10 transition-colors">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2" style={{ color: THEME.secondary }} />
              <p className="text-white font-bold text-sm sm:text-base">12h código</p>
              <p className="text-white/50 text-xs sm:text-sm">Hands-on</p>
            </div>
            <div className="bg-green-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto mb-1.5 sm:mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">7 dias</p>
              <p className="text-green-400/70 text-xs sm:text-sm">Garantia</p>
            </div>
            <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10 transition-colors">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1.5 sm:mb-2" style={{ color: THEME.secondary }} />
              <p className="text-white font-bold text-sm sm:text-base">Certificado</p>
              <p className="text-white/50 text-xs sm:text-sm">+ Repo</p>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <p className="text-sm uppercase tracking-wider mb-4 text-center font-bold" style={{ color: THEME.secondary }}>8 Entregas Concretas — Não Promessas</p>
            <div className="grid md:grid-cols-2 gap-3">
              {deliverables.map((item, i) => (
                <DeliverableItem key={i} item={item} />
              ))}
            </div>
          </div>

          {/* Value Anchor */}
          <div className="mt-6 sm:mt-8 space-y-4">
            <div className="text-center">
              <p className="text-white/50 text-xs sm:text-sm mb-2">Se você montasse isso sozinho:</p>
              <div className="hidden sm:inline-flex items-center gap-3 text-white/40 text-sm">
                <span>Cursos Python: ~R$ 300</span>
                <span className="text-white/20">+</span>
                <span>Data Stack: ~R$ 400</span>
                <span className="text-white/20">+</span>
                <span>Cloud Deploy: ~R$ 300</span>
                <span className="text-white/20">=</span>
                <span className="text-red-400 line-through font-bold">R$ 1.000+</span>
              </div>
              <div className="sm:hidden grid grid-cols-3 gap-2 text-white/40 text-xs mb-2">
                <span>Python ~R$300</span>
                <span>Data ~R$400</span>
                <span>Cloud ~R$300</span>
              </div>
              <div className="sm:hidden text-red-400 line-through font-bold text-sm mb-1">= R$ 1.000+</div>
              <p className="text-green-400 text-xs sm:text-sm mt-2 font-medium px-2 sm:px-0">Aqui você leva tudo integrado por menos — e funcionando em 4 dias</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />

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

      <style>{sharedStyles}</style>
    </section>
  )
})

ChatGPTCodexPricingSection.displayName = 'ChatGPTCodexPricingSection'

export default ChatGPTCodexPricingSection
