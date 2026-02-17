import { DashboardHeader, BalanceCard, IncomeCard, ExpenseCard, ExpensesByCategoryCarousel, FinancialFlowChart } from '../components/dashboard'

/**
 * Dashboard — layout Figma 2010-7186: flex, space-between, items-start, align-self stretch.
 * Navbar e cards ocupam 100% da área ao lado do menu, respeitando apenas margin e padding.
 */
function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col bg-background-primary">
      {/* Navbar: 100% da largura com padding horizontal; overflow hidden para não cortar no desktop */}
      <div className="w-full min-w-0 max-w-full shrink-0 overflow-x-hidden page-padding-x box-border" style={{ width: '100%' }}>
        <DashboardHeader />
      </div>
      {/* Conteúdo: mesmo padding horizontal do header; só o carrossel tem scroll lateral */}
      <div className="flex flex-1 flex-col self-stretch w-full min-w-0 max-w-full overflow-x-hidden page-padding-x py-6 md:py-8 box-border">
        {/* Cards de resumo — div 100%, 24px entre cards, sem atravessar a tela (Figma 2021-3854, 2021-3857) */}
        <section
          className="grid w-full min-w-0 max-w-full grid-cols-1 md:grid-cols-[repeat(3,minmax(0,1fr))] gap-4 md:gap-figma-24 mt-6 md:mt-8"
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
        <section className="mt-8 w-full min-w-0" aria-label="Despesas por categoria">
          <h2 className="text-heading-md font-bold text-text-primary mb-4">
            Despesas por categoria
          </h2>
          <ExpensesByCategoryCarousel />
        </section>
        <section className="mt-8 w-full min-w-0" aria-label="Fluxo financeiro">
          <FinancialFlowChart />
        </section>
      </div>
    </div>
  )
}

export default DashboardPage
