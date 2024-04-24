import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import TweetTools from './TweetTools';
import Button from './Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const ReplyForm = ({
  parentPost,
  originalPosterName,
  onClose,
  submitReply,
}) => {
  const [reply, setReply] = useState('');

  const postReply = async () => {
    const url = `${
      import.meta.env.VITE_BASE_API
    }/api/posts/${originalPosterName}/status/${parentPost}/comments/create`;

    try {
      const response = await axios.post(
        url,
        { comment_text: reply },
        { withCredentials: true }
      );

      if (response.status === 201) {
        setReply('');
        if (onClose) {
          onClose();
        }

        toast('Your post was sent.', {
          style: {
            background: 'rgb(29, 155, 240)',
            color: 'white',
            textAlign: 'center',
          },
          duration: 2000,
          position: 'bottom-center',
        });

        if (submitReply) {
          submitReply(response);
        }
      } else {
        throw new Error('Your post was not sent.');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className='reply-container'>
        <div className='profile-picture'></div>
        <div className='reply-container-right'>
          <p>
            Replying to <span>@{originalPosterName}</span>
          </p>
          <form>
            <TextareaAutosize
              placeholder='Post your reply'
              name='reply-text'
              id='reply-text'
              value={reply}
              minRows={2}
              maxRows={5}
              onChange={(e) => setReply(e.target.value)}
            />
          </form>
          <div className='tweet-tools'>
            <TweetTools />
            <Button
              backgroundColor='rgb(29, 155, 240)'
              textColor='white'
              onClick={() => postReply()}
            >
              Reply
            </Button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ReplyForm;
