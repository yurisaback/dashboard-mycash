import { RouterProvider } from 'react-router';
import { router } from './routes';

/**
 * Main App Component
 * Uses React Router Data mode with RouterProvider
 */
export default function App() {
  return <RouterProvider router={router} />;
}
