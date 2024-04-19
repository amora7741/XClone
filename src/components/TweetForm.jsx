import { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import TweetTools from './TweetTools';
import toast, { Toaster } from 'react-hot-toast';

const TweetForm = ({ showHr, onClose }) => {
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

      if (response.status === 201) {
        if (onClose) {
          onClose();
        }

        setTweet('');
        toast('Tweet created successfully', {
          style: {
            background: 'rgb(29, 155, 240)',
            color: 'white',
            textAlign: 'center',
          },
          duration: 2000,
          position: 'bottom-center',
        });

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
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
        {showHr && <hr />}
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
      <Toaster />
    </>
  );
};

export default TweetForm;
