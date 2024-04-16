import Navbar from './Navbar';
import Button from './Button';
import Icon from './Icon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TweetModal from './TweetModal';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header>
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
      </header>
      {modalOpen && (
        <TweetModal open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
