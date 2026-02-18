import { useState } from 'react'
import { useFinance } from '../hooks/useFinance'
import { formatCurrencyBR } from '../utils'
import { format } from 'date-fns'
import { IconPlus } from '../components/dashboard/DashboardIcons'
import { IconCreditCard } from '../components/layout/Sidebar/SidebarIcons'
import { AddAccountCardModal, CardDetailsModal, NewTransactionModal } from '../components/modals'
import type { CreditCard, BankAccount } from '../types'

const BANK_LOGO_SLUGS = ['nubank', 'inter', 'picpay', 'itau', 'bradesco', 'xp'] as const

function getBankLogoSrc(bankLogo?: string): string | null {
  if (!bankLogo || !BANK_LOGO_SLUGS.includes(bankLogo as (typeof BANK_LOGO_SLUGS)[number])) return null
  return `/assets/banks/${bankLogo}.png`
}

function CardItem({
  card,
  onClick,
}: {
  card: CreditCard
  onClick: () => void
}) {
  const logoSrc = getBankLogoSrc(card.bankLogo)

  return (
    <article className="flex flex-col rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24 shadow-sm hover:border-neutral-400 transition-colors">
      <div className="flex items-start justify-between gap-figma-16">
        <div className="flex min-w-0 flex-1 items-start gap-figma-12">
          <div className="flex h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-200">
            {logoSrc ? (
              <img src={logoSrc} alt="" className="h-full w-full object-contain" />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-label-medium font-semibold text-neutral-1100">
                {card.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-figma-4">
            <p className="text-label-medium font-semibold text-neutral-1100 truncate">{card.name}</p>
            <p className="text-label-medium font-bold text-neutral-1100 tabular-nums">
              {formatCurrencyBR(card.currentBill)}
            </p>
            <p className="text-paragraph-x-small text-neutral-500">
              Vence dia {card.dueDay}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {card.lastDigits != null && (
            <span className="text-paragraph-small text-neutral-500 tabular-nums">
              **** {card.lastDigits}
            </span>
          )}
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:bg-neutral-100"
            aria-label="Mais opções"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="6" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="18" r="1.5" />
            </svg>
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="mt-figma-16 -mb-figma-8 -mx-figma-8 py-figma-8 text-left text-paragraph-small text-neutral-500 hover:text-neutral-1100"
      >
        Ver detalhes
      </button>
    </article>
  )
}

function AccountItem({
  account,
}: {
  account: BankAccount
}) {
  const logoSrc = getBankLogoSrc(account.bankLogo)

  return (
    <article className="flex flex-col rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24 shadow-sm hover:border-neutral-400 transition-colors">
      <div className="flex items-start justify-between gap-figma-16">
        <div className="flex min-w-0 flex-1 items-start gap-figma-12">
          <div className="flex h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-200">
            {logoSrc ? (
              <img src={logoSrc} alt="" className="h-full w-full object-contain" />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-label-medium font-semibold text-neutral-1100">
                {account.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-figma-4">
            <p className="text-label-medium font-semibold text-neutral-1100 truncate">{account.name}</p>
            <p className="text-label-medium font-bold text-neutral-1100 tabular-nums">
              {formatCurrencyBR(account.balance)}
            </p>
            <p className="text-paragraph-x-small text-neutral-500">
              Saldo atualizado {format(new Date(), 'dd/MM/yyyy')}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:bg-neutral-100"
          aria-label="Mais opções"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="6" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="18" r="1.5" />
          </svg>
        </button>
      </div>
    </article>
  )
}

function AddCardButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-figma-8 min-h-[140px] rounded-shape-20 border-2 border-dashed border-neutral-300 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-400 transition-colors"
    >
      <span className="flex w-12 h-12 items-center justify-center rounded-full border-2 border-neutral-300 text-neutral-500">
        <IconPlus />
      </span>
      <span className="text-paragraph-small font-medium text-neutral-700">{label}</span>
    </button>
  )
}

function CardsPage() {
  const { creditCards, bankAccounts } = useFinance()
  const [detailCard, setDetailCard] = useState<CreditCard | null>(null)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [addModalMode, setAddModalMode] = useState<'bank' | 'card'>('card')
  const [transactionModalAccountId, setTransactionModalAccountId] = useState<string | null>(null)

  const openAddCard = () => {
    setAddModalMode('card')
    setAddModalOpen(true)
  }

  const openAddAccount = () => {
    setAddModalMode('bank')
    setAddModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="page-padding-x container-responsive py-8">
        <header className="mb-figma-32">
          <div className="flex items-center gap-figma-12 mb-figma-4">
            <span className="text-neutral-1100 [&_svg]:w-8 [&_svg]:h-8">
              <IconCreditCard />
            </span>
            <h1 className="text-heading-lg font-bold text-text-primary">
              Cartões
            </h1>
          </div>
          <p className="text-body-md text-text-secondary">
            Gerencie seus cartões e contas bancárias
          </p>
        </header>

        <section className="mb-figma-32">
          <h2 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">Cartões</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-figma-24">
            {creditCards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                onClick={() => setDetailCard(card)}
              />
            ))}
            <AddCardButton onClick={openAddCard} label="Novo cartão" />
          </div>
        </section>

        <section>
          <h2 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">Contas bancárias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-figma-24">
            {bankAccounts.map((account) => (
              <AccountItem key={account.id} account={account} />
            ))}
            <AddCardButton onClick={openAddAccount} label="Nova conta" />
          </div>
        </section>
      </div>

      <CardDetailsModal
        card={detailCard}
        onClose={() => setDetailCard(null)}
        onAddExpense={(id) => {
          setDetailCard(null)
          setTransactionModalAccountId(id)
        }}
      />

      <AddAccountCardModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        initialMode={addModalMode}
      />

      {transactionModalAccountId && (
        <NewTransactionModal
          isOpen
          onClose={() => setTransactionModalAccountId(null)}
          preselectedAccountId={transactionModalAccountId}
        />
      )}
    </div>
  )
}

export default CardsPage
