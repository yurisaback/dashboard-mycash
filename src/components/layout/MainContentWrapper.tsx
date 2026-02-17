import { ReactNode } from 'react'

export interface MainContentWrapperProps {
  children: ReactNode
  /** Largura da sidebar à esquerda (para margem fluida). 0 quando sidebar não está visível. */
  sidebarWidth: number
  /** Distância entre o menu lateral e o navbar (32px no Figma). Aplicado só quando a sidebar está visível. */
  sidebarNavbarGap?: number
  /** Padding-top para header mobile (altura do header fixo). 0 quando header não está visível. */
  paddingTop?: number
}

/**
 * Envolve o conteúdo principal. No desktop: margin-left = sidebar + 32px de gap
 * (navbar ocupa 100% do espaço restante com 32px de distância do menu, aberto ou fechado).
 * No mobile/tablet: margin-left 0. Transição suave ao expandir/recolher a sidebar.
 */
export function MainContentWrapper({
  children,
  sidebarWidth,
  sidebarNavbarGap = 32,
  paddingTop = 0,
}: MainContentWrapperProps) {
  const marginLeft =
    sidebarWidth > 0 ? sidebarWidth + sidebarNavbarGap : 0

  return (
    <main
      className="min-h-screen w-full min-w-0 bg-background-primary"
      style={{
        marginLeft,
        paddingTop,
        transition: 'margin-left var(--sidebar-transition-duration) ease-in-out',
      }}
    >
      {children}
    </main>
  )
}
