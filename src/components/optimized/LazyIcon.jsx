import React, { lazy, Suspense } from 'react'

// Lazy load icons to reduce initial bundle size
const iconComponents = {
  Calendar: lazy(() => import('lucide-react').then(module => ({ default: module.Calendar }))),
  Clock: lazy(() => import('lucide-react').then(module => ({ default: module.Clock }))),
  Users: lazy(() => import('lucide-react').then(module => ({ default: module.Users }))),
  CheckCircle: lazy(() => import('lucide-react').then(module => ({ default: module.CheckCircle }))),
  Linkedin: lazy(() => import('lucide-react').then(module => ({ default: module.Linkedin }))),
  Instagram: lazy(() => import('lucide-react').then(module => ({ default: module.Instagram }))),
  ArrowLeft: lazy(() => import('lucide-react').then(module => ({ default: module.ArrowLeft }))),
  Zap: lazy(() => import('lucide-react').then(module => ({ default: module.Zap }))),
  Brain: lazy(() => import('lucide-react').then(module => ({ default: module.Brain }))),
  Rocket: lazy(() => import('lucide-react').then(module => ({ default: module.Rocket }))),
  Shield: lazy(() => import('lucide-react').then(module => ({ default: module.Shield }))),
  Bot: lazy(() => import('lucide-react').then(module => ({ default: module.Bot }))),
  Cpu: lazy(() => import('lucide-react').then(module => ({ default: module.Cpu }))),
  Terminal: lazy(() => import('lucide-react').then(module => ({ default: module.Terminal }))),
  Database: lazy(() => import('lucide-react').then(module => ({ default: module.Database }))),
  GitBranch: lazy(() => import('lucide-react').then(module => ({ default: module.GitBranch }))),
  TrendingUp: lazy(() => import('lucide-react').then(module => ({ default: module.TrendingUp }))),
  Trophy: lazy(() => import('lucide-react').then(module => ({ default: module.Trophy }))),
  Timer: lazy(() => import('lucide-react').then(module => ({ default: module.Timer }))),
  AlertCircle: lazy(() => import('lucide-react').then(module => ({ default: module.AlertCircle }))),
  Lightbulb: lazy(() => import('lucide-react').then(module => ({ default: module.Lightbulb }))),
  X: lazy(() => import('lucide-react').then(module => ({ default: module.X }))),
  Check: lazy(() => import('lucide-react').then(module => ({ default: module.Check }))),
  Video: lazy(() => import('lucide-react').then(module => ({ default: module.Video }))),
  Phone: lazy(() => import('lucide-react').then(module => ({ default: module.Phone }))),
  Mail: lazy(() => import('lucide-react').then(module => ({ default: module.Mail }))),
  User: lazy(() => import('lucide-react').then(module => ({ default: module.User })))
}

// Fallback icon component
const IconFallback = ({ className = "w-5 h-5" }) => (
  <div className={`bg-gray-300 animate-pulse rounded ${className}`} />
)

const LazyIcon = React.memo(({ name, className = "w-5 h-5", ...props }) => {
  const IconComponent = iconComponents[name]

  if (!IconComponent) {
    return <IconFallback className={className} />
  }

  return (
    <Suspense fallback={<IconFallback className={className} />}>
      <IconComponent className={className} {...props} />
    </Suspense>
  )
})

LazyIcon.displayName = 'LazyIcon'

export default LazyIcon