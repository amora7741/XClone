import { useEffect, useState, useContext } from 'react';
import { TweetContext } from '../context/TweetContext';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import Tweet from './Tweet';

const TweetDetail = () => {
  const { username, tweetId } = useParams();
  const { getTweet } = useContext(TweetContext);
  const [tweetData, setTweetData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTweet = async () => {
      try {
        setLoading(true);
        const response = await getTweet(username, tweetId);
        setTweetData(response);
      } catch (err) {
        alert('Error fetching tweet:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTweet();
  }, []);

  return (
    <main className='tweetdetail-main'>
      <h2>Post</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='tweet'>
          {tweetData && <Tweet tweetData={tweetData} />}
        </div>
      )}
    </main>
  );
};

export default TweetDetail;
