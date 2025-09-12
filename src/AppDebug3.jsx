import React from 'react'
import { LogoWithText } from './components/ui/aide-logo-final'
import { CommunityHero } from './components/ui/community-hero'

function AppDebug3() {
  console.log("AppDebug3 - Testing CommunityHero");
  
  return (
    <div style={{ minHeight: '100vh' }}>
      <h1 style={{ background: 'white', color: 'black', padding: '10px', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
        Testing CommunityHero below:
      </h1>
      
      <CommunityHero />
      
      <div style={{ background: 'white', color: 'black', padding: '20px' }}>
        <h2>If you see this, CommunityHero rendered</h2>
      </div>
    </div>
  )
}

export default AppDebug3