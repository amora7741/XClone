import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <main>
      <h1>Home Page</h1>
      {user && (
        <>
          <h2>{user.username}</h2>
        </>
      )}
    </main>
  );
};

export default Home;
