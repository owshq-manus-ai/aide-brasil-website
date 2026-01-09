import React from 'react'
import ClaudeCodeBootcampHero from '../components/ClaudeCodeBootcampHero'
import BootcampVideoSection from '../components/BootcampVideoSection'
import PromiseSection from '../components/PromiseSection'
import DifferentiatorSection from '../components/DifferentiatorSection'
import JourneyTimeline from '../components/JourneyTimeline'
import StackSection from '../components/StackSection'
import AudienceSection from '../components/AudienceSection'
import PricingSection from '../components/PricingSection'
import FinalCTASection from '../components/FinalCTASection'

const ClaudeCodeBootcamp = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Section 1: Hero */}
      <ClaudeCodeBootcampHero />

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

      {/* Section 6: Para Quem É */}
      <AudienceSection />

      {/* Section 7: Formato, Datas e Preço */}
      <PricingSection />

      {/* Section 8: CTA Final */}
      <FinalCTASection />
    </div>
  )
}

export default ClaudeCodeBootcamp
