import React, { lazy, Suspense, memo } from 'react'

// Critical above-fold component - load immediately
import ClaudeCodeBootcampHeroV2 from '../components/ClaudeCodeBootcampHeroV2'

// Lazy load V2 sections for better performance
const PromiseSectionV2 = lazy(() => import('../components/v2/PromiseSectionV2'))
const DifferentiatorSectionV2 = lazy(() => import('../components/v2/DifferentiatorSectionV2'))
const SpecDrivenSectionV2 = lazy(() => import('../components/v2/SpecDrivenSectionV2'))
const JourneyTimelineV2 = lazy(() => import('../components/v2/JourneyTimelineV2'))
const DeliverablesSectionV2 = lazy(() => import('../components/v2/DeliverablesSectionV2'))
const StackSectionV2 = lazy(() => import('../components/v2/StackSectionV2'))
const AudienceSectionV2 = lazy(() => import('../components/v2/AudienceSectionV2'))
// Use original PricingSection (has complex modal/form logic)
const PricingSection = lazy(() => import('../components/PricingSection'))
const FinalCTASectionV2 = lazy(() => import('../components/v2/FinalCTASectionV2'))

// Minimal loading placeholder
const SectionLoader = memo(() => (
  <div className="min-h-[400px] bg-[#0a0a0a]" aria-hidden="true" />
))
SectionLoader.displayName = 'SectionLoader'

/**
 * ClaudeCodeBootcamp V2 - Complete Page
 * Terminal/Bento aesthetic throughout
 *
 * Route: /bootcamp/zero-prod-claude-code-v2
 */
const ClaudeCodeBootcampV2Preview = memo(() => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Section 1: Hero V2 - Terminal with live typing */}
      <ClaudeCodeBootcampHeroV2 />

      {/* Below-fold sections - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        {/* Section 2: Promise - 8 Claude Code Features */}
        <PromiseSectionV2 />

        {/* Section 3: Differentiator - Why Different */}
        <DifferentiatorSectionV2 />

        {/* Section 4: Spec-Driven Development Methodology */}
        <SpecDrivenSectionV2 />

        {/* Section 5: Journey - 8-Step Timeline */}
        <JourneyTimelineV2 />

        {/* Section 6: Deliverables - What You Get */}
        <DeliverablesSectionV2 />

        {/* Section 7: Stack - Tech Stack */}
        <StackSectionV2 />

        {/* Section 8: Audience - For Who */}
        <AudienceSectionV2 />

        {/* Section 9: Pricing - Using original (complex modal logic) */}
        <PricingSection />

        {/* Section 10: Final CTA */}
        <FinalCTASectionV2 />
      </Suspense>
    </div>
  )
})

ClaudeCodeBootcampV2Preview.displayName = 'ClaudeCodeBootcampV2Preview'

export default ClaudeCodeBootcampV2Preview
