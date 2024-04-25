import { useState, createContext } from 'react';
import axios from 'axios';
import he from 'he';

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [tweetsData, setTweetsData] = useState([]);

  const getTweets = async () => {
    const url = `${import.meta.env.VITE_BASE_API}/api/posts`;

    try {
      setLoading(true);
      const response = await axios.get(url, { withCredentials: true });
      const decodedTweets = response.data.map((tweet) => ({
        ...tweet,
        text: he.decode(tweet.text),
      }));
      setTweetsData(decodedTweets);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  const getTweet = async (username, postId) => {
    const url = `${
      import.meta.env.VITE_BASE_API
    }/api/posts/${username}/status/${postId}`;

    try {
      const response = await axios.get(url, { withCredentials: true });

      return response;
    } catch (err) {
      alert(err);
    }
  };

  const getComments = async (username, postId, commentIds) => {
    const url = `${
      import.meta.env.VITE_BASE_API
    }/api/posts/${username}/status/${postId}/comments`;

    try {
      const response = await axios.post(
        url,
        { commentIds },
        { withCredentials: true }
      );

      return response;
    } catch (err) {
      alert(err);
    }
  };

  const handleFollow = async (accountId) => {
    const url = `${
      import.meta.env.VITE_BASE_API
    }/api/users/${accountId}/follow`;

    try {
      const response = await axios.post(url, {}, { withCredentials: true });

      return response;
    } catch (error) {
      alert('Error following/unfollowing the user:', error);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        loading,
        getTweets,
        tweetsData,
        setTweetsData,
        getTweet,
        getComments,
        handleFollow,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
