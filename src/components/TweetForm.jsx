import { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import TweetTools from './TweetTools';

const TweetForm = ({ showHr }) => {
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
    </>
  );
};

export default TweetForm;
