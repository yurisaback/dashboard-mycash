import { useState, useCallback, useRef } from 'react'
import { useFinance } from '../../hooks/useFinance'
import { useToast } from '../../contexts/ToastContext'

const ROLE_SUGGESTIONS = ['Pai', 'Mãe', 'Filho', 'Filha', 'Avô', 'Avó', 'Tio', 'Tia']

export interface AddMemberModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AddMemberModal({ isOpen, onClose }: AddMemberModalProps) {
  const { addFamilyMember } = useFinance()
  const { showToast } = useToast()

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [roleSuggestionsOpen, setRoleSuggestionsOpen] = useState(false)
  const [avatarMode, setAvatarMode] = useState<'url' | 'upload'>('url')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  const resetForm = useCallback(() => {
    setName('')
    setRole('')
    setAvatarUrl('')
    setAvatarFile(null)
    setMonthlyIncome('')
    setErrors({})
  }, [])

  const handleClose = useCallback(() => {
    resetForm()
    onClose()
  }, [onClose, resetForm])

  const parseIncome = (v: string): number => {
    const normalized = v.replace(/\./g, '').replace(',', '.').replace(/\D/g, '')
    const n = parseFloat(normalized)
    return isNaN(n) ? 0 : n
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, avatar: 'Arquivo deve ter no máximo 5MB' }))
      return
    }
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setErrors((prev) => ({ ...prev, avatar: 'Aceito apenas JPG e PNG' }))
      return
    }
    setAvatarFile(file)
    setErrors((prev => {
      const next = { ...prev }
      delete next.avatar
      return next
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const err: Record<string, string> = {}
    if (name.trim().length < 3) err.name = 'Por favor, insira um nome válido'
    if (!role.trim()) err.role = 'Por favor, informe a função na família'
    setErrors(err)
    if (Object.keys(err).length > 0) return

    let finalAvatarUrl = avatarUrl.trim()
    if (avatarFile) {
      finalAvatarUrl = URL.createObjectURL(avatarFile)
    }

    addFamilyMember({
      name: name.trim(),
      role: role.trim(),
      avatarUrl: finalAvatarUrl || '',
      email: '',
      monthlyIncome: parseIncome(monthlyIncome) || 0,
    })

    showToast('Membro adicionado com sucesso!')
    handleClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-secondary-figma-900/50 z-[10000]"
        onClick={handleClose}
        aria-hidden
      />
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md max-h-[90vh] overflow-hidden flex flex-col rounded-shape-20 border border-neutral-300 bg-surface-500 shadow-lg z-[10001]"
        role="dialog"
        aria-modal="true"
        aria-label="Adicionar membro"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex-shrink-0 flex items-start justify-between gap-figma-16 p-figma-24 border-b border-neutral-300">
          <div className="flex items-center gap-figma-12">
            <span className="flex w-12 h-12 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div>
              <h2 className="text-heading-x-small font-bold text-neutral-1100">Novo familiar</h2>
              <p className="text-paragraph-small text-neutral-500">
                Adicione alguém para participar do controle financeiro.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/50"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <form onSubmit={handleSubmit} className="flex-1 min-h-0 overflow-y-auto p-figma-24 flex flex-col gap-figma-16">
          <label className="block">
            <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do familiar"
              className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 ${
                errors.name ? 'border-red-500' : 'border-neutral-300'
              }`}
            />
            {errors.name && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.name}</p>}
          </label>

          <label className="block">
            <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Função / Parentesco</span>
            <div className="relative">
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                onFocus={() => setRoleSuggestionsOpen(true)}
                onBlur={() => setTimeout(() => setRoleSuggestionsOpen(false), 200)}
                placeholder="Ex: Pai, Mãe, Filho..."
                list="role-suggestions"
                className={`w-full h-14 rounded-shape-20 border bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 ${
                  errors.role ? 'border-red-500' : 'border-neutral-300'
                }`}
              />
              <datalist id="role-suggestions">
                {ROLE_SUGGESTIONS.map((r) => (
                  <option key={r} value={r} />
                ))}
              </datalist>
              {roleSuggestionsOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-shape-20 border border-neutral-300 bg-neutral-0 shadow-lg z-10 overflow-hidden">
                  {ROLE_SUGGESTIONS.filter((r) => !role || r.toLowerCase().includes(role.toLowerCase())).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => { setRole(r); setRoleSuggestionsOpen(false) }}
                      className="w-full px-figma-16 py-figma-12 text-left text-paragraph-small text-neutral-1100 hover:bg-neutral-100"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {errors.role && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.role}</p>}
          </label>

          <div>
            <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Avatar (opcional)</span>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setAvatarMode('url')}
                className={`px-figma-16 py-figma-8 rounded-shape-20 text-paragraph-small font-medium ${
                  avatarMode === 'url'
                    ? 'bg-secondary-figma-900 text-neutral-0'
                    : 'border border-neutral-300 text-neutral-700'
                }`}
              >
                URL
              </button>
              <button
                type="button"
                onClick={() => setAvatarMode('upload')}
                className={`px-figma-16 py-figma-8 rounded-shape-20 text-paragraph-small font-medium ${
                  avatarMode === 'upload'
                    ? 'bg-secondary-figma-900 text-neutral-0'
                    : 'border border-neutral-300 text-neutral-700'
                }`}
              >
                Upload
              </button>
            </div>
            {avatarMode === 'url' ? (
              <input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://..."
                className="w-full h-14 rounded-shape-20 border border-neutral-300 bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
              />
            ) : (
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-14 rounded-shape-20 border border-neutral-300 border-dashed flex items-center justify-center text-paragraph-small text-neutral-500 hover:bg-neutral-50"
                >
                  {avatarFile ? avatarFile.name : 'Clique para selecionar (JPG, PNG, máx 5MB)'}
                </button>
                {errors.avatar && <p className="text-paragraph-x-small text-red-500 mt-1">{errors.avatar}</p>}
              </div>
            )}
          </div>

          <label className="block">
            <span className="text-paragraph-small text-neutral-700 block mb-figma-8">Renda mensal estimada (opcional)</span>
            <input
              type="text"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="R$ 0,00"
              className="w-full h-14 rounded-shape-20 border border-neutral-300 bg-neutral-0 px-figma-16 text-paragraph-small text-neutral-1100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
            />
          </label>
        </form>

        <footer className="flex-shrink-0 flex items-center justify-end gap-figma-16 p-figma-24 border-t border-neutral-300">
          <button
            type="button"
            onClick={handleClose}
            className="px-figma-24 py-figma-12 rounded-full border border-neutral-300 text-neutral-1100 text-label-medium"
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-figma-24 py-figma-12 rounded-full bg-secondary-figma-900 text-neutral-0 text-label-medium font-semibold hover:opacity-90"
          >
            Adicionar Membro
          </button>
        </footer>
      </div>
    </>
  )
}
