import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Icon from './Icon';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header>
      <Icon classname='xicon small' />
      {user && (
        <>
          <Navbar />
          <Button backgroundColor='rgb(29, 155, 240)' textColor='white'>
            Post
          </Button>
        </>
      )}
    </header>
  );
};

export default Header;
