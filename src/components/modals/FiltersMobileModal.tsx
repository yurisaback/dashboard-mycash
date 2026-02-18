import { useState, useEffect } from 'react'
import { format, startOfMonth, endOfMonth, addMonths, subMonths } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useFinance } from '../../hooks/useFinance'
import type { TransactionTypeFilter } from '../../contexts/FinanceContext'
import { IconChevronLeft, IconChevronRight } from '../layout/Sidebar/SidebarIcons'

const TYPE_OPTIONS: { value: TransactionTypeFilter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'income', label: 'Receitas' },
  { value: 'expense', label: 'Despesas' },
]

export interface FiltersMobileModalProps {
  isOpen: boolean
  onClose: () => void
}

function MonthCalendarSimple({
  month,
  onMonthChange,
  selectedStart,
  selectedEnd,
  onSelectDay,
}: {
  month: Date
  onMonthChange: (d: Date) => void
  selectedStart: Date | null
  selectedEnd: Date | null
  onSelectDay: (d: Date) => void
}) {
  const start = startOfMonth(month)
  const end = endOfMonth(month)
  const days: (Date | null)[] = []
  const firstDay = start.getDay()
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let d = 1; d <= end.getDate(); d++) {
    days.push(new Date(month.getFullYear(), month.getMonth(), d))
  }

  const isInRange = (d: Date) => {
    if (!selectedStart) return false
    if (!selectedEnd) return d.getTime() === selectedStart.getTime()
    const t = d.getTime()
    return t >= selectedStart.getTime() && t <= selectedEnd.getTime()
  }
  const isStartOrEnd = (d: Date) => {
    if (!selectedStart) return false
    if (d.getTime() === selectedStart.getTime()) return true
    if (selectedEnd && d.getTime() === selectedEnd.getTime()) return true
    return false
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-figma-12">
        <span className="text-paragraph-small font-semibold text-neutral-1100 capitalize">
          {format(month, 'MMMM yyyy', { locale: ptBR })}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onMonthChange(subMonths(month, 1))}
            className="min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50"
            aria-label="Mês anterior"
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => onMonthChange(addMonths(month, 1))}
            className="min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50"
            aria-label="Próximo mês"
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-paragraph-x-small text-neutral-500 mb-2">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) =>
          d ? (
            <button
              key={i}
              type="button"
              onClick={() => onSelectDay(d)}
              className={`min-w-[44px] min-h-[44px] rounded-full text-paragraph-x-small font-medium transition-colors ${
                isStartOrEnd(d)
                  ? 'bg-secondary-figma-900 text-neutral-0'
                  : isInRange(d)
                    ? 'bg-neutral-300/70 text-neutral-1100'
                    : 'text-neutral-1100 hover:bg-neutral-300/50'
              }`}
            >
              {d.getDate()}
            </button>
          ) : (
            <span key={i} />
          )
        )}
      </div>
    </div>
  )
}

export function FiltersMobileModal({ isOpen, onClose }: FiltersMobileModalProps) {
  const { transactionType, setTransactionType, selectedMember, setSelectedMember, dateRange, setDateRange, familyMembers } = useFinance()

  const [tempType, setTempType] = useState<TransactionTypeFilter>(transactionType)
  const [tempMember, setTempMember] = useState<string | null>(selectedMember)
  const [tempStart, setTempStart] = useState<Date | null>(dateRange.startDate)
  const [tempEnd, setTempEnd] = useState<Date | null>(dateRange.endDate)
  const [calendarMonth, setCalendarMonth] = useState(() => dateRange.startDate)

  useEffect(() => {
    if (isOpen) {
      setTempType(transactionType)
      setTempMember(selectedMember)
      setTempStart(dateRange.startDate)
      setTempEnd(dateRange.endDate)
      setCalendarMonth(dateRange.startDate)
    }
  }, [isOpen, transactionType, selectedMember, dateRange])

  const handleApply = () => {
    setTransactionType(tempType)
    setSelectedMember(tempMember)
    if (tempStart) {
      const start = tempEnd && tempStart.getTime() <= tempEnd.getTime() ? tempStart : tempEnd ?? tempStart
      const end = tempEnd && tempStart.getTime() > tempEnd.getTime() ? tempStart : tempEnd ?? tempStart
      setDateRange({ startDate: start, endDate: end })
    }
    onClose()
  }

  const handleSelectDay = (d: Date) => {
    if (!tempStart || (tempStart && tempEnd)) {
      setTempStart(d)
      setTempEnd(null)
    } else {
      if (d.getTime() < tempStart.getTime()) {
        setTempEnd(tempStart)
        setTempStart(d)
      } else {
        setTempEnd(d)
      }
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-secondary-figma-900/50 z-[10000]"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-[10001] flex flex-col bg-surface-500 rounded-t-[var(--shape-20)] shadow-lg max-h-[90vh] animate-[slideUpFromBottom_0.3s_ease-out]"
        role="dialog"
        aria-modal="true"
        aria-label="Filtros"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex-shrink-0 flex items-center justify-between p-figma-24 border-b border-neutral-300">
          <h2 className="text-heading-x-small font-bold text-neutral-1100">Filtros</h2>
          <button
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <div className="flex-1 min-h-0 overflow-y-auto p-figma-24 flex flex-col gap-figma-24">
          {/* Tipo */}
          <div>
            <p className="text-label-medium font-semibold text-neutral-1100 mb-figma-12">Tipo de Transação</p>
            <div className="grid grid-cols-3 gap-2">
              {TYPE_OPTIONS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTempType(value)}
                  className={`min-h-[48px] rounded-shape-20 text-label-medium font-medium transition-colors ${
                    tempType === value
                      ? 'bg-secondary-figma-900 text-neutral-0'
                      : 'bg-neutral-0 border border-neutral-300 text-neutral-500'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Membro */}
          <div>
            <p className="text-label-medium font-semibold text-neutral-1100 mb-figma-12">Membro da Família</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setTempMember(null)}
                className={`flex items-center gap-2 min-h-[48px] px-figma-16 rounded-full text-paragraph-small font-medium transition-colors ${
                  tempMember === null
                    ? 'bg-secondary-figma-900 text-neutral-0'
                    : 'bg-neutral-0 border border-neutral-300 text-neutral-500'
                }`}
              >
                Todos
              </button>
              {familyMembers.map((m) => {
                const sel = tempMember === m.id
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setTempMember(m.id)}
                    className={`flex items-center gap-2 min-h-[48px] px-figma-16 rounded-full text-paragraph-small font-medium transition-colors ${
                      sel
                        ? 'bg-secondary-figma-900 text-neutral-0'
                        : 'bg-neutral-0 border border-neutral-300 text-neutral-500'
                    }`}
                  >
                    {m.avatarUrl ? (
                      <img
                        src={m.avatarUrl}
                        alt=""
                        className={`w-8 h-8 rounded-full object-cover shrink-0 ${sel ? 'ring-2 ring-neutral-0' : ''}`}
                      />
                    ) : (
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-paragraph-x-small font-semibold bg-neutral-300 shrink-0 ${
                          sel ? 'ring-2 ring-neutral-0 text-neutral-0 bg-neutral-600' : 'text-neutral-700'
                        }`}
                      >
                        {m.name.charAt(0)}
                      </span>
                    )}
                    {m.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Período */}
          <div>
            <p className="text-label-medium font-semibold text-neutral-1100 mb-figma-12">Período</p>
            <MonthCalendarSimple
              month={calendarMonth}
              onMonthChange={setCalendarMonth}
              selectedStart={tempStart}
              selectedEnd={tempEnd}
              onSelectDay={handleSelectDay}
            />
          </div>
        </div>

        <footer className="flex-shrink-0 p-figma-24 border-t border-neutral-300">
          <button
            type="button"
            onClick={handleApply}
            className="w-full h-14 rounded-shape-20 bg-secondary-figma-900 text-neutral-0 text-label-medium font-semibold hover:opacity-90"
          >
            Aplicar Filtros
          </button>
        </footer>
      </div>
    </>
  )
}
