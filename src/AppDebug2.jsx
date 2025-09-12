import React from 'react'
import { LogoWithText } from './components/ui/aide-logo-final'
import { CommunityHero } from './components/ui/community-hero'

function AppDebug2() {
  console.log("AppDebug2 - Components imported");
  
  return (
    <div style={{ background: 'white', padding: '20px', minHeight: '100vh' }}>
      <h1 style={{ color: 'black' }}>Debug Mode 2 - Testing actual components</h1>
      
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ color: 'black' }}>LogoWithText Component:</h2>
        <div style={{ background: '#030303', padding: '10px' }}>
          <LogoWithText />
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ color: 'black' }}>If you see this, imports work!</h2>
      </div>
    </div>
  )
}

export default AppDebug2