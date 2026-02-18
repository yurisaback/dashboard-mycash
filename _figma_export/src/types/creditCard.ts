/**
 * CreditCard type
 * Represents a credit card account
 */
export type CreditCard = {
  id: string;
  name: string;
  holderId: string; // ID of FamilyMember
  limit: number;
  currentBill: number;
  closingDay: number; // 1-31
  dueDay: number; // 1-31
  theme: 'black' | 'lime' | 'white';
  lastDigits?: string; // "5897"
  logo?: string; // URL or path to bank logo
};
