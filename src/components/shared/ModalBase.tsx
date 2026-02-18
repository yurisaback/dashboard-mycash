import type { ReactNode } from 'react'

export interface ModalBaseProps {
  children: ReactNode
  /** Conteúdo do header (esquerda) */
  headerLeft: ReactNode
  /** Botão de fechar (X) à direita */
  onClose: () => void
  /** Conteúdo do footer */
  footer?: ReactNode
  /** Se o modal ocupa tela cheia */
  fullScreen?: boolean
  /** Largura máxima (para modais centralizados) */
  maxWidth?: string
  /** z-index do overlay */
  zIndex?: number
}

export function ModalBase({
  children,
  headerLeft,
  onClose,
  footer,
  fullScreen = false,
  maxWidth = '500px',
  zIndex = 10001,
}: ModalBaseProps) {
  const overlayZ = zIndex - 1
  const modalZ = zIndex

  return (
    <>
      <div
        className="fixed inset-0 bg-secondary-figma-900/50"
        style={{ zIndex: overlayZ }}
        onClick={onClose}
        aria-hidden
      />
      <div
        className={`fixed bg-surface-500 flex flex-col ${
          fullScreen
            ? 'inset-0 rounded-none'
            : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-h-[90vh] rounded-shape-20 border border-neutral-300 shadow-lg'
        }`}
        style={{ zIndex: modalZ, maxWidth: fullScreen ? undefined : maxWidth }}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fixo */}
        <header className="flex-shrink-0 flex items-start justify-between gap-figma-16 p-figma-24 border-b border-neutral-300">
          <div className="min-w-0 flex-1">{headerLeft}</div>
          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* Conteúdo scrollável */}
        <div className="flex-1 min-h-0 overflow-y-auto p-figma-24">{children}</div>

        {/* Footer fixo (opcional) */}
        {footer && (
          <footer className="flex-shrink-0 flex items-center justify-end gap-figma-16 p-figma-24 border-t border-neutral-300">
            {footer}
          </footer>
        )}
      </div>
    </>
  )
}
