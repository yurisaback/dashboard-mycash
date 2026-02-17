import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useFinance } from '../../hooks/useFinance'
import type { TransactionTypeFilter } from '../../contexts/FinanceContext'

const OPTIONS: { value: TransactionTypeFilter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'income', label: 'Receitas' },
  { value: 'expense', label: 'Despesas' },
]

const POPOVER_OFFSET = 8
const OVERLAY_Z_INDEX = 10000

export interface FilterPopoverProps {
  isOpen: boolean
  onClose: () => void
  anchorRef: React.RefObject<HTMLButtonElement | null>
}

/**
 * Popover de filtros para desktop — glassmorphism, Tipo de Transação.
 * Renderizado em Portal para ficar sempre acima do conteúdo (não cortado por overflow).
 */
export function FilterPopover({ isOpen, onClose, anchorRef }: FilterPopoverProps) {
  const { transactionType, setTransactionType } = useFinance()
  const popoverRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (!isOpen || !anchorRef.current) return
    const updatePosition = () => {
      const anchor = anchorRef.current
      if (!anchor) return
      const rect = anchor.getBoundingClientRect()
      setPosition({
        top: rect.bottom + POPOVER_OFFSET,
        left: rect.left,
      })
    }
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen, anchorRef])

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const anchor = anchorRef.current
      const popover = popoverRef.current
      if (
        anchor &&
        popover &&
        !anchor.contains(e.target as Node) &&
        !popover.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose, anchorRef])

  if (!isOpen || typeof document === 'undefined') return null

  const popoverContent = (
    <div
      ref={popoverRef}
      className="p-figma-16 rounded-shape-20 bg-neutral-0/95 backdrop-blur-md border border-neutral-300 shadow-md min-w-[200px]"
      role="dialog"
      aria-label="Filtros"
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        zIndex: OVERLAY_Z_INDEX,
      }}
    >
      <p className="text-paragraph-small font-semibold text-secondary-figma-900 mb-figma-12">
        Tipo de Transação
      </p>
      <div className="flex flex-col gap-figma-4">
        {OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => {
              setTransactionType(value)
            }}
            className={`w-full text-left px-figma-16 py-figma-12 rounded-shape-100 text-paragraph-small font-medium transition-colors ${
              transactionType === value
                ? 'bg-secondary-figma-900 text-neutral-0'
                : 'bg-transparent text-neutral-1100 hover:bg-neutral-300/50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )

  return createPortal(popoverContent, document.body)
}
