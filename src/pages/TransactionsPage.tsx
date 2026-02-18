import { useState, useMemo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { useFinance } from '../hooks/useFinance'
import { formatCurrencyBR } from '../utils'
import { TransactionsTable } from '../components/dashboard'
import { TransactionsFilters, TransactionsSummary } from '../components/transactions'
import { NewTransactionModal } from '../components/modals'
import { IconDocumentList } from '../components/dashboard/DashboardIcons'
import type { Transaction } from '../types'
import type { TransactionsFiltersValues } from '../components/transactions'

function transactionsToCSV(transactions: Transaction[]): string {
  const headers = ['Data', 'Tipo', 'Descrição', 'Categoria', 'Valor', 'Status']
  const rows = transactions.map((t) => {
    const d = t.date instanceof Date ? t.date : new Date(t.date)
    const dateStr = d.toLocaleDateString('pt-BR')
    const typeStr = t.type === 'income' ? 'Receita' : 'Despesa'
    const valueStr = t.type === 'income' ? `+${t.value}` : `-${t.value}`
    return [dateStr, typeStr, t.description, t.category, valueStr, t.status]
  })
  const csv = [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\n')
  return '\uFEFF' + csv
}

function downloadCSV(transactions: Transaction[]) {
  const csv = transactionsToCSV(transactions)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `transacoes-${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

function downloadPDF(transactions: Transaction[]) {
  const lines = transactions.map((t) => {
    const d = t.date instanceof Date ? t.date : new Date(t.date)
    const dateStr = d.toLocaleDateString('pt-BR')
    const value = formatCurrencyBR(t.value)
    const sign = t.type === 'income' ? '+' : '-'
    return `${dateStr} | ${t.description} | ${t.category} | ${sign} ${value}`
  })
  const content = lines.join('\n')
  const printWindow = window.open('', '_blank')
  if (!printWindow) return
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head><title>Transações</title></head>
    <body style="font-family: sans-serif; padding: 24px;">
    <h1>Transações - ${new Date().toLocaleDateString('pt-BR')}</h1>
    <pre style="white-space: pre-wrap; font-size: 12px;">${content}</pre>
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.print()
  printWindow.close()
}

function TransactionsPage() {
  const location = useLocation()
  const {
    getFilteredTransactions,
    searchText,
    transactionType,
    selectedMember,
    dateRange: contextDateRange,
  } = useFinance()
  const filterAccountIdFromState = (location.state as { filterAccountId?: string } | null)?.filterAccountId

  const [newTransactionOpen, setNewTransactionOpen] = useState(false)
  const [filterValues, setFilterValues] = useState<TransactionsFiltersValues>(() => ({
    search: searchText,
    type: transactionType,
    category: '',
    accountId: filterAccountIdFromState ?? '',
    memberId: selectedMember ?? '',
    status: 'all',
    dateRange: contextDateRange,
  }))

  const filteredTransactions = useMemo(() => {
    const base = getFilteredTransactions()
    let list = base
    if (filterValues.accountId) list = list.filter((t) => t.accountId === filterValues.accountId)
    if (filterValues.category) list = list.filter((t) => t.category === filterValues.category)
    if (filterValues.status && filterValues.status !== 'all') list = list.filter((t) => t.status === filterValues.status)
    return list
  }, [getFilteredTransactions, filterValues.accountId, filterValues.category, filterValues.status])

  const summary = useMemo(() => {
    const income = filteredTransactions.filter((t) => t.type === 'income').reduce((s, t) => s + t.value, 0)
    const expenses = filteredTransactions.filter((t) => t.type === 'expense').reduce((s, t) => s + t.value, 0)
    return { totalIncome: income, totalExpenses: expenses, count: filteredTransactions.length }
  }, [filteredTransactions])

  const handleExportCSV = useCallback((transactions: Transaction[]) => {
    downloadCSV(transactions)
  }, [])

  const handleExportPDF = useCallback((transactions: Transaction[]) => {
    downloadPDF(transactions)
  }, [])

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="page-padding-x container-responsive py-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-figma-24">
          <div className="flex items-center gap-figma-12">
            <span className="text-neutral-1100 [&_svg]:w-8 [&_svg]:h-8">
              <IconDocumentList />
            </span>
            <div>
              <h1 className="text-heading-lg font-bold text-text-primary">Transações</h1>
              <p className="text-body-md text-text-secondary">
                Gerencie e visualize todas as suas transações
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setNewTransactionOpen(true)}
            className="rounded-shape-20 bg-secondary-figma-900 text-neutral-0 px-figma-24 py-figma-12 text-label-medium font-semibold hover:opacity-90 w-full sm:w-auto"
          >
            Nova Transação
          </button>
        </header>

        <div className="flex flex-col gap-figma-24">
          <section className="rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24">
            <h2 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">Filtros</h2>
            <TransactionsFilters values={filterValues} onChange={setFilterValues} />
          </section>

          <TransactionsSummary
            totalIncome={summary.totalIncome}
            totalExpenses={summary.totalExpenses}
            count={summary.count}
          />

          {summary.count === 0 ? (
            <section className="flex flex-col items-center justify-center gap-figma-24 rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-32 py-16">
              <p className="text-body-md text-neutral-500 text-center">
                Nenhuma transação registrada ainda
              </p>
              <button
                type="button"
                onClick={() => setNewTransactionOpen(true)}
                className="rounded-shape-20 bg-secondary-figma-900 text-neutral-0 px-figma-24 py-figma-12 text-label-medium font-semibold hover:opacity-90"
              >
                Adicionar primeira transação
              </button>
            </section>
          ) : (
            <TransactionsTable
              pageSize={10}
              filterAccountId={filterValues.accountId || undefined}
              filterCategory={filterValues.category || undefined}
              filterStatus={filterValues.status !== 'all' ? filterValues.status : undefined}
              useContextFiltersOnly
              sortable
              showExport
              onExportCSV={handleExportCSV}
              onExportPDF={handleExportPDF}
            />
          )}
        </div>
      </div>

      <NewTransactionModal
        isOpen={newTransactionOpen}
        onClose={() => setNewTransactionOpen(false)}
      />
    </div>
  )
}

export default TransactionsPage
