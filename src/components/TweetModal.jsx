import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseButton from './CloseButton';
import Button from './Button';
import TweetTools from './TweetTools';
import '../styles/TweetModal.scss';
import { useState } from 'react';
import axios from 'axios';

const TweetModal = ({ open, onClose }) => {
  const [tweet, setTweet] = useState('');
  const sendTweet = async () => {
    const url = `${import.meta.env.VITE_BASE_API}/api/posts/`;

    try {
      const response = await axios.post(
        url,
        { post_text: tweet },
        {
          withCredentials: true,
        }
      );

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Popup open={open} onClose={onClose} modal className='tweet-modal'>
      <button id='closebutton' onClick={onClose}>
        <CloseButton />
      </button>
      <div className='tweet-container'>
        <div className='profile-picture'></div>
        <form>
          <textarea
            placeholder='What is happening?!'
            name='tweet-text'
            id='tweet-text'
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </form>
      </div>
      <div className='tweet-tools-container'>
        <hr />
        <div className='tweet-tools'>
          <TweetTools />
          <Button
            backgroundColor='rgb(29, 155, 240)'
            textColor='white'
            onClick={() => sendTweet()}
          >
            Post
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default TweetModal;
