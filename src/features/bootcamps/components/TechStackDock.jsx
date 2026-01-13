import React, { memo, useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Technology icons - using images for some, SVGs for others

// 1. Claude Code (original PNG)
const ClaudeIcon = memo(() => (
  <img
    src="/images/logos/claude-code-icon.png"
    alt="Claude Code"
    className="w-6 h-6 object-contain"
    loading="lazy"
  />
))
ClaudeIcon.displayName = 'ClaudeIcon'

// 2. Cursor IDE (original PNG)
const CursorIcon = memo(() => (
  <img
    src="/images/logos/cursor-icon.png"
    alt="Cursor IDE"
    className="w-7 h-7 object-contain"
    loading="lazy"
  />
))
CursorIcon.displayName = 'CursorIcon'

// 3. GitHub (original PNG)
const GitHubIcon = memo(() => (
  <img
    src="/images/logos/github-icon.png"
    alt="GitHub"
    className="w-7 h-7 object-contain"
    loading="lazy"
  />
))
GitHubIcon.displayName = 'GitHubIcon'

// 4. Python (original PNG)
const PythonIcon = memo(() => (
  <img
    src="/images/logos/python-logo.png"
    alt="Python"
    className="w-6 h-6 object-contain"
    loading="lazy"
  />
))
PythonIcon.displayName = 'PythonIcon'

// 5. Terraform (SVG)
const TerraformIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M8.283 2v6.662l5.717 3.306v-6.66zM14.57 5.308v6.66l5.714-3.306V2zM2 5.308v6.66l5.715 3.307V8.614zM8.283 15.342L14 18.65V12l-5.717-3.306z"/>
  </svg>
))
TerraformIcon.displayName = 'TerraformIcon'

// 6. Google Cloud (original PNG)
const GCPIcon = memo(() => (
  <img
    src="/images/logos/google-cloud-logo.png"
    alt="Google Cloud"
    className="w-6 h-6 object-contain"
    loading="lazy"
  />
))
GCPIcon.displayName = 'GCPIcon'

// 7. Gemini (image)
const GeminiIcon = memo(() => (
  <img
    src="/images/logos/google-gemini-icon.webp"
    alt="Google Gemini"
    className="w-6 h-6 object-contain"
  />
))
GeminiIcon.displayName = 'GeminiIcon'

// 8. Microsoft Azure (SVG)
const AzureIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z"/>
  </svg>
))
AzureIcon.displayName = 'AzureIcon'

// 9. Amazon AWS (original PNG)
const AWSIcon = memo(() => (
  <img
    src="/images/logos/aws-icon.png"
    alt="Amazon AWS"
    className="w-6 h-6 object-contain"
    loading="lazy"
  />
))
AWSIcon.displayName = 'AWSIcon'

// 10. CrewAI (original PNG)
const CrewAIIcon = memo(() => (
  <img
    src="/images/logos/crewai-icon.png"
    alt="CrewAI"
    className="w-6 h-6 object-contain"
    loading="lazy"
  />
))
CrewAIIcon.displayName = 'CrewAIIcon'

// 11. Anthropic (image)
const AnthropicIcon = memo(() => (
  <img
    src="/images/logos/anthropic-icon.webp"
    alt="Anthropic"
    className="w-6 h-6 object-contain"
  />
))
AnthropicIcon.displayName = 'AnthropicIcon'

// Technology stack configuration (11 technologies)
// Order matters: most important/recognizable first for mobile truncation
const technologies = [
  { name: 'Anthropic', description: 'AI Research Lab', Icon: AnthropicIcon, color: '#d4a574' },
  { name: 'Claude Code', description: 'AI Coding Agent', Icon: ClaudeIcon, color: '#f97316' },
  { name: 'Cursor IDE', description: 'AI-First Editor', Icon: CursorIcon, color: '#00d4ff' },
  { name: 'GitHub', description: 'Version Control', Icon: GitHubIcon, color: '#ffffff' },
  { name: 'Python', description: 'Programming Language', Icon: PythonIcon, color: '#3776ab' },
  { name: 'Google Cloud', description: 'Cloud Platform', Icon: GCPIcon, color: '#4285f4' },
  { name: 'Gemini', description: 'Google AI Model', Icon: GeminiIcon, color: '#8e44ef' },
  { name: 'AWS', description: 'Amazon Cloud', Icon: AWSIcon, color: '#ff9900' },
  { name: 'Azure', description: 'Microsoft Cloud', Icon: AzureIcon, color: '#0078d4' },
  { name: 'CrewAI', description: 'Autonomous Agents', Icon: CrewAIIcon, color: '#ec4899' },
]

// Mobile shows 8 icons max for proper fit without overflow
const MOBILE_TECH_LIMIT = 8

// DockIcon with magnification effect
// DockIcon with magnification effect
// Mobile: smaller base size, reduced magnification range
const DockIconItem = memo(({ mouseX, tech, index }) => {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  // Mobile: smaller icons (32px base), Desktop: 40px base with magnification to 56px
  const widthSync = useTransform(distance, [-120, 0, 120], [32, 44, 32])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const IconComponent = tech.Icon

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square cursor-pointer flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200 min-w-[32px] sm:min-w-[40px]"
      title={`${tech.name} - ${tech.description}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
      whileHover={{
        boxShadow: `0 0 20px ${tech.color}50, 0 0 40px ${tech.color}30`,
      }}
    >
      <div className="w-full h-full flex items-center justify-center p-1.5 sm:p-2" style={{ color: tech.color }}>
        <IconComponent />
      </div>
    </motion.div>
  )
})

DockIconItem.displayName = 'DockIconItem'

// Main TechStackDock component
// Mobile: shows limited icons that fit perfectly without scroll/overflow
const TechStackDock = memo(() => {
  const mouseX = useMotionValue(Infinity)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Limit icons on mobile for perfect fit without overflow
  const visibleTechnologies = isMobile
    ? technologies.slice(0, MOBILE_TECH_LIMIT)
    : technologies

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      className="flex justify-start"
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-[48px] sm:h-[52px] items-end gap-1 sm:gap-2 rounded-xl border border-orange-500/30 bg-black/40 backdrop-blur-md p-1.5 sm:p-2 px-2 sm:px-3"
      >
        {visibleTechnologies.map((tech, index) => (
          <DockIconItem key={tech.name} mouseX={mouseX} tech={tech} index={index} />
        ))}
      </motion.div>
    </motion.div>
  )
})

TechStackDock.displayName = 'TechStackDock'

export default TechStackDock
