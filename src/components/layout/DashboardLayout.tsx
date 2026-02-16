import { ReactNode } from 'react'
import { useSidebarToggle } from '../../hooks/useSidebarToggle'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { Sidebar } from './Sidebar/Sidebar'
import { MainContentWrapper } from './MainContentWrapper'
import { IconChevronLeft, IconChevronRight } from './Sidebar/SidebarIcons'

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
        <>
          <Sidebar isExpanded={isExpanded} />
          <button
            type="button"
            onClick={toggle}
            className="fixed rounded-full bg-neutral-0 flex items-center justify-center text-secondary-figma-900 hover:bg-neutral-300/50 transition-[left,background-color] duration-[var(--sidebar-transition-duration)] ease-in-out z-40 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 focus:ring-offset-2 [&_svg]:w-4 [&_svg]:h-4"
            style={{
              left: sidebarWidth - 16,
              top: 16,
              width: 32,
              height: 32,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
            aria-label={isExpanded ? 'Recolher menu' : 'Expandir menu'}
          >
            {isExpanded ? <IconChevronLeft /> : <IconChevronRight />}
          </button>
        </>
      )}
      <MainContentWrapper sidebarWidth={sidebarWidth}>
        {children}
      </MainContentWrapper>
    </>
  )
}
