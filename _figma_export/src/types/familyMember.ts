/**
 * FamilyMember type
 * Represents a family member user
 */
export type FamilyMember = {
  id: string;
  name: string;
  role: string; // "Pai", "Mãe", "Filho", "Filha", etc.
  avatar: string; // URL or figma:asset path
  email?: string;
  monthlyIncome?: number;
};
