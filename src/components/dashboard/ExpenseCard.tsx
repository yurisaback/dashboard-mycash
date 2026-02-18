import { useFinance } from '../../hooks/useFinance'
import { useCountUp } from '../../hooks/useCountUp'
import { formatCurrencyBR } from '../../utils'
import { IconArrowUp } from './DashboardIcons'

const COUNT_UP_DURATION_MS = 800

/**
 * Card de Despesas — design Figma 2021-3866.
 * Fundo branco, borda sutil, ícone seta vermelha (accent/red-600), label e valor neutral 1100.
 */
export function ExpenseCard() {
  const { calculateExpensesForPeriod } = useFinance()
  const expenses = calculateExpensesForPeriod()
  const displayValue = useCountUp(expenses, COUNT_UP_DURATION_MS)

  return (
    <article
      className="w-full h-full min-h-[140px] rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24 flex flex-col shadow-sm"
      style={{ height: '100%' }}
      aria-label="Despesas"
    >
      <span
        className="flex items-center justify-center w-10 h-10 text-accent-red-600 mb-figma-4"
        aria-hidden
      >
        <IconArrowUp />
      </span>
      <p className="text-paragraph-small text-neutral-1100 mb-figma-4">
        Despesas
      </p>
      <p className="text-[28px] font-bold leading-9 text-neutral-1100 tabular-nums">
        {formatCurrencyBR(displayValue)}
      </p>
    </article>
  )
}
