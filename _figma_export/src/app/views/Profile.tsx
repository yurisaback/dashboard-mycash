/**
 * Profile View
 * User profile and settings
 */
export default function Profile() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-primary">Perfil</h1>
      <p className="text-muted-foreground mt-2">
        Profile view will be implemented in PROMPT 19-20.
      </p>
      <div className="mt-8 p-6 bg-card rounded-lg border border-border">
        <h2 className="text-primary">Informações Pessoais</h2>
        <p className="text-muted-foreground mt-2">
          Dados do usuário, membros da família e configurações serão exibidos aqui.
        </p>
      </div>
    </div>
  );
}