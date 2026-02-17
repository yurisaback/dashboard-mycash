import { useState, useEffect, useRef } from 'react'

const DEFAULT_DURATION_MS = 800

/**
 * Retorna um valor que anima de zero (ou do valor anterior) até target em ~durationMs.
 * Usado para animação de contagem nos cards de resumo (PROMPT 5).
 */
export function useCountUp(targetValue: number, durationMs: number = DEFAULT_DURATION_MS): number {
  const [displayValue, setDisplayValue] = useState(0)
  const startValueRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const startTime = performance.now()
    startTimeRef.current = startTime
    startValueRef.current = displayValue

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - (1 - progress) ** 2
      const current = startValueRef.current + (targetValue - startValueRef.current) * eased
      setDisplayValue(current)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplayValue(targetValue)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [targetValue, durationMs])

  return Math.round(displayValue * 100) / 100
}
