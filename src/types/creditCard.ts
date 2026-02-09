/**
 * Tema visual do cartão
 */
export type CardTheme = 'black' | 'lime' | 'white';

/**
 * Entidade CreditCard - Representa um cartão de crédito
 */
export interface CreditCard {
  /** ID único do cartão */
  id: string;
  
  /** Nome do cartão (ex: "Nubank Mastercard") */
  name: string;
  
  /** ID do membro da família titular do cartão */
  holderId: string;
  
  /** Limite total do cartão */
  limit: number;
  
  /** Fatura atual do cartão */
  currentBill: number;
  
  /** Dia de fechamento da fatura (1-31) */
  closingDay: number;
  
  /** Dia de vencimento da fatura (1-31) */
  dueDay: number;
  
  /** Últimos 4 dígitos do cartão (opcional) */
  lastDigits?: string;
  
  /** Tema visual do cartão */
  theme: CardTheme;
  
  /** Logo/ícone do banco (URL ou nome) */
  bankLogo?: string;
  
  /** Data de criação */
  createdAt: Date;
  
  /** Data de última atualização */
  updatedAt: Date;
}
