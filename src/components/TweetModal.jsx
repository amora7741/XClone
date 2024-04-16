import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseButton from './CloseButton';
import Button from './Button';
import TweetTools from './TweetTools';
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
      <div className='tweet-tools-container'>
        <hr />
        <div className='tweet-tools'>
          <TweetTools />
          <Button
            backgroundColor='rgb(29, 155, 240)'
            textColor='white'
            onClick={() => alert('fart')}
          >
            Post
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default TweetModal;
