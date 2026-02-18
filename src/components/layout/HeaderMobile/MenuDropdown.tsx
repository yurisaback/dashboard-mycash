import { useState, useCallback, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IconHome, IconCreditCard, IconReceipt, IconUser } from '../Sidebar/SidebarIcons'
import { ROUTES } from '../../../constants'

const MENU_ANIMATION_DURATION_MS = 300

/** Ícone X para fechar */
function IconX() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Home', icon: <IconHome /> },
  { to: ROUTES.CARDS, label: 'Cartões', icon: <IconCreditCard /> },
  { to: ROUTES.TRANSACTIONS, label: 'Transações', icon: <IconReceipt /> },
  { to: ROUTES.PROFILE, label: 'Perfil', icon: <IconUser /> },
] as const

export interface MenuDropdownProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Menu dropdown mobile — desliza de cima para baixo.
 * Identidade visual alinhada à Sidebar desktop: item ativo primary-500 + secondary-900;
 * inativo neutral-500, hover neutral-0 + border-neutral-300.
 * Botão Sair danger no rodapé. Fecha ao clicar em item, X ou overlay.
 */
export function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  const navigate = useNavigate()
  const [isClosing, setIsClosing] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClose = useCallback(() => {
    if (isClosing) return
    setIsClosing(true)
    closeTimeoutRef.current = setTimeout(() => {
      closeTimeoutRef.current = null
      setIsClosing(false)
      onClose()
    }, MENU_ANIMATION_DURATION_MS)
  }, [onClose, isClosing])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  const handleNavClick = () => {
    handleClose()
  }

  const handleLogout = () => {
    handleClose()
    // TODO: integrar com Supabase/auth quando disponível
    navigate('/')
  }

  if (!isOpen && !isClosing) return null

  return (
    <>
      {/* Overlay escuro semi-transparente */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleClose}
        onKeyDown={(e) => e.key === 'Escape' && handleClose()}
        className={`fixed inset-0 bg-secondary-figma-900/50 z-40 transition-opacity duration-300 ease-in-out ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        aria-label="Fechar menu"
      />

      {/* Painel do menu — desliza de cima para baixo ao abrir, de baixo para cima ao fechar */}
      <div
        className="scrollbar-hide fixed left-0 right-0 top-0 z-50 bg-surface-500 shadow-md max-h-[70vh] overflow-y-auto rounded-b-shape-20"
        style={{
          animation: isClosing
            ? `slideUp ${MENU_ANIMATION_DURATION_MS}ms ease-in forwards`
            : `slideDown ${MENU_ANIMATION_DURATION_MS}ms ease-out`,
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex items-center justify-between px-figma-16 py-figma-12 border-b border-neutral-300">
          <span className="text-label-medium font-semibold text-secondary-figma-900">Menu</span>
          <button
            type="button"
            onClick={handleClose}
            className="flex items-center justify-center w-10 h-10 rounded-shape-100 bg-secondary-50 text-secondary-figma-900 hover:bg-neutral-300/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
            aria-label="Fechar menu"
          >
            <IconX />
          </button>
        </div>

        <nav className="flex flex-col p-figma-8 gap-figma-4" aria-label="Navegação">
          {NAV_ITEMS.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/dashboard'}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `flex items-center gap-figma-8 rounded-shape-100 px-figma-16 py-figma-12 text-label-medium font-semibold min-h-[44px] transition-colors duration-[var(--sidebar-transition-duration)] ease-in-out border border-transparent ${
                  isActive
                    ? 'bg-primary-figma-500 text-secondary-figma-900 [&_svg]:stroke-[2.5]'
                    : 'bg-transparent text-neutral-500 hover:bg-neutral-0 hover:border-neutral-300 hover:text-neutral-1100 [&_svg]:stroke-[2]'
                }`
              }
            >
              <span className="flex-shrink-0 flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5 w-6 h-6">
                {icon}
              </span>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-neutral-300 p-figma-8">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-figma-8 rounded-shape-100 px-figma-16 py-figma-12 text-label-medium font-semibold min-h-[44px] bg-danger text-neutral-0 hover:opacity-90 transition-opacity"
          >
            Sair
          </button>
        </div>
      </div>
    </>
  )
}
