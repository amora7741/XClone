import Navbar from './Navbar';
import Button from './Button';
import Icon from './Icon';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import TweetModal from './TweetModal';
import { AuthContext } from '../context/AuthContext';
import { Popover } from 'react-tiny-popover';
import LogoutPopover from './LogoutPopover';

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
            <svg viewBox='0 0 24 24' aria-hidden='true' className='nav-icon'>
              <g>
                <path d='M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z'></path>
              </g>
            </svg>
            <span>Post</span>
          </Button>
        </div>
        <Popover
          isOpen={popoverOpen}
          padding={1}
          positions={['top', 'bottom', 'left', 'right']}
          content={
            <LogoutPopover
              accountName={user.username}
              onClick={() => logout()}
            />
          }
          onClickOutside={() => setPopoverOpen(false)}
        >
          <button
            className='header-profile'
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <div className='header-profile-left'>
              <div className='profile-picture'></div>
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
