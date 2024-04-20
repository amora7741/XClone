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

  return (
    <TweetContext.Provider
      value={{ loading, getTweets, tweetsData, setTweetsData }}
    >
      {children}
    </TweetContext.Provider>
  );
};
