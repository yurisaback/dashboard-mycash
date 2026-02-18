import { Outlet } from 'react-router';
import Sidebar from '../components/layout/Sidebar';

/**
 * Root Layout
 * Main layout wrapper for all routes
 * Includes Sidebar for desktop (≥1280px)
 * Mobile HeaderMobile will be added in PROMPT 3
 */
export default function Root() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar (hidden on mobile/tablet) */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
