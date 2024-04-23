import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const ReplyForm = ({ parentPost, originalPoster }) => {
  const [reply, setReply] = useState('');

  return (
    <div className='reply-container'>
      <div className='profile-picture'></div>
      <div className='reply-container-right'>
        <p>Replying to @{originalPoster}</p>
        <form>
          <TextareaAutosize
            placeholder='What is happening?!'
            name='tweet-text'
            id='tweet-text'
            value={reply}
            minRows={2}
            maxRows={5}
            onChange={(e) => setReply(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default ReplyForm;
