import { useParams } from 'react-router-dom';

const TweetDetail = () => {
  const { username, tweetId } = useParams();

  return (
    <div>
      <h1>Tweet Details</h1>
      <p>Username: {username}</p>
      <p>Tweet ID: {tweetId}</p>
    </div>
  );
};

export default TweetDetail;
