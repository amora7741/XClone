import XIcon from '../assets/icon.svg';
import Footer from '../components/Footer';
import JoinToday from '../components/JoinToday';
import Button from '../components/Button';

const Index = () => {
  return (
    <div className='index-container'>
      <main className='index-main'>
        <img src={XIcon} alt='X Icon' id='xicon' className='index-icon' />
        <div className='index-main-right'>
          <h1>Happening now</h1>
          <JoinToday />
          <div className='index-existingaccount'>
            <h3>Already have an account?</h3>
            <Button
              backgroundColor='transparent'
              textColor='rgb(29, 155, 240)'
              borderColor='rgb(113, 118, 123)'
            >
              Sign In
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
