import { useState } from 'react'
import { SidebarLogo } from '../Sidebar/SidebarLogo'
import { MenuDropdown } from './MenuDropdown'

/** Ícone menu (hamburger) */
function IconMenu() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

/** Altura do header mobile — touch target e padding */
export const HEADER_MOBILE_HEIGHT = 56

/**
 * HeaderMobile — substitui a sidebar em viewports < 1024px.
 * Fixo no topo, largura total, visível durante scroll.
 * Logo à esquerda, ícone de menu à direita (trigger do dropdown).
 */
export function HeaderMobile() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-figma-16 h-14 bg-surface-500 border-b border-neutral-300"
        style={{ minHeight: HEADER_MOBILE_HEIGHT }}
        aria-label="Cabeçalho mobile"
      >
        <div className="flex items-center min-w-0 flex-1">
          <SidebarLogo isExpanded />
        </div>

        <button
          type="button"
          onClick={() => setDropdownOpen(true)}
          className="flex-shrink-0 ml-figma-16 flex items-center justify-center w-10 h-10 rounded-shape-100 text-secondary-figma-900 hover:bg-neutral-300/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-figma-500 focus:ring-offset-2"
          aria-label="Abrir menu"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          <IconMenu />
        </button>
      </header>

      <MenuDropdown isOpen={dropdownOpen} onClose={() => setDropdownOpen(false)} />
    </>
  )
}
