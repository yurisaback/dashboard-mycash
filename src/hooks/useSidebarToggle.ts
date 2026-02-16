import { useState, useCallback } from 'react'

/**
 * Hook para controlar o estado expandido/colapsado da Sidebar (desktop).
 * Estado inicial: expandido (true).
 */
export function useSidebarToggle(initialExpanded = true) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded)

  const toggle = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  const expand = useCallback(() => {
    setIsExpanded(true)
  }, [])

  const collapse = useCallback(() => {
    setIsExpanded(false)
  }, [])

  return { isExpanded, toggle, expand, collapse }
}
