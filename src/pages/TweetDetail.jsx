import { useEffect, useState, useContext } from 'react';
import { TweetContext } from '../context/TweetContext';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import Tweet from '../components/Tweet';

const TweetDetail = () => {
  const { username, tweetId } = useParams();
  const { getTweet } = useContext(TweetContext);
  const [tweetData, setTweetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <main className='tweetdetail-main'>
      <div className='tweetdetail-main-top'>
        <button onClick={handleClick}>
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <g>
              <path d='M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z'></path>
            </g>
          </svg>
        </button>
        <h2>Post</h2>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='tweet'>
          {tweetData && <Tweet tweetData={tweetData} showHr />}
        </div>
      )}
    </main>
  );
};

export default TweetDetail;
