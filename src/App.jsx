import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WebinarHub from './pages/WebinarHub'
import WebinarTemplate from './pages/WebinarTemplate'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/webinarios" element={<WebinarHub />} />
        <Route path="/webinarios/:slug" element={<WebinarTemplate />} />
      </Routes>
    </Router>
  )
}

export default App