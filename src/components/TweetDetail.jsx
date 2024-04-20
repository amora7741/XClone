import { useLocation } from 'react-router-dom';
import Tweet from './Tweet';

const TweetDetail = () => {
  const { state } = useLocation();
  const tweetData = state.tweetData;

  return (
    <main className='home-main'>
      <h1>Post</h1>
      <div className='tweet'>
        <Tweet tweetData={tweetData} />
      </div>
    </main>
  );
};

export default TweetDetail;
