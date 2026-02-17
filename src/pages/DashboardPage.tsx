import { DashboardHeader } from '../components/dashboard'

function DashboardPage() {
  return (
    <div className="min-h-screen min-w-0 bg-background-primary">
      {/* Navbar em largura total (100%), com espaçamento interno via page-padding-x */}
      <div className="w-full min-w-0 page-padding-x">
        <DashboardHeader />
      </div>
      {/* Conteúdo com o mesmo padding horizontal e max-width do container */}
      <div className="page-padding-x container-responsive py-8 w-full min-w-0">
        <div className="mt-8">
          <h2 className="text-heading-md font-bold text-text-primary mb-4">
            Resumo
          </h2>
          <p className="text-body-md text-text-secondary">
            Cards e gráficos serão implementados nos próximos prompts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
