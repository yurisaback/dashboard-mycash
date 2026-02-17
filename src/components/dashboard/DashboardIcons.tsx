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

/** Gráfico crescente (badge Saldo Total). */
export function IconChartTrendingUp() {
  return (
    <svg {...iconProps} className="w-4 h-4 flex-shrink-0">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

/** Seta diagonal baixo-esquerda (entrada/receitas). */
export function IconArrowDownLeft() {
  return (
    <svg {...iconProps} className="w-4 h-4 flex-shrink-0">
      <line x1="17" y1="7" x2="7" y2="17" />
      <polyline points="17 13 17 7 11 7" />
    </svg>
  )
}

/** Seta diagonal cima-direita (saída/despesas). */
export function IconArrowUpRight() {
  return (
    <svg {...iconProps} className="w-4 h-4 flex-shrink-0">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="17 11 17 7 11 7" />
    </svg>
  )
}

/** Cifrão $ — Saldo total (Figma 2021-3866, imagem referência). */
export function IconDollar() {
  return (
    <svg {...iconProps} className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

/** Seta para baixo (receitas — imagem: seta vertical ↓). */
export function IconArrowDown() {
  return (
    <svg {...iconProps} className="w-5 h-5 flex-shrink-0">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

/** Seta para cima (despesas — imagem: seta vertical ↑). */
export function IconArrowUp() {
  return (
    <svg {...iconProps} className="w-5 h-5 flex-shrink-0">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  )
}
