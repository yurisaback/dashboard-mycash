import { useState, useCallback, useMemo, useEffect } from 'react'
import { addMonths } from 'date-fns'
import { useFinance } from '../../hooks/useFinance'
import { formatCurrencyBR } from '../../utils'
import type { Transaction } from '../../types'
import { IconPlus, IconCheck, IconWallet } from './DashboardIcons'

function formatDueDate(date: Date): string {
  const d = date instanceof Date ? date : new Date(date)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  return `Vence dia ${day}/${month}`
}

function getAccountLabel(
  accountId: string,
  bankAccounts: { id: string; name: string }[],
  creditCards: { id: string; name: string; lastDigits?: string }[]
): string {
  const bank = bankAccounts.find((a) => a.id === accountId)
  if (bank) return bank.name
  const card = creditCards.find((c) => c.id === accountId)
  if (card) {
    const bankName = card.name.split(' ')[0] ?? 'Cartão'
    const digits = card.lastDigits ?? '****'
    return `Crédito ${bankName} **** ${digits}`
  }
  return 'Conta'
}

export function UpcomingExpensesWidget() {
  const {
    transactions,
    bankAccounts,
    creditCards,
    updateTransaction,
    addTransaction,
  } = useFinance()

  const [removingIds, setRemovingIds] = useState<Set<string>>(new Set())
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [addModalOpen, setAddModalOpen] = useState(false)

  const pendingExpenses = useMemo(() => {
    return transactions
      .filter(
        (t) =>
          t.type === 'expense' &&
          (t.isPaid === false || t.status === 'pending') &&
          t.dueDate
      )
      .map((t) => ({
        ...t,
        dueDate: t.dueDate instanceof Date ? t.dueDate : new Date(t.dueDate!),
      }))
      .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
  }, [transactions])

  const handleMarkPaid = useCallback(
    (t: Transaction) => {
      const id = t.id
      setRemovingIds((prev) => new Set(prev).add(id))

      setTimeout(() => {
        const dueDate = t.dueDate instanceof Date ? t.dueDate : new Date(t.dueDate!)
        updateTransaction(id, { isPaid: true, status: 'completed' })

        if (t.isRecurring) {
          const nextDue = addMonths(dueDate, 1)
          addTransaction({
            type: 'expense',
            value: t.value,
            description: t.description,
            category: t.category,
            date: t.date,
            dueDate: nextDue,
            accountId: t.accountId,
            memberId: t.memberId,
            installments: 1,
            currentInstallment: 1,
            status: 'pending',
            isRecurring: true,
            isPaid: false,
          })
        }

        setRemovingIds((prev) => {
          const next = new Set(prev)
          next.delete(id)
          return next
        })
        setToastMessage('Despesa marcada como paga!')
      }, 280)
    },
    [updateTransaction, addTransaction]
  )

  useEffect(() => {
    if (!toastMessage) return
    const t = setTimeout(() => setToastMessage(null), 2500)
    return () => clearTimeout(t)
  }, [toastMessage])

  const isEmpty = pendingExpenses.length === 0

  return (
    <section
      className="flex w-full min-w-0 flex-col rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-32 shadow-sm"
      style={{ gap: 'var(--space-24, 24px)' }}
      aria-label="Próximas despesas"
    >
      {/* Header: ícone 20px + título; botão + 40px */}
      <header className="flex items-center justify-between gap-figma-16">
        <div className="flex items-center gap-figma-8">
          <span className="text-neutral-500 [&_svg]:h-5 [&_svg]:w-5" aria-hidden>
            <IconWallet />
          </span>
          <h2 className="text-heading-md font-bold text-text-primary">
            Próximas despesas
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setAddModalOpen(true)}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-transparent text-neutral-500 transition-colors hover:border-primary-figma-500 hover:bg-primary-figma-500/10 hover:text-primary-figma-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
          aria-label="Adicionar despesa"
        >
          <IconPlus />
        </button>
      </header>

      {/* Lista ou estado vazio */}
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center rounded-shape-20 border-2 border-dashed border-neutral-300 py-figma-24 text-center">
          <span className="mb-figma-8 flex h-12 w-12 items-center justify-center rounded-full bg-accent-green-600/15 text-accent-green-600 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:flex-shrink-0">
            <IconCheck />
          </span>
          <p className="text-body-md text-text-tertiary">
            Nenhuma despesa pendente
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-0" style={{ gap: 0 }}>
          {pendingExpenses.map((t, index) => {
            const isRemoving = removingIds.has(t.id)
            const dueDate = t.dueDate instanceof Date ? t.dueDate : new Date(t.dueDate!)
            const accountLabel = getAccountLabel(
              t.accountId,
              bankAccounts,
              creditCards
            )
            return (
              <li
                key={t.id}
                className={`flex items-center justify-between gap-figma-16 border-neutral-200 py-figma-16 transition-opacity duration-200 ${
                  index > 0 ? 'border-t border-neutral-200' : ''
                } ${isRemoving ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="min-w-0 flex-1 flex flex-col gap-figma-2">
                  <p className="text-label-medium font-semibold text-text-primary truncate">
                    {t.description}
                  </p>
                  <p className="text-paragraph-x-small text-neutral-500">
                    {formatDueDate(dueDate)}
                  </p>
                  <p className="text-paragraph-x-small text-neutral-400">
                    {accountLabel}
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-col items-end gap-figma-8">
                  <p className="text-label-medium font-bold text-text-primary tabular-nums">
                    {formatCurrencyBR(t.value)}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleMarkPaid(t)}
                    disabled={isRemoving}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-transparent text-neutral-500 transition-colors hover:border-accent-green-600 hover:bg-accent-green-600/15 hover:text-accent-green-600 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 disabled:opacity-50 [&_svg]:h-4 [&_svg]:w-4"
                    aria-label="Marcar como paga"
                  >
                    <IconCheck />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}

      {/* Toast */}
      {toastMessage && (
        <div
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-shape-20 border border-neutral-300 bg-surface-500 px-figma-24 py-figma-12 text-label-medium text-text-primary shadow-md"
          role="status"
          aria-live="polite"
        >
          {toastMessage}
        </div>
      )}

      {/* Modal placeholder: nova transação */}
      {addModalOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-neutral-1100/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-new-transaction-title"
        >
          <div className="w-full max-w-md rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-32 shadow-md">
            <h2 id="modal-new-transaction-title" className="text-heading-md font-bold text-text-primary mb-figma-16">
              Nova transação
            </h2>
            <p className="text-body-md text-text-tertiary mb-figma-24">
              Formulário de nova transação em breve.
            </p>
            <button
              type="button"
              onClick={() => setAddModalOpen(false)}
              className="rounded-shape-20 border border-neutral-300 bg-transparent px-figma-24 py-figma-12 text-label-medium text-text-primary hover:bg-neutral-300/30"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
