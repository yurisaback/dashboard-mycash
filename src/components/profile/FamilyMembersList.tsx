import { useState } from 'react'
import { useFinance } from '../../hooks/useFinance'
import { formatCurrencyBR } from '../../utils'
import { IconUser } from '../dashboard/DashboardIcons'
import { AddMemberModal } from '../modals'

export function FamilyMembersList() {
  const { familyMembers } = useFinance()
  const [addModalOpen, setAddModalOpen] = useState(false)

  return (
    <div className="rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24">
      <h3 className="text-heading-x-small font-bold text-neutral-1100 mb-figma-16">
        Membros da Família
      </h3>

      {familyMembers.length <= 1 ? (
        <div className="flex flex-col items-center gap-figma-16 py-figma-24">
          <p className="text-body-md text-neutral-500 text-center">
            Adicione outros membros da família para acompanhar as finanças em conjunto.
          </p>
          <button
            type="button"
            onClick={() => setAddModalOpen(true)}
            className="rounded-shape-20 bg-secondary-figma-900 text-neutral-0 px-figma-24 py-figma-12 text-label-medium font-semibold hover:opacity-90"
          >
            Adicionar Membro da Família
          </button>
        </div>
      ) : (
        <ul className="flex flex-col gap-figma-12">
          {familyMembers.map((member) => (
            <li key={member.id}>
              <button
                type="button"
                className="flex w-full items-center gap-figma-12 rounded-shape-20 bg-neutral-100 p-figma-16 text-left transition-colors hover:bg-neutral-200"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-200">
                  {member.avatarUrl ? (
                    <img
                      src={member.avatarUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-neutral-500 [&_svg]:w-6 [&_svg]:h-6">
                      <IconUser />
                    </span>
                  )}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-figma-2">
                  <p className="text-label-medium font-semibold text-neutral-1100 truncate">
                    {member.name}
                  </p>
                  <p className="text-paragraph-x-small text-neutral-500">
                    {member.role}
                  </p>
                </div>
                {member.monthlyIncome != null && (
                  <span className="flex-shrink-0 text-label-medium font-semibold text-neutral-1100 tabular-nums">
                    {formatCurrencyBR(member.monthlyIncome)}
                  </span>
                )}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => setAddModalOpen(true)}
              className="flex w-full items-center justify-center gap-figma-8 rounded-shape-20 border-2 border-dashed border-neutral-300 bg-transparent py-figma-16 text-paragraph-small font-medium text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 text-neutral-500">
                +
              </span>
              Adicionar Membro
            </button>
          </li>
        </ul>
      )}

      <AddMemberModal isOpen={addModalOpen} onClose={() => setAddModalOpen(false)} />
    </div>
  )
}
