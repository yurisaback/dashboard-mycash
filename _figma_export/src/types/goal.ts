/**
 * Goal type
 * Represents a financial goal
 */
export type Goal = {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  memberId: string | null; // null = family goal
  category?: string;
};
