/**
 * BankAccount type
 * Represents a bank account
 */
export type BankAccount = {
  id: string;
  name: string;
  holderId: string; // ID of FamilyMember
  balance: number;
  logo?: string; // URL or path to bank logo
};
