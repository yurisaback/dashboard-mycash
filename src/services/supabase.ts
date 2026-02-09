import { createClient } from '@supabase/supabase-js'

// TODO: Substituir pelas variáveis de ambiente reais quando configurar Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

/**
 * Cliente Supabase para integração com backend
 * 
 * Por enquanto, o sistema usa apenas React state (useState/useReducer).
 * Este cliente será usado futuramente quando integrarmos com Supabase.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
