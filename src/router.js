import { createBrowserRouter } from 'react-router-dom';

import HomePage from './routes/HomePage';
import CartPage from './routes/CartPage';
import PayPage from './routes/PayPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/pay',
    element: <PayPage />
  }
]);

export default router;
