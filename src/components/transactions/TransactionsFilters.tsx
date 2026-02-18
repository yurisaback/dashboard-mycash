import { useFinance } from '../../hooks/useFinance'
import { IconSearch } from '../dashboard/DashboardIcons'
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from '../../constants'
import type { TransactionStatus } from '../../types'
import { format } from 'date-fns'
import type { DateRange } from '../../contexts/FinanceContext'

const ALL_CATEGORIES = [...new Set([...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES])].sort()

export interface TransactionsFiltersValues {
  search: string
  type: 'all' | 'income' | 'expense'
  category: string
  accountId: string
  memberId: string
  status: 'all' | TransactionStatus
  dateRange: DateRange
}

export interface TransactionsFiltersProps {
  values: TransactionsFiltersValues
  onChange: (values: TransactionsFiltersValues) => void
}

export function TransactionsFilters({ values, onChange }: TransactionsFiltersProps) {
  const { bankAccounts, creditCards, familyMembers, setSearchText, setTransactionType, setSelectedMember, setDateRange } = useFinance()

  const update = (partial: Partial<TransactionsFiltersValues>) => {
    const next = { ...values, ...partial }
    onChange(next)
    if ('search' in partial) setSearchText(next.search)
    if ('type' in partial) setTransactionType(next.type === 'all' ? 'all' : next.type)
    if ('memberId' in partial) setSelectedMember(next.memberId ? next.memberId : null)
    if ('dateRange' in partial && next.dateRange) setDateRange(next.dateRange)
  }

  const allAccounts = [
    ...bankAccounts.map((a) => ({ id: a.id, name: a.name })),
    ...creditCards.map((c) => ({ id: c.id, name: c.name })),
  ]

  return (
    <div className="flex flex-col gap-figma-16 lg:flex-row lg:flex-wrap lg:items-end">
      <label className="relative flex-1 min-w-[200px] max-w-[280px]">
        <span className="sr-only">Buscar</span>
        <span className="absolute left-figma-12 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none [&_svg]:h-5 [&_svg]:w-5">
          <IconSearch />
        </span>
        <input
          type="search"
          value={values.search}
          onChange={(e) => update({ search: e.target.value })}
          placeholder="Buscar lançamentos..."
          className="w-full rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 pl-10 pr-figma-16 text-paragraph-small text-text-primary placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
        />
      </label>

      <label className="w-full sm:w-[140px]">
        <span className="text-paragraph-x-small text-neutral-500 block mb-figma-4">Tipo</span>
        <select
          value={values.type}
          onChange={(e) => update({ type: e.target.value as TransactionsFiltersValues['type'] })}
          className="w-full rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 px-figma-16 text-paragraph-small text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
        >
          <option value="all">Todos</option>
          <option value="income">Receitas</option>
          <option value="expense">Despesas</option>
        </select>
      </label>

      <label className="w-full sm:w-[160px]">
        <span className="text-paragraph-x-small text-neutral-500 block mb-figma-4">Categoria</span>
        <select
          value={values.category}
          onChange={(e) => update({ category: e.target.value })}
          className="w-full rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 px-figma-16 text-paragraph-small text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
        >
          <option value="">Todas</option>
          {ALL_CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label className="w-full sm:w-[180px]">
        <span className="text-paragraph-x-small text-neutral-500 block mb-figma-4">Conta/Cartão</span>
        <select
          value={values.accountId}
          onChange={(e) => update({ accountId: e.target.value })}
          className="w-full rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 px-figma-16 text-paragraph-small text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
        >
          <option value="">Todas</option>
          {allAccounts.map((a) => (
            <option key={a.id} value={a.id}>{a.name}</option>
          ))}
        </select>
      </label>

      <label className="w-full sm:w-[160px]">
        <span className="text-paragraph-x-small text-neutral-500 block mb-figma-4">Membro</span>
        <select
          value={values.memberId}
          onChange={(e) => update({ memberId: e.target.value })}
          className="w-full rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 px-figma-16 text-paragraph-small text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
        >
          <option value="">Todos</option>
          {familyMembers.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
      </label>

      <label className="w-full sm:w-[140px]">
        <span className="text-paragraph-x-small text-neutral-500 block mb-figma-4">Status</span>
        <select
          value={values.status}
          onChange={(e) => update({ status: e.target.value as TransactionsFiltersValues['status'] })}
          className="w-full rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 px-figma-16 text-paragraph-small text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
        >
          <option value="all">Todos</option>
          <option value="completed">Concluído</option>
          <option value="pending">Pendente</option>
          <option value="cancelled">Cancelado</option>
        </select>
      </label>

      <div className="flex flex-col sm:flex-row gap-figma-8">
        <label className="w-full sm:w-[140px]">
          <span className="text-paragraph-x-small text-neutral-500 block mb-figma-4">De</span>
          <input
            type="date"
            value={format(values.dateRange.startDate, 'yyyy-MM-dd')}
            onChange={(e) =>
              update({
                dateRange: {
                  ...values.dateRange,
                  startDate: new Date(e.target.value),
                },
              })
            }
            className="w-full rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 px-figma-16 text-paragraph-small text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
          />
        </label>
        <label className="w-full sm:w-[140px]">
          <span className="text-paragraph-x-small text-neutral-500 block mb-figma-4">Até</span>
          <input
            type="date"
            value={format(values.dateRange.endDate, 'yyyy-MM-dd')}
            onChange={(e) =>
              update({
                dateRange: {
                  ...values.dateRange,
                  endDate: new Date(e.target.value),
                },
              })
            }
            className="w-full rounded-shape-20 border border-neutral-300 bg-neutral-0 py-figma-12 px-figma-16 text-paragraph-small text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
          />
        </label>
      </div>
    </div>
  )
}
