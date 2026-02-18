import { supabase } from './supabase'

export type GoalStatus = 'active' | 'completed' | 'cancelled'

export interface GoalRow {
  id: string
  user_id: string
  name: string
  description: string | null
  target_amount: number
  current_amount: number
  deadline: string
  status: GoalStatus
  member_id: string | null
  category: string | null
  created_at: string
  updated_at: string
}

export interface InsertGoal {
  user_id: string
  name: string
  description?: string
  target_amount: number
  current_amount?: number
  deadline: string
  member_id?: string
  category?: string
}

export const goalsService = {
  async getAll(userId: string, status?: GoalStatus) {
    let query = supabase
      .from('goals')
      .select('*')
      .eq('user_id', userId)
    if (status) query = query.eq('status', status)
    const { data, error } = await query.order('deadline', { ascending: true })
    if (error) throw error
    return data as GoalRow[]
  },

  async create(params: InsertGoal) {
    const { data, error } = await supabase
      .from('goals')
      .insert({
        ...params,
        current_amount: params.current_amount ?? 0,
        status: 'active',
      })
      .select()
      .single()
    if (error) throw error
    return data as GoalRow
  },

  async update(id: string, updates: Partial<Omit<GoalRow, 'id' | 'user_id' | 'created_at'>>) {
    const { data, error } = await supabase
      .from('goals')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data as GoalRow
  },

  async delete(id: string) {
    const { error } = await supabase.from('goals').delete().eq('id', id)
    if (error) throw error
  },
}
