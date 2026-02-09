/**
 * Tipo de transação: receita ou despesa
 */
export type TransactionType = 'income' | 'expense';

/**
 * Status da transação
 */
export type TransactionStatus = 'completed' | 'pending' | 'cancelled';

/**
 * Entidade Transaction - Representa uma transação financeira
 */
export interface Transaction {
  /** ID único da transação */
  id: string;
  
  /** Tipo da transação: receita ou despesa */
  type: TransactionType;
  
  /** Valor da transação (sempre positivo) */
  value: number;
  
  /** Descrição da transação */
  description: string;
  
  /** Categoria da transação */
  category: string;
  
  /** Data da transação */
  date: Date;
  
  /** ID da conta bancária ou cartão de crédito vinculado */
  accountId: string;
  
  /** ID do membro da família responsável (null se for geral) */
  memberId: string | null;
  
  /** Número de parcelas (1 se for à vista) */
  installments: number;
  
  /** Parcela atual (1 se for à vista ou primeira parcela) */
  currentInstallment: number;
  
  /** Status da transação */
  status: TransactionStatus;
  
  /** Se é uma despesa recorrente */
  isRecurring: boolean;
  
  /** Se foi paga (apenas para despesas) */
  isPaid: boolean;
  
  /** Data de vencimento (para despesas pendentes) */
  dueDate?: Date;
  
  /** Observações adicionais */
  notes?: string;
  
  /** Data de criação */
  createdAt: Date;
  
  /** Data de última atualização */
  updatedAt: Date;
}
