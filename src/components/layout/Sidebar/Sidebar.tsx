import { useState } from 'react'
import { SidebarItem } from './SidebarItem'
import { SidebarLogo } from './SidebarLogo'
import {
  IconHome,
  IconCreditCard,
  IconReceipt,
  IconUser,
} from './SidebarIcons'
import { ROUTES } from '../../../constants'

export interface SidebarProps {
  isExpanded: boolean
}

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Home', icon: <IconHome /> },
  { to: ROUTES.CARDS, label: 'Cartões', icon: <IconCreditCard /> },
  { to: ROUTES.TRANSACTIONS, label: 'Transações', icon: <IconReceipt /> },
  { to: ROUTES.PROFILE, label: 'Perfil', icon: <IconUser /> },
] as const

const AVATAR_SRC = '/assets/avatar-user.png'

function UserAvatar() {
  const [imgError, setImgError] = useState(false)
  if (imgError) {
    return (
      <div
        className="flex-shrink-0 rounded-full bg-neutral-300 flex items-center justify-center text-secondary-figma-900 text-paragraph-x-small font-semibold"
        style={{ width: 24, height: 24 }}
        aria-hidden
      >
        YS
      </div>
    )
  }
  return (
    <img
      src={AVATAR_SRC}
      alt=""
      className="flex-shrink-0 rounded-full object-cover bg-neutral-300"
      style={{ width: 24, height: 24 }}
      aria-hidden
      onError={() => setImgError(true)}
    />
  )
}

/**
 * Sidebar desktop (≥1280px) — Figma MCP node 2126-3247.
 * - Fundo surface-500; borda direita neutral-300.
 * - Logo: "Mycash+" com "Mycash" sublinhado (expandido); colapsado duas linhas "My" / "cash+".
 * - Nav: shape-20, Label/Medium; ativo primary-500 + secondary-900; inativo neutral-500; espaçamento space/8, space/12.
 * - Perfil: nome Paragraph/Small Bold (secondary-900), email Paragraph/X-Small (neutral-500); padding space/12, space/16|24.
 * - Collapse: shape-100, secondary-50, ícone secondary-900; transição 300ms.
 */
export function Sidebar({ isExpanded }: SidebarProps) {
  return (
    <aside
      className="flex flex-col fixed left-0 top-0 h-screen bg-surface-500 border-r border-neutral-300 z-30 overflow-x-hidden"
      style={{
        width: isExpanded ? 'var(--sidebar-width-expanded)' : 'var(--sidebar-width-collapsed)',
        transition: `width var(--sidebar-transition-duration) ease-in-out`,
        paddingLeft: isExpanded ? 'var(--sidebar-padding-x)' : 'var(--sidebar-padding-x-collapsed)',
        paddingRight: isExpanded ? 'var(--sidebar-padding-x)' : 'var(--sidebar-padding-x-collapsed)',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-32)',
      }}
      aria-label="Navegação principal"
    >
      <div className="flex flex-col flex-1 min-w-0" style={{ gap: 'var(--sidebar-gap-logo-nav)' }}>
        <div className="flex items-center min-h-16 h-16 flex-shrink-0 border-b border-neutral-300">
          {isExpanded ? (
            <SidebarLogo isExpanded />
          ) : (
            <div className="w-full flex justify-center">
              <SidebarLogo isExpanded={false} />
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto flex flex-col min-h-0" style={{ gap: 'var(--space-8)' }} aria-label="Menu">
        {NAV_ITEMS.map((item) => (
          <SidebarItem
            key={item.to}
            to={item.to}
            label={item.label}
            icon={item.icon}
            isCollapsed={!isExpanded}
          />
        ))}
        </nav>
      </div>

      <div
        className="flex border-t border-neutral-300 flex-shrink-0 min-h-[var(--sidebar-profile-block-min-height)] pt-figma-12 flex-col items-start gap-figma-8"
      >
        <UserAvatar />
        {isExpanded && (
          <div className="min-w-0 flex flex-col gap-figma-4">
            <p className="text-label-medium font-semibold text-secondary-figma-900 truncate">
              Yuri Saback
            </p>
            <p className="text-paragraph-x-small font-normal text-neutral-500 truncate">
              yurisaback@gmail.com
            </p>
          </div>
        )}
      </div>
    </aside>
  )
}
