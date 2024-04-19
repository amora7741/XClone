import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseButton from './CloseButton';
import '../styles/TweetModal.scss';
import TweetForm from './TweetForm';

const TweetModal = ({ open, onClose }) => {
  return (
    <Popup open={open} onClose={onClose} modal className='tweet-modal'>
      <button id='closebutton' onClick={onClose}>
        <CloseButton />
      </button>
      <TweetForm showHr onClose={onClose} />
    </Popup>
  );
};

export default TweetModal;
