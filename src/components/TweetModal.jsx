import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseButton from './CloseButton';
import '../styles/TweetModal.scss';

const TweetModal = ({ open, onClose }) => {
  return (
    <Popup open={open} onClose={onClose} modal className='tweet-modal'>
      <button id='closebutton' onClick={onClose}>
        <CloseButton />
      </button>
      <div className='tweet-container'>
        <div className='profile-picture'></div>
        <form>
          <textarea placeholder='What is happening?!' />
        </form>
      </div>
    </Popup>
  );
};

export default TweetModal;
