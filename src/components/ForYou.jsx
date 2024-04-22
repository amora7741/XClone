import { useContext } from 'react';
import { TweetContext } from '../context/TweetContext';
import LoadingSpinner from './LoadingSpinner';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';

const ForYou = () => {
  const { loading, tweetsData } = useContext(TweetContext);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='tweets-container'>
          {tweetsData.map((tweet) => (
            <Link
              to={`/${tweet.user.username}/status/${tweet._id}`}
              className='tweet link'
              key={tweet._id}
            >
              <Tweet tweetData={tweet} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ForYou;
