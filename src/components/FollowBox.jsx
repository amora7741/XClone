import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';
import AccountDisplay from './AccountDisplay';

const FollowBox = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const fetchRandomAccounts = async () => {
    try {
      setLoading(true);
      const url = `${import.meta.env.VITE_BASE_API}/api/users/random`;
      const response = await axios.get(url, { withCredentials: true });

      setAccounts(response.data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchRandomAccounts();
    }
  }, [user]);

  useEffect(() => {
    console.log(accounts);
  }, [accounts]);

  return (
    <div className='asidecontainer followbox'>
      <h1>Who to follow</h1>
      <div className='account-list'>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {accounts.length > 0 ? (
              <>
                {accounts.map((account) => (
                  <Link to='' key={account._id} className='link'>
                    <AccountDisplay account={account} />
                  </Link>
                ))}
              </>
            ) : (
              <p>No users to follow.</p>
            )}
          </>
        )}
      </div>
      <button id='showmore'>Show more</button>
    </div>
  );
};

export default FollowBox;
