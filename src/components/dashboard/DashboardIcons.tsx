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

/** Gráfico de histograma — título Fluxo financeiro (Figma 2021-3013, fi-rr-chart-histogram). */
export function IconChartHistogram() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath="url(#chartHistogramClip)">
        <path
          d="M23 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23C24 22.7348 23.8946 22.4804 23.7071 22.2929C23.5196 22.1054 23.2652 22 23 22Z"
          fill="currentColor"
        />
        <path
          d="M6.00015 19.9999C6.26537 19.9999 6.51972 19.8946 6.70726 19.707C6.89479 19.5195 7.00015 19.2651 7.00015 18.9999V11.9999C7.00015 11.7347 6.89479 11.4804 6.70726 11.2928C6.51972 11.1053 6.26537 10.9999 6.00015 10.9999C5.73493 10.9999 5.48058 11.1053 5.29305 11.2928C5.10551 11.4804 5.00015 11.7347 5.00015 11.9999V18.9999C5.00015 19.2651 5.10551 19.5195 5.29305 19.707C5.48058 19.8946 5.73493 19.9999 6.00015 19.9999Z"
          fill="currentColor"
        />
        <path
          d="M9.99984 10V19C9.99984 19.2652 10.1052 19.5196 10.2927 19.7071C10.4803 19.8946 10.7346 20 10.9998 20C11.2651 20 11.5194 19.8946 11.707 19.7071C11.8945 19.5196 11.9999 19.2652 11.9999 19V10C11.9999 9.73478 11.8945 9.48043 11.707 9.29289C11.5194 9.10536 11.2651 9 10.9998 9C10.7346 9 10.4803 9.10536 10.2927 9.29289C10.1052 9.48043 9.99984 9.73478 9.99984 10Z"
          fill="currentColor"
        />
        <path
          d="M15 13V19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8947 19.5196 17 19.2652 17 19V13C17 12.7348 16.8947 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4804 15 12.7348 15 13Z"
          fill="currentColor"
        />
        <path
          d="M20.0002 8.99991V18.9999C20.0002 19.2651 20.1055 19.5195 20.2931 19.707C20.4806 19.8946 20.735 19.9999 21.0002 19.9999C21.2654 19.9999 21.5198 19.8946 21.7073 19.707C21.8948 19.5195 22.0002 19.2651 22.0002 18.9999V8.99991C22.0002 8.7347 21.8948 8.48034 21.7073 8.29281C21.5198 8.10527 21.2654 7.99991 21.0002 7.99991C20.735 7.99991 20.4806 8.10527 20.2931 8.29281C20.1055 8.48034 20.0002 8.7347 20.0002 8.99991Z"
          fill="currentColor"
        />
        <path
          d="M5.99983 8.99994C6.26503 8.99988 6.51934 8.89448 6.70683 8.70693L10.2928 5.12094C10.4834 4.93936 10.7366 4.83808 10.9998 4.83808C11.2631 4.83808 11.5162 4.93936 11.7068 5.12094L13.8788 7.29294C14.4414 7.85535 15.2043 8.17129 15.9998 8.17129C16.7953 8.17129 17.5583 7.85535 18.1208 7.29294L23.7068 1.70694C23.889 1.51833 23.9898 1.26573 23.9875 1.00353C23.9852 0.741338 23.8801 0.490525 23.6947 0.305117C23.5092 0.119709 23.2584 0.0145399 22.9962 0.0122615C22.734 0.00998304 22.4814 0.110777 22.2928 0.292936L16.7068 5.87794C16.5193 6.06541 16.265 6.17072 15.9998 6.17072C15.7347 6.17072 15.4804 6.06541 15.2928 5.87794L13.1208 3.70694C12.5583 3.14452 11.7953 2.82858 10.9998 2.82858C10.2043 2.82858 9.44142 3.14452 8.87883 3.70694L5.29283 7.29294C5.15302 7.43279 5.05782 7.61095 5.01925 7.8049C4.98068 7.99886 5.00048 8.19989 5.07615 8.38259C5.15182 8.56529 5.27996 8.72145 5.44437 8.83134C5.60878 8.94122 5.80208 8.99989 5.99983 8.99994Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="chartHistogramClip">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
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
