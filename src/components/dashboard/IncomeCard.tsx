import { useFinance } from '../../hooks/useFinance'
import { useCountUp } from '../../hooks/useCountUp'
import { formatCurrencyBR } from '../../utils'
import { IconArrowDown } from './DashboardIcons'

const COUNT_UP_DURATION_MS = 800

/**
 * Card de Receitas — design Figma 2021-3866.
 * Fundo branco, borda sutil, ícone seta verde (accent/green-600), label e valor neutral 1100.
 */
export function IncomeCard() {
  const { calculateIncomeForPeriod } = useFinance()
  const income = calculateIncomeForPeriod()
  const displayValue = useCountUp(income, COUNT_UP_DURATION_MS)

  return (
    <article
      className="w-full h-full min-h-[180px] md:min-h-[160px] rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24 flex flex-col shadow-sm"
      style={{ height: '100%' }}
      aria-label="Receitas"
    >
      <span
        className="flex items-center justify-center w-10 h-10 text-accent-green-600 mb-figma-4"
        aria-hidden
      >
        <IconArrowDown />
      </span>
      <p className="text-paragraph-small text-neutral-1100 mb-figma-4">
        Receitas
      </p>
      <p className="text-[28px] font-bold leading-9 text-neutral-1100 tabular-nums break-words min-h-9">
        {formatCurrencyBR(displayValue)}
      </p>
    </article>
  )
}
