import { createBrowserRouter } from 'react-router';
import Root from './views/Root';
import Dashboard from './views/Dashboard';
import Cards from './views/Cards';
import Transactions from './views/Transactions';
import Profile from './views/Profile';
import NotFound from './views/NotFound';

/**
 * React Router configuration
 * Using Data mode pattern with createBrowserRouter
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: 'cards',
        Component: Cards,
      },
      {
        path: 'transactions',
        Component: Transactions,
      },
      {
        path: 'profile',
        Component: Profile,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);
