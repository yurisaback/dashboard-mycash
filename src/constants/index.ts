/**
 * Constantes globais do sistema
 */

/**
 * Rotas principais da aplicação
 */
export const ROUTES = {
  DASHBOARD: '/dashboard',
  CARDS: '/cards',
  TRANSACTIONS: '/transactions',
  PROFILE: '/profile',
} as const

/**
 * Breakpoints de responsividade
 */
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1920,
} as const

/**
 * Categorias padrão de receitas
 */
export const INCOME_CATEGORIES = [
  'Salário',
  'Freelance',
  'Investimentos',
  'Aluguel Recebido',
  'Outros',
] as const

/**
 * Categorias padrão de despesas
 */
export const EXPENSE_CATEGORIES = [
  'Alimentação',
  'Transporte',
  'Moradia',
  'Saúde',
  'Educação',
  'Lazer',
  'Compras',
  'Contas',
  'Outros',
] as const
