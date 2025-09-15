import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isWebinarsPage = location.pathname.includes('/webinarios')
  
  // Determine color scheme based on current page
  const getColorScheme = () => {
    if (location.pathname === '/webinarios') {
      // Webinars hub page - Purple theme
      return {
        from: 'from-purple-500/10',
        to: 'to-violet-500/10',
        hoverFrom: 'hover:from-purple-500/20',
        hoverTo: 'hover:to-violet-500/20',
        border: 'border-purple-500/20',
        hoverBorder: 'hover:border-purple-500/40',
        shadow: 'hover:shadow-purple-500/20'
      }
    } else if (location.pathname === '/webinarios/domine-claude-code') {
      // Claude Code webinar - Orange theme
      return {
        from: 'from-orange-500/10',
        to: 'to-amber-500/10',
        hoverFrom: 'hover:from-orange-500/20',
        hoverTo: 'hover:to-amber-500/20',
        border: 'border-orange-500/20',
        hoverBorder: 'hover:border-orange-500/40',
        shadow: 'hover:shadow-orange-500/20'
      }
    } else if (location.pathname.startsWith('/webinarios/')) {
      // Other webinar pages - default to purple
      return {
        from: 'from-purple-500/10',
        to: 'to-violet-500/10',
        hoverFrom: 'hover:from-purple-500/20',
        hoverTo: 'hover:to-violet-500/20',
        border: 'border-purple-500/20',
        hoverBorder: 'hover:border-purple-500/40',
        shadow: 'hover:shadow-purple-500/20'
      }
    } else {
      // Home page - Green theme
      return {
        from: 'from-green-500/10',
        to: 'to-emerald-500/10',
        hoverFrom: 'hover:from-green-500/20',
        hoverTo: 'hover:to-emerald-500/20',
        border: 'border-green-500/20',
        hoverBorder: 'hover:border-green-500/40',
        shadow: 'hover:shadow-green-500/20'
      }
    }
  }
  
  const colorScheme = getColorScheme()

  const navItems = [
    ...(isHomePage ? [
      { label: 'Sobre', href: '#sobre', isAnchor: true },
      { label: 'Ask Gen', href: '#ask-gen', isAnchor: true },
      { label: 'Onyx', href: '#onyx', isAnchor: true },
      { label: 'Números', href: '#numeros', isAnchor: true },
      { label: 'Benefícios', href: '#beneficios', isAnchor: true },
      { label: 'Comunidade', href: '#comunidade', isAnchor: true },
    ] : [
      { label: 'Home', href: '/', isAnchor: false },
    ]),
    { label: 'Webinários', href: '/webinarios', isAnchor: false }
  ]

  const handleNavClick = (e, item) => {
    if (item.isAnchor) {
      e.preventDefault()
      setIsMenuOpen(false)
      setTimeout(() => {
        const element = document.getElementById(item.href.substring(1))
        if (element) {
          const headerHeight = 80
          const elementPosition = element.offsetTop - headerHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between md:justify-center">
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`group px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r backdrop-blur-sm shadow-lg hover:scale-105 font-roboto ${colorScheme.from} ${colorScheme.to} ${colorScheme.hoverFrom} ${colorScheme.hoverTo} border ${colorScheme.border} ${colorScheme.hoverBorder} ${colorScheme.shadow}`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`group px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r backdrop-blur-sm shadow-lg hover:scale-105 font-roboto ${colorScheme.from} ${colorScheme.to} ${colorScheme.hoverFrom} ${colorScheme.hoverTo} border ${colorScheme.border} ${colorScheme.hoverBorder} ${colorScheme.shadow}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile menu button - Right aligned on mobile, hidden on desktop */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm ml-auto"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 p-4 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
          >
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-200 font-roboto"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-200 font-roboto"
                >
                  {item.label}
                </Link>
              )
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header