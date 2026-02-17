import { useFinance } from '../../hooks/useFinance'
import { useCountUp } from '../../hooks/useCountUp'
import { formatCurrencyBR } from '../../utils'
import { IconDollar } from './DashboardIcons'

const COUNT_UP_DURATION_MS = 800

/**
 * Card de Saldo Total — design Figma 2021-3866.
 * Fundo branco, borda sutil, ícone $ azul (accent/blue-600), label e valor neutral 1100.
 */
export function BalanceCard() {
  const { calculateTotalBalance } = useFinance()
  const totalBalance = calculateTotalBalance()
  const displayValue = useCountUp(totalBalance, COUNT_UP_DURATION_MS)

  return (
    <article
      className="w-full rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24 min-h-[140px] flex flex-col shadow-sm"
      aria-label="Saldo total"
    >
      <span
        className="flex items-center justify-center w-10 h-10 text-accent-blue-600 mb-figma-4"
        aria-hidden
      >
        <IconDollar />
      </span>
      <p className="text-paragraph-small text-neutral-1100 mb-figma-4">
        Saldo total
      </p>
      <p className="text-[28px] font-bold leading-9 text-neutral-1100 tabular-nums">
        {formatCurrencyBR(displayValue)}
      </p>
    </article>
  )
}
