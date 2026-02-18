import { formatCurrencyBR } from '../../utils'

export interface TransactionsSummaryProps {
  totalIncome: number
  totalExpenses: number
  count: number
}

export function TransactionsSummary({ totalIncome, totalExpenses, count }: TransactionsSummaryProps) {
  const diff = totalIncome - totalExpenses

  return (
    <div className="flex flex-wrap gap-figma-16 lg:gap-figma-24 rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24">
      <div className="flex flex-col gap-figma-4">
        <span className="text-paragraph-x-small text-neutral-500">Total de receitas</span>
        <span className="text-label-medium font-bold text-accent-green-600 tabular-nums">
          + {formatCurrencyBR(totalIncome)}
        </span>
      </div>
      <div className="flex flex-col gap-figma-4">
        <span className="text-paragraph-x-small text-neutral-500">Total de despesas</span>
        <span className="text-label-medium font-bold text-accent-red-600 tabular-nums">
          - {formatCurrencyBR(totalExpenses)}
        </span>
      </div>
      <div className="flex flex-col gap-figma-4">
        <span className="text-paragraph-x-small text-neutral-500">Diferença</span>
        <span
          className={`text-label-medium font-bold tabular-nums ${
            diff >= 0 ? 'text-accent-green-600' : 'text-accent-red-600'
          }`}
        >
          {diff >= 0 ? '+' : ''}{formatCurrencyBR(diff)}
        </span>
      </div>
      <div className="flex flex-col gap-figma-4">
        <span className="text-paragraph-x-small text-neutral-500">Transações</span>
        <span className="text-label-medium font-bold text-neutral-1100 tabular-nums">{count}</span>
      </div>
    </div>
  )
}
