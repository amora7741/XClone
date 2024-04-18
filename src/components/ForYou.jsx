import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import axios from 'axios';

const ForYou = () => {
  const [loading, setLoading] = useState(false);
  const [tweetsData, setTweetsData] = useState([]);

  const getPosts = async () => {
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
    getPosts();
  }, []);

  return <>{loading ? <LoadingSpinner /> : <h1>Hello</h1>}</>;
};

export default ForYou;
