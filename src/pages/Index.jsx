import XIcon from '../assets/icon.svg';
import Footer from '../components/Footer';
import JoinToday from '../components/JoinToday';

const Index = () => {
  return (
    <div className='index-container'>
      <main className='index-main'>
        <img src={XIcon} alt='' id='xicon' className='index-icon' />
        <div className='index-main-right'>
          <h1>Happening now</h1>
          <JoinToday />
          <div>
            <h3>Already have an account?</h3>
            <button>Sign In</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
