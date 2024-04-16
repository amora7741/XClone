import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseIcon from '../assets/closebutton.svg';
import '../styles/TweetModal.scss';

const TweetModal = ({ open, onClose }) => {
  return (
    <Popup open={open} onClose={onClose} modal className='tweet-modal'>
      <button id='closebutton' onClick={onClose}>
        <img src={CloseIcon} alt='Close button' />
      </button>
      <div className='tweet-container'>
        <div className='profile-picture'></div>
        <form>
          <input type='text' placeholder='What is happening?!' />
        </form>
      </div>
    </Popup>
  );
};

export default TweetModal;
