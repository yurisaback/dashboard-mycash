import { useState, useEffect } from 'react'

/**
 * Retorna true quando a media query corresponde (ex: min-width: 1280px para desktop).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', handler)
    setMatches(media.matches)
    return () => media.removeEventListener('change', handler)
  }, [query])

  return matches
}

/** Desktop: ≥1280px (lg do projeto) */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1280px)')
}
