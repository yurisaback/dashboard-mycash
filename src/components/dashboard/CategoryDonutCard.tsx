import { formatCurrencyBR } from '../../utils'

const DONUT_SIZE = 64
const DONUT_R = 28
const DONUT_STROKE = 8
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_R

export interface CategoryDonutCardProps {
  category: string
  value: number
  percentage: number
  /** Cor do anel do donut (CSS variable, ex: var(--primary-700)) */
  ringColor: string
}

/**
 * Card de categoria com gráfico donut, nome e valor total.
 * Largura fixa 160px, padding 24px, borda 1px. Hover: borda verde-limão.
 */
export function CategoryDonutCard({
  category,
  value,
  percentage,
  ringColor,
}: CategoryDonutCardProps) {
  const safePct = Math.min(100, Math.max(0, percentage))
  const dashOffset = DONUT_CIRCUMFERENCE * (1 - safePct / 100)

  return (
    <article
      className="flex flex-shrink-0 flex-col items-center w-[160px] min-h-0 rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24 box-border transition-colors duration-200 hover:border-primary-figma-700"
      style={{ borderWidth: 'var(--border-width-sm, 1px)' }}
    >
      <div className="relative flex items-center justify-center mb-figma-12" style={{ width: DONUT_SIZE, height: DONUT_SIZE }}>
        <svg
          width={DONUT_SIZE}
          height={DONUT_SIZE}
          viewBox={`0 0 ${DONUT_SIZE} ${DONUT_SIZE}`}
          className="absolute inset-0 -rotate-90"
          aria-hidden
        >
          {/* Anel de fundo (cinza claro) */}
          <circle
            cx={DONUT_SIZE / 2}
            cy={DONUT_SIZE / 2}
            r={DONUT_R}
            fill="none"
            stroke="var(--neutral-300)"
            strokeWidth={DONUT_STROKE}
          />
          {/* Anel colorido (percentual) */}
          <circle
            cx={DONUT_SIZE / 2}
            cy={DONUT_SIZE / 2}
            r={DONUT_R}
            fill="none"
            stroke={ringColor}
            strokeWidth={DONUT_STROKE}
            strokeDasharray={DONUT_CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="relative text-paragraph-small font-semibold text-neutral-1100 tabular-nums">
          {`${safePct.toFixed(1)}%`}
        </span>
      </div>
      <p className="text-paragraph-x-small text-neutral-1100 text-center w-full min-w-0 truncate mb-figma-4">
        {category}
      </p>
      <p className="text-label-medium font-semibold text-neutral-1100 text-center tabular-nums">
        {formatCurrencyBR(value)}
      </p>
    </article>
  )
}
