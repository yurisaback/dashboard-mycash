/**
 * Transaction type
 * Represents a financial transaction (income or expense)
 */
export type Transaction = {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: Date;
  accountId: string; // ID of BankAccount or CreditCard
  memberId: string | null; // null = "Família (Geral)"
  installments: number; // 1 = single payment, >1 = installment
  currentInstallment?: number; // Current installment number (1/3, 2/3, etc.)
  isRecurring: boolean;
  isPaid: boolean;
  status: 'completed' | 'pending';
};
