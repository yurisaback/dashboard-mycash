import { supabase } from './supabase'

export type TransactionType = 'INCOME' | 'EXPENSE'
export type TransactionStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED'

export interface TransactionRow {
  id: string
  user_id: string
  type: TransactionType
  amount: number
  description: string
  date: string
  category_id: string | null
  account_id: string | null
  member_id: string | null
  installment_number: number | null
  total_installments: number
  parent_transaction_id: string | null
  is_recurring: boolean
  recurring_transaction_id: string | null
  status: TransactionStatus
  notes: string | null
  created_at: string
  updated_at: string
}

export interface InsertTransaction {
  user_id: string
  type: TransactionType
  amount: number
  description: string
  date: string
  category_id?: string
  account_id?: string
  member_id?: string
  installment_number?: number
  total_installments?: number
  parent_transaction_id?: string
  is_recurring?: boolean
  recurring_transaction_id?: string
  status?: TransactionStatus
  notes?: string
}

export interface TransactionFilters {
  type?: TransactionType
  accountId?: string
  memberId?: string
  categoryId?: string
  status?: TransactionStatus
  startDate?: string
  endDate?: string
  search?: string
}

export const transactionsService = {
  async getAll(userId: string, filters?: TransactionFilters) {
    let query = supabase
      .from('transactions')
      .select('*, category:categories(*), account:accounts(*), member:family_members(*)')
      .eq('user_id', userId)
    if (filters?.type) query = query.eq('type', filters.type)
    if (filters?.accountId) query = query.eq('account_id', filters.accountId)
    if (filters?.memberId) query = query.eq('member_id', filters.memberId)
    if (filters?.categoryId) query = query.eq('category_id', filters.categoryId)
    if (filters?.status) query = query.eq('status', filters.status)
    if (filters?.startDate) query = query.gte('date', filters.startDate)
    if (filters?.endDate) query = query.lte('date', filters.endDate)
    const { data, error } = await query.order('date', { ascending: false })
    if (error) throw error
    let rows = (data ?? []) as TransactionRow[]
    if (filters?.search) {
      const q = filters.search.toLowerCase()
      rows = rows.filter((r) => r.description.toLowerCase().includes(q))
    }
    return rows
  },

  async create(params: InsertTransaction) {
    const { data, error } = await supabase
      .from('transactions')
      .insert({
        ...params,
        total_installments: params.total_installments ?? 1,
        status: params.status ?? 'COMPLETED',
        is_recurring: params.is_recurring ?? false,
      })
      .select()
      .single()
    if (error) throw error
    return data as TransactionRow
  },

  async update(id: string, updates: Partial<Omit<TransactionRow, 'id' | 'user_id' | 'created_at'>>) {
    const { data, error } = await supabase
      .from('transactions')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data as TransactionRow
  },

  async delete(id: string) {
    const { error } = await supabase.from('transactions').delete().eq('id', id)
    if (error) throw error
  },
}
