import { supabase } from './supabase'

export type TransactionType = 'INCOME' | 'EXPENSE'

export interface CategoryRow {
  id: string
  user_id: string
  name: string
  icon: string
  type: TransactionType
  color: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface InsertCategory {
  user_id: string
  name: string
  type: TransactionType
  icon?: string
  color?: string
}

export const categoriesService = {
  async getAll(userId: string, type?: TransactionType) {
    let query = supabase
      .from('categories')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
    if (type) query = query.eq('type', type)
    const { data, error } = await query.order('name', { ascending: true })
    if (error) throw error
    return data as CategoryRow[]
  },

  async create(params: InsertCategory) {
    const { data, error } = await supabase
      .from('categories')
      .insert({
        ...params,
        icon: params.icon ?? '📌',
        color: params.color ?? '#3247FF',
      })
      .select()
      .single()
    if (error) throw error
    return data as CategoryRow
  },

  async createDefaults(userId: string) {
    const income = [
      { name: 'Salário', icon: '💰', color: '#22c55e' },
      { name: 'Freelance', icon: '💼', color: '#3b82f6' },
      { name: 'Investimentos', icon: '📈', color: '#8b5cf6' },
      { name: 'Aluguel Recebido', icon: '🏠', color: '#f59e0b' },
      { name: 'Outros', icon: '📌', color: '#6b7280' },
    ]
    const expense = [
      { name: 'Alimentação', icon: '🍔', color: '#ef4444' },
      { name: 'Transporte', icon: '🚗', color: '#f97316' },
      { name: 'Moradia', icon: '🏠', color: '#eab308' },
      { name: 'Saúde', icon: '💊', color: '#ec4899' },
      { name: 'Educação', icon: '📚', color: '#6366f1' },
      { name: 'Lazer', icon: '🎮', color: '#14b8a6' },
      { name: 'Compras', icon: '🛒', color: '#a855f7' },
      { name: 'Contas', icon: '📄', color: '#64748b' },
      { name: 'Outros', icon: '📌', color: '#6b7280' },
    ]
    for (const c of income) {
      await this.create({ user_id: userId, name: c.name, type: 'INCOME', icon: c.icon, color: c.color })
    }
    for (const c of expense) {
      await this.create({ user_id: userId, name: c.name, type: 'EXPENSE', icon: c.icon, color: c.color })
    }
  },

  async update(id: string, updates: Partial<Omit<CategoryRow, 'id' | 'user_id' | 'created_at'>>) {
    const { data, error } = await supabase
      .from('categories')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data as CategoryRow
  },

  async delete(id: string) {
    const { error } = await supabase.from('categories').delete().eq('id', id)
    if (error) throw error
  },
}
