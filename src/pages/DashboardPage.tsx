import { DashboardHeader, BalanceCard, IncomeCard, ExpenseCard, ExpensesByCategoryCarousel, FinancialFlowChart, CreditCardsWidget, UpcomingExpensesWidget } from '../components/dashboard'

/**
 * Dashboard — layout Figma 2021-3854: duas colunas.
 * Esquerda: categorias, resumo financeiro, fluxo financeiro.
 * Direita: Cards & Contas, Próximas despesas.
 */
function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col bg-background-primary">
      <div className="w-full min-w-0 max-w-full shrink-0 overflow-x-hidden page-padding-x box-border" style={{ width: '100%' }}>
        <DashboardHeader />
      </div>
      <div className="flex flex-1 flex-col self-stretch w-full min-w-0 max-w-full overflow-x-hidden page-padding-x py-6 md:py-8 box-border">
        {/* Duas colunas no desktop (Figma 2021-3854): esquerda ~2/3, direita ~1/3; mobile empilhado */}
        <div className="mt-6 md:mt-8 grid w-full min-w-0 max-w-full grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 md:gap-figma-24 items-start">
          {/* Coluna esquerda: resumo, categorias (sem título), gráfico */}
          <div className="flex flex-col gap-6 md:gap-figma-24 w-full min-w-0">
            <section
              className="grid w-full min-w-0 grid-cols-1 md:grid-cols-3 gap-4 md:gap-figma-24"
              aria-label="Resumo financeiro"
            >
              <div className="min-w-0 overflow-hidden">
                <BalanceCard />
              </div>
              <div className="min-w-0 overflow-hidden">
                <IncomeCard />
              </div>
              <div className="min-w-0 overflow-hidden">
                <ExpenseCard />
              </div>
            </section>
            <section className="w-full min-w-0" aria-label="Despesas por categoria">
              <ExpensesByCategoryCarousel />
            </section>
            <section className="w-full min-w-0" aria-label="Fluxo financeiro">
              <FinancialFlowChart />
            </section>
          </div>
          {/* Coluna direita: Cards & Contas, Próximas despesas */}
          <div className="flex flex-col gap-6 md:gap-figma-24 w-full min-w-0">
            <section className="w-full min-w-0" aria-label="Cards e contas">
              <CreditCardsWidget />
            </section>
            <section className="w-full min-w-0" aria-label="Próximas despesas">
              <UpcomingExpensesWidget />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
