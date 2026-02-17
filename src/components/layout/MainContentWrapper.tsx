import { ReactNode } from 'react'

export interface MainContentWrapperProps {
  children: ReactNode
  /** Largura da sidebar à esquerda (para margem fluida). 0 quando sidebar não está visível. */
  sidebarWidth: number
  /** Padding-top para header mobile (altura do header fixo). 0 quando header não está visível. */
  paddingTop?: number
}

/**
 * Envolve o conteúdo principal. Aplica margin-left igual à largura da sidebar no desktop
 * e padding-top para o HeaderMobile quando em viewport mobile/tablet.
 */
export function MainContentWrapper({ children, sidebarWidth, paddingTop = 0 }: MainContentWrapperProps) {
  return (
    <main
      className="min-h-screen w-full bg-background-primary"
      style={{
        marginLeft: sidebarWidth,
        paddingTop,
        transition: 'margin-left var(--sidebar-transition-duration) ease-in-out',
      }}
    >
      {children}
    </main>
  )
}
