import { useEffect, useState, useContext } from 'react';
import { TweetContext } from '../context/TweetContext';
import {
  useParams,
  useNavigate,
  Link,
  ScrollRestoration,
} from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import Tweet from '../components/Tweet';
import ReplyForm from '../components/ReplyForm';
import { AuthContext } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';

const TweetDetail = () => {
  const { username, tweetId } = useParams();
  const { getTweet, getComments } = useContext(TweetContext);
  const [tweetData, setTweetData] = useState(null);
  const [commentIds, setCommentIds] = useState([]);
  const [comments, setComments] = useState([]);
  const [tweetLoading, setTweetLoading] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const handleModalClose = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchTweet = async () => {
      try {
        setTweetLoading(true);
        setComments([]);

        const response = await getTweet(username, tweetId);

        setTweetData(response.data);
        setCommentIds(response.data.comments);
      } catch (err) {
        alert('Error fetching tweet:', err);
      } finally {
        setTweetLoading(false);
      }
    };

    if (user) {
      fetchTweet();
    }
  }, [username, tweetId, getTweet, user]);

  useEffect(() => {
    const fetchComments = async () => {
      if (commentIds.length === 0) {
        setComments([]);
        return;
      }

      try {
        setCommentsLoading(true);
        const response = await getComments(username, tweetId, commentIds);

        setComments(response.data);
      } catch (err) {
        alert(err);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchComments();
  }, [commentIds]);

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
          <main className='tweetdetail-main'>
            <div className='tweetdetail-main-top'>
              <button onClick={handleClick}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <g>
                    <path d='M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z'></path>
                  </g>
                </svg>
              </button>
              <h1>Post</h1>
            </div>
            {tweetLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className='tweet original'>
                  {tweetData && <Tweet tweetData={tweetData} showHr />}
                </div>
                {tweetData && (
                  <ReplyForm
                    parentPost={tweetData._id}
                    originalPosterName={tweetData.user.username}
                    submitReply={(response) => {
                      setComments([response.data, ...comments]);
                    }}
                  />
                )}
              </>
            )}
            {commentsLoading ? (
              <LoadingSpinner />
            ) : (
              <div className='tweet-comments'>
                {comments &&
                  comments.map((tweet) => (
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
          </main>
        </>
      )}
    </>
  );
};

export default TweetDetail;
