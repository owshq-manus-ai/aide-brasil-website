import React from 'react'

function AppDebug() {
  console.log("AppDebug rendering");
  
  return (
    <div style={{ background: 'white', padding: '20px', minHeight: '100vh' }}>
      <h1 style={{ color: 'black' }}>Debug Mode</h1>
      <p style={{ color: 'black' }}>Testing components one by one...</p>
      
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ color: 'black' }}>Test 1: Basic render works</h2>
      </div>
      
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ color: 'black' }}>Test 2: Trying to import LogoWithText...</h2>
        {(() => {
          try {
            const { LogoWithText } = require('./components/ui/aide-logo-final');
            return <p style={{ color: 'green' }}>LogoWithText imported successfully</p>;
          } catch (e) {
            return <p style={{ color: 'red' }}>Error importing LogoWithText: {e.message}</p>;
          }
        })()}
      </div>
      
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ color: 'black' }}>Test 3: Trying to import CommunityHero...</h2>
        {(() => {
          try {
            const { CommunityHero } = require('./components/ui/community-hero');
            return <p style={{ color: 'green' }}>CommunityHero imported successfully</p>;
          } catch (e) {
            return <p style={{ color: 'red' }}>Error importing CommunityHero: {e.message}</p>;
          }
        })()}
      </div>
    </div>
  )
}

export default AppDebug