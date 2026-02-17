import { useRef, useState, useCallback, useEffect } from 'react'
import { useFinance } from '../../hooks/useFinance'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { CategoryDonutCard } from './CategoryDonutCard'

const SCROLL_STEP = 200
const SCROLL_THRESHOLD = 4

/** Cores do anel do donut por índice (variáveis do design system) */
const DONUT_RING_COLORS = [
  'var(--primary-700)',   // verde-limão
  'var(--neutral-1100)',  // preta
  'var(--neutral-500)',   // cinza médio
]

function getRingColor(index: number): string {
  return DONUT_RING_COLORS[index % DONUT_RING_COLORS.length]
}

/**
 * Carrossel horizontal de despesas por categoria com donuts.
 * Dados de calculateCategoryPercentage; navegação por roda, arraste e setas (desktop).
 */
export function ExpensesByCategoryCarousel() {
  const { calculateCategoryPercentage } = useFinance()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(false)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })
  const showArrows = useMediaQuery('(min-width: 768px)')

  const items = calculateCategoryPercentage()

  const scrollBy = useCallback((delta: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollLeft += delta
  }, [])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    const el = scrollRef.current
    if (!el) return
    e.preventDefault()
    el.scrollLeft += e.deltaY
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    dragStart.current = { x: e.clientX, scrollLeft: scrollRef.current.scrollLeft }
  }, [])

  const isDraggingRef = useRef(false)
  isDraggingRef.current = isDragging

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return
    const dx = e.clientX - dragStart.current.x
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false)
    setIsHovering(false)
  }, [])

  const updateScrollMasks = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const canScrollRight = scrollWidth > clientWidth
    setShowLeftFade(canScrollRight && scrollLeft > SCROLL_THRESHOLD)
    setShowRightFade(canScrollRight && scrollLeft < scrollWidth - clientWidth - SCROLL_THRESHOLD)
  }, [])

  const handleScroll = useCallback(() => {
    updateScrollMasks()
  }, [updateScrollMasks])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const run = () => updateScrollMasks()
    run()
    const raf = requestAnimationFrame(run)
    const ro = new ResizeObserver(run)
    ro.observe(el)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [items.length, updateScrollMasks])

  const handleMouseMoveRef = useRef(handleMouseMove)
  handleMouseMoveRef.current = handleMouseMove
  const handleMouseUpRef = useRef(handleMouseUp)
  handleMouseUpRef.current = handleMouseUp

  useEffect(() => {
    const onMove = (e: MouseEvent) => handleMouseMoveRef.current(e)
    const onUp = () => {
      if (isDraggingRef.current) handleMouseUpRef.current()
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  if (items.length === 0) {
    return (
      <section aria-label="Despesas por categoria" className="w-full min-w-0">
        <p className="text-paragraph-small text-text-secondary">Nenhuma despesa no período.</p>
      </section>
    )
  }

  return (
    <section
      aria-label="Despesas por categoria"
      className="relative w-full min-w-0 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Máscaras de fade: esquerda só após scroll; direita só se houver conteúdo à direita */}
      {showLeftFade && (
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 shrink-0"
          style={{
            background: 'linear-gradient(to right, var(--color-background-primary) 0%, transparent 100%)',
          }}
        />
      )}
      {showRightFade && (
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 shrink-0"
          style={{
            background: 'linear-gradient(to left, var(--color-background-primary) 0%, transparent 100%)',
          }}
        />
      )}

      {/* Setas (apenas tablet/desktop, visíveis ao hover) */}
      {showArrows && isHovering && (
        <>
          <button
            type="button"
            onClick={() => scrollBy(-SCROLL_STEP)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-surface-500 border border-neutral-300 shadow-md flex items-center justify-center text-neutral-1100 hover:bg-neutral-0 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
            aria-label="Rolar carrossel para a esquerda"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(SCROLL_STEP)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-surface-500 border border-neutral-300 shadow-md flex items-center justify-center text-neutral-1100 hover:bg-neutral-0 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
            aria-label="Rolar carrossel para a direita"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        data-carousel-scroll
        className="flex min-w-0 overflow-x-auto overflow-y-hidden scroll-smooth py-2 -mx-1 px-1"
        style={{
          gap: 'var(--space-20)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onScroll={handleScroll}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
      >
        {items.map((item, index) => (
          <CategoryDonutCard
            key={item.category}
            category={item.category}
            value={item.value}
            percentage={item.percentage}
            ringColor={getRingColor(index)}
          />
        ))}
      </div>
    </section>
  )
}