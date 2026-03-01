import { useState, useCallback, useMemo } from 'react'
import { format } from 'date-fns'
import { useFinance } from '../../hooks/useFinance'
import { useToast } from '../../contexts/ToastContext'
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from '../../constants'
import type { TransactionType } from '../../types'
import {
  IconArrowDownLeft,
  IconArrowUpRight,
} from '../dashboard/DashboardIcons'

export interface NewTransactionModalProps {
  isOpen: boolean
  onClose: () => void
  /** Pré-preenche conta/cartão ao abrir */
  preselectedAccountId?: string
}

function parseCurrencyInput(value: string): number {
  const normalized = value.replace(/\./g, '').replace(',', '.')
  const n = parseFloat(normalized)
  return isNaN(n) ? 0 : n
}

export function NewTransactionModal({
  isOpen,
  onClose,
  preselectedAccountId,
}: NewTransactionModalProps) {
  const {
    addTransaction,
    bankAccounts,
    creditCards,
    familyMembers,
    transactions,
  } = useFinance()
  const { showToast } = useToast()

  const [type, setType] = useState<TransactionType>('expense')
  const [valueInput, setValueInput] = useState('')
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [memberId, setMemberId] = useState<string | null>(null)
  const [accountId, setAccountId] = useState(preselectedAccountId ?? '')
  const [installments, setInstallments] = useState(1)
  const [isRecurring, setIsRecurring] = useState(false)
  const [newCategoryInput, setNewCategoryInput] = useState('')
  const [showNewCategory, setShowNewCategory] = useState(false)

  const [errors, setErrors] = useState<Record<string, string>>({})

  const isAccountCreditCard = useMemo(() => {
    return creditCards.some((c) => c.id === accountId)
  }, [creditCards, accountId])

  const showInstallments = type === 'expense' && isAccountCreditCard
  const showRecurring = type === 'expense'

  const categories = useMemo(() => {
    const fromTx = new Set(transactions.map((t) => t.category))
    const base = type === 'income' ? [...INCOME_CATEGORIES] : [...EXPENSE_CATEGORIES]
    const merged = new Set([...base, ...fromTx])
    return Array.from(merged).sort()
  }, [type, transactions])

  const resetForm = useCallback(() => {
    setType('expense')
    setValueInput('')
    setDate(format(new Date(), 'yyyy-MM-dd'))
    setDescription('')
    setCategory('')
    setMemberId(null)
    setAccountId(preselectedAccountId ?? '')
    setInstallments(1)
    setIsRecurring(false)
    setNewCategoryInput('')
    setShowNewCategory(false)
    setErrors({})
  }, [preselectedAccountId])

  const handleClose = useCallback(() => {
    resetForm()
    onClose()
  }, [onClose, resetForm])

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
  }

  const handleConfirmNewCategory = () => {
    const name = newCategoryInput.trim()
    if (name.length >= 2) {
      setCategory(name)
      setNewCategoryInput('')
      setShowNewCategory(false)
    }
  }

  const handleRecurringChange = (checked: boolean) => {
    if (checked && installments > 1) {
      setInstallments(1)
    }
    setIsRecurring(checked)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const err: Record<string, string> = {}

    const value = parseCurrencyInput(valueInput)
    if (value <= 0) err.value = 'Valor deve ser maior que zero'

    if (description.trim().length < 3) err.description = 'Descrição deve ter pelo menos 3 caracteres'
    if (!category.trim()) err.category = 'Selecione uma categoria'
    if (!accountId) err.accountId = 'Selecione uma conta ou cartão'

    setErrors(err)
    if (Object.keys(err).length > 0) return

    const finalInstallments = showInstallments && !isRecurring ? installments : 1

    addTransaction({
      type,
      value,
      description: description.trim(),
      category: category.trim(),
      date: new Date(date),
      accountId,
      memberId,
      installments: finalInstallments,
      currentInstallment: 1,
      status: 'completed',
      isRecurring,
      isPaid: false,
    })

    showToast('Transação registrada com sucesso!')
    handleClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-secondary-figma-900/50 z-[10000]"
        onClick={handleClose}
        aria-hidden
      />
      <div
        className="fixed inset-0 z-[10001] flex flex-col bg-surface-500"
        role="dialog"
        aria-modal="true"
        aria-label="Nova transação"
      >
        {/* Header */}
        <header className="flex-shrink-0 flex items-start justify-between gap-figma-16 p-figma-24 border-b border-neutral-300">
          <div className="flex items-center gap-figma-16">
            <span
              className={`flex w-16 h-16 shrink-0 items-center justify-center rounded-full ${
                type === 'income'
                  ? 'bg-primary-500 text-secondary-figma-900'
                  : 'bg-secondary-figma-900 text-neutral-0'
              }`}
            >
              {type === 'income' ? (
                <IconArrowDownLeft />
              ) : (
                <IconArrowUpRight />
              )}
            </span>
            <div>
              <h2 className="text-heading-lg font-bold text-neutral-1100">Nova transação</h2>
              <p className="text-paragraph-small text-neutral-500">
                Registre entradas e saídas para manter seu controle.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* Content */}
        <form onSubmit={handleSubmit} className="flex-1 min-h-0 overflow-y-auto bg-neutral-50">
          <div className="max-w-[650px] mx-auto p-figma-24 flex flex-col gap-figma-24">
            {/* Toggle tipo */}
            <div className="flex rounded-shape-20 bg-neutral-200 p-1 gap-1">
              <button
                type="button"
                onClick={() => setType('income')}
                className={`flex-1 py-figma-12 rounded-shape-20 text-label-medium font-semibold transition-all ${
                  type === 'income'
                    ? 'bg-neutral-0 text-neutral-1100 shadow-sm'
                    : 'bg-transparent text-neutral-500'
                }`}
              >
                Receita
              </button>
              <button
                type="button"
                onClick={() => setType('expense')}
                className={`flex-1 py-figma-12 rounded-shape-20 text-label-medium font-semibold transition-all ${
                  type === 'expense'
                    ? 'bg-neutral-0 text-neutral-1100 shadow-sm'
                    : 'bg-transparent text-neutral-500'
                }`}
              >
                Despesas
              </button>
            </div>

            {/* Valor e Data */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-figma-16">
              <label className="block">
                <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Valor da transação</span>
                <div
                  className={`flex h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 items-center gap-2 ${
                    errors.value ? 'border-red-500' : 'border-neutral-300'
                  }`}
                >
                  <span className="text-paragraph-small text-neutral-500">R$</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={valueInput}
                    onChange={handleValueChange}
                    placeholder="0,00"
                    className="flex-1 min-w-0 bg-transparent text-paragraph-small text-neutral-1100 focus:outline-none"
                  />
                </div>
                {errors.value && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.value}</p>}
              </label>
              <label className="block">
                <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Data</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-14 rounded-shape-20 border border-neutral-300 bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
                />
              </label>
            </div>

            {/* Descrição */}
            <label className="block">
              <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Descrição</span>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Supermercado Semanal"
                className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 ${
                  errors.description ? 'border-red-500' : 'border-neutral-300'
                }`}
              />
              {errors.description && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.description}</p>}
            </label>

            {/* Categoria */}
            <label className="block">
              <div className="flex items-center justify-between mb-figma-8">
                <span className="text-paragraph-small text-neutral-700">Categoria</span>
                {!showNewCategory ? (
                  <button
                    type="button"
                    onClick={() => setShowNewCategory(true)}
                    className="text-paragraph-x-small text-secondary-figma-900 hover:underline"
                  >
                    + Nova categoria
                  </button>
                ) : null}
              </div>
              {showNewCategory ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newCategoryInput}
                    onChange={(e) => setNewCategoryInput(e.target.value)}
                    placeholder="Nome da categoria"
                    className="flex-1 h-14 rounded-shape-20 border border-neutral-300 bg-neutral-0 px-figma-16 text-paragraph-small"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={handleConfirmNewCategory}
                    className="px-figma-16 rounded-shape-20 bg-secondary-figma-900 text-neutral-0 text-label-medium"
                  >
                    OK
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowNewCategory(false); setNewCategoryInput('') }}
                    className="px-figma-16 rounded-shape-20 border border-neutral-300 text-neutral-700"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`select-custom w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 ${
                    errors.category ? 'border-red-500' : 'border-neutral-300'
                  }`}
                >
                  <option value="">Selecione a categoria</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              )}
              {errors.category && !showNewCategory && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.category}</p>}
            </label>

            {/* Membro e Conta/Cartão */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-figma-16">
              <label className="block">
                <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Membro</span>
                <select
                  value={memberId ?? ''}
                  onChange={(e) => setMemberId(e.target.value || null)}
                  className="select-custom w-full h-14 rounded-shape-20 border border-neutral-300 bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
                >
                  <option value="">Família (Geral)</option>
                  {familyMembers.map((m) => (
                    <option key={m.id} value={m.id}>{m.name}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Conta / Cartão</span>
                <select
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  className={`select-custom w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 ${
                    errors.accountId ? 'border-red-500' : 'border-neutral-300'
                  }`}
                >
                  <option value="">Selecione</option>
                  <optgroup label="Contas Bancárias">
                    {bankAccounts.map((a) => (
                      <option key={a.id} value={a.id}>{a.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Cartões de Crédito">
                    {creditCards.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </optgroup>
                </select>
                {errors.accountId && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.accountId}</p>}
              </label>
            </div>

            {/* Parcelamento (condicional) */}
            {showInstallments && (
              <div className="animate-[slideDown_0.3s_ease-out]">
                <label className="block">
                  <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Parcelamento</span>
                  <select
                    value={installments}
                    onChange={(e) => setInstallments(parseInt(e.target.value, 10))}
                    disabled={isRecurring}
                    className="select-custom w-full h-14 rounded-shape-20 border border-neutral-300 bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 disabled:opacity-60"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                      <option key={n} value={n}>
                        {n === 1 ? 'À vista (1x)' : `${n}x`}
                      </option>
                    ))}
                  </select>
                  {isRecurring && (
                    <p className="text-paragraph-x-small text-neutral-500 italic mt-1">
                      Parcelamento desabilitado para despesas recorrentes
                    </p>
                  )}
                </label>
              </div>
            )}

            {/* Despesa recorrente */}
            {showRecurring && (
              <div
                className="rounded-shape-20 border p-figma-16"
                style={{
                  backgroundColor: 'rgba(50, 71, 255, 0.06)',
                  borderColor: 'rgba(50, 71, 255, 0.3)',
                }}
              >
                <label className="flex items-start gap-figma-12 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => handleRecurringChange(e.target.checked)}
                    disabled={installments > 1}
                    className="mt-1 w-4 h-4 rounded border-neutral-300"
                  />
                  <div>
                    <span className="text-label-medium font-bold text-neutral-1100 flex items-center gap-2">
                      🔁 Despesa Recorrente
                    </span>
                    <p className="text-paragraph-x-small text-neutral-500 mt-1">
                      {installments > 1
                        ? 'Não disponível para compras parceladas'
                        : 'Contas que se repetem todo mês (Netflix, Spotify, Academia, etc).'}
                    </p>
                  </div>
                </label>
              </div>
            )}
          </div>
        </form>

        {/* Footer */}
        <footer className="flex-shrink-0 flex items-center justify-end gap-figma-16 p-figma-24 border-t border-neutral-300 bg-surface-500">
          <button
            type="button"
            onClick={handleClose}
            className="px-figma-24 py-figma-12 rounded-full border border-neutral-300 text-neutral-1100 text-label-medium font-medium hover:bg-neutral-300/30"
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-figma-32 py-figma-12 rounded-full bg-secondary-figma-900 text-neutral-0 text-label-medium font-semibold hover:opacity-90"
          >
            Salvar transação
          </button>
        </footer>
      </div>
    </>
  )
}
