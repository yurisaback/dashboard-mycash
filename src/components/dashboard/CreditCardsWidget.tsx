import { useState, useCallback, useRef } from 'react'
import { useFinance } from '../../hooks/useFinance'
import { formatCurrencyBR } from '../../utils'
import type { CreditCard, CardTheme } from '../../types'
import { IconPlus } from './DashboardIcons'
import { IconCreditCard } from '../layout/Sidebar/SidebarIcons'

const CARDS_PER_PAGE = 3

/** Cores do bloco e do badge por tema (design system) */
function getThemeStyles(theme: CardTheme): { blockBg: string; blockBorder?: string; iconColor: string; badgeBg: string; badgeText: string } {
  switch (theme) {
    case 'black':
      return { blockBg: 'var(--neutral-1100)', iconColor: 'var(--neutral-0)', badgeBg: 'var(--neutral-200)', badgeText: 'var(--neutral-1100)' }
    case 'lime':
      return { blockBg: 'var(--primary-700)', iconColor: 'var(--neutral-0)', badgeBg: 'var(--primary-700)', badgeText: 'var(--neutral-0)' }
    case 'white':
      return { blockBg: 'var(--surface-500)', blockBorder: 'var(--neutral-300)', iconColor: 'var(--neutral-1100)', badgeBg: 'var(--neutral-200)', badgeText: 'var(--neutral-1100)' }
    default:
      return { blockBg: 'var(--neutral-1100)', iconColor: 'var(--neutral-0)', badgeBg: 'var(--neutral-200)', badgeText: 'var(--neutral-1100)' }
  }
}

function CreditCardRow({
  card,
  onClick,
}: {
  card: CreditCard
  onClick: () => void
}) {
  const usagePercent = card.limit > 0 ? Math.round((card.currentBill / card.limit) * 100) : 0
  const styles = getThemeStyles(card.theme)

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left flex items-center gap-figma-16 p-figma-16 rounded-shape-20 border border-neutral-300 bg-surface-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-figma-500 cursor-pointer"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-shape-20 flex items-center justify-center"
        style={{
          backgroundColor: styles.blockBg,
          border: styles.blockBorder ? `1px solid ${styles.blockBorder}` : undefined,
        }}
      >
        <span style={{ color: styles.iconColor }} className="[&_svg]:w-6 [&_svg]:h-6">
          <IconCreditCard />
        </span>
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-figma-2">
        <p className="text-paragraph-x-small text-neutral-500 truncate">{card.name}</p>
        <p className="text-label-medium font-semibold text-neutral-1100 tabular-nums">
          {formatCurrencyBR(card.currentBill)}
        </p>
        <p className="text-paragraph-x-small text-neutral-500">
          Vence dia {card.dueDay}
        </p>
        {card.lastDigits != null && (
          <p className="text-paragraph-x-small text-neutral-500 tabular-nums">
            •••• {card.lastDigits}
          </p>
        )}
      </div>
      <div
        className="flex-shrink-0 min-w-[3rem] py-figma-4 px-figma-8 rounded-full text-paragraph-x-small font-semibold text-center"
        style={{ backgroundColor: styles.badgeBg, color: styles.badgeText }}
      >
        {usagePercent}%
      </div>
    </button>
  )
}

export interface CreditCardDetailModalProps {
  card: CreditCard | null
  onClose: () => void
}

export function CreditCardDetailModal({ card, onClose }: CreditCardDetailModalProps) {
  if (!card) return null
  return (
    <>
      <div className="fixed inset-0 bg-secondary-figma-900/50" style={{ zIndex: 10000 }} onClick={onClose} aria-hidden />
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-32 shadow-md"
        style={{ zIndex: 10001 }}
        role="dialog"
        aria-modal="true"
        aria-label="Detalhes do cartão"
      >
        <div className="flex items-center justify-between mb-figma-24">
          <h3 className="text-heading-x-small font-bold text-neutral-1100">Detalhes do cartão</h3>
          <button type="button" onClick={onClose} className="text-paragraph-small text-neutral-500 hover:text-neutral-1100">Fechar</button>
        </div>
        <dl className="flex flex-col gap-figma-12 text-paragraph-small">
          <div><dt className="text-neutral-500">Nome</dt><dd className="font-medium text-neutral-1100">{card.name}</dd></div>
          <div><dt className="text-neutral-500">Fatura atual</dt><dd className="font-semibold text-neutral-1100">{formatCurrencyBR(card.currentBill)}</dd></div>
          <div><dt className="text-neutral-500">Limite</dt><dd className="font-medium text-neutral-1100">{formatCurrencyBR(card.limit)}</dd></div>
          <div><dt className="text-neutral-500">Uso</dt><dd className="font-medium text-neutral-1100">{card.limit > 0 ? Math.round((card.currentBill / card.limit) * 100) : 0}%</dd></div>
          <div><dt className="text-neutral-500">Vencimento</dt><dd className="font-medium text-neutral-1100">Dia {card.dueDay}</dd></div>
          <div><dt className="text-neutral-500">Fechamento</dt><dd className="font-medium text-neutral-1100">Dia {card.closingDay}</dd></div>
          {card.lastDigits != null && <div><dt className="text-neutral-500">Final</dt><dd className="font-medium text-neutral-1100 tabular-nums">•••• {card.lastDigits}</dd></div>}
        </dl>
      </div>
    </>
  )
}

export interface CreditCardAddModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CreditCardAddModal({ isOpen, onClose }: CreditCardAddModalProps) {
  const { familyMembers, addCreditCard } = useFinance()
  const [name, setName] = useState('')
  const [holderId, setHolderId] = useState(familyMembers[0]?.id ?? '')
  const [limit, setLimit] = useState<number>(0)
  const [currentBill, setCurrentBill] = useState<number>(0)
  const [dueDay, setDueDay] = useState(10)
  const [closingDay, setClosingDay] = useState(5)
  const [lastDigits, setLastDigits] = useState('')
  const [theme, setTheme] = useState<CardTheme>('black')

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      addCreditCard({
        name: name.trim() || 'Novo cartão',
        holderId: holderId || (familyMembers[0]?.id ?? ''),
        limit,
        currentBill,
        closingDay: Math.min(31, Math.max(1, closingDay)),
        dueDay: Math.min(31, Math.max(1, dueDay)),
        lastDigits: lastDigits.trim() || undefined,
        theme,
      })
      onClose()
      setName('')
      setLimit(0)
      setCurrentBill(0)
      setDueDay(10)
      setClosingDay(5)
      setLastDigits('')
      setTheme('black')
    },
    [addCreditCard, familyMembers, holderId, name, limit, currentBill, dueDay, closingDay, lastDigits, theme, onClose]
  )

  if (!isOpen) return null
  return (
    <>
      <div className="fixed inset-0 bg-secondary-figma-900/50" style={{ zIndex: 10000 }} onClick={onClose} aria-hidden />
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-32 shadow-md max-h-[90vh] overflow-y-auto"
        style={{ zIndex: 10001 }}
        role="dialog"
        aria-modal="true"
        aria-label="Novo cartão"
      >
        <div className="flex items-center justify-between mb-figma-24">
          <h3 className="text-heading-x-small font-bold text-neutral-1100">Novo cartão</h3>
          <button type="button" onClick={onClose} className="text-paragraph-small text-neutral-500 hover:text-neutral-1100">Fechar</button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-figma-16">
          <label className="block">
            <span className="text-paragraph-small text-neutral-500 block mb-figma-4">Nome do cartão</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-shape-20 border border-neutral-300 px-figma-12 py-figma-8 text-paragraph-small text-neutral-1100" placeholder="Ex: Nubank" />
          </label>
          <label className="block">
            <span className="text-paragraph-small text-neutral-500 block mb-figma-4">Titular</span>
            <select value={holderId} onChange={(e) => setHolderId(e.target.value)} className="w-full rounded-shape-20 border border-neutral-300 px-figma-12 py-figma-8 text-paragraph-small text-neutral-1100">
              {familyMembers.map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-paragraph-small text-neutral-500 block mb-figma-4">Limite (R$)</span>
            <input type="number" min={0} step={0.01} value={limit || ''} onChange={(e) => setLimit(parseFloat(e.target.value) || 0)} className="w-full rounded-shape-20 border border-neutral-300 px-figma-12 py-figma-8 text-paragraph-small text-neutral-1100" placeholder="0,00" />
          </label>
          <label className="block">
            <span className="text-paragraph-small text-neutral-500 block mb-figma-4">Fatura atual (R$)</span>
            <input type="number" min={0} step={0.01} value={currentBill || ''} onChange={(e) => setCurrentBill(parseFloat(e.target.value) || 0)} className="w-full rounded-shape-20 border border-neutral-300 px-figma-12 py-figma-8 text-paragraph-small text-neutral-1100" placeholder="0,00" />
          </label>
          <div className="grid grid-cols-2 gap-figma-12">
            <label className="block">
              <span className="text-paragraph-small text-neutral-500 block mb-figma-4">Vencimento (dia)</span>
              <input type="number" min={1} max={31} value={dueDay} onChange={(e) => setDueDay(parseInt(e.target.value, 10) || 1)} className="w-full rounded-shape-20 border border-neutral-300 px-figma-12 py-figma-8 text-paragraph-small text-neutral-1100" />
            </label>
            <label className="block">
              <span className="text-paragraph-small text-neutral-500 block mb-figma-4">Fechamento (dia)</span>
              <input type="number" min={1} max={31} value={closingDay} onChange={(e) => setClosingDay(parseInt(e.target.value, 10) || 1)} className="w-full rounded-shape-20 border border-neutral-300 px-figma-12 py-figma-8 text-paragraph-small text-neutral-1100" />
            </label>
          </div>
          <label className="block">
            <span className="text-paragraph-small text-neutral-500 block mb-figma-4">Últimos 4 dígitos</span>
            <input type="text" value={lastDigits} onChange={(e) => setLastDigits(e.target.value)} maxLength={4} className="w-full rounded-shape-20 border border-neutral-300 px-figma-12 py-figma-8 text-paragraph-small text-neutral-1100" placeholder="1234" />
          </label>
          <label className="block">
            <span className="text-paragraph-small text-neutral-500 block mb-figma-4">Tema</span>
            <select value={theme} onChange={(e) => setTheme(e.target.value as CardTheme)} className="w-full rounded-shape-20 border border-neutral-300 px-figma-12 py-figma-8 text-paragraph-small text-neutral-1100">
              <option value="black">Preto</option>
              <option value="lime">Verde-limão</option>
              <option value="white">Branco</option>
            </select>
          </label>
          <button type="submit" className="w-full rounded-shape-20 bg-secondary-figma-900 text-neutral-0 py-figma-12 text-label-medium font-semibold hover:opacity-90">Salvar</button>
        </form>
      </div>
    </>
  )
}

export function CreditCardsWidget() {
  const { creditCards } = useFinance()
  const [detailCard, setDetailCard] = useState<CreditCard | null>(null)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [page, setPage] = useState(0)

  const totalPages = Math.max(1, Math.ceil(creditCards.length / CARDS_PER_PAGE))
  const start = page * CARDS_PER_PAGE
  const visibleCards = creditCards.slice(start, start + CARDS_PER_PAGE)
  const touchStartX = useRef(0)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])
  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = e.changedTouches[0].clientX - touchStartX.current
      if (delta > 50) setPage((p) => Math.max(0, p - 1))
      else if (delta < -50) setPage((p) => Math.min(totalPages - 1, p + 1))
    },
    [totalPages]
  )

  return (
    <article
      className="w-full min-w-0 rounded-shape-20 border p-figma-32 box-border"
      style={{
        borderWidth: 'var(--border-width-sm, 1px)',
        borderColor: 'var(--neutral-300)',
        backgroundColor: 'var(--gray-50)',
      }}
      aria-label="Cartões de crédito"
    >
      <header className="flex items-center justify-between gap-figma-16 mb-figma-24">
        <div className="flex items-center gap-figma-8">
          <span className="text-neutral-1100 [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
            <IconCreditCard />
          </span>
          <h2 className="text-heading-x-small font-bold text-neutral-1100">Cartões</h2>
        </div>
        <button
          type="button"
          onClick={() => setAddModalOpen(true)}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-500 border border-neutral-300 flex items-center justify-center text-neutral-1100 hover:bg-neutral-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
          aria-label="Adicionar cartão"
        >
          <IconPlus />
        </button>
      </header>

      <ul
        className="flex flex-col gap-figma-12 list-none p-0 m-0"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleCards.map((card) => (
          <li key={card.id}>
            <CreditCardRow card={card} onClick={() => setDetailCard(card)} />
          </li>
        ))}
      </ul>

      {creditCards.length > CARDS_PER_PAGE && (
        <div className="flex items-center justify-center gap-figma-16 mt-figma-24">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="rounded-shape-20 border border-neutral-300 bg-surface-500 px-figma-16 py-figma-8 text-paragraph-small text-neutral-1100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-200"
          >
            Anterior
          </button>
          <span className="text-paragraph-small text-neutral-500">
            Página {page + 1} de {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="rounded-shape-20 border border-neutral-300 bg-surface-500 px-figma-16 py-figma-8 text-paragraph-small text-neutral-1100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-200"
          >
            Próxima
          </button>
        </div>
      )}

      <CreditCardDetailModal card={detailCard} onClose={() => setDetailCard(null)} />
      <CreditCardAddModal isOpen={addModalOpen} onClose={() => setAddModalOpen(false)} />
    </article>
  )
}
