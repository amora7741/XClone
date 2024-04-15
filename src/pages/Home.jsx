import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import Loading from '../components/Loading';

const Home = () => {
  const { authCheckLoading, user } = useContext(AuthContext);
  return (
    <>
      {authCheckLoading ? (
        <Loading />
      ) : (
        <>
          <main className='home'>
            <Header />
          </main>
        </>
      )}
    </>
  );
};

export default Home;
