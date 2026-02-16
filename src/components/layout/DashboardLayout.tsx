import { ReactNode } from 'react'
import { useSidebarToggle } from '../../hooks/useSidebarToggle'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { Sidebar } from './Sidebar/Sidebar'
import { MainContentWrapper } from './MainContentWrapper'

const SIDEBAR_WIDTH_EXPANDED = 256
const SIDEBAR_WIDTH_COLLAPSED = 72

export interface DashboardLayoutProps {
  children: ReactNode
}

/**
 * Layout principal do dashboard.
 * Desktop (≥1280px): renderiza Sidebar + conteúdo com margem fluida.
 * Mobile/Tablet (<1280px): não renderiza Sidebar; conteúdo ocupa 100% (Header Mobile no PROMPT 3).
 */
export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isDesktop = useIsDesktop()
  const { isExpanded, toggle } = useSidebarToggle(true)

  const sidebarWidth = isDesktop
    ? isExpanded
      ? SIDEBAR_WIDTH_EXPANDED
      : SIDEBAR_WIDTH_COLLAPSED
    : 0

  return (
    <>
      {isDesktop && (
        <Sidebar isExpanded={isExpanded} onToggle={toggle} />
      )}
      <MainContentWrapper sidebarWidth={sidebarWidth}>
        {children}
      </MainContentWrapper>
    </>
  )
}
