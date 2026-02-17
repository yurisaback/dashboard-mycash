import {
  createContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import { startOfMonth, endOfMonth, isWithinInterval } from 'date-fns'
import type {
  Transaction,
  Goal,
  CreditCard,
  BankAccount,
  FamilyMember,
} from '../types'
import { generateUniqueId } from '../utils'
import {
  MOCK_TRANSACTIONS,
  MOCK_GOALS,
  MOCK_CREDIT_CARDS,
  MOCK_BANK_ACCOUNTS,
  MOCK_FAMILY_MEMBERS,
} from './mockData'

/** Tipo de filtro de transação */
export type TransactionTypeFilter = 'all' | 'income' | 'expense'

/** Intervalo de datas para filtro */
export interface DateRange {
  startDate: Date
  endDate: Date
}

/** Dados agrupados por categoria */
export interface CategorySummary {
  category: string
  value: number
  percentage: number
}

interface FinanceContextValue {
  // Arrays principais
  transactions: Transaction[]
  goals: Goal[]
  creditCards: CreditCard[]
  bankAccounts: BankAccount[]
  familyMembers: FamilyMember[]

  // Filtros globais
  selectedMember: string | null
  setSelectedMember: (id: string | null) => void
  dateRange: DateRange
  setDateRange: (range: DateRange) => void
  transactionType: TransactionTypeFilter
  setTransactionType: (type: TransactionTypeFilter) => void
  searchText: string
  setSearchText: (text: string) => void

  // CRUD - Transactions
  addTransaction: (t: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateTransaction: (id: string, data: Partial<Transaction>) => void
  deleteTransaction: (id: string) => void

  // CRUD - Goals
  addGoal: (g: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateGoal: (id: string, data: Partial<Goal>) => void
  deleteGoal: (id: string) => void

  // CRUD - CreditCards
  addCreditCard: (c: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateCreditCard: (id: string, data: Partial<CreditCard>) => void
  deleteCreditCard: (id: string) => void

  // CRUD - BankAccounts
  addBankAccount: (b: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateBankAccount: (id: string, data: Partial<BankAccount>) => void
  deleteBankAccount: (id: string) => void

  // CRUD - FamilyMembers
  addFamilyMember: (m: Omit<FamilyMember, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateFamilyMember: (id: string, data: Partial<FamilyMember>) => void
  deleteFamilyMember: (id: string) => void

  // Funções de cálculo derivadas (aplicam filtros)
  getFilteredTransactions: () => Transaction[]
  calculateTotalBalance: () => number
  calculateIncomeForPeriod: () => number
  calculateExpensesForPeriod: () => number
  calculateExpensesByCategory: () => CategorySummary[]
  calculateCategoryPercentage: () => CategorySummary[]
  calculateSavingsRate: () => number
}

const defaultDateRange: DateRange = {
  startDate: startOfMonth(new Date()),
  endDate: endOfMonth(new Date()),
}

const FinanceContext = createContext<FinanceContextValue | null>(null)

export interface FinanceProviderProps {
  children: ReactNode
}

export function FinanceProvider({ children }: FinanceProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS)
  const [goals, setGoals] = useState<Goal[]>(MOCK_GOALS)
  const [creditCards, setCreditCards] = useState<CreditCard[]>(MOCK_CREDIT_CARDS)
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>(MOCK_BANK_ACCOUNTS)
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>(MOCK_FAMILY_MEMBERS)

  const [selectedMember, setSelectedMemberState] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState<DateRange>(defaultDateRange)
  const [transactionType, setTransactionType] = useState<TransactionTypeFilter>('all')
  const [searchText, setSearchText] = useState('')

  const setSelectedMember = useCallback((id: string | null) => {
    setSelectedMemberState(id)
  }, [])

  const now = useMemo(() => new Date(), [])

  const getFilteredTransactions = useCallback(() => {
    return transactions.filter((t) => {
      const txDate = t.date instanceof Date ? t.date : new Date(t.date)

      if (selectedMember !== null && t.memberId !== selectedMember) return false
      if (!isWithinInterval(txDate, { start: dateRange.startDate, end: dateRange.endDate }))
        return false
      if (transactionType !== 'all' && t.type !== transactionType) return false

      if (searchText.trim()) {
        const search = searchText.toLowerCase().trim()
        const matchDesc = t.description.toLowerCase().includes(search)
        const matchCat = t.category.toLowerCase().includes(search)
        if (!matchDesc && !matchCat) return false
      }

      return true
    })
  }, [transactions, selectedMember, dateRange, transactionType, searchText])

  const filteredTransactions = useMemo(
    () => getFilteredTransactions(),
    [getFilteredTransactions]
  )

  const calculateTotalBalance = useCallback(() => {
    const bankBalance = bankAccounts.reduce((sum, acc) => sum + acc.balance, 0)
    const cardBills = creditCards.reduce((sum, card) => sum + card.currentBill, 0)
    return bankBalance - cardBills
  }, [bankAccounts, creditCards])

  const calculateIncomeForPeriod = useCallback(() => {
    return filteredTransactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.value, 0)
  }, [filteredTransactions])

  const calculateExpensesForPeriod = useCallback(() => {
    return filteredTransactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.value, 0)
  }, [filteredTransactions])

  const calculateExpensesByCategory = useCallback((): CategorySummary[] => {
    const byCategory = new Map<string, number>()
    filteredTransactions
      .filter((t) => t.type === 'expense')
      .forEach((t) => {
        byCategory.set(t.category, (byCategory.get(t.category) ?? 0) + t.value)
      })
    return Array.from(byCategory.entries())
      .map(([category, value]) => ({ category, value, percentage: 0 }))
      .sort((a, b) => b.value - a.value)
  }, [filteredTransactions])

  const calculateCategoryPercentage = useCallback((): CategorySummary[] => {
    const income = calculateIncomeForPeriod()
    const byCategory = calculateExpensesByCategory()
    if (income <= 0) return byCategory
    return byCategory.map((c) => ({
      ...c,
      percentage: Math.round((c.value / income) * 100),
    }))
  }, [calculateIncomeForPeriod, calculateExpensesByCategory])

  const calculateSavingsRate = useCallback((): number => {
    const income = calculateIncomeForPeriod()
    const expenses = calculateExpensesForPeriod()
    if (income <= 0) return 0
    return Math.round(((income - expenses) / income) * 100)
  }, [calculateIncomeForPeriod, calculateExpensesForPeriod])

  const addTransaction = useCallback(
    (t: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newTx: Transaction = {
        ...t,
        id: generateUniqueId(),
        date: t.date instanceof Date ? t.date : new Date(t.date),
        dueDate: t.dueDate ? (t.dueDate instanceof Date ? t.dueDate : new Date(t.dueDate)) : undefined,
        createdAt: now,
        updatedAt: now,
      }
      setTransactions((prev) => [...prev, newTx])
    },
    [now]
  )

  const updateTransaction = useCallback(
    (id: string, data: Partial<Transaction>) => {
      setTransactions((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, ...data, updatedAt: now } : t
        )
      )
    },
    [now]
  )

  const deleteTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const addGoal = useCallback(
    (g: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newGoal: Goal = {
        ...g,
        id: generateUniqueId(),
        deadline: g.deadline instanceof Date ? g.deadline : new Date(g.deadline),
        createdAt: now,
        updatedAt: now,
      }
      setGoals((prev) => [...prev, newGoal])
    },
    [now]
  )

  const updateGoal = useCallback(
    (id: string, data: Partial<Goal>) => {
      setGoals((prev) =>
        prev.map((g) => (g.id === id ? { ...g, ...data, updatedAt: now } : g))
      )
    },
    [now]
  )

  const deleteGoal = useCallback((id: string) => {
    setGoals((prev) => prev.filter((g) => g.id !== id))
  }, [])

  const addCreditCard = useCallback(
    (c: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newCard: CreditCard = {
        ...c,
        id: generateUniqueId(),
        createdAt: now,
        updatedAt: now,
      }
      setCreditCards((prev) => [...prev, newCard])
    },
    [now]
  )

  const updateCreditCard = useCallback(
    (id: string, data: Partial<CreditCard>) => {
      setCreditCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...data, updatedAt: now } : c))
      )
    },
    [now]
  )

  const deleteCreditCard = useCallback((id: string) => {
    setCreditCards((prev) => prev.filter((c) => c.id !== id))
  }, [])

  const addBankAccount = useCallback(
    (b: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newAccount: BankAccount = {
        ...b,
        id: generateUniqueId(),
        createdAt: now,
        updatedAt: now,
      }
      setBankAccounts((prev) => [...prev, newAccount])
    },
    [now]
  )

  const updateBankAccount = useCallback(
    (id: string, data: Partial<BankAccount>) => {
      setBankAccounts((prev) =>
        prev.map((a) => (a.id === id ? { ...a, ...data, updatedAt: now } : a))
      )
    },
    [now]
  )

  const deleteBankAccount = useCallback((id: string) => {
    setBankAccounts((prev) => prev.filter((a) => a.id !== id))
  }, [])

  const addFamilyMember = useCallback(
    (m: Omit<FamilyMember, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newMember: FamilyMember = {
        ...m,
        id: generateUniqueId(),
        createdAt: now,
        updatedAt: now,
      }
      setFamilyMembers((prev) => [...prev, newMember])
    },
    [now]
  )

  const updateFamilyMember = useCallback(
    (id: string, data: Partial<FamilyMember>) => {
      setFamilyMembers((prev) =>
        prev.map((m) => (m.id === id ? { ...m, ...data, updatedAt: now } : m))
      )
    },
    [now]
  )

  const deleteFamilyMember = useCallback((id: string) => {
    setFamilyMembers((prev) => prev.filter((m) => m.id !== id))
  }, [])

  const value = useMemo<FinanceContextValue>(
    () => ({
      transactions,
      goals,
      creditCards,
      bankAccounts,
      familyMembers,
      selectedMember,
      setSelectedMember,
      dateRange,
      setDateRange,
      transactionType,
      setTransactionType,
      searchText,
      setSearchText,
      addTransaction,
      updateTransaction,
      deleteTransaction,
      addGoal,
      updateGoal,
      deleteGoal,
      addCreditCard,
      updateCreditCard,
      deleteCreditCard,
      addBankAccount,
      updateBankAccount,
      deleteBankAccount,
      addFamilyMember,
      updateFamilyMember,
      deleteFamilyMember,
      getFilteredTransactions,
      calculateTotalBalance,
      calculateIncomeForPeriod,
      calculateExpensesForPeriod,
      calculateExpensesByCategory,
      calculateCategoryPercentage,
      calculateSavingsRate,
    }),
    [
      transactions,
      goals,
      creditCards,
      bankAccounts,
      familyMembers,
      selectedMember,
      setSelectedMember,
      dateRange,
      transactionType,
      searchText,
      addTransaction,
      updateTransaction,
      deleteTransaction,
      addGoal,
      updateGoal,
      deleteGoal,
      addCreditCard,
      updateCreditCard,
      deleteCreditCard,
      addBankAccount,
      updateBankAccount,
      deleteBankAccount,
      addFamilyMember,
      updateFamilyMember,
      deleteFamilyMember,
      getFilteredTransactions,
      calculateTotalBalance,
      calculateIncomeForPeriod,
      calculateExpensesForPeriod,
      calculateExpensesByCategory,
      calculateCategoryPercentage,
      calculateSavingsRate,
    ]
  )

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  )
}

export { FinanceContext }
