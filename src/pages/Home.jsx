import { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';
import { useNavigate } from 'react-router-dom';
import ForYou from '../components/ForYou';
import TweetForm from '../components/TweetForm';

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
              <p>For you</p>
            </button>
            <button
              onClick={() => handleButtonClick('Following')}
              className={activeButton === 'Following' ? 'active' : ''}
            >
              <p>Following</p>
            </button>
          </div>
          <div className='home-formcontainer'>
            <TweetForm />
          </div>
          <hr />
          {activeButton === 'ForYou' && <ForYou />}
          {activeButton === 'Following' && <div>Following</div>}
        </main>
      )}
    </>
  );
};

export default Home;
