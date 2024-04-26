import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { useContext } from 'react';

import Index from '../pages/Index';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import TweetDetail from '../pages/TweetDetail';
import Connect from '../pages/Connect';
import { AuthContext } from '../context/AuthContext';
import AccountDetail from '../pages/AccountDetail';

const Router = () => {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Navigate to='/home' /> : <Index />,
    },
    {
      element: <Layout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: ':username/status/:tweetId', element: <TweetDetail /> },
        { path: 'connect', element: <Connect /> },
        { path: ':username', element: <AccountDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
