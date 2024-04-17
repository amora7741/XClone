import { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [activeButton, setActiveButton] = useState('ForYou');
  const forYouRef = useRef(null);

  useEffect(() => {
    if (forYouRef.current) {
      forYouRef.current.click();
    }
  }, []);

  const handleModalClose = () => {
    navigate('/');
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
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
          <div className='home-buttoncontainer'>
            <button
              ref={forYouRef}
              onClick={() => handleButtonClick('ForYou')}
              className={activeButton === 'ForYou' ? 'active' : ''}
            >
              For you
            </button>
            <button
              onClick={() => handleButtonClick('Following')}
              className={activeButton === 'Following' ? 'active' : ''}
            >
              Following
            </button>
          </div>
          <div className='post-container'>
            {activeButton === 'ForYou' && <div>For you</div>}
            {activeButton === 'Following' && <div>Following</div>}
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
