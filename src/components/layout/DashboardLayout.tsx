import { ReactNode } from 'react'
import { useSidebarToggle } from '../../hooks/useSidebarToggle'
import { useIsDesktop1024 } from '../../hooks/useMediaQuery'
import { Sidebar } from './Sidebar/Sidebar'
import { HeaderMobile, HEADER_MOBILE_HEIGHT } from './HeaderMobile'
import { MainContentWrapper } from './MainContentWrapper'
import { IconChevronLeft, IconChevronRight } from './Sidebar/SidebarIcons'

const SIDEBAR_WIDTH_EXPANDED = 256
const SIDEBAR_WIDTH_COLLAPSED = 72
/** Espaço entre o menu lateral e o conteúdo à direita (24px). */
const SIDEBAR_CONTENT_GAP = 24

export interface DashboardLayoutProps {
  children: ReactNode
}

/**
 * Layout principal do dashboard.
 * Desktop (≥1024px): Sidebar fixa + área de conteúdo em flex que ocupa 100% do restante (sem overflow).
 * Mobile/Tablet (<1024px): HeaderMobile + conteúdo com padding-top.
 * Nunca renderiza Sidebar e HeaderMobile simultaneamente.
 */
export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isDesktop = useIsDesktop1024()
  const { isExpanded, toggle } = useSidebarToggle(true)

  const sidebarWidth = isDesktop
    ? isExpanded
      ? SIDEBAR_WIDTH_EXPANDED
      : SIDEBAR_WIDTH_COLLAPSED
    : 0

  const headerTopPadding = !isDesktop ? HEADER_MOBILE_HEIGHT : 0

  if (isDesktop) {
    return (
      <div className="flex w-full h-screen overflow-hidden bg-background-primary">
        <Sidebar isExpanded={isExpanded} />
        {/* Spacer: reserva a largura da sidebar (fixa) para o flex dar o restante ao conteúdo */}
        <div
          aria-hidden
          className="flex-shrink-0"
          style={{ width: sidebarWidth, minWidth: sidebarWidth }}
        />
        <div
          className="flex-1 min-w-0 min-h-0 flex flex-col overflow-hidden"
          style={{ paddingLeft: SIDEBAR_CONTENT_GAP }}
        >
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
          {/* Apenas esta área rola; sidebar permanece fixa 100vh */}
          <div className="scrollbar-hide flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
            <MainContentWrapper sidebarWidth={0} paddingTop={0}>
              {children}
            </MainContentWrapper>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <HeaderMobile />
      <MainContentWrapper
        sidebarWidth={0}
        sidebarNavbarGap={SIDEBAR_CONTENT_GAP}
        paddingTop={headerTopPadding}
      >
        {children}
      </MainContentWrapper>
    </>
  )
}
