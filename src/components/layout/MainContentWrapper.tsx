import { ReactNode } from 'react'

export interface MainContentWrapperProps {
  children: ReactNode
  /** Largura da sidebar à esquerda (para margem fluida). 0 quando sidebar não está visível. */
  sidebarWidth: number
}

/**
 * Envolve o conteúdo principal. Aplica margin-left igual à largura da sidebar no desktop
 * para que o conteúdo seja empurrado (não sobreposto). Transição suave quando a sidebar expande/colapsa.
 */
export function MainContentWrapper({ children, sidebarWidth }: MainContentWrapperProps) {
  return (
    <main
      className="min-h-screen w-full bg-background-primary"
      style={{
        marginLeft: sidebarWidth,
        transition: 'margin-left var(--sidebar-transition-duration) ease-in-out',
      }}
    >
      {children}
    </main>
  )
}
