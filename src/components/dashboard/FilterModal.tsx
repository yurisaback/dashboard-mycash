import { useFinance } from '../../hooks/useFinance'
import type { TransactionTypeFilter } from '../../contexts/FinanceContext'

const OPTIONS: { value: TransactionTypeFilter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'income', label: 'Receitas' },
  { value: 'expense', label: 'Despesas' },
]

export interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Modal fullscreen de filtros para mobile — desliza de baixo para cima.
 */
export function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const { transactionType, setTransactionType } = useFinance()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-secondary-figma-900/50"
        style={{ zIndex: 10000 }}
        onClick={onClose}
        aria-hidden
      />
      <div
        className="fixed bottom-0 left-0 right-0 bg-surface-500 shadow-lg p-figma-24"
        style={{
          zIndex: 10001,
          borderTopLeftRadius: 'var(--shape-20)',
          borderTopRightRadius: 'var(--shape-20)',
          animation: 'slideUpFromBottom 0.3s ease-out',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Filtros"
      >
        <div className="flex items-center justify-between mb-figma-16">
          <p className="text-label-medium font-semibold text-secondary-figma-900">
            Filtros
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-paragraph-small text-neutral-500 underline"
          >
            Fechar
          </button>
        </div>
        <p className="text-paragraph-small font-semibold text-secondary-figma-900 mb-figma-12">
          Tipo de Transação
        </p>
        <div className="flex flex-col gap-figma-4">
          {OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setTransactionType(value)
                onClose()
              }}
              className={`w-full text-left px-figma-16 py-figma-12 rounded-shape-100 text-paragraph-small font-medium transition-colors ${
                transactionType === value
                  ? 'bg-secondary-figma-900 text-neutral-0'
                  : 'bg-transparent text-neutral-1100 hover:bg-neutral-300/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
