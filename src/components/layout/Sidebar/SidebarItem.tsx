import { NavLink } from 'react-router-dom'
import { ReactNode, useState } from 'react'

/** Deve ser igual a --sidebar-tooltip-delay (400ms) em index.css */
const SIDEBAR_TOOLTIP_DELAY_MS = 400

export interface SidebarItemProps {
  to: string
  label: string
  icon: ReactNode
  isCollapsed: boolean
}

/**
 * Item de navegação da Sidebar (Figma MCP node 2012-8386).
 * - Ativo: bg primary-500, texto/ícone secondary-900.
 * - Inativo: transparente, texto/ícone neutral-500; hover neutral-300/50 + neutral-1100.
 * - Borda pill (shape-20). Label/Medium. Tooltip quando colapsado com delay token.
 */
export function SidebarItem({ to, label, icon, isCollapsed }: SidebarItemProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipTimeout, setTooltipTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (!isCollapsed) return
    const id = setTimeout(() => setShowTooltip(true), SIDEBAR_TOOLTIP_DELAY_MS)
    setTooltipTimeout(id)
  }

  const handleMouseLeave = () => {
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout)
      setTooltipTimeout(null)
    }
    setShowTooltip(false)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLink
        to={to}
        end={to === '/dashboard' || to === '/'}
        className={({ isActive }) =>
          `flex items-center gap-figma-8 rounded-shape-100 px-figma-16 py-figma-12 text-label-medium font-semibold min-h-[var(--sidebar-item-min-height)] transition-colors duration-[var(--sidebar-transition-duration)] ease-in-out ${
            isActive
              ? 'bg-primary-figma-500 text-secondary-figma-900'
              : 'bg-transparent text-neutral-500 border border-transparent hover:bg-neutral-0 hover:border-neutral-300 hover:text-neutral-1100'
          } ${isCollapsed ? 'justify-center px-0 w-11 min-w-11 h-11 min-h-11' : ''}`
        }
      >
        <span className={`flex-shrink-0 flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5 [&_svg]:stroke-[2] ${isCollapsed ? 'w-6 h-6' : 'w-6 h-6'}`}>
          {icon}
        </span>
        {!isCollapsed && <span className="truncate">{label}</span>}
      </NavLink>

      {isCollapsed && showTooltip && (
        <div
          className="absolute left-full top-1/2 -translate-y-1/2 ml-figma-8 z-50 px-figma-12 py-figma-8 rounded-shape-20 bg-secondary-figma-900 text-neutral-0 text-paragraph-small font-normal whitespace-nowrap shadow-md pointer-events-none"
          style={{ transition: 'opacity 150ms ease-out' }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
