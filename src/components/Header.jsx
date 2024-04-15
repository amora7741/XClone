import Navbar from './Navbar';
import Button from './Button';
import Icon from './Icon';
import { useState } from 'react';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header>
        <Icon classname='xicon small' />
        <Navbar />
        <Button backgroundColor='rgb(29, 155, 240)' textColor='white'>
          Post
        </Button>
        <Button backgroundColor='rgb(29, 155, 240)' textColor='white'>
          Post
        </Button>
      </header>
    </>
  );
};

export default Header;
