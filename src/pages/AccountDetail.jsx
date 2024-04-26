import AuthModal from '../components/AuthModal';
import { useContext, useEffect, useState } from 'react';
import { ScrollRestoration, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tweet from '../components/Tweet';
import he from 'he';
import LoadingSpinner from '../components/LoadingSpinner';

const AccountDetail = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [activeButton, setActiveButton] = useState(1);
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);
  const [replies, setReplies] = useState([]);
  const [likes, setLikes] = useState([]);

  const handleClick = () => {
    navigate(-1);
  };

  const handleModalClose = () => {
    navigate('/');
  };

  const getUserInfo = async (info) => {
    const url = `${
      import.meta.env.VITE_BASE_API
    }/api/users/${username}/${info}`;

    try {
      const response = await axios.get(url, { withCredentials: true });

      return response.data;
    } catch (error) {
      alert(error);
    }
  };

  const displayTweets = (info) => {
    return (
      <>
        {info.map((tweet) => (
          <Link
            to={`/${tweet.user.username}/status/${tweet._id}`}
            className='tweet link'
            key={tweet._id}
          >
            <Tweet tweetData={tweet} />
          </Link>
        ))}
      </>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          setLoading(true);
          const postsData = await getUserInfo('posts');
          const repliesData = await getUserInfo('replies');
          const likesData = await getUserInfo('likes');

          setPosts(postsData);
          setReplies(repliesData);
          setLikes(likesData);
        } catch (error) {
          alert(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    console.log(posts);
    console.log(replies);
    console.log(likes);
  }, [posts, replies, likes]);

  return (
    <>
      {!user ? (
        <AuthModal
          initialMode={'signIn'}
          open={!user}
          onClose={() => handleModalClose()}
        />
      ) : (
        <>
          <ScrollRestoration />
          <main className='accountdetail-main'>
            <div className='accountdetail-main-top'>
              <button onClick={handleClick}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <g>
                    <path d='M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z'></path>
                  </g>
                </svg>
              </button>
              <h1>{username}</h1>
            </div>
            <div className='top-buttoncontainer'>
              <button
                onClick={() => setActiveButton(1)}
                className={activeButton === 1 ? 'active' : ''}
              >
                <p>Posts</p>
              </button>
              <button
                onClick={() => setActiveButton(2)}
                className={activeButton === 2 ? 'active' : ''}
              >
                <p>Replies</p>
              </button>
              <button
                onClick={() => setActiveButton(3)}
                className={activeButton === 3 ? 'active' : ''}
              >
                <p>Likes</p>
              </button>
            </div>
            <div className='tweets-container'>
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  {activeButton === 1 && displayTweets(posts)}
                  {activeButton === 2 && displayTweets(replies)}
                  {activeButton === 3 && displayTweets(likes)}
                </>
              )}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default AccountDetail;
