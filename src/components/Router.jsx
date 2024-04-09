import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from '../pages/Index';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
