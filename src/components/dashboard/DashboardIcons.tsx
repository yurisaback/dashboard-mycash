/**
 * Ícones do Dashboard Header
 */

const iconProps = {
  viewBox: '0 0 24 24' as const,
  fill: 'none' as const,
  stroke: 'currentColor' as const,
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconSearch() {
  return (
    <svg {...iconProps} className="w-5 h-5 flex-shrink-0">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

/**
 * Ícone de filtro: Material Symbols "instant_mix" (Figma node 2176-1682).
 * Três barras verticais com travessas em alturas diferentes, estilo faders/equalizer.
 * Fonte: Google Material Symbols, Apache 2.0.
 */
export function IconFilter() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M5 20v-7H3v-2h6v2H7v7zM5 9V4h2v5zm4 0V7h2V4h2v3h2v2zm2 11v-9h2v9zm6 0v-3h-2v-2h6v2h-2v3zm0-7V4h2v9z" />
    </svg>
  )
}

export function IconPlus() {
  return (
    <svg {...iconProps} className="w-5 h-5 flex-shrink-0">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export function IconCheck() {
  return (
    <svg {...iconProps} className="w-3 h-3 flex-shrink-0" strokeWidth={3}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function IconCalendar() {
  return (
    <svg {...iconProps} className="w-4 h-4 flex-shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
