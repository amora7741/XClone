import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { useContext } from 'react';

import Index from '../pages/Index';
import Home from '../pages/Home';
import { AuthContext } from '../context/AuthContext';

const Router = () => {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Navigate to='/home' /> : <Index />,
    },
    {
      path: 'home',
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
