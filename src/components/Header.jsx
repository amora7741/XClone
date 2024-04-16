import Navbar from './Navbar';
import Button from './Button';
import Icon from './Icon';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header>
        <Link to='/home' className='xicon-home'>
          <Icon classname='xicon small' />
        </Link>
        <Navbar />
        <Button backgroundColor='rgb(29, 155, 240)' textColor='white'>
          Post
        </Button>
      </header>
    </>
  );
};

export default Header;
