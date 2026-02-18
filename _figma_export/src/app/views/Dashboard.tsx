/**
 * Dashboard View
 * Main dashboard with financial overview
 */
export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-primary">Dashboard</h1>
      <p className="text-muted-foreground mt-2">
        Financial dashboard content will be implemented in future prompts.
      </p>
      <div className="mt-8 p-6 bg-card rounded-lg border border-border">
        <h2 className="text-primary">Resumo Financeiro</h2>
        <p className="text-muted-foreground mt-2">
          Cards de saldo, receitas e despesas serão implementados no PROMPT 5.
        </p>
      </div>
    </div>
  );
}