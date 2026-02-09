/**
 * Tipo de conta bancária
 */
export type AccountType = 'checking' | 'savings' | 'investment';

/**
 * Entidade BankAccount - Representa uma conta bancária
 */
export interface BankAccount {
  /** ID único da conta */
  id: string;
  
  /** Nome da conta (ex: "Nubank Conta") */
  name: string;
  
  /** Tipo da conta */
  type: AccountType;
  
  /** ID do membro da família titular da conta */
  holderId: string;
  
  /** Saldo atual da conta */
  balance: number;
  
  /** Número da agência (opcional) */
  agency?: string;
  
  /** Número da conta (opcional) */
  accountNumber?: string;
  
  /** Logo/ícone do banco (URL ou nome) */
  bankLogo?: string;
  
  /** Data de criação */
  createdAt: Date;
  
  /** Data de última atualização */
  updatedAt: Date;
}
