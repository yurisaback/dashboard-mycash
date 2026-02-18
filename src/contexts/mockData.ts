import {
  subMonths,
  startOfMonth,
  endOfMonth,
  subDays,
  addMonths,
  setDate,
} from 'date-fns'
import type { Transaction, Goal, CreditCard, BankAccount, FamilyMember } from '../types'

const now = new Date()

/** IDs para referência consistente */
const MEMBER_IDS = {
  pai: 'mem-001',
  mae: 'mem-002',
  filho: 'mem-003',
} as const

const BANK_IDS = {
  nubank: 'bank-001',
  itau: 'bank-002',
  bradesco: 'bank-003',
} as const

const CARD_IDS = {
  nubank: 'card-001',
  inter: 'card-002',
  picpay: 'card-003',
} as const

function createFamilyMembers(): FamilyMember[] {
  const base = { createdAt: now, updatedAt: now }
  return [
    {
      id: MEMBER_IDS.pai,
      name: 'Carlos Silva',
      role: 'Pai',
      avatarUrl: '',
      email: 'carlos.silva@email.com',
      monthlyIncome: 8500,
      isPrimary: true,
      ...base,
    },
    {
      id: MEMBER_IDS.mae,
      name: 'Ana Silva',
      role: 'Mãe',
      avatarUrl: '',
      email: 'ana.silva@email.com',
      monthlyIncome: 6200,
      ...base,
    },
    {
      id: MEMBER_IDS.filho,
      name: 'Lucas Silva',
      role: 'Filho',
      avatarUrl: '',
      email: 'lucas.silva@email.com',
      ...base,
    },
  ]
}

function createBankAccounts(): BankAccount[] {
  const base = { createdAt: now, updatedAt: now }
  return [
    {
      id: BANK_IDS.nubank,
      name: 'Nubank Conta',
      type: 'checking',
      holderId: MEMBER_IDS.pai,
      balance: 12500,
      agency: '0001',
      accountNumber: '12345-6',
      bankLogo: 'nubank',
      ...base,
    },
    {
      id: BANK_IDS.itau,
      name: 'Itaú Corrente',
      type: 'checking',
      holderId: MEMBER_IDS.mae,
      balance: 8300,
      agency: '1234',
      accountNumber: '78901-2',
      bankLogo: 'itau',
      ...base,
    },
    {
      id: BANK_IDS.bradesco,
      name: 'Bradesco Poupança',
      type: 'savings',
      holderId: MEMBER_IDS.pai,
      balance: 15000,
      agency: '0456',
      accountNumber: '34567-8',
      bankLogo: 'bradesco',
      ...base,
    },
  ]
}

/** Cartões fictícios alinhados ao design Figma (Cards & Contas) — Nubank, Inter Visa, PicPay Elo. */
function createCreditCards(): CreditCard[] {
  const base = { createdAt: now, updatedAt: now }
  return [
    {
      id: CARD_IDS.nubank,
      name: 'Nubank',
      holderId: MEMBER_IDS.pai,
      limit: 20000,
      currentBill: 5245,
      closingDay: 5,
      dueDay: 10,
      lastDigits: '9999',
      theme: 'lime',
      bankLogo: 'nubank',
      ...base,
    },
    {
      id: CARD_IDS.inter,
      name: 'Inter Visa',
      holderId: MEMBER_IDS.mae,
      limit: 10000,
      currentBill: 2300,
      closingDay: 15,
      dueDay: 21,
      lastDigits: '9999',
      theme: 'black',
      bankLogo: 'inter',
      ...base,
    },
    {
      id: CARD_IDS.picpay,
      name: 'PicPay Elo',
      holderId: MEMBER_IDS.pai,
      limit: 25000,
      currentBill: 17000,
      closingDay: 8,
      dueDay: 12,
      lastDigits: '9999',
      theme: 'white',
      bankLogo: 'picpay',
      ...base,
    },
  ]
}

function createGoals(): Goal[] {
  const base = { createdAt: now, updatedAt: now }
  return [
    {
      id: 'goal-001',
      name: 'Viagem Família',
      description: 'Férias em Florianópolis',
      targetAmount: 15000,
      currentAmount: 6200,
      deadline: addMonths(now, 8),
      status: 'active',
      memberId: null,
      category: 'Viagem',
      ...base,
    },
    {
      id: 'goal-002',
      name: 'Notebook novo',
      description: 'MacBook Pro para trabalho',
      targetAmount: 12000,
      currentAmount: 12000,
      deadline: addMonths(now, 2),
      status: 'completed',
      memberId: MEMBER_IDS.pai,
      category: 'Tecnologia',
      ...base,
    },
    {
      id: 'goal-003',
      name: 'Reserva de emergência',
      description: '6 meses de despesas',
      targetAmount: 45000,
      currentAmount: 28000,
      deadline: addMonths(now, 12),
      status: 'active',
      memberId: null,
      category: 'Reserva',
      ...base,
    },
    {
      id: 'goal-004',
      name: 'Curso de inglês',
      description: 'Lucas - 1 ano de curso',
      targetAmount: 4800,
      currentAmount: 1200,
      deadline: addMonths(now, 6),
      status: 'active',
      memberId: MEMBER_IDS.filho,
      category: 'Educação',
      ...base,
    },
  ]
}

function createTransactions(): Transaction[] {
  const tx: Transaction[] = []
  let txCount = 0

  const addTx = (t: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => {
    txCount += 1
    tx.push({
      ...t,
      id: `tx-${txCount}`,
      createdAt: now,
      updatedAt: now,
    })
  }

  const months = [0, 1, 2].map((m) => subMonths(now, m))

  months.forEach((monthStart, mi) => {
    const start = startOfMonth(monthStart)
    const end = endOfMonth(monthStart)

    // Receitas - Salário (fixas)
    ;[MEMBER_IDS.pai, MEMBER_IDS.mae].forEach((memberId) => {
      addTx({
        type: 'income',
        value: memberId === MEMBER_IDS.pai ? 8500 : 6200,
        description: 'Salário mensal',
        category: 'Salário',
        date: setDate(start, 5),
        accountId: BANK_IDS.nubank,
        memberId,
        installments: 1,
        currentInstallment: 1,
        status: 'completed',
        isRecurring: true,
        isPaid: true,
      })
    })

    // Receitas variadas
    addTx({
      type: 'income',
      value: 1200,
      description: 'Freelance desenvolvimento',
      category: 'Freelance',
      date: subDays(end, 20),
      accountId: BANK_IDS.nubank,
      memberId: MEMBER_IDS.pai,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: false,
      isPaid: true,
    })

    if (mi === 0) {
      addTx({
        type: 'income',
        value: 850,
        description: 'Rendimento poupança',
        category: 'Investimentos',
        date: setDate(start, 1),
        accountId: BANK_IDS.bradesco,
        memberId: null,
        installments: 1,
        currentInstallment: 1,
        status: 'completed',
        isRecurring: false,
        isPaid: true,
      })
    }

    // Despesas - Moradia
    addTx({
      type: 'expense',
      value: 2500,
      description: 'Aluguel',
      category: 'Moradia',
      date: setDate(start, 10),
      accountId: BANK_IDS.itau,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: true,
      isPaid: true,
    })

    addTx({
      type: 'expense',
      value: 350,
      description: 'Conta de luz',
      category: 'Contas',
      date: setDate(start, 15),
      accountId: BANK_IDS.nubank,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: true,
      isPaid: true,
    })

    addTx({
      type: 'expense',
      value: 180,
      description: 'Internet',
      category: 'Contas',
      date: setDate(start, 12),
      accountId: BANK_IDS.nubank,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: true,
      isPaid: true,
    })

    // Alimentação
    const foodDates = [3, 8, 14, 20, 25].map((d) => setDate(start, d))
    foodDates.forEach((date, i) => {
      addTx({
        type: 'expense',
        value: 180 + i * 30,
        description: i % 2 === 0 ? 'Supermercado' : 'Restaurante',
        category: 'Alimentação',
        date,
        accountId: i < 2 ? CARD_IDS.nubank : BANK_IDS.nubank,
        memberId: i % 3 === 0 ? MEMBER_IDS.mae : null,
        installments: 1,
        currentInstallment: 1,
        status: 'completed',
        isRecurring: false,
        isPaid: true,
      })
    })

    // Transporte
    addTx({
      type: 'expense',
      value: 280,
      description: 'Combustível',
      category: 'Transporte',
      date: setDate(start, 7),
      accountId: CARD_IDS.inter,
      memberId: MEMBER_IDS.pai,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: false,
      isPaid: true,
    })

    addTx({
      type: 'expense',
      value: 156,
      description: 'Uber/99',
      category: 'Transporte',
      date: setDate(start, 18),
      accountId: BANK_IDS.nubank,
      memberId: MEMBER_IDS.mae,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: false,
      isPaid: true,
    })

    // Saúde
    addTx({
      type: 'expense',
      value: 420,
      description: 'Plano de saúde',
      category: 'Saúde',
      date: setDate(start, 5),
      accountId: BANK_IDS.itau,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: true,
      isPaid: true,
    })

    // Lazer
    addTx({
      type: 'expense',
      value: 120,
      description: 'Netflix + Spotify',
      category: 'Lazer',
      date: setDate(start, 1),
      accountId: CARD_IDS.nubank,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: true,
      isPaid: true,
    })

    if (mi <= 1) {
      addTx({
        type: 'expense',
        value: 250,
        description: 'Cinema + jantar',
        category: 'Lazer',
        date: setDate(start, 22),
        accountId: CARD_IDS.inter,
        memberId: MEMBER_IDS.pai,
        installments: 1,
        currentInstallment: 1,
        status: 'completed',
        isRecurring: false,
        isPaid: true,
      })
    }

    // Educação
    addTx({
      type: 'expense',
      value: 400,
      description: 'Mensalidade curso inglês',
      category: 'Educação',
      date: setDate(start, 10),
      accountId: BANK_IDS.nubank,
      memberId: MEMBER_IDS.filho,
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: true,
      isPaid: true,
    })

    // Compras (parcelado em um mês)
    if (mi === 0) {
      addTx({
        type: 'expense',
        value: 400,
        description: 'Compra online - 3/6',
        category: 'Compras',
        date: setDate(start, 15),
        accountId: CARD_IDS.picpay,
        memberId: MEMBER_IDS.mae,
        installments: 6,
        currentInstallment: 3,
        status: 'completed',
        isRecurring: false,
        isPaid: true,
      })
    }
  })

  // Despesas pendentes (Próximas despesas) — datas de vencimento variadas para testar ordenação
  const nextMonth = addMonths(now, 1)
  const pendingExpenses: Array<Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>> = [
    {
      type: 'expense',
      value: 154,
      description: 'Conta de luz',
      category: 'Contas',
      date: setDate(now, 5),
      dueDate: setDate(now, 21),
      accountId: CARD_IDS.nubank,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'pending',
      isRecurring: true,
      isPaid: false,
    },
    {
      type: 'expense',
      value: 154,
      description: 'Conta de luz',
      category: 'Contas',
      date: setDate(nextMonth, 5),
      dueDate: setDate(nextMonth, 21),
      accountId: CARD_IDS.nubank,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'pending',
      isRecurring: true,
      isPaid: false,
    },
    {
      type: 'expense',
      value: 89,
      description: 'Streaming',
      category: 'Lazer',
      date: setDate(now, 1),
      dueDate: setDate(now, 25),
      accountId: CARD_IDS.inter,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'pending',
      isRecurring: true,
      isPaid: false,
    },
    {
      type: 'expense',
      value: 320,
      description: 'Academia',
      category: 'Saúde',
      date: setDate(now, 10),
      dueDate: setDate(nextMonth, 10),
      accountId: BANK_IDS.nubank,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'pending',
      isRecurring: true,
      isPaid: false,
    },
    {
      type: 'expense',
      value: 180,
      description: 'Internet',
      category: 'Contas',
      date: setDate(now, 12),
      dueDate: setDate(now, 12),
      accountId: BANK_IDS.itau,
      memberId: null,
      installments: 1,
      currentInstallment: 1,
      status: 'pending',
      isRecurring: true,
      isPaid: false,
    },
  ]
  pendingExpenses.forEach((t) => addTx(t))

  return tx
}

export const MOCK_FAMILY_MEMBERS = createFamilyMembers()
export const MOCK_BANK_ACCOUNTS = createBankAccounts()
export const MOCK_CREDIT_CARDS = createCreditCards()
export const MOCK_GOALS = createGoals()
export const MOCK_TRANSACTIONS = createTransactions()
