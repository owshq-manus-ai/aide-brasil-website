import React, { lazy, Suspense, memo } from 'react'

// Critical above-fold component - load immediately
import ClaudeCodeBootcampHero from '../components/ClaudeCodeBootcampHero'

// Lazy load below-fold components for better LCP
const BootcampVideoSection = lazy(() => import('../components/BootcampVideoSection'))
const PromiseSection = lazy(() => import('../components/PromiseSection'))
const DifferentiatorSection = lazy(() => import('../components/DifferentiatorSection'))
const JourneyTimeline = lazy(() => import('../components/JourneyTimeline'))
const StackSection = lazy(() => import('../components/StackSection'))
const AudienceSection = lazy(() => import('../components/AudienceSection'))
const PricingSection = lazy(() => import('../components/PricingSection'))
const FinalCTASection = lazy(() => import('../components/FinalCTASection'))

// Minimal loading placeholder to prevent CLS
const SectionLoader = memo(() => (
  <div
    className="min-h-[400px] bg-[#0a0a0a]"
    aria-hidden="true"
  />
))
SectionLoader.displayName = 'SectionLoader'

const ClaudeCodeBootcamp = memo(() => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Section 1: Hero - Critical, loaded immediately */}
      <ClaudeCodeBootcampHero />

      {/* Below-fold sections - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        {/* Section 2: Video Explanation */}
        <BootcampVideoSection />

        {/* Section 3: A Promessa - What You'll Build */}
        <PromiseSection />

        {/* Section 3: Por que Diferente */}
        <DifferentiatorSection />

        {/* Section 4: O Storytelling - 8-Step Journey */}
        <JourneyTimeline />

        {/* Section 5: Stack */}
        <StackSection />

        {/* Section 6: Para Quem E */}
        <AudienceSection />

        {/* Section 7: Formato, Datas e Preco */}
        <PricingSection />

        {/* Section 8: CTA Final */}
        <FinalCTASection />
      </Suspense>
    </div>
  )
})

ClaudeCodeBootcamp.displayName = 'ClaudeCodeBootcamp'

export default ClaudeCodeBootcamp
