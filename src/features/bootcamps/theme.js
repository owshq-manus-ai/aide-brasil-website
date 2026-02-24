/**
 * Shared theme constants for the Claude Code Bootcamp V2 pages.
 * Single source of truth for colors, terminal palette, and shared CSS keyframes.
 */

export const CORAL = {
  primary: '#E07A5F',
  light: '#F0A090',
  lighter: '#F5C4B8',
  dark: '#C96A50',
  glow: 'rgba(224, 122, 95, 0.5)',
  subtle: 'rgba(224, 122, 95, 0.15)',
}

export const TERMINAL = {
  bg: '#0D1117',
  border: '#30363d',
  headerBg: '#161b22',
  green: '#7ee787',
  blue: '#79c0ff',
  purple: '#d2a8ff',
  yellow: '#fbbf24',
  red: '#f85149',
  comment: '#8b949e',
}

export const PAGE_BG = '#0a0a0a'

export const WHATSAPP = {
  phone: '556196776328',
  buildUrl: (message) =>
    `https://wa.me/556196776328?text=${encodeURIComponent(message)}`,
}

export const sharedKeyframes = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes terminal-cursor {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`
