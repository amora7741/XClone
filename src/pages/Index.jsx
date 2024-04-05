import XIcon from '../assets/icon.svg';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className='index-container'>
      <main className='index-main'>
        <img src={XIcon} alt='' id='xicon' className='index-icon' />
        <div className='index-main-right'>
          <h1>Happening Now</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
