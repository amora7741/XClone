import AuthModal from '../components/AuthModal';
import { useContext, useEffect, useState } from 'react';
import { ScrollRestoration, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tweet from '../components/Tweet';
import LoadingSpinner from '../components/LoadingSpinner';

const AccountDetail = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [activeButton, setActiveButton] = useState('posts');
  const { account, posts, replies, likes, loading, error } = useUserInfo(
    username,
    user
  );

  const handleClick = () => {
    navigate(-1);
  };

  const handleModalClose = () => {
    navigate('/');
  };

  const displayTweets = (info) =>
    info.map((tweet) => (
      <Link
        to={`/${tweet.user.username}/status/${tweet._id}`}
        className='tweet link'
        key={tweet._id}
      >
        <Tweet tweetData={tweet} />
      </Link>
    ));

  useEffect(() => {
    console.log(account);
  }, [account]);

  if (!user) {
    return (
      <AuthModal
        initialMode={'signIn'}
        open={!user}
        onClose={handleModalClose}
      />
    );
  }

  return (
    <>
      <ScrollRestoration />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <main className='accountdetail-main'>
          <div className='accountdetail-main-top'>
            <button onClick={handleClick}>
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <g>
                  <path d='M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z'></path>
                </g>
              </svg>
            </button>
            <h1>{account && account.name}</h1>
          </div>
          <div className='accountdetail-container'>
            <div className='banner'></div>
          </div>
          <div className='top-buttoncontainer'>
            <button
              onClick={() => setActiveButton('posts')}
              className={activeButton === 'posts' ? 'active' : ''}
            >
              <p>Posts</p>
            </button>
            <button
              onClick={() => setActiveButton('replies')}
              className={activeButton === 'replies' ? 'active' : ''}
            >
              <p>Replies</p>
            </button>
            <button
              onClick={() => setActiveButton('likes')}
              className={activeButton === 'likes' ? 'active' : ''}
            >
              <p>Likes</p>
            </button>
          </div>
          <div className='tweets-container'>
            {error ? (
              <p style={{ alignSelf: 'center' }}>
                There was an error fetching the data.
              </p>
            ) : (
              displayTweets({ posts, replies, likes }[activeButton])
            )}
          </div>
        </main>
      )}
    </>
  );
};

const useUserInfo = (username, user) => {
  const [data, setData] = useState({
    account: null,
    posts: [],
    replies: [],
    likes: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (infoType) => {
      try {
        setLoading(true);
        const url = `${import.meta.env.VITE_BASE_API}/api/users/${username}${
          infoType ? `/${infoType}` : ''
        }`;

        const response = await axios.get(url, { withCredentials: true });

        return response.data;
      } catch (error) {
        setError(error);
        return [];
      }
    };

    const getUserData = async () => {
      if (user) {
        const accountData = await fetchData();
        const postsData = await fetchData('posts');
        const repliesData = await fetchData('replies');
        const likesData = await fetchData('likes');

        setData({
          account: accountData,
          posts: postsData,
          replies: repliesData,
          likes: likesData,
        });
        setLoading(false);
      }
    };

    getUserData();
  }, [username, user]);

  return { ...data, loading, error };
};

export default AccountDetail;
