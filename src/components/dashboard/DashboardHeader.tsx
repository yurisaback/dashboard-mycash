import { useState, useRef } from 'react'
import { useFinance } from '../../hooks/useFinance'
import { useIsDesktop1024 } from '../../hooks/useMediaQuery'
import { IconSearch, IconFilter, IconPlus } from './DashboardIcons'
import { FilterPopover } from './FilterPopover'
import { FilterModal } from './FilterModal'
import { DateRangePicker } from './DateRangePicker'
import { FamilyMembersWidget } from './FamilyMembersWidget'

/**
 * Header do Dashboard — barra horizontal com controles de filtro e ação.
 * Responsivo: desktop (popover) vs mobile (modal fullscreen para filtros).
 */
export function DashboardHeader() {
  const { searchText, setSearchText } = useFinance()
  const [filterPopoverOpen, setFilterPopoverOpen] = useState(false)
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const filterButtonRef = useRef<HTMLButtonElement>(null)
  const isDesktop = useIsDesktop1024()

  const handleFilterClick = () => {
    if (isDesktop) {
      setFilterPopoverOpen((o) => !o)
    } else {
      setFilterModalOpen(true)
    }
  }

  return (
    <header
      className="w-full max-w-full min-w-0 py-4 md:py-6 md:flex md:items-start md:justify-between md:gap-0"
      role="banner"
      style={{ width: '100%' }}
    >
      {/* Coluna esquerda: encolhe (minmax(0,1fr)); pesquisa preenche e encolhe primeiro — botão direito sempre visível (Figma 2187-1666) */}
      <div className="flex min-w-0 w-fit flex-col gap-figma-16 overflow-x-hidden md:flex-row md:items-center md:gap-3 lg:gap-4">
        <div className="min-w-0 flex-1 w-full md:min-w-0">
          <label htmlFor="dashboard-search" className="sr-only">
            Pesquisar transações
          </label>
          <div className="relative w-full min-w-0">
            <span className="absolute left-figma-12 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none [&_svg]:w-5 [&_svg]:h-5">
              <IconSearch />
            </span>
            <input
              id="dashboard-search"
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Pesquisar"
              className="w-full max-w-[500px] min-w-[300px] pl-10 pr-figma-16 py-figma-12 rounded-shape-20 bg-neutral-0 border border-neutral-300 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 focus:border-transparent"
              aria-label="Pesquisar em descrição e categoria"
            />
          </div>
        </div>

        <div className="relative flex w-fit items-center flex-shrink-0 gap-2 md:gap-3">
          <button
            ref={filterButtonRef}
            type="button"
            onClick={handleFilterClick}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-0 border border-neutral-300 flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
            aria-label="Abrir filtros"
            aria-expanded={filterPopoverOpen || filterModalOpen}
            aria-haspopup="true"
          >
            <IconFilter />
          </button>
          {isDesktop && (
            <FilterPopover
              isOpen={filterPopoverOpen}
              onClose={() => setFilterPopoverOpen(false)}
              anchorRef={filterButtonRef}
            />
          )}

          <div className="flex-shrink-0">
            <DateRangePicker />
          </div>

          <div className="min-w-0 flex-shrink-0 overflow-hidden">
            <FamilyMembersWidget />
          </div>
        </div>
      </div>

      {/* Coluna direita: auto — botão Nova transação sempre visível, nunca cortado */}
      <div className="mt-figma-16 flex-shrink-0 md:mt-0 md:flex md:justify-start md:items-start">
        <button
          type="button"
          className="flex items-center justify-center gap-figma-8 w-full md:w-auto px-figma-24 py-figma-16 md:py-figma-12 rounded-shape-20 bg-secondary-figma-900 text-neutral-0 text-label-medium font-semibold hover:opacity-90 transition-opacity min-h-[48px] md:min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary-figma-500 focus:ring-offset-2 whitespace-nowrap"
        >
          <IconPlus />
          Nova transação
        </button>
      </div>

      {!isDesktop && (
        <FilterModal
          isOpen={filterModalOpen}
          onClose={() => setFilterModalOpen(false)}
        />
      )}
    </header>
  )
}
