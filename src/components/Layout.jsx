import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';

const Layout = () => {
  const { user, authCheckLoading } = useContext(AuthContext);

  return (
    <>
      {authCheckLoading ? (
        <Loading />
      ) : (
        <div className='pagecontainer'>
          {user && <Header />}
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Layout;
