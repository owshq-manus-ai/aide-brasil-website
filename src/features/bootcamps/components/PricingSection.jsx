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

// Shared styles
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Static data - defined outside component
const DELIVERABLES = [
  { text: 'Repositório GitHub production-ready', value: 'Clone e rode em 5 minutos' },
  { text: 'Pipeline GenAI completo em produção', value: 'Invoice →BigQuery →Dashboard' },
  { text: 'Infra GCP via Terraform', value: 'Destrua e recrie em 1 comando' },
  { text: 'CI/CD com GitHub Actions', value: 'Push = Deploy automático' },
  { text: 'Observabilidade com Langfuse', value: 'Custo, latência, qualidade' },
  { text: 'DataOps com CrewAI Agents', value: 'Eles operam, você supervisiona' },
  { text: 'Arquitetura Multi-Cloud', value: 'GCP hoje, AWS/Azure amanhã' },
  { text: 'Projeto pronto para portfólio', value: 'Mostre em entrevistas' }
]

const DELIVERY_LAYER_FLOW = [
  {
    title: 'Build Layer',
    detail: 'Repo, pipeline e infraestrutura como codigo.',
    color: '#46C7FF'
  },
  {
    title: 'Operate Layer',
    detail: 'Deploy, observabilidade e DataOps em rotina.',
    color: '#7EE787'
  },
  {
    title: 'Career Layer',
    detail: 'Projeto pronto para portfolio e entrevistas.',
    color: '#FFB199'
  }
]

const DELIVERY_BLUEPRINT = [
  { title: 'Repositório GitHub production-ready', value: 'Clone e rode em 5 minutos', layer: 'Build', color: '#46C7FF' },
  { title: 'Pipeline GenAI completo em produção', value: 'Invoice -> BigQuery -> Dashboard', layer: 'Build', color: '#46C7FF' },
  { title: 'Infra GCP via Terraform', value: 'Destrua e recrie em 1 comando', layer: 'Build', color: '#46C7FF' },
  { title: 'CI/CD com GitHub Actions', value: 'Push = Deploy automático', layer: 'Operate', color: '#7EE787' },
  { title: 'Observabilidade com Langfuse', value: 'Custo, latência e qualidade', layer: 'Operate', color: '#7EE787' },
  { title: 'DataOps com CrewAI Agents', value: 'Eles operam, você supervisiona', layer: 'Operate', color: '#7EE787' },
  { title: 'Arquitetura Multi-Cloud', value: 'GCP hoje, AWS/Azure amanhã', layer: 'Career', color: '#FFB199' },
  { title: 'Projeto pronto para portfólio', value: 'Mostre em entrevistas', layer: 'Career', color: '#FFB199' }
]

const PRICING_TIERS = [
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
    subtitle: 'Encerrado',
    price: '1.197',
    originalPrice: null,
    status: 'sold_out',
    highlight: false,
    icon: Lock,
    color: 'gray'
  },
  {
    id: 'lote3',
    name: 'Lote Final',
    subtitle: 'Últimas vagas',
    price: '1.397',
    originalPrice: null,
    status: 'current',
    highlight: true,
    icon: Flame,
    color: 'orange'
  }
]

// Countdown timer labels
const COUNTDOWN_LABELS = [
  { key: 'days', label: 'd' },
  { key: 'hours', label: 'h' },
  { key: 'minutes', label: 'm' },
  { key: 'seconds', label: 's' }
]

// Brazilian phone number formatting (same pattern as webinar pages)
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
  <div
    className="flex items-start gap-3 rounded-lg p-3 border transition-colors"
    style={{ background: 'var(--pricing-surface-soft)', borderColor: 'var(--pricing-border)' }}
  >
    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--pricing-success)' }} />
    <div>
      <span className="text-white font-medium text-sm block">{item.text}</span>
      <span className="text-xs" style={{ color: 'var(--pricing-primary-light)' }}>{item.value}</span>
    </div>
  </div>
))
DeliverableItem.displayName = 'DeliverableItem'

// Pricing Tier Card component - memoized
// Mobile: optimized padding and touch targets
// Mobile: natural order (Early Bird → Lote Decisão → Lote Final), no order manipulation
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
          ${tier.status === 'sold_out' ? 'opacity-60' : 'hover:border-white/20'}
        `}
        style={{
          background: tier.status === 'sold_out'
            ? 'var(--pricing-surface-soft)'
            : tier.highlight
              ? 'linear-gradient(135deg, var(--pricing-primary-glow) 0%, rgba(255,255,255,0.02) 100%)'
              : 'var(--pricing-surface)',
          borderColor: tier.highlight ? 'var(--pricing-primary)' : 'var(--pricing-border)',
          boxShadow: tier.highlight ? '0 16px 40px var(--pricing-primary-glow)' : undefined
        }}
      >
        {/* Badge for current tier */}
        {tier.highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 shadow-lg"
              style={{ background: 'linear-gradient(90deg, var(--pricing-primary), var(--pricing-primary-light))' }}
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
                  ? { background: 'linear-gradient(135deg, var(--pricing-primary), var(--pricing-primary-light))' }
                  : { backgroundColor: 'var(--pricing-primary-soft)' }
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
            <span className={`text-lg ${tier.status === 'sold_out' ? 'text-white/30' : ''}`} style={tier.status !== 'sold_out' ? { color: 'var(--pricing-primary)' } : undefined}>R$</span>
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
                backgroundImage: 'linear-gradient(180deg, #ffffff 0%, var(--pricing-primary-light) 50%, var(--pricing-primary) 100%)',
              } : undefined}
            >
              {tier.price}
            </span>
          </div>
          {tier.highlight && (
            <p className="text-sm mt-2" style={{ color: 'var(--pricing-primary-light)' }}>ou 12x de R$ 119,63</p>
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
              {/* CTA Button: min 44px touch target - WhatsApp link to sales team */}
              <motion.a
                href="https://wa.me/5531984241779?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Bootcamp%20Zero%20to%20Prod%20com%20Claude%20Code%20-%20Lote%20Final"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 sm:py-3 min-h-[44px] rounded-xl font-oswald font-bold uppercase tracking-wider text-white transition-all duration-300 relative overflow-hidden text-sm sm:text-base block text-center"
                style={{ background: 'linear-gradient(90deg, #25D366, #128C7E)' }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(37, 211, 102, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>FALE COM TIME COMERCIAL</span>
                </span>
              </motion.a>
              <div className="mt-3 flex items-center justify-center gap-1.5 sm:gap-2 text-amber-400 bg-amber-500/10 rounded-full px-2 sm:px-3 py-1.5">
                <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs font-medium">Últimas vagas disponíveis</span>
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
// Mobile: optimized for touch, proper input sizing to prevent iOS zoom
// Uses createPortal to render at body level for proper centering
const RegistrationModal = memo(({ isOpen, onClose, formData, setFormData, onSubmit, isSubmitting }) => {
  const handleInputChange = useCallback((field) => (e) => {
    const value = field === 'phone' ? formatPhoneNumber(e.target.value) : e.target.value
    setFormData(prev => ({ ...prev, [field]: value }))
  }, [setFormData])

  // Lock body scroll when modal is open
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

  // Use createPortal to render modal at body level, ensuring proper centering
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
        style={{ borderColor: 'rgba(224, 122, 95, 0.3)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button: min 44x44px touch target */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-8 sm:h-8 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5 sm:w-4 sm:h-4" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2 text-center">Última Etapa</h3>
        <p className="text-white/60 text-center mb-6">Preencha para garantir sua vaga no <span style={{ color: '#FF7A5C' }} className="font-semibold">Lote Final</span></p>

        {/* Form with mobile-optimized inputs (16px font prevents iOS zoom) */}
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
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF7A5C]/50"
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
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF7A5C]/50"
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
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF7A5C]/50"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          {/* Submit button: min 44px touch target */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 min-h-[48px] rounded-xl font-bold uppercase tracking-wider text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            style={{ background: 'linear-gradient(90deg, #FF7A5C, #FFB199)' }}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? 'Processando...' : 'CONFIRMAR MINHA VAGA'}
          </motion.button>
          <p className="text-white/40 text-xs text-center mt-3">
            Garantia de 7 dias —se não gostar, devolvemos 100%
          </p>
        </form>
      </motion.div>
    </motion.div>,
    document.body
  )
})
RegistrationModal.displayName = 'RegistrationModal'

const PricingSection = memo(({ variant = 'default' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Countdown timer - optimized with ref for interval
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const intervalRef = useRef(null)

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
    intervalRef.current = setInterval(updateCountdown, 1000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleOpenModal = useCallback(() => setIsModalOpen(true), [])
  const handleCloseModal = useCallback(() => setIsModalOpen(false), [])

  // Eduzz payment gateway URL
  const EDUZZ_CHECKOUT_URL = 'https://sun.eduzz.com/39YDP2YJ9O'

  // Build Eduzz redirect URL with pre-filled form data
  // Field mapping:
  // - Nome Completo (form) → name (Eduzz)
  // - E-mail (form) → email + email_confirmation (Eduzz)
  // - WhatsApp (form) → celular (Eduzz) - Portuguese field name
  const buildEduzzUrl = useCallback((data) => {
    // Extract phone digits only (remove formatting)
    const phoneDigits = data.phone.replace(/\D/g, '')
    // Split DDD (area code) and number for Eduzz format
    const ddd = phoneDigits.slice(0, 2)
    const celularNum = phoneDigits.slice(2)

    // Build URL with pre-filled parameters matching Eduzz fields
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
      // Get webhook configuration for Claude Code bootcamp
      const webhookConfig = webhookEndpoints.bootcamps['zero-prod-claude-code']

      // Prepare data with webhook metadata
      const submissionData = {
        ...formData,
        ...webhookConfig.metadata,
        source: 'bootcamp-zero-prod-claude-code',
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        bootcamp_dates: '28-31 Janeiro 2026',
        bootcamp_time: '20:00 BRT'
      }

      // Submit to webhook (fire and forget - don't block redirect)
      fetch(webhookConfig.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      }).catch(err => console.error('Webhook error:', err))

      // Build Eduzz URL with pre-filled data and redirect
      const eduzzUrl = buildEduzzUrl(formData)

      // Clear form and close modal
      setFormData({ name: '', email: '', phone: '' })
      setIsModalOpen(false)

      // Redirect to Eduzz payment gateway
      window.location.href = eduzzUrl

    } catch (error) {
      console.error('Error submitting form:', error)
      // Even on error, redirect to Eduzz (graceful degradation)
      const eduzzUrl = buildEduzzUrl(formData)
      window.location.href = eduzzUrl
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, buildEduzzUrl])

  const deliverables = useMemo(() => DELIVERABLES, [])
  const deliveryLayerFlow = useMemo(() => DELIVERY_LAYER_FLOW, [])
  const deliveryBlueprint = useMemo(() => DELIVERY_BLUEPRINT, [])
  const pricingTiers = useMemo(() => PRICING_TIERS, [])
  const pricingVars = useMemo(() => {
    if (variant === 'v2') {
      return {
        '--pricing-primary': 'var(--v2-primary)',
        '--pricing-primary-light': 'var(--v2-primary-light)',
        '--pricing-primary-soft': 'rgba(255, 122, 92, 0.18)',
        '--pricing-primary-glow': 'rgba(255, 122, 92, 0.16)',
        '--pricing-primary-glow-strong': 'rgba(255, 122, 92, 0.3)',
        '--pricing-border': 'var(--v2-border)',
        '--pricing-border-strong': 'var(--v2-border-strong)',
        '--pricing-surface': 'rgba(15, 18, 27, 0.92)',
        '--pricing-surface-soft': 'rgba(15, 18, 27, 0.8)',
        '--pricing-muted': 'var(--v2-muted)',
        '--pricing-danger': '#F97066',
        '--pricing-danger-soft': 'rgba(249, 112, 102, 0.12)',
        '--pricing-success': 'var(--v2-secondary)',
        '--pricing-success-soft': 'rgba(126, 231, 135, 0.14)',
        '--pricing-grid': 'rgba(255, 255, 255, 0.06)'
      }
    }
    return {
      '--pricing-primary': '#E07A5F',
      '--pricing-primary-light': '#F0A090',
      '--pricing-primary-soft': 'rgba(224, 122, 95, 0.2)',
      '--pricing-primary-glow': 'rgba(224, 122, 95, 0.12)',
      '--pricing-primary-glow-strong': 'rgba(224, 122, 95, 0.25)',
      '--pricing-border': 'rgba(255, 255, 255, 0.1)',
      '--pricing-border-strong': 'rgba(255, 255, 255, 0.2)',
      '--pricing-surface': 'rgba(255, 255, 255, 0.03)',
      '--pricing-surface-soft': 'rgba(255, 255, 255, 0.02)',
      '--pricing-muted': 'rgba(255, 255, 255, 0.6)',
      '--pricing-danger': '#F85149',
      '--pricing-danger-soft': 'rgba(248, 81, 73, 0.12)',
      '--pricing-success': '#4ADE80',
      '--pricing-success-soft': 'rgba(74, 222, 128, 0.15)',
      '--pricing-grid': 'rgba(224, 122, 95, 0.1)'
    }
  }, [variant])

  return (
    <section id="pricing" className="relative py-24 overflow-hidden" style={pricingVars}>
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 50% 45%, var(--pricing-primary-glow) 0%, transparent 55%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(var(--pricing-grid) 1px, transparent 1px),
              linear-gradient(90deg, var(--pricing-grid) 1px, transparent 1px)`,
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
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: 'var(--pricing-danger-soft)', border: '1px solid var(--pricing-danger)' }}
          >
            <Zap className="w-4 h-4" style={{ color: 'var(--pricing-danger)' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--pricing-danger)' }}>Hora da Decisão</span>
          </motion.div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Continuar{' '}
            <span className="text-white/40 line-through">Copiando Código</span>
            {' '}ou{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, var(--pricing-primary) 0%, var(--pricing-primary-light) 50%, var(--pricing-primary) 100%)',
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Operar em Produção?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-2 sm:px-0">
            <span style={{ color: 'var(--pricing-primary)' }} className="font-bold">12 horas de hands-on</span> para sair com pipeline, observabilidade e CI/CD funcionando.
          </p>
        </motion.div>

        {/* Countdown Timer - Mobile: scrollable if needed, smaller elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12 -mx-4 sm:mx-0 px-4 sm:px-0"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto"
            style={{ backgroundColor: 'var(--pricing-danger-soft)', border: '1px solid var(--pricing-danger)' }}
          >
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--pricing-danger)' }} />
              <span className="font-medium text-sm sm:text-base" style={{ color: 'var(--pricing-danger)' }}>Início do Bootcamp:</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {COUNTDOWN_LABELS.map((item, i) => (
                <div key={item.key} className="flex items-center">
                  <div
                    className="rounded-md sm:rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 min-w-[40px] sm:min-w-[48px] text-center"
                    style={{ backgroundColor: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <span className="text-white font-bold text-base sm:text-xl font-mono">
                      {String(countdown[item.key]).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs ml-0.5 sm:ml-1" style={{ color: 'var(--pricing-danger)' }}>{item.label}</span>
                  </div>
                  {i < 3 && <span className="mx-0.5 sm:mx-1 text-sm" style={{ color: 'var(--pricing-danger)' }}>:</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3-Tier Pricing Cards - Mobile: single column */}
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
          className="rounded-2xl p-8 border"
          style={{ background: 'var(--pricing-surface)', borderColor: 'var(--pricing-border)' }}
        >
          {/* Format & Dates - Mobile: 2x2 grid with smaller text */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div
              className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border transition-colors"
              style={{ background: 'var(--pricing-surface-soft)', borderColor: 'var(--pricing-border)' }}
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2" style={{ color: 'var(--pricing-primary)' }} />
              <p className="text-white font-bold text-sm sm:text-base">28-31 Jan</p>
              <p className="text-white/50 text-xs sm:text-sm">4 dias</p>
            </div>
            <div
              className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border transition-colors"
              style={{ background: 'var(--pricing-surface-soft)', borderColor: 'var(--pricing-border)' }}
            >
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2" style={{ color: 'var(--pricing-primary)' }} />
              <p className="text-white font-bold text-sm sm:text-base">12h código</p>
              <p className="text-white/50 text-xs sm:text-sm">Hands-on</p>
            </div>
            <div
              className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border"
              style={{ background: 'var(--pricing-success-soft)', borderColor: 'var(--pricing-success)' }}
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1.5 sm:mb-2" style={{ color: 'var(--pricing-success)' }} />
              <p className="text-white font-bold text-sm sm:text-base">7 dias</p>
              <p className="text-white/60 text-xs sm:text-sm">Garantia</p>
            </div>
            <div
              className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border transition-colors"
              style={{ background: 'var(--pricing-surface-soft)', borderColor: 'var(--pricing-border)' }}
            >
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1.5 sm:mb-2" style={{ color: 'var(--pricing-primary)' }} />
              <p className="text-white font-bold text-sm sm:text-base">Certificado</p>
              <p className="text-white/50 text-xs sm:text-sm">+ Repo</p>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <div
              className="relative rounded-2xl border px-4 sm:px-5 py-4 mb-4 overflow-hidden"
              style={{ borderColor: 'var(--pricing-border-strong)', background: 'linear-gradient(145deg, var(--pricing-primary-glow) 0%, rgba(255,255,255,0.02) 100%)' }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                  backgroundSize: '26px 26px'
                }}
              />
              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-2" style={{ color: 'var(--pricing-primary-light)' }}>
                  Build Artifacts
                </p>
                <h3 className="text-lg sm:text-xl font-oswald font-bold text-white leading-tight">
                  8 Entregas Concretas. <span style={{ color: 'var(--pricing-primary)' }}>Zero Promessa Vazia.</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/65 mt-1">
                  Sistemas, operacao e carreira no mesmo pacote de implementacao.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Code', 'GenAI', 'IaC', 'DevOps', 'LLMOps', 'Career'].map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 rounded-md border font-mono"
                      style={{ borderColor: 'var(--pricing-border-strong)', backgroundColor: 'rgba(255,255,255,0.03)', color: 'var(--pricing-primary-light)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {deliverables.map((item, i) => (
                <DeliverableItem key={i} item={item} />
              ))}
            </div>
          </div>

          {/* Value Explanation Box */}
          <div
            className="relative mt-6 sm:mt-8 rounded-2xl border p-5 sm:p-6 overflow-hidden"
            style={{
              borderColor: 'var(--pricing-border-strong)',
              background: 'linear-gradient(150deg, rgba(255,122,92,0.14) 0%, rgba(70,199,255,0.1) 52%, rgba(255,255,255,0.02) 100%)'
            }}
          >
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}
            />
            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-2" style={{ color: 'var(--pricing-primary-light)' }}>
                Architecture Explained
              </p>
              <h4 className="text-xl sm:text-2xl font-oswald font-bold text-white leading-tight">
                Um Sistema Completo.
                {' '}
                <span style={{ color: 'var(--pricing-primary)' }}>Nao 8 Itens Soltos.</span>
              </h4>
              <p className="text-sm text-white/70 mt-2 max-w-3xl">
                O mapa abaixo traduz a imagem em arquitetura de valor: cada entrega encaixa em uma camada do sistema,
                do build ao operate e ao impacto de carreira.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-4">
                {deliveryLayerFlow.map((layer, index) => (
                  <div
                    key={layer.title}
                    className="relative rounded-xl border px-3 py-2.5"
                    style={{ borderColor: `${layer.color}55`, backgroundColor: `${layer.color}18` }}
                  >
                    {index < deliveryLayerFlow.length - 1 && (
                      <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/45 text-sm">
                        {'->'}
                      </span>
                    )}
                    <p className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: layer.color }}>
                      {layer.title}
                    </p>
                    <p className="text-xs text-white/70 mt-1 leading-relaxed">{layer.detail}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-2.5 mt-4">
                {deliveryBlueprint.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border p-3"
                    style={{ borderColor: `${item.color}45`, backgroundColor: `${item.color}12` }}
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                      <div>
                        <p className="text-sm text-white font-semibold leading-tight">{item.title}</p>
                        <p className="text-xs mt-0.5 leading-relaxed" style={{ color: item.color }}>
                          {item.value}
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-white/45 mt-1">{item.layer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border px-4 py-3" style={{ borderColor: 'var(--pricing-border-strong)', backgroundColor: 'rgba(0,0,0,0.22)' }}>
                <p className="text-xs sm:text-sm text-white/65 mb-1">Se voce montasse isso sozinho:</p>
                <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm">
                  <span className="text-white/70">Cursos GCP ~R$ 500</span>
                  <span className="text-white/30">+</span>
                  <span className="text-white/70">Terraform ~R$ 400</span>
                  <span className="text-white/30">+</span>
                  <span className="text-white/70">GenAI ~R$ 600</span>
                  <span className="text-white/30">=</span>
                  <span className="line-through font-bold" style={{ color: 'var(--pricing-danger)' }}>R$ 1.500+</span>
                </div>
                <p className="text-sm mt-1.5 font-semibold" style={{ color: 'var(--pricing-success)' }}>
                  Aqui voce leva tudo integrado por menos e funcionando em 4 dias.
                </p>
              </div>
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

PricingSection.displayName = 'PricingSection'

export default PricingSection
