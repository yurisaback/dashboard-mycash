import { useContext } from 'react'
import { FinanceContext } from '../contexts/FinanceContext'

/**
 * Hook para acessar o contexto financeiro.
 * Único ponto de acesso ao FinanceProvider em toda a aplicação.
 * @throws Error se usado fora do FinanceProvider
 */
export function useFinance() {
  const context = useContext(FinanceContext)
  if (!context) {
    throw new Error('useFinance deve ser usado dentro de um FinanceProvider')
  }
  return context
}
