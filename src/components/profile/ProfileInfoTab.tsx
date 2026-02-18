import { useFinance } from '../../hooks/useFinance'
import { formatCurrencyBR } from '../../utils'
import { IconUser } from '../dashboard/DashboardIcons'

export function ProfileInfoTab() {
  const { familyMembers } = useFinance()
  const primaryMember = familyMembers.find((m) => m.isPrimary) ?? familyMembers[0]

  if (!primaryMember) return null

  return (
    <div className="rounded-shape-20 border border-neutral-300 bg-surface-500 p-figma-24 md:p-figma-32">
      <div className="flex flex-col items-center md:items-start md:flex-row gap-figma-24">
        <div className="flex h-[120px] w-[120px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-200">
          {primaryMember.avatarUrl ? (
            <img
              src={primaryMember.avatarUrl}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-neutral-500 [&_svg]:w-14 [&_svg]:h-14">
              <IconUser />
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-figma-8">
          <h2 className="text-heading-md font-bold text-neutral-1100">
            {primaryMember.name}
          </h2>
          <p className="text-body-md text-neutral-500">{primaryMember.role}</p>
          <div className="flex items-center gap-figma-8 text-paragraph-small text-neutral-500">
            <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{primaryMember.email}</span>
          </div>
          {primaryMember.monthlyIncome != null && (
            <div className="flex items-center gap-figma-8 text-paragraph-small text-neutral-700">
              <span className="text-neutral-500">R$</span>
              <span className="font-semibold tabular-nums">
                {formatCurrencyBR(primaryMember.monthlyIncome)}/mês
              </span>
            </div>
          )}
          <button
            type="button"
            className="mt-figma-8 w-fit rounded-shape-20 border border-neutral-300 bg-transparent px-figma-16 py-figma-8 text-paragraph-small font-medium text-neutral-1100 hover:bg-neutral-100"
          >
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  )
}
