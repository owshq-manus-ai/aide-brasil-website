import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { disableScrollAnimations } from './utils/motionConfig'
import './App.css'
import './styles/mobile-optimizations.css'
import './styles/mobile-enhancements.css'
import './styles/mobile-specific-fixes.css'
import './utils/accessibility-fixes.css'
import './styles/anti-flicker.css'
import './styles/performance-fixes.css'
import './styles/mobile-scroll-fix.css'
import './styles/desktop-fixes.css'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const WebinarHub = lazy(() => import('./pages/WebinarHub'))
const WebinarTemplate = lazy(() => import('./pages/WebinarTemplate'))
const WebinarsPage = lazy(() => import('./webinars/WebinarsPage'))
const ClaudeCodeWebinar = lazy(() => import('./webinars/domine-claude-code/ClaudeCodeWebinar'))
const AutonomousAgentsWebinar = lazy(() => import('./webinars/domine-autonomous-code-agents/AutonomousAgentsWebinar'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-[#030303] flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <div className="mt-4 text-white font-oswald">Carregando...</div>
    </div>
  </div>
)

function App() {
  useEffect(() => {
    // Check if mobile and disable animations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

    if (isMobile) {
      disableScrollAnimations();
    }
  }, [])

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/webinarios" element={<WebinarHub />} />
          <Route path="/webinarios/:slug" element={<WebinarTemplate />} />
          <Route path="/webinars" element={<WebinarsPage />} />
          <Route path="/webinars/domine-claude-code" element={<ClaudeCodeWebinar />} />
          <Route path="/webinars/domine-autonomous-code-agents" element={<AutonomousAgentsWebinar />} />
          <Route path="/webinars/:slug" element={<WebinarTemplate />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App