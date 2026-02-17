import { useState } from 'react'
import { useFinance } from '../../hooks/useFinance'
import { IconPlus, IconCheck } from './DashboardIcons'

/**
 * Widget de membros da família — avatares sobrepostos, filtro por membro.
 * Hover: avatar cresce e move para frente.
 * Clique: aplica/remove filtro. Selecionado: borda preta grossa + check verde.
 */
export function FamilyMembersWidget() {
  const { familyMembers, selectedMember, setSelectedMember } = useFinance()
  const [showAddModal, setShowAddModal] = useState(false)

  const handleAvatarClick = (id: string) => {
    setSelectedMember(selectedMember === id ? null : id)
  }

  return (
    <div className="flex items-center gap-figma-4">
      <div className="flex -space-x-3">
        {familyMembers.map((member) => {
          const isSelected = selectedMember === member.id
          return (
            <button
              key={member.id}
              type="button"
              onClick={() => handleAvatarClick(member.id)}
              className={`relative flex-shrink-0 rounded-full overflow-hidden transition-all duration-200 hover:scale-110 hover:z-10 focus:outline-none focus:ring-2 focus:ring-primary-figma-500 ${
                isSelected
                  ? 'ring-2 ring-secondary-figma-900 ring-offset-2 z-10'
                  : 'ring-2 ring-neutral-0'
              }`}
              style={{ width: 40, height: 40 }}
              aria-pressed={isSelected}
              aria-label={isSelected ? `Remover filtro de ${member.name}` : `Filtrar por ${member.name}`}
            >
              {member.avatarUrl ? (
                <img
                  src={member.avatarUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-paragraph-x-small font-semibold text-secondary-figma-900">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
              )}
              {isSelected && (
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-success flex items-center justify-center text-neutral-0">
                  <IconCheck />
                </span>
              )}
            </button>
          )
        })}
      </div>
      <button
        type="button"
        onClick={() => setShowAddModal(true)}
        className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-neutral-300 flex items-center justify-center text-neutral-1100 hover:bg-neutral-300/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-figma-500"
        aria-label="Adicionar membro"
      >
        <IconPlus />
      </button>
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-figma-900/50"
          onClick={() => setShowAddModal(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && setShowAddModal(false)}
        >
          <div
            className="bg-surface-500 p-figma-24 rounded-shape-20 shadow-md max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-label-medium font-semibold text-secondary-figma-900 mb-figma-16">
              Adicionar membro
            </p>
            <p className="text-paragraph-small text-neutral-500 mb-figma-16">
              Modal de adicionar membro será implementado no Prompt 13.
            </p>
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-figma-16 py-figma-12 rounded-shape-100 bg-secondary-figma-900 text-neutral-0 text-paragraph-small font-semibold"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
