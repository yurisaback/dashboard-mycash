import { useState } from 'react'
import { IconUser } from '../components/dashboard/DashboardIcons'
import { ProfileInfoTab, FamilyMembersList, SettingsTab } from '../components/profile'

type TabId = 'info' | 'settings'

function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabId>('info')

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="page-padding-x container-responsive py-8">
        <header className="mb-figma-32">
          <div className="flex items-center gap-figma-12 mb-figma-4">
            <span className="text-neutral-1100 [&_svg]:w-8 [&_svg]:h-8">
              <IconUser />
            </span>
            <h1 className="text-heading-lg font-bold text-text-primary">Perfil</h1>
          </div>
          <p className="text-body-md text-text-secondary">
            Gerencie suas informações e preferências
          </p>
        </header>

        <div className="flex border-b border-neutral-300 mb-figma-24">
          <button
            type="button"
            onClick={() => setActiveTab('info')}
            className={`px-figma-16 py-figma-12 text-paragraph-small font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'info'
                ? 'border-primary-figma-500 text-primary-figma-500'
                : 'border-transparent text-neutral-500 hover:text-neutral-1100'
            }`}
          >
            Informações
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`px-figma-16 py-figma-12 text-paragraph-small font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'settings'
                ? 'border-primary-figma-500 text-primary-figma-500'
                : 'border-transparent text-neutral-500 hover:text-neutral-1100'
            }`}
          >
            Configurações
          </button>
        </div>

        <div className="flex flex-col gap-figma-24">
          {activeTab === 'info' ? (
            <>
              <ProfileInfoTab />
              <FamilyMembersList />
              <div className="pt-figma-16">
                <button
                  type="button"
                  className="flex items-center gap-figma-8 rounded-shape-20 bg-accent-red-600 px-figma-24 py-figma-12 text-label-medium font-semibold text-white hover:bg-accent-red-700"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Sair
                </button>
              </div>
            </>
          ) : (
            <SettingsTab />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
