import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <main className='home'>
      <Header />
    </main>
  );
};

export default Home;
