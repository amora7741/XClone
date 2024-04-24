import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseButton from './CloseButton';
import ReplyForm from './ReplyForm';
import '../styles/ReplyModal.scss';

const ReplyModal = ({ parentPost, originalPosterName, open, onClose }) => {
  return (
    <Popup open={open} onClose={onClose} modal className='reply-modal'>
      <button id='closebutton' onClick={onClose}>
        <CloseButton />
      </button>
      <ReplyForm
        parentPost={parentPost}
        originalPosterName={originalPosterName}
        onClose={onClose}
      />
    </Popup>
  );
};

export default ReplyModal;
