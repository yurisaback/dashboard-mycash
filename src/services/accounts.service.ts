import { supabase } from './supabase'

export type AccountType = 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD'

export interface AccountRow {
  id: string
  user_id: string
  type: AccountType
  name: string
  bank: string
  last_digits: string | null
  holder_id: string
  balance: number
  credit_limit: number | null
  current_bill: number
  due_day: number | null
  closing_day: number | null
  theme: string | null
  logo_url: string | null
  color: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface InsertAccount {
  user_id: string
  type: AccountType
  name: string
  bank: string
  holder_id: string
  last_digits?: string
  balance?: number
  credit_limit?: number
  current_bill?: number
  due_day?: number
  closing_day?: number
  theme?: string
  logo_url?: string
}

export const accountsService = {
  async getAll(userId: string, type?: AccountType) {
    let query = supabase
      .from('accounts')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
    if (type) query = query.eq('type', type)
    const { data, error } = await query.order('created_at', { ascending: false })
    if (error) throw error
    return data as AccountRow[]
  },

  async getCreditCards(userId: string) {
    return this.getAll(userId, 'CREDIT_CARD')
  },

  async getBankAccounts(userId: string) {
    return this.getAll(userId).then((rows) =>
      rows.filter((r) => r.type === 'CHECKING' || r.type === 'SAVINGS')
    )
  },

  async create(params: InsertAccount) {
    const payload: Record<string, unknown> = {
      ...params,
      balance: params.balance ?? 0,
      current_bill: params.current_bill ?? 0,
      theme: params.theme ?? 'black',
    }
    if (params.type === 'CREDIT_CARD') {
      payload.credit_limit = params.credit_limit ?? 0
      payload.due_day = params.due_day ?? 10
      payload.closing_day = params.closing_day ?? 5
    }
    const { data, error } = await supabase.from('accounts').insert(payload).select().single()
    if (error) throw error
    return data as AccountRow
  },

  async update(id: string, updates: Partial<Omit<AccountRow, 'id' | 'user_id' | 'created_at'>>) {
    const { data, error } = await supabase
      .from('accounts')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data as AccountRow
  },

  async delete(id: string) {
    const { error } = await supabase.from('accounts').delete().eq('id', id)
    if (error) throw error
  },
}
