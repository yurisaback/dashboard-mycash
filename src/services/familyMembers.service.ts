import { supabase } from './supabase'

export interface FamilyMemberRow {
  id: string
  user_id: string
  name: string
  role: string
  avatar_url: string | null
  monthly_income: number
  color: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface InsertFamilyMember {
  user_id: string
  name: string
  role: string
  avatar_url?: string
  monthly_income?: number
  color?: string
}

export const familyMembersService = {
  async getAll(userId: string) {
    const { data, error } = await supabase
      .from('family_members')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('created_at', { ascending: true })
    if (error) throw error
    return data as FamilyMemberRow[]
  },

  async create(params: InsertFamilyMember) {
    const { data, error } = await supabase
      .from('family_members')
      .insert({
        ...params,
        monthly_income: params.monthly_income ?? 0,
        color: params.color ?? '#3247FF',
      })
      .select()
      .single()
    if (error) throw error
    return data as FamilyMemberRow
  },

  async update(id: string, updates: Partial<Omit<FamilyMemberRow, 'id' | 'user_id' | 'created_at'>>) {
    const { data, error } = await supabase
      .from('family_members')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data as FamilyMemberRow
  },

  async delete(id: string) {
    const { error } = await supabase.from('family_members').delete().eq('id', id)
    if (error) throw error
  },
}
