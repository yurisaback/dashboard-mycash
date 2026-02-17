import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { format, startOfMonth, endOfMonth, subMonths, addMonths } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useFinance } from '../../hooks/useFinance'
import type { DateRange } from '../../contexts/FinanceContext'
import { IconCalendar } from './DashboardIcons'
import { IconChevronLeft, IconChevronRight } from '../layout/Sidebar/SidebarIcons'

const SHORTCUTS = [
  { label: 'Este mês', getRange: () => ({ start: startOfMonth(new Date()), end: endOfMonth(new Date()) }) },
  {
    label: 'Mês passado',
    getRange: () => {
      const m = subMonths(new Date(), 1)
      return { start: startOfMonth(m), end: endOfMonth(m) }
    },
  },
  {
    label: 'Últimos 3 meses',
    getRange: () => ({
      start: startOfMonth(subMonths(new Date(), 2)),
      end: endOfMonth(new Date()),
    }),
  },
  {
    label: 'Este ano',
    getRange: () => ({
      start: new Date(new Date().getFullYear(), 0, 1),
      end: endOfMonth(new Date()),
    }),
  },
] as const

function formatRangeDisplay(range: DateRange): string {
  return `${format(range.startDate, 'dd MMM', { locale: ptBR })} - ${format(range.endDate, 'dd MMM, yyyy', { locale: ptBR })}`
}

/** Calendário simplificado para seleção de intervalo (um mês por vez) */
function MonthCalendar({
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
      <div className="flex items-center justify-between mb-figma-8">
        <span className="text-paragraph-small font-semibold text-secondary-figma-900 capitalize">
          {format(month, 'MMMM yyyy', { locale: ptBR })}
        </span>
        <div className="flex gap-figma-4">
          <button
            type="button"
            onClick={() => onMonthChange(subMonths(month, 1))}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50"
            aria-label="Mês anterior"
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => onMonthChange(addMonths(month, 1))}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50"
            aria-label="Próximo mês"
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-paragraph-x-small text-neutral-500 mb-figma-4">
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
              className={`w-8 h-8 rounded-full text-paragraph-x-small font-medium transition-colors ${
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

const CALENDAR_OFFSET = 8
const OVERLAY_Z_INDEX = 10000

export function DateRangePicker() {
  const { dateRange, setDateRange } = useFinance()
  const [isOpen, setIsOpen] = useState(false)
  const [tempStart, setTempStart] = useState<Date | null>(null)
  const [tempEnd, setTempEnd] = useState<Date | null>(null)
  const [leftMonth, setLeftMonth] = useState(() => dateRange.startDate)
  const [rightMonth, setRightMonth] = useState(() => addMonths(dateRange.startDate, 1))
  const containerRef = useRef<HTMLDivElement>(null)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (!isOpen || !containerRef.current) return
    const updatePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + CALENDAR_OFFSET,
          left: rect.left,
        })
      }
    }
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const container = containerRef.current
      const target = e.target as Node
      if (container && !container.contains(target)) {
        const dropdown = document.querySelector('[data-date-range-dropdown]')
        if (dropdown && dropdown.contains(target)) return
        if (tempStart) {
          const start = tempEnd && tempStart.getTime() <= tempEnd.getTime() ? tempStart : tempEnd ?? tempStart
          const end = tempEnd && tempStart.getTime() > tempEnd.getTime() ? tempStart : tempEnd ?? tempStart
          setDateRange({ startDate: start, endDate: end })
        }
        setTempStart(null)
        setTempEnd(null)
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, tempStart, tempEnd, setDateRange])

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

  const handleConfirm = () => {
    if (tempStart) {
      const start = tempEnd && tempStart.getTime() <= tempEnd.getTime() ? tempStart : tempEnd ?? tempStart
      const end = tempEnd && tempStart.getTime() > tempEnd.getTime() ? tempStart : tempEnd ?? tempStart
      setDateRange({ startDate: start, endDate: end })
    }
    setTempStart(null)
    setTempEnd(null)
  }

  const handleShortcut = (getRange: () => { start: Date; end: Date }) => {
    const { start, end } = getRange()
    setTempStart(start)
    setTempEnd(end)
    setDateRange({ startDate: start, endDate: end })
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => {
          setIsOpen((o) => !o)
          if (!isOpen) {
            setTempStart(dateRange.startDate)
            setTempEnd(dateRange.endDate)
            setLeftMonth(dateRange.startDate)
            setRightMonth(addMonths(dateRange.startDate, 1))
          }
        }}
        className="flex min-w-0 shrink items-center gap-figma-8 px-figma-12 py-figma-12 rounded-shape-20 bg-neutral-300/30 border border-neutral-300 text-paragraph-small font-medium text-neutral-1100 hover:bg-neutral-300/50 transition-colors"
      >
        <IconCalendar />
        <span className="truncate">{formatRangeDisplay(dateRange)}</span>
      </button>

      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            data-date-range-dropdown
            className="p-figma-16 rounded-shape-20 bg-neutral-0 border border-neutral-300 shadow-md flex flex-col md:flex-row gap-figma-16"
            style={{
              position: 'fixed',
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              zIndex: OVERLAY_Z_INDEX,
            }}
          >
            <div className="flex flex-col gap-figma-8">
              <p className="text-paragraph-small font-semibold text-secondary-figma-900">
                Atalhos
              </p>
              {SHORTCUTS.map(({ label, getRange }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleShortcut(getRange)}
                  className="text-left px-figma-12 py-figma-8 rounded-shape-100 text-paragraph-small text-neutral-1100 hover:bg-neutral-300/50"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex gap-figma-16">
              <MonthCalendar
                month={leftMonth}
                onMonthChange={setLeftMonth}
                selectedStart={tempStart ?? dateRange.startDate}
                selectedEnd={tempEnd ?? dateRange.endDate}
                onSelectDay={handleSelectDay}
              />
              <div className="hidden md:block">
                <MonthCalendar
                  month={rightMonth}
                  onMonthChange={setRightMonth}
                  selectedStart={tempStart ?? dateRange.startDate}
                  selectedEnd={tempEnd ?? dateRange.endDate}
                  onSelectDay={handleSelectDay}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                handleConfirm()
                setIsOpen(false)
              }}
              className="mt-auto px-figma-16 py-figma-12 rounded-shape-100 bg-secondary-figma-900 text-neutral-0 text-paragraph-small font-semibold hover:opacity-90"
            >
              OK
            </button>
          </div>,
          document.body
        )}
    </div>
  )
}
