import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import axios from 'axios';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';

const ForYou = () => {
  const [loading, setLoading] = useState(false);
  const [tweetsData, setTweetsData] = useState([]);

  const getTweets = async () => {
    const url = `${import.meta.env.VITE_BASE_API}/api/posts`;

    try {
      setLoading(true);
      const response = await axios.get(url, { withCredentials: true });

      setTweetsData(response.data);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTweets();
  }, []);

  useEffect(() => {
    console.log(tweetsData);
  }, [tweetsData]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='tweets-container'>
          {tweetsData.map((tweet) => (
            <Link to={tweet._id} className='tweet' key={tweet._id}>
              <Tweet user={tweet.user.username} content={tweet.text} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ForYou;
