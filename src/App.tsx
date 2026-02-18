import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FinanceProvider } from './contexts/FinanceContext'
import { ToastProvider } from './contexts/ToastContext'
import { DashboardLayout } from './components/layout/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import CardsPage from './pages/CardsPage'
import TransactionsPage from './pages/TransactionsPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <FinanceProvider>
      <ToastProvider>
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
      </ToastProvider>
    </FinanceProvider>
  )
}

export default App
