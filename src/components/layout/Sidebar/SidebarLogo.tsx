/**
 * Logo da Sidebar — SVGs do projeto.
 * - Expandido: logo-default.svg (Mycash+).
 * - Colapsado: logo-small.svg (My / cash+).
 */
export interface SidebarLogoProps {
  isExpanded: boolean
}

const LOGO_DEFAULT_SRC = '/assets/logo-default.svg'
const LOGO_SMALL_SRC = '/assets/logo-small.svg'

export function SidebarLogo({ isExpanded }: SidebarLogoProps) {
  return (
    <img
      src={isExpanded ? LOGO_DEFAULT_SRC : LOGO_SMALL_SRC}
      alt="Mycash+"
      className="h-8 w-auto object-contain object-left flex-shrink-0"
      style={!isExpanded ? { objectPosition: 'center' } : undefined}
    />
  )
}
