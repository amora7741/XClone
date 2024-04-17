import Navbar from './Navbar';
import Button from './Button';
import Icon from './Icon';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import TweetModal from './TweetModal';
import { AuthContext } from '../context/AuthContext';
import { Popover } from 'react-tiny-popover';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

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
        <Popover
          isOpen={popoverOpen}
          positions={['top', 'bottom', 'left', 'right']}
          content={<h1 onClick={() => logout()}>Hello there!</h1>}
        >
          <button
            className='header-profile'
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <div className='header-profile-left'>
              <div className='picture'></div>
              <div className='profile-info'>
                <h5>{user.name}</h5>
                <p>@{user.username}</p>
              </div>
            </div>
            <svg viewBox='0 0 24 24' aria-hidden='true' className='nav-icon'>
              <g>
                <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
              </g>
            </svg>
          </button>
        </Popover>
      </header>
      {modalOpen && (
        <TweetModal open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
