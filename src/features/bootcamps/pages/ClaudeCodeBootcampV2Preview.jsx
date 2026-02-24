import React, { lazy, Suspense, memo, useState, useEffect } from 'react'
import { MessageCircle, ChevronRight } from 'lucide-react'
import { CORAL, WHATSAPP } from '../theme'

import ClaudeCodeBootcampHeroV2 from '../components/ClaudeCodeBootcampHeroV2'

const PromiseSectionV2 = lazy(() => import('../components/v2/PromiseSectionV2'))
const DifferentiatorSectionV2 = lazy(() => import('../components/v2/DifferentiatorSectionV2'))
const SpecDrivenSectionV2 = lazy(() => import('../components/v2/SpecDrivenSectionV2'))
const JourneyTimelineV2 = lazy(() => import('../components/v2/JourneyTimelineV2'))
const DeliverablesSectionV2 = lazy(() => import('../components/v2/DeliverablesSectionV2'))
const StackSectionV2 = lazy(() => import('../components/v2/StackSectionV2'))
const AudienceSectionV2 = lazy(() => import('../components/v2/AudienceSectionV2'))
const PricingSection = lazy(() => import('../components/PricingSection'))
const FinalCTASectionV2 = lazy(() => import('../components/v2/FinalCTASectionV2'))

const SectionLoader = memo(() => (
  <div className="min-h-[400px] bg-[#0a0a0a]" aria-hidden="true" />
))
SectionLoader.displayName = 'SectionLoader'

const STICKY_CTA_URL = WHATSAPP.buildUrl('Olá! Quero saber mais sobre o Bootcamp Zero ao Prod Claude Code.')

const StickyBottomCTA = memo(() => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      const pricingEl = document.getElementById('pricing')
      const pricingTop = pricingEl ? pricingEl.offsetTop - window.innerHeight * 0.5 : Infinity
      setVisible(scrollY > heroHeight && scrollY < pricingTop)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      role="complementary"
      aria-label="Atalho de contato"
    >
      <div
        className="border-t px-4 py-3"
        style={{ backgroundColor: 'rgba(10, 10, 10, 0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: `${CORAL.primary}30`, paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <p className="text-white/80 text-sm hidden sm:block">
            <span style={{ color: CORAL.primary }} className="font-bold">Do Zero a Produção</span> — Bootcamp Claude Code
          </p>
          <a
            href={STICKY_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-oswald font-bold uppercase tracking-wider text-sm text-white min-h-[44px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:ml-auto"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              boxShadow: '0 0 20px rgba(37, 211, 102, 0.3)',
            }}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Falar com Comercial</span>
            <span className="sm:hidden">WhatsApp</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
})
StickyBottomCTA.displayName = 'StickyBottomCTA'

/**
 * ClaudeCodeBootcamp V2 - Evergreen Page
 * Route: /bootcamp/zero-prod-claude-code-evergreen-v1
 */
const ClaudeCodeBootcampV2Preview = memo(() => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]" data-page="bootcamp-v2">
      <ClaudeCodeBootcampHeroV2 />

      <Suspense fallback={<SectionLoader />}>
        <PromiseSectionV2 />
        <DifferentiatorSectionV2 />
        <SpecDrivenSectionV2 />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <JourneyTimelineV2 />
        <DeliverablesSectionV2 />
        <StackSectionV2 />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AudienceSectionV2 />
        <PricingSection variant="v2" />
        <FinalCTASectionV2 />
      </Suspense>

      <StickyBottomCTA />
    </div>
  )
})

ClaudeCodeBootcampV2Preview.displayName = 'ClaudeCodeBootcampV2Preview'

export default ClaudeCodeBootcampV2Preview
