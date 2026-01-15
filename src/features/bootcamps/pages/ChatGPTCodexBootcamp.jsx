import React, { lazy, Suspense, memo } from 'react'

// =============================================================================
// FEATURE FLAGS - Easy toggle for sections
// =============================================================================
const ENABLE_VIDEO_SECTION = false  // Set to true when video is ready
// =============================================================================

// Critical above-fold component - load immediately
import ChatGPTCodexBootcampHero from '../components/ChatGPTCodexBootcampHero'

// Lazy load below-fold components for better LCP
const BootcampVideoSection = ENABLE_VIDEO_SECTION
  ? lazy(() => import('../components/BootcampVideoSection'))
  : null
const ChatGPTCodexPromiseSection = lazy(() => import('../components/ChatGPTCodexPromiseSection'))
const ChatGPTCodexDifferentiatorSection = lazy(() => import('../components/ChatGPTCodexDifferentiatorSection'))
const ChatGPTCodexJourneyTimeline = lazy(() => import('../components/ChatGPTCodexJourneyTimeline'))
const ChatGPTCodexStackSection = lazy(() => import('../components/ChatGPTCodexStackSection'))
const ChatGPTCodexAudienceSection = lazy(() => import('../components/ChatGPTCodexAudienceSection'))
const ChatGPTCodexPricingSection = lazy(() => import('../components/ChatGPTCodexPricingSection'))
const ChatGPTCodexFinalCTASection = lazy(() => import('../components/ChatGPTCodexFinalCTASection'))

// Minimal loading placeholder to prevent CLS
const SectionLoader = memo(() => (
  <div
    className="min-h-[400px] bg-[#0a0a0a]"
    aria-hidden="true"
  />
))
SectionLoader.displayName = 'SectionLoader'

const ChatGPTCodexBootcamp = memo(() => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Section 1: Hero - Critical, loaded immediately */}
      <ChatGPTCodexBootcampHero />

      {/* Below-fold sections - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        {/* Section 2: Video Explanation - Toggle via ENABLE_VIDEO_SECTION flag */}
        {ENABLE_VIDEO_SECTION && BootcampVideoSection && <BootcampVideoSection />}

        {/* Section 3: A Promessa - What You'll Build */}
        <ChatGPTCodexPromiseSection />

        {/* Section 4: Por que Diferente */}
        <ChatGPTCodexDifferentiatorSection />

        {/* Section 5: O Storytelling - 8-Step Journey */}
        <ChatGPTCodexJourneyTimeline />

        {/* Section 6: Stack */}
        <ChatGPTCodexStackSection />

        {/* Section 7: Para Quem E */}
        <ChatGPTCodexAudienceSection />

        {/* Section 8: Formato, Datas e Preco */}
        <ChatGPTCodexPricingSection />

        {/* Section 9: CTA Final */}
        <ChatGPTCodexFinalCTASection />
      </Suspense>
    </div>
  )
})

ChatGPTCodexBootcamp.displayName = 'ChatGPTCodexBootcamp'

export default ChatGPTCodexBootcamp
