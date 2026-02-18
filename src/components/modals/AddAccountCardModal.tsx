import { useState, useCallback } from 'react'
import { useFinance } from '../../hooks/useFinance'
import { useToast } from '../../contexts/ToastContext'
import type { CardTheme } from '../../types'

export type AccountModalMode = 'bank' | 'card'

export interface AddAccountCardModalProps {
  isOpen: boolean
  onClose: () => void
  /** Modo inicial ao abrir */
  initialMode?: AccountModalMode
}

function parseCurrency(v: string): number {
  const normalized = v.replace(/\./g, '').replace(',', '.').replace(/\D/g, '')
  const n = parseFloat(normalized)
  return isNaN(n) ? 0 : n
}

export function AddAccountCardModal({
  isOpen,
  onClose,
  initialMode = 'bank',
}: AddAccountCardModalProps) {
  const { addBankAccount, addCreditCard, familyMembers } = useFinance()
  const { showToast } = useToast()

  const [mode, setMode] = useState<AccountModalMode>(initialMode)
  const [name, setName] = useState('')
  const [holderId, setHolderId] = useState(familyMembers[0]?.id ?? '')
  const [balance, setBalance] = useState('')
  const [accountType, setAccountType] = useState<'checking' | 'savings' | 'investment'>('checking')
  const [closingDay, setClosingDay] = useState(5)
  const [dueDay, setDueDay] = useState(10)
  const [limit, setLimit] = useState('')
  const [lastDigits, setLastDigits] = useState('')
  const [theme, setTheme] = useState<CardTheme>('black')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const resetForm = useCallback(() => {
    setMode(initialMode)
    setName('')
    setHolderId(familyMembers[0]?.id ?? '')
    setBalance('')
    setAccountType('checking')
    setClosingDay(5)
    setDueDay(10)
    setLimit('')
    setLastDigits('')
    setTheme('black')
    setErrors({})
  }, [familyMembers, initialMode])

  const handleClose = useCallback(() => {
    resetForm()
    onClose()
  }, [onClose, resetForm])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const err: Record<string, string> = {}

    if (name.trim().length < 3) err.name = 'Nome deve ter pelo menos 3 caracteres'
    if (!holderId) err.holderId = 'Selecione o titular'

    if (mode === 'bank') {
      const bal = parseCurrency(balance)
      if (bal === 0 && !balance.trim()) err.balance = 'Informe o saldo inicial'
    } else {
      if (closingDay < 1 || closingDay > 31) err.closingDay = 'Dia entre 1 e 31'
      if (dueDay < 1 || dueDay > 31) err.dueDay = 'Dia entre 1 e 31'
      const lim = parseCurrency(limit)
      if (lim <= 0) err.limit = 'Limite deve ser maior que zero'
      if (lastDigits && lastDigits.length !== 4) err.lastDigits = 'Exatamente 4 dígitos'
    }

    setErrors(err)
    if (Object.keys(err).length > 0) return

    if (mode === 'bank') {
      addBankAccount({
        name: name.trim(),
        type: accountType,
        holderId,
        balance: parseCurrency(balance),
      })
      showToast('Conta adicionada com sucesso!')
    } else {
      addCreditCard({
        name: name.trim(),
        holderId,
        limit: parseCurrency(limit),
        currentBill: 0,
        closingDay: Math.min(31, Math.max(1, closingDay)),
        dueDay: Math.min(31, Math.max(1, dueDay)),
        lastDigits: lastDigits.length === 4 ? lastDigits : undefined,
        theme,
      })
      showToast('Cartão adicionado com sucesso!')
    }
    handleClose()
  }

  if (!isOpen) return null

  const themes: { value: CardTheme; label: string; bg: string }[] = [
    { value: 'black', label: 'Black', bg: 'bg-neutral-900' },
    { value: 'lime', label: 'Lime', bg: 'bg-primary-500' },
    { value: 'white', label: 'White', bg: 'bg-neutral-0 border-2 border-neutral-300' },
  ]

  return (
    <>
      <div
        className="fixed inset-0 bg-secondary-figma-900/50 z-[10000]"
        onClick={handleClose}
        aria-hidden
      />
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg max-h-[90vh] overflow-hidden flex flex-col rounded-shape-20 border border-neutral-300 bg-surface-500 shadow-lg z-[10001]"
        role="dialog"
        aria-modal="true"
        aria-label={mode === 'bank' ? 'Nova conta' : 'Novo cartão'}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex-shrink-0 flex items-start justify-between gap-figma-16 p-figma-24 border-b border-neutral-300">
          <div className="flex items-center gap-figma-12">
            <span className="flex w-12 h-12 items-center justify-center rounded-shape-20 bg-neutral-200 text-neutral-700">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </span>
            <div>
              <h2 className="text-heading-x-small font-bold text-neutral-1100">Nova conta</h2>
              <p className="text-paragraph-small text-neutral-500">
                {mode === 'bank'
                  ? 'Adicione uma nova conta bancária'
                  : 'Adicione um novo cartão de crédito'}
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

        <form onSubmit={handleSubmit} className="flex-1 min-h-0 overflow-y-auto p-figma-24 flex flex-col gap-figma-16">
          {/* Toggle */}
          <div className="flex rounded-full bg-neutral-200 p-1 gap-1">
            <button
              type="button"
              onClick={() => setMode('bank')}
              className={`flex-1 py-figma-12 rounded-full text-label-medium font-semibold ${
                mode === 'bank'
                  ? 'bg-secondary-figma-900 text-neutral-0'
                  : 'bg-transparent text-neutral-700 border border-transparent'
              }`}
            >
              Conta bancária
            </button>
            <button
              type="button"
              onClick={() => setMode('card')}
              className={`flex-1 py-figma-12 rounded-full text-label-medium font-semibold ${
                mode === 'card'
                  ? 'bg-secondary-figma-900 text-neutral-0'
                  : 'bg-transparent text-neutral-700 border border-neutral-300'
              }`}
            >
              Cartão de crédito
            </button>
          </div>

          {/* Nome */}
          <label className="block">
            <span className="text-paragraph-small text-neutral-700 block mb-figma-8">
              {mode === 'bank' ? 'Nome da conta' : 'Nome do cartão'}
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={mode === 'bank' ? 'Ex: Conta corrente Nubank' : 'Ex: Nubank Mastercard'}
              className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 ${
                errors.name ? 'border-red-500' : 'border-neutral-300'
              }`}
            />
            {errors.name && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.name}</p>}
          </label>

          {/* Titular */}
          <label className="block">
            <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Titular</span>
            <select
              value={holderId}
              onChange={(e) => setHolderId(e.target.value)}
              className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 ${
                errors.holderId ? 'border-red-500' : 'border-neutral-300'
              }`}
            >
              {familyMembers.map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
            {errors.holderId && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.holderId}</p>}
          </label>

          {mode === 'bank' && (
            <>
              <div className="grid grid-cols-2 gap-figma-16">
                <label className="block">
                  <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Tipo</span>
                  <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value as 'checking' | 'savings' | 'investment')}
                    className="w-full h-14 rounded-shape-20 border border-neutral-300 bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100"
                  >
                    <option value="checking">Conta corrente</option>
                    <option value="savings">Poupança</option>
                    <option value="investment">Investimento</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Saldo inicial</span>
                  <input
                    type="text"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    placeholder="R$ 0,00"
                    className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 ${
                      errors.balance ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                  {errors.balance && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.balance}</p>}
                </label>
              </div>
            </>
          )}

          {mode === 'card' && (
            <>
              <div className="grid grid-cols-2 gap-figma-16">
                <label className="block">
                  <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Fechamento</span>
                  <input
                    type="number"
                    min={1}
                    max={31}
                    value={closingDay}
                    onChange={(e) => setClosingDay(parseInt(e.target.value, 10) || 1)}
                    placeholder="1 a 31"
                    className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 ${
                      errors.closingDay ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                  {errors.closingDay && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.closingDay}</p>}
                </label>
                <label className="block">
                  <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Vencimento</span>
                  <input
                    type="number"
                    min={1}
                    max={31}
                    value={dueDay}
                    onChange={(e) => setDueDay(parseInt(e.target.value, 10) || 1)}
                    placeholder="1 a 31"
                    className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 ${
                      errors.dueDay ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                  {errors.dueDay && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.dueDay}</p>}
                </label>
              </div>

              <label className="block">
                <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Limite total</span>
                <input
                  type="text"
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                  placeholder="R$ 0,00"
                  className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 ${
                    errors.limit ? 'border-red-500' : 'border-neutral-300'
                  }`}
                />
                {errors.limit && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.limit}</p>}
              </label>

              <label className="block">
                <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Últimos 4 dígitos (opcional)</span>
                <input
                  type="text"
                  value={lastDigits}
                  onChange={(e) => setLastDigits(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="1234"
                  maxLength={4}
                  className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 ${
                    errors.lastDigits ? 'border-red-500' : 'border-neutral-300'
                  }`}
                />
                {errors.lastDigits && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.lastDigits}</p>}
              </label>

              <div>
                <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Tema visual</span>
                <div className="flex gap-figma-12">
                  {themes.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setTheme(t.value)}
                      className={`flex-1 py-figma-12 rounded-shape-20 text-paragraph-x-small font-semibold transition-all ${
                        theme === t.value
                          ? 'ring-2 ring-accent-blue-600 ring-offset-2'
                          : 'opacity-80'
                      } ${t.bg}`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </form>

        <footer className="flex-shrink-0 flex items-center justify-end gap-figma-16 p-figma-24 border-t border-neutral-300">
          <button
            type="button"
            onClick={handleClose}
            className="px-figma-24 py-figma-12 rounded-full border border-neutral-300 text-neutral-1100 text-label-medium"
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-figma-24 py-figma-12 rounded-full bg-secondary-figma-900 text-neutral-0 text-label-medium font-semibold hover:opacity-90"
          >
            Adicionar
          </button>
        </footer>
      </div>
    </>
  )
}
