import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { useFinance } from '../../hooks/useFinance'
import { formatCurrencyBR } from '../../utils'
import type { CreditCard } from '../../types'
import { IconChevronLeft, IconChevronRight } from '../dashboard/DashboardIcons'

const DONUT_R = 40
const DONUT_STROKE = 12
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_R

export interface CardDetailsModalProps {
  card: CreditCard | null
  onClose: () => void
  onAddExpense?: (accountId: string) => void
}

function formatTableDate(date: Date): string {
  const d = date instanceof Date ? date : new Date(date)
  return format(d, 'dd/MM/yyyy')
}

export function CardDetailsModal({
  card,
  onClose,
  onAddExpense,
}: CardDetailsModalProps) {
  const navigate = useNavigate()
  const { transactions } = useFinance()
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 10

  const cardExpenses = useMemo(() => {
    if (!card) return []
    return transactions
      .filter((t) => t.type === 'expense' && t.accountId === card.id)
      .sort((a, b) => {
        const da = a.date instanceof Date ? a.date : new Date(a.date)
        const db = b.date instanceof Date ? b.date : new Date(b.date)
        return db.getTime() - da.getTime()
      })
  }, [card, transactions])

  const totalPages = Math.max(1, Math.ceil(cardExpenses.length / PAGE_SIZE))
  const startIndex = (page - 1) * PAGE_SIZE
  const pageItems = cardExpenses.slice(startIndex, startIndex + PAGE_SIZE)

  const availableLimit = card ? card.limit - card.currentBill : 0
  const usagePercent = card && card.limit > 0
    ? (card.currentBill / card.limit) * 100
    : 0
  const dashOffset = DONUT_CIRCUMFERENCE * (1 - usagePercent / 100)

  if (!card) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-secondary-figma-900/50 z-[10000]"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl max-h-[90vh] overflow-hidden flex flex-col rounded-shape-20 border border-neutral-300 bg-surface-500 shadow-lg z-[10001]"
        role="dialog"
        aria-modal="true"
        aria-label="Detalhes do cartão"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex-shrink-0 flex items-center justify-between gap-figma-16 p-figma-24 border-b border-neutral-300">
          <h2 className="text-heading-x-small font-bold text-neutral-1100 truncate">{card.name}</h2>
          <button
            type="button"
            onClick={onClose}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50 shrink-0"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <div className="flex-1 min-h-0 overflow-y-auto p-figma-24">
          {/* Informações + Donut */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_160px] gap-figma-24 mb-figma-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-figma-16">
              <div className="rounded-shape-20 border border-neutral-300 bg-neutral-50 p-figma-16">
                <p className="text-paragraph-x-small text-neutral-500 mb-1">Limite total</p>
                <p className="text-label-medium font-bold text-neutral-1100">{formatCurrencyBR(card.limit)}</p>
              </div>
              <div className="rounded-shape-20 border border-neutral-300 bg-neutral-50 p-figma-16">
                <p className="text-paragraph-x-small text-neutral-500 mb-1">Fatura atual</p>
                <p className="text-label-medium font-bold text-neutral-1100">{formatCurrencyBR(card.currentBill)}</p>
              </div>
              <div className="rounded-shape-20 border border-neutral-300 bg-neutral-50 p-figma-16">
                <p className="text-paragraph-x-small text-neutral-500 mb-1">Disponível</p>
                <p className="text-label-medium font-bold text-neutral-1100">{formatCurrencyBR(availableLimit)}</p>
              </div>
              <div className="rounded-shape-20 border border-neutral-300 bg-neutral-50 p-figma-16">
                <p className="text-paragraph-x-small text-neutral-500 mb-1">Uso</p>
                <p className="text-label-medium font-bold text-neutral-1100">{usagePercent.toFixed(1)}%</p>
              </div>
              <div className="rounded-shape-20 border border-neutral-300 bg-neutral-50 p-figma-16">
                <p className="text-paragraph-x-small text-neutral-500 mb-1">Fechamento</p>
                <p className="text-label-medium font-bold text-neutral-1100">Dia {card.closingDay}</p>
              </div>
              <div className="rounded-shape-20 border border-neutral-300 bg-neutral-50 p-figma-16">
                <p className="text-paragraph-x-small text-neutral-500 mb-1">Vencimento</p>
                <p className="text-label-medium font-bold text-neutral-1100">Dia {card.dueDay}</p>
              </div>
              {card.lastDigits && (
                <div className="rounded-shape-20 border border-neutral-300 bg-neutral-50 p-figma-16">
                  <p className="text-paragraph-x-small text-neutral-500 mb-1">Final</p>
                  <p className="text-label-medium font-bold text-neutral-1100 tabular-nums">•••• {card.lastDigits}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-32 h-32">
                <svg
                  width={128}
                  height={128}
                  viewBox="0 0 128 128"
                  className="-rotate-90"
                >
                  <circle
                    cx={64}
                    cy={64}
                    r={DONUT_R}
                    fill="none"
                    stroke="var(--neutral-300)"
                    strokeWidth={DONUT_STROKE}
                  />
                  <circle
                    cx={64}
                    cy={64}
                    r={DONUT_R}
                    fill="none"
                    stroke="var(--accent-red-600)"
                    strokeWidth={DONUT_STROKE}
                    strokeDasharray={DONUT_CIRCUMFERENCE}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-label-medium font-bold text-neutral-1100">
                  {usagePercent.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Barra de progresso alternativa (mobile) */}
          <div className="lg:hidden h-3 rounded-full bg-neutral-200 overflow-hidden mb-figma-24">
            <div
              className="h-full bg-accent-red-600 transition-all"
              style={{ width: `${Math.min(100, usagePercent)}%` }}
            />
          </div>

          {/* Botões de ação */}
          <div className="flex flex-wrap gap-figma-12 mb-figma-24">
            <button
              type="button"
              onClick={() => {
                onClose()
                navigate('/transactions', { state: { filterAccountId: card.id } })
              }}
              className="px-figma-16 py-figma-12 rounded-full border border-neutral-300 text-label-medium font-medium text-neutral-1100 hover:bg-neutral-100"
            >
              Ver Extrato Completo
            </button>
            <button
              type="button"
              onClick={() => {
                onClose()
                onAddExpense?.(card.id)
              }}
              className="px-figma-16 py-figma-12 rounded-full bg-secondary-figma-900 text-neutral-0 text-label-medium font-medium hover:opacity-90"
            >
              Adicionar Despesa
            </button>
          </div>

          {/* Tabela de despesas */}
          <h3 className="text-label-medium font-semibold text-neutral-1100 mb-figma-12">Despesas neste cartão</h3>
          {cardExpenses.length === 0 ? (
            <p className="text-paragraph-small text-neutral-500 py-figma-24 text-center rounded-shape-20 border border-neutral-300 border-dashed">
              Nenhuma despesa registrada neste cartão ainda.
            </p>
          ) : (
            <>
              <div className="overflow-x-auto rounded-shape-20 border border-neutral-300">
                <table className="w-full min-w-[500px] border-collapse text-left">
                  <thead>
                    <tr className="bg-neutral-200">
                      <th className="py-figma-12 pl-figma-16 text-paragraph-x-small font-semibold text-neutral-1100">Data</th>
                      <th className="py-figma-12 pl-figma-8 text-paragraph-x-small font-semibold text-neutral-1100">Descrição</th>
                      <th className="py-figma-12 pl-figma-8 text-paragraph-x-small font-semibold text-neutral-1100">Categoria</th>
                      <th className="py-figma-12 pl-figma-8 text-paragraph-x-small font-semibold text-neutral-1100">Parcelas</th>
                      <th className="py-figma-12 pr-figma-16 pl-figma-8 text-right text-paragraph-x-small font-semibold text-neutral-1100">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageItems.map((t, i) => {
                      const date = t.date instanceof Date ? t.date : new Date(t.date)
                      const parcelas = t.installments > 1 ? `${t.currentInstallment}/${t.installments}x` : '-'
                      return (
                        <tr
                          key={t.id}
                          className={`${i % 2 === 1 ? 'bg-neutral-200/50' : 'bg-neutral-0'} hover:bg-neutral-300/60`}
                        >
                          <td className="py-figma-12 pl-figma-16 text-paragraph-x-small text-neutral-500">
                            {formatTableDate(date)}
                          </td>
                          <td className="py-figma-12 pl-figma-8 text-paragraph-small font-medium text-neutral-1100">
                            {t.description}
                          </td>
                          <td className="py-figma-12 pl-figma-8 text-paragraph-x-small text-neutral-500">
                            {t.category}
                          </td>
                          <td className="py-figma-12 pl-figma-8 text-paragraph-x-small text-neutral-500">
                            {parcelas}
                          </td>
                          <td className="py-figma-12 pr-figma-16 pl-figma-8 text-right text-label-medium font-bold text-neutral-1100">
                            - {formatCurrencyBR(t.value)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-figma-16">
                  <p className="text-paragraph-x-small text-neutral-500">
                    Página {page} de {totalPages}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={page <= 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center disabled:opacity-50"
                    >
                      <IconChevronLeft />
                    </button>
                    <button
                      type="button"
                      disabled={page >= totalPages}
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center disabled:opacity-50"
                    >
                      <IconChevronRight />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
