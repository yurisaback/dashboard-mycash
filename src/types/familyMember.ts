/**
 * Entidade FamilyMember - Representa um membro da família
 */
export interface FamilyMember {
  /** ID único do membro */
  id: string;
  
  /** Nome completo do membro */
  name: string;
  
  /** Função/papel na família (ex: "Pai", "Mãe", "Filho") */
  role: string;
  
  /** URL do avatar do membro */
  avatarUrl: string;
  
  /** Email do membro */
  email: string;
  
  /** Renda mensal estimada (opcional) */
  monthlyIncome?: number;
  
  /** Se é o usuário principal/logado */
  isPrimary?: boolean;
  
  /** Data de criação */
  createdAt: Date;
  
  /** Data de última atualização */
  updatedAt: Date;
}
