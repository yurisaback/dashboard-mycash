import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react'
import { IconCheck } from '../components/dashboard/DashboardIcons'

interface ToastContextValue {
  showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

export interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [message, setMessage] = useState<string | null>(null)

  const showToast = useCallback((msg: string) => {
    setMessage(msg)
  }, [])

  useEffect(() => {
    if (!message) return
    const t = setTimeout(() => setMessage(null), 2500)
    return () => clearTimeout(t)
  }, [message])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10002] flex items-center gap-figma-8 px-figma-24 py-figma-12 rounded-shape-20 bg-secondary-figma-900 text-neutral-0 text-label-medium font-medium shadow-lg animate-[fadeInUp_0.3s_ease-out]"
          role="status"
          aria-live="polite"
        >
          <span className="flex-shrink-0 text-success">
            <IconCheck />
          </span>
          {message}
        </div>
      )}
    </ToastContext.Provider>
  )
}
