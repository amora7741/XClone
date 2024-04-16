import Navbar from './Navbar';
import Button from './Button';
import Icon from './Icon';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import TweetModal from './TweetModal';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header>
        <div className='header-top'>
          <Link to='/home' className='xicon-home'>
            <Icon classname='xicon small' />
          </Link>
          <Navbar />
          <Button
            backgroundColor='rgb(29, 155, 240)'
            textColor='white'
            onClick={() => setModalOpen(true)}
          >
            Post
          </Button>
        </div>
        <div className='header-profile'>
          <div className='header-profile-left'>
            <div className='picture'></div>
            <div className='profile-info'>
              <h5>{user.name}</h5>
              <p>@{user.username}</p>
            </div>
          </div>
        </div>
      </header>
      {modalOpen && (
        <TweetModal open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
