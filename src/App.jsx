import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './styles/mobile-optimizations.css'
import './styles/mobile-enhancements.css'
import './styles/mobile-specific-fixes.css'
import './utils/accessibility-fixes.css'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const WebinarHub = lazy(() => import('./pages/WebinarHub'))
const WebinarTemplate = lazy(() => import('./pages/WebinarTemplate'))

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
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/webinarios" element={<WebinarHub />} />
          <Route path="/webinarios/:slug" element={<WebinarTemplate />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App