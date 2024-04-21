import { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TweetContext } from '../context/TweetContext';
import AuthModal from '../components/AuthModal';
import { useNavigate } from 'react-router-dom';
import ForYou from '../components/ForYou';
import TweetForm from '../components/TweetForm';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { getTweets, tweetsData } = useContext(TweetContext);
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    getTweets();
  }, []);

  useEffect(() => {
    console.log(tweetsData);
  }, [tweetsData]);

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
              onClick={() => handleButtonClick(1)}
              className={activeButton === 1 ? 'active' : ''}
            >
              <p>For you</p>
            </button>
            <button
              onClick={() => handleButtonClick(2)}
              className={activeButton === 2 ? 'active' : ''}
            >
              <p>Following</p>
            </button>
          </div>
          <div className='home-formcontainer'>
            <TweetForm />
          </div>
          <hr />
          {activeButton === 1 ? <ForYou /> : <h1>Hello</h1>}
        </main>
      )}
    </>
  );
};

export default Home;
