import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleModalClose = () => {
    navigate('/');
  };

  return (
    <>
      {!user ? (
        <AuthModal
          initialMode={'signIn'}
          open={!user}
          onClose={() => handleModalClose()}
        />
      ) : (
        <main className='home-main'>
          <h1>Hello</h1>
          <h2>Main page</h2>
        </main>
      )}
    </>
  );
};

export default Home;
