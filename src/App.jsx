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

// Feature: Webinars
const WebinarsListPage = lazy(() => import('./features/webinars/pages/WebinarsListPage'))
const ClaudeCodeWebinar = lazy(() => import('./features/webinars/pages/ClaudeCodeWebinar'))
const AutonomousAgentsWebinar = lazy(() => import('./features/webinars/pages/AutonomousAgentsWebinar'))
const CrewAIWebinar = lazy(() => import('./features/webinars/pages/CrewAIWebinar'))
const ChatGPTAgentBuilderWebinar = lazy(() => import('./features/webinars/pages/ChatGPTAgentBuilderWebinar'))

// Feature: Bootcamps
const AIDataEngineerBootcamp = lazy(() => import('./features/bootcamps/pages/AIDataEngineerBootcamp'))

// Feature: Academy
const AcademyLandingPage = lazy(() => import('./features/academy/pages/AcademyLandingPage'))

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
          <Route path="/webinars" element={<WebinarsListPage />} />
          <Route path="/webinars/dominando-claude-code" element={<ClaudeCodeWebinar />} />
          <Route path="/webinars/dominando-autonomous-code-agents" element={<AutonomousAgentsWebinar />} />
          <Route path="/webinars/dominando-crewai-agents" element={<CrewAIWebinar />} />
          <Route path="/webinars/dominando-chatgpt-agent-builder" element={<ChatGPTAgentBuilderWebinar />} />
          <Route path="/bootcamp/ai-data-engineer" element={<AIDataEngineerBootcamp />} />
          <Route path="/academy" element={<AcademyLandingPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App