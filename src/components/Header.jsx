import XIcon from '../assets/icon.svg';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Icon from './Icon';

const Header = () => {
  return (
    <header>
      <Icon classname='xicon small' />
      <Navbar />
      <Button backgroundColor='rgb(29, 155, 240)' textColor='white'>
        Post
      </Button>
    </header>
  );
};

export default Header;
