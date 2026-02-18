import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { format } from 'date-fns'
import { useFinance } from '../../hooks/useFinance'
import { formatCurrencyBR } from '../../utils'
import {
  IconSearch,
  IconDocumentList,
  IconUser,
  IconArrowDownLeft,
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from './DashboardIcons'

const PAGE_SIZE = 5
const MAX_VISIBLE_PAGES = 7

function formatTableDate(date: Date): string {
  const d = date instanceof Date ? date : new Date(date)
  return format(d, 'dd/MM/yyyy')
}

function getAccountName(
  accountId: string,
  bankAccounts: { id: string; name: string }[],
  creditCards: { id: string; name: string }[]
): string {
  const bank = bankAccounts.find((a) => a.id === accountId)
  if (bank) return bank.name
  const card = creditCards.find((c) => c.id === accountId)
  if (card) return card.name
  return 'Desconhecido'
}

function getMemberAvatar(
  memberId: string | null,
  familyMembers: { id: string; name: string; avatarUrl: string }[]
) {
  if (!memberId) return null
  return familyMembers.find((m) => m.id === memberId) ?? null
}

export function TransactionsTable() {
  const {
    getFilteredTransactions,
    bankAccounts,
    creditCards,
    familyMembers,
  } = useFinance()

  const [localSearch, setLocalSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState<'all' | 'income' | 'expense'>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const tableRef = useRef<HTMLDivElement>(null)

  const filteredAndSorted = useMemo(() => {
    const base = getFilteredTransactions()
    let list = base
    if (typeFilter !== 'all') {
      list = list.filter((t) => t.type === typeFilter)
    }
    if (localSearch.trim()) {
      const q = localSearch.toLowerCase().trim()
      list = list.filter(
        (t) =>
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      )
    }
    return [...list].sort((a, b) => {
      const da = a.date instanceof Date ? a.date : new Date(a.date)
      const db = b.date instanceof Date ? b.date : new Date(b.date)
      return db.getTime() - da.getTime()
    })
  }, [getFilteredTransactions, typeFilter, localSearch])

  const totalItems = filteredAndSorted.length
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE))
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const pageItems = filteredAndSorted.slice(startIndex, startIndex + PAGE_SIZE)

  useEffect(() => {
    setCurrentPage(1)
  }, [typeFilter, localSearch])

  const goToPage = useCallback(
    (page: number) => {
      const next = Math.max(1, Math.min(page, totalPages))
      setCurrentPage(next)
      tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [totalPages]
  )

  const pageNumbers = useMemo(() => {
    if (totalPages <= MAX_VISIBLE_PAGES) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    const first = [1, 2, 3]
    const last = [totalPages - 1, totalPages]
    if (currentPage <= 4) return [...first, '...', ...last]
    if (currentPage >= totalPages - 2) return [...first, '...', ...last]
    return [
      ...first,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      ...last,
    ]
  }, [totalPages, currentPage])

  const endItem = Math.min(startIndex + PAGE_SIZE, totalItems)
  const showingText =
    totalItems === 0
      ? 'Mostrando 0 a 0 de 0'
      : `Mostrando ${startIndex + 1} a ${endItem} de ${totalItems}`

  return (
    <section
      className="flex w-full min-w-0 flex-col self-stretch rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-32 shadow-sm"
      style={{ gap: 'var(--space-32, 32px)' }}
      aria-label="Extrato detalhado"
    >
      {/* Header: título à esquerda; busca + select à direita */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-figma-8">
          <span className="text-text-primary [&_svg]:h-6 [&_svg]:w-6" aria-hidden>
            <IconDocumentList />
          </span>
          <h2 className="text-heading-md font-bold text-text-primary">
            Extrato detalhado
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-figma-16">
          <label className="relative w-full sm:w-[256px]">
            <span className="sr-only">Buscar lançamentos</span>
            <span className="absolute left-figma-12 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none [&_svg]:h-5 [&_svg]:w-5">
              <IconSearch />
            </span>
            <input
              type="search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Buscar lançamentos..."
              className="w-full min-w-0 rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 pl-10 pr-figma-16 text-paragraph-small text-text-primary placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
            />
          </label>
          <label className="w-full sm:w-[140px]">
            <span className="sr-only">Tipo de transação</span>
            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value as 'all' | 'income' | 'expense')
              }
              className="w-full min-w-0 rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 pl-figma-16 pr-figma-16 text-paragraph-small text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
            >
              <option value="all">Todos</option>
              <option value="income">Receitas</option>
              <option value="expense">Despesas</option>
            </select>
          </label>
        </div>
      </div>

      {/* Tabela */}
      <div ref={tableRef} className="scrollbar-hide w-full min-w-0 overflow-x-auto rounded-shape-20 border border-neutral-300">
        <table className="w-full min-w-[600px] border-collapse text-left">
          <thead>
            <tr className="bg-neutral-200">
              <th
                scope="col"
                className="w-[50px] min-w-[50px] py-figma-12 pl-figma-16 pr-figma-8 text-paragraph-x-small font-semibold text-text-primary"
              >
                Membro
              </th>
              <th
                scope="col"
                className="py-figma-12 pl-figma-8 pr-figma-8 text-paragraph-x-small font-semibold text-text-primary"
              >
                Datas
              </th>
              <th
                scope="col"
                className="py-figma-12 pl-figma-8 pr-figma-8 text-paragraph-x-small font-semibold text-text-primary"
              >
                Descrição
              </th>
              <th
                scope="col"
                className="py-figma-12 pl-figma-8 pr-figma-8 text-paragraph-x-small font-semibold text-text-primary"
              >
                Categorias
              </th>
              <th
                scope="col"
                className="py-figma-12 pl-figma-8 pr-figma-8 text-paragraph-x-small font-semibold text-text-primary"
              >
                Conta/cartão
              </th>
              <th
                scope="col"
                className="py-figma-12 pl-figma-8 pr-figma-8 text-paragraph-x-small font-semibold text-text-primary"
              >
                Parcelas
              </th>
              <th
                scope="col"
                className="py-figma-12 pr-figma-16 pl-figma-8 text-right text-paragraph-x-small font-semibold text-text-primary"
              >
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            {totalItems === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="h-24 border-t border-neutral-300 text-center text-paragraph-small text-neutral-500"
                >
                  Nenhum lançamento encontrado.
                </td>
              </tr>
            ) : (
              pageItems.map((t, i) => {
                const rowIndex = startIndex + i
                const isZebra = rowIndex % 2 === 1
                const member = getMemberAvatar(t.memberId, familyMembers)
                const date = t.date instanceof Date ? t.date : new Date(t.date)
                const accountName = getAccountName(
                  t.accountId,
                  bankAccounts,
                  creditCards
                )
                const parcelas =
                  t.installments > 1 ? `${t.installments}x` : '-'
                const isIncome = t.type === 'income'
                const valueFormatted = formatCurrencyBR(t.value)
                const valueDisplay = isIncome
                  ? `+ ${valueFormatted}`
                  : `- ${valueFormatted}`

                return (
                  <tr
                    key={t.id}
                    className={`transition-colors ${
                      isZebra ? 'bg-neutral-200/50' : 'bg-neutral-0'
                    } hover:bg-neutral-300/60`}
                  >
                    <td className="w-[50px] min-w-[50px] py-figma-12 pl-figma-16 pr-figma-8">
                      <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-300 text-neutral-500">
                        {member?.avatarUrl ? (
                          <img
                            src={member.avatarUrl}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <IconUser />
                        )}
                      </div>
                    </td>
                    <td className="py-figma-12 pl-figma-8 pr-figma-8 text-paragraph-x-small text-neutral-500">
                      {formatTableDate(date)}
                    </td>
                    <td className="py-figma-12 pl-figma-8 pr-figma-8">
                      <div className="flex items-center gap-figma-8">
                        <span
                          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                            isIncome
                              ? 'bg-accent-green-600/15 text-accent-green-600'
                              : 'bg-accent-red-600/15 text-accent-red-600'
                          } [&_svg]:h-4 [&_svg]:w-4`}
                        >
                          {isIncome ? (
                            <IconArrowDownLeft />
                          ) : (
                            <IconArrowUpRight />
                          )}
                        </span>
                        <span className="text-label-medium font-bold text-text-primary">
                          {t.description}
                        </span>
                      </div>
                    </td>
                    <td className="py-figma-12 pl-figma-8 pr-figma-8">
                      <span className="inline-flex rounded-full bg-neutral-200 px-figma-8 py-figma-2 text-paragraph-x-small text-neutral-500">
                        {t.category}
                      </span>
                    </td>
                    <td className="py-figma-12 pl-figma-8 pr-figma-8 text-paragraph-x-small text-neutral-500">
                      {accountName}
                    </td>
                    <td className="py-figma-12 pl-figma-8 pr-figma-8 text-paragraph-x-small text-neutral-500">
                      {parcelas}
                    </td>
                    <td className="py-figma-12 pr-figma-16 pl-figma-8 text-right text-label-medium font-bold tabular-nums">
                      <span
                        className={
                          isIncome
                            ? 'text-accent-green-600'
                            : 'text-text-primary'
                        }
                      >
                        {valueDisplay}
                      </span>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-paragraph-x-small text-neutral-500">
          {showingText}
        </p>
        <div className="flex items-center gap-figma-8">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => goToPage(currentPage - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-transparent text-neutral-500 transition-colors hover:enabled:bg-neutral-200 disabled:cursor-default disabled:opacity-50"
            aria-label="Página anterior"
          >
            <IconChevronLeft />
          </button>
          <div className="flex items-center gap-1">
            {pageNumbers.map((p, i) =>
              p === '...' ? (
                <span
                  key={`ellipsis-${i}`}
                  className="px-2 text-paragraph-x-small text-neutral-500"
                >
                  ...
                </span>
              ) : (
                <button
                  key={p}
                  type="button"
                  onClick={() => goToPage(p as number)}
                  className={`flex h-9 min-w-[36px] items-center justify-center rounded-full px-2 text-paragraph-x-small font-medium transition-colors ${
                    currentPage === p
                      ? 'bg-neutral-1100 text-neutral-0'
                      : 'bg-transparent text-neutral-500 hover:bg-neutral-200'
                  }`}
                  aria-current={currentPage === p ? 'page' : undefined}
                  aria-label={`Página ${p}`}
                >
                  {p}
                </button>
              )
            )}
          </div>
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => goToPage(currentPage + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-transparent text-neutral-500 transition-colors hover:enabled:bg-neutral-200 disabled:cursor-default disabled:opacity-50"
            aria-label="Próxima página"
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
