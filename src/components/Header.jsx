import XIcon from '../assets/icon.svg';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Header = () => {
  return (
    <header>
      <img src={XIcon} alt='X Icon' className='xicon small' />
      <Navbar />
      <Button backgroundColor='rgb(29, 155, 240)' textColor='white'>
        Post
      </Button>
    </header>
  );
};

export default Header;
