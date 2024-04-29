import Icon from '../components/Icon';
import Footer from '../components/Footer';
import JoinToday from '../components/JoinToday';
import Button from '../components/Button';
import AuthModal from '../components/AuthModal';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loading from '../components/Loading';
import axios from 'axios';

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialMode, setInitialMode] = useState('');
  const { authCheckLoading } = useContext(AuthContext);

  const openModal = (mode) => {
    setInitialMode(mode);
    setModalOpen(true);
  };

  const getHome = async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_API}/`;

      await axios.get(url);
    } catch (error) {
      alert('Server Error.');
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      {authCheckLoading ? (
        <Loading />
      ) : (
        <div className='index-container'>
          <main className='index-main'>
            <Icon classname='xicon index-icon' />
            <div className='index-main-right'>
              <h1>Happening now</h1>
              <JoinToday onClick={() => openModal('createAccount')} />
              <div className='index-existingaccount'>
                <h3>Already have an account?</h3>
                <Button
                  backgroundColor='transparent'
                  textColor='rgb(29, 155, 240)'
                  onClick={() => openModal('signIn')}
                  borderColor='rgb(113, 118, 123)'
                >
                  Sign In
                </Button>
              </div>
            </div>
          </main>
          <Footer />
          {modalOpen && (
            <AuthModal
              initialMode={initialMode}
              open={modalOpen}
              onClose={() => setModalOpen(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Index;
