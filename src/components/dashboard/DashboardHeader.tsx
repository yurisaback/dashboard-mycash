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
      className="flex flex-col md:flex-row md:items-center gap-4 md:gap-4 lg:gap-6 w-full max-w-full min-w-0 py-4 md:py-6"
      role="banner"
    >
      {/* Busca — encolhe primeiro para garantir que o botão "Nova transação" sempre caiba na tela */}
      <div className="w-full min-w-0 md:min-w-[80px] md:max-w-[220px] flex-shrink order-1 md:order-1">
          <label htmlFor="dashboard-search" className="sr-only">
            Pesquisar transações
          </label>
          <div className="relative">
            <span className="absolute left-figma-12 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
              <IconSearch />
            </span>
            <input
              id="dashboard-search"
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Pesquisar..."
              className="w-full pl-10 pr-figma-16 py-figma-12 rounded-shape-20 bg-neutral-300/30 border border-neutral-300 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 focus:border-transparent"
              aria-label="Pesquisar em descrição e categoria"
            />
          </div>
      </div>

      {/* Botão filtros */}
      <div className="relative flex items-center flex-shrink-0 order-2">
          <button
            ref={filterButtonRef}
            type="button"
            onClick={handleFilterClick}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-300/30 border border-neutral-300 flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
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
      </div>

      {/* Seletor de período */}
      <div className="flex-shrink-0 order-3">
        <DateRangePicker />
      </div>

      {/* Widget membros */}
      <div className="flex-shrink-0 order-4">
        <FamilyMembersWidget />
      </div>

      {/* Spacer — distância entre membros e "Nova transação" varia com a largura da tela; garante que o botão fique sempre visível */}
      <div className="hidden md:block flex-1 min-w-4 order-5" aria-hidden />

      {/* Botão Nova Transação — sempre visível à direita; nunca encolhe */}
      <button
        type="button"
        className="flex items-center justify-center gap-figma-8 w-full md:w-auto md:min-w-[160px] md:flex-shrink-0 px-figma-24 py-figma-16 md:py-figma-12 rounded-shape-20 bg-secondary-figma-900 text-neutral-0 text-label-medium font-semibold hover:opacity-90 transition-opacity min-h-[48px] md:min-h-[44px] order-6 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 focus:ring-offset-2"
      >
        <IconPlus />
        Nova transação
      </button>

      {!isDesktop && (
        <FilterModal
          isOpen={filterModalOpen}
          onClose={() => setFilterModalOpen(false)}
        />
      )}
    </header>
  )
}
