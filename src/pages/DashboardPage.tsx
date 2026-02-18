import { DashboardHeader, BalanceCard, IncomeCard, ExpenseCard, ExpensesByCategoryCarousel, FinancialFlowChart, CreditCardsWidget, UpcomingExpensesWidget, TransactionsTable } from '../components/dashboard'

/**
 * Dashboard — layout Figma 2021-3854 + PROMPT 11.
 * Duas colunas: esquerda (resumo, categorias, gráfico); direita (Cards & Contas, Próximas despesas).
 * Abaixo: Extrato detalhado em 100% da largura.
 */
function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col bg-background-primary">
      <div className="w-full min-w-0 max-w-full shrink-0 overflow-x-hidden page-padding-x box-border" style={{ width: '100%' }}>
        <DashboardHeader />
      </div>
      <div className="flex flex-1 flex-col self-stretch w-full min-w-0 max-w-full overflow-x-hidden px-[2px] pt-0 pb-0 box-border">
        {/* Grid: 24px entre cards. Coluna esquerda: Resumo + Categorias ( mesma altura que Cards ); direita: Cartões; depois Gráfico | Próximas despesas. */}
        <div className="mt-0 grid w-full min-w-0 max-w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-stretch">
          {/* Wrapper: Figma — flex, align-items: center, gap: 24px, align-self: stretch. Resumo + Categorias = altura do CreditCardsWidget */}
          <div className="flex min-h-0 w-full min-w-0 flex-col items-center self-stretch gap-6 lg:row-span-2">
            <section
              className="grid h-full min-h-0 flex-1 grid-cols-1 gap-6 md:grid-cols-3 w-full min-w-0"
              aria-label="Resumo financeiro"
            >
              <div className="min-w-0 overflow-hidden h-full">
                <BalanceCard />
              </div>
              <div className="min-w-0 overflow-hidden h-full">
                <IncomeCard />
              </div>
              <div className="min-w-0 overflow-hidden h-full">
                <ExpenseCard />
              </div>
            </section>
            <section className="flex min-h-0 flex-1 w-full min-w-0" aria-label="Despesas por categoria">
              <ExpensesByCategoryCarousel />
            </section>
          </div>
          <section className="w-full min-w-0 lg:row-span-2" aria-label="Cards e contas">
            <CreditCardsWidget />
          </section>
          <section className="flex w-full min-w-0 flex-col lg:min-h-0" aria-label="Fluxo financeiro">
            <FinancialFlowChart />
          </section>
          <section className="flex w-full min-w-0 flex-col lg:min-h-0" aria-label="Próximas despesas">
            <UpcomingExpensesWidget />
          </section>
        </div>

        {/* Extrato detalhado — 24px acima */}
        <section className="mt-6 w-full min-w-0 max-w-full" aria-label="Extrato detalhado">
          <TransactionsTable />
        </section>
      </div>
    </div>
  )
}

export default DashboardPage
