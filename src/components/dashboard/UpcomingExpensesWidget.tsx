import { IconPlus } from './DashboardIcons'

/**
 * Widget "Próximas despesas" — placeholder até PROMPT 10.
 * Mantém o layout em duas colunas alinhado ao Figma (Cards & Contas + Próximas despesas).
 */
export function UpcomingExpensesWidget() {
  return (
    <section
      className="w-full min-w-0 rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24 shadow-sm"
      aria-label="Próximas despesas"
    >
      <header className="flex items-center justify-between gap-figma-16 mb-figma-24">
        <h2 className="text-heading-md font-bold text-text-primary">
          Próximas despesas
        </h2>
        <button
          type="button"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-transparent text-neutral-500 transition-colors hover:border-primary-figma-500 hover:bg-primary-figma-500/10 hover:text-primary-figma-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
          aria-label="Adicionar despesa"
        >
          <IconPlus />
        </button>
      </header>
      <div className="flex flex-col items-center justify-center rounded-shape-20 border-2 border-dashed border-neutral-300 py-figma-24 text-center">
        <p className="text-body-md text-text-tertiary">Nenhuma despesa pendente</p>
      </div>
    </section>
  )
}
