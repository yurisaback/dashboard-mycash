/**
 * Status do objetivo
 */
export type GoalStatus = 'active' | 'completed' | 'cancelled';

/**
 * Entidade Goal - Representa um objetivo financeiro
 */
export interface Goal {
  /** ID único do objetivo */
  id: string;
  
  /** Nome/título do objetivo */
  name: string;
  
  /** Descrição do objetivo */
  description: string;
  
  /** Valor alvo do objetivo */
  targetAmount: number;
  
  /** Valor atual acumulado */
  currentAmount: number;
  
  /** Data limite para alcançar o objetivo */
  deadline: Date;
  
  /** Status do objetivo */
  status: GoalStatus;
  
  /** ID do membro da família responsável (null se for familiar) */
  memberId: string | null;
  
  /** Categoria do objetivo (ex: "Viagem", "Casa", "Educação") */
  category: string;
  
  /** Data de criação */
  createdAt: Date;
  
  /** Data de última atualização */
  updatedAt: Date;
}
