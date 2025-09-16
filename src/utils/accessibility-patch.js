// Accessibility patches to apply to HomePage component
// This file contains the minimal changes needed to fix accessibility issues

export const accessibilityPatches = {
  // 1. Fix links without discernible names - add aria-labels
  linkAriaLabels: {
    linkedin: 'Visite nosso LinkedIn',
    twitter: 'Visite nosso Twitter',
    instagram: 'Visite nosso Instagram',
    youtube: 'Visite nosso YouTube'
  },

  // 2. Fix heading hierarchy - h4 should be h3 in the statistics section
  headingFixes: {
    // Change h4 in statistics section to h3
    statisticsHeading: 'h3'
  },

  // 3. Contrast improvements are handled in accessibility-fixes.css
  // No JavaScript changes needed for contrast

  // 4. Footer copyright text needs better contrast
  footerTextClass: 'text-white/70' // Changed from text-white/40
}

// Helper function to add aria-label to social links
export const addAriaLabel = (platform) => {
  const labels = {
    Linkedin: 'Visite nosso perfil no LinkedIn',
    Twitter: 'Visite nosso perfil no Twitter',
    Instagram: 'Visite nosso perfil no Instagram',
    Youtube: 'Visite nosso canal no YouTube'
  }
  return labels[platform] || `Visite nosso ${platform}`
}