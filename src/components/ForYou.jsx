import { useContext, useEffect, useMemo } from 'react'; // Import useMemo
import { TweetContext } from '../context/TweetContext';
import LoadingSpinner from './LoadingSpinner';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';

const ForYou = ({ following }) => {
  const { loading, tweetsData } = useContext(TweetContext);

  const filteredTweets = useMemo(() => {
    if (following) {
      return tweetsData.filter((tweet) => tweet.isFromFollowing);
    }
    return tweetsData;
  }, [tweetsData, following]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='tweets-container'>
          {filteredTweets.length > 0 ? (
            <>
              {filteredTweets.map((tweet) => (
                <Link
                  to={`/${tweet.user.username}/status/${tweet._id}`}
                  className='tweet link'
                  key={tweet._id}
                >
                  <Tweet tweetData={tweet} />
                </Link>
              ))}
            </>
          ) : (
            <p style={{ alignSelf: 'center' }}>No posts to show!</p>
          )}
        </div>
      )}
    </>
  );
};

export default ForYou;
