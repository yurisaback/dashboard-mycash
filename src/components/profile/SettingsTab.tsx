import { useState } from 'react'
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from '../../constants'
import { useFinance } from '../../hooks/useFinance'

function Toggle({
  label,
  checked,
  onChange,
  disabled,
  badge,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
  disabled?: boolean
  badge?: string
}) {
  return (
    <div className="flex items-center justify-between gap-figma-16 py-figma-12">
      <div className="flex items-center gap-figma-8">
        <span className="text-paragraph-small text-neutral-1100">{label}</span>
        {badge && (
          <span className="rounded-full bg-neutral-200 px-figma-8 py-figma-2 text-paragraph-x-small text-neutral-500">
            {badge}
          </span>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors ${
          checked ? 'bg-primary-figma-500' : 'bg-neutral-300'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <span
          className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

export function SettingsTab() {
  const { transactions, goals, creditCards, bankAccounts, familyMembers } = useFinance()
  const [darkMode, setDarkMode] = useState(false)
  const [reminderBills, setReminderBills] = useState(true)
  const [alertLimit, setAlertLimit] = useState(true)
  const [monthlyEmail, setMonthlyEmail] = useState(false)
  const [goalsNotify, setGoalsNotify] = useState(true)
  const [exportConfirm, setExportConfirm] = useState(false)
  const [clearConfirm, setClearConfirm] = useState(false)

  const handleExportData = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      transactions,
      goals,
      creditCards,
      bankAccounts,
      familyMembers,
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mycash-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setExportConfirm(false)
  }

  return (
    <div className="flex flex-col gap-figma-24">
      {/* Preferências */}
      <section className="rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24">
        <h3 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">
          Preferências de Exibição
        </h3>
        <div className="flex flex-col divide-y divide-neutral-200">
          <Toggle
            label="Modo Escuro"
            checked={darkMode}
            onChange={setDarkMode}
            disabled
            badge="Em breve"
          />
          <div className="flex items-center justify-between gap-figma-16 py-figma-12">
            <span className="text-paragraph-small text-neutral-1100">Moeda padrão</span>
            <span className="text-paragraph-small text-neutral-500">Real Brasileiro (R$)</span>
          </div>
          <div className="flex items-center justify-between gap-figma-16 py-figma-12">
            <span className="text-paragraph-small text-neutral-1100">Formato de data</span>
            <span className="text-paragraph-small text-neutral-500">DD/MM/AAAA</span>
          </div>
        </div>
      </section>

      {/* Notificações */}
      <section className="rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24">
        <h3 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">
          Notificações
        </h3>
        <div className="flex flex-col divide-y divide-neutral-200">
          <Toggle
            label="Lembrete de vencimento de contas"
            checked={reminderBills}
            onChange={setReminderBills}
          />
          <Toggle
            label="Alerta de aproximação do limite de cartão"
            checked={alertLimit}
            onChange={setAlertLimit}
          />
          <Toggle
            label="Resumo mensal por email"
            checked={monthlyEmail}
            onChange={setMonthlyEmail}
          />
          <Toggle
            label="Notificações de novos objetivos alcançados"
            checked={goalsNotify}
            onChange={setGoalsNotify}
          />
        </div>
      </section>

      {/* Categorias */}
      <section className="rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24">
        <h3 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">
          Gerenciar Categorias
        </h3>
        <div className="flex flex-col gap-figma-24">
          <div>
            <h4 className="text-paragraph-small font-semibold text-neutral-700 mb-figma-8">
              Categorias de Receita
            </h4>
            <ul className="flex flex-wrap gap-figma-8">
              {INCOME_CATEGORIES.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-figma-4 rounded-full bg-neutral-100 px-figma-12 py-figma-4 text-paragraph-x-small text-neutral-1100"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-paragraph-small font-semibold text-neutral-700 mb-figma-8">
              Categorias de Despesa
            </h4>
            <ul className="flex flex-wrap gap-figma-8">
              {EXPENSE_CATEGORIES.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-figma-4 rounded-full bg-neutral-100 px-figma-12 py-figma-4 text-paragraph-x-small text-neutral-1100"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dados e Privacidade */}
      <section className="rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24">
        <h3 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">
          Dados e Privacidade
        </h3>
        <div className="flex flex-col gap-figma-16">
          <button
            type="button"
            onClick={exportConfirm ? handleExportData : () => setExportConfirm(true)}
            className="w-fit rounded-shape-20 border border-neutral-300 bg-transparent px-figma-16 py-figma-12 text-paragraph-small font-medium text-neutral-1100 hover:bg-neutral-100"
          >
            {exportConfirm ? 'Confirmar exportação' : 'Exportar Todos os Dados'}
          </button>
          {exportConfirm && (
            <p className="text-paragraph-x-small text-neutral-500">
              Clique novamente para confirmar o download do backup.
            </p>
          )}
          <div>
            <button
              type="button"
              onClick={() => setClearConfirm(true)}
              className="rounded-shape-20 border border-accent-red-600 bg-transparent px-figma-16 py-figma-12 text-paragraph-small font-medium text-accent-red-600 hover:bg-accent-red-600/10"
            >
              Limpar Todos os Dados
            </button>
            {clearConfirm && (
              <p className="mt-figma-8 text-paragraph-x-small text-neutral-500">
                Esta ação não pode ser desfeita. Implemente confirmação em produção.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24">
        <h3 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">
          Sobre o mycash+
        </h3>
        <p className="text-paragraph-small text-neutral-700 mb-figma-8">Versão v1.0.0</p>
        <p className="text-paragraph-x-small text-neutral-500 mb-figma-16">
          Sistema de gestão financeira familiar
        </p>
        <div className="flex flex-col gap-figma-8">
          <a
            href="#"
            className="text-paragraph-small text-primary-figma-500 hover:underline"
          >
            Termos de Uso
          </a>
          <a
            href="#"
            className="text-paragraph-small text-primary-figma-500 hover:underline"
          >
            Política de Privacidade
          </a>
        </div>
      </section>
    </div>
  )
}
