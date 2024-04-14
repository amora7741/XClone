import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <main>
      <h1>Home Page</h1>
      <Navbar />
    </main>
  );
};

export default Home;
