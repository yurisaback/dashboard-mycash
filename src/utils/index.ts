/**
 * Utilitários gerais
 * 
 * Utilitários específicos serão criados no PROMPT 22:
 * - currency.utils.ts
 * - date.utils.ts
 * - array.utils.ts
 * - validation.utils.ts
 * - id.utils.ts
 */

/**
 * Gera um ID único usando crypto.randomUUID ou fallback
 */
export function generateUniqueId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  // Fallback para ambientes sem crypto.randomUUID
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}
