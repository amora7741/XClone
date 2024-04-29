import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import { Link, useNavigate } from 'react-router-dom';
import AccountDisplay from './AccountDisplay';

const FollowBox = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
                  <Link
                    to={`/${account.username}`}
                    key={account._id}
                    className='link'
                  >
                    <AccountDisplay account={account} />
                  </Link>
                ))}
              </>
            ) : (
              <p className='no-users'>No users to follow.</p>
            )}
          </>
        )}
      </div>
      <button id='showmore' onClick={() => navigate('connect')}>
        Show more
      </button>
    </div>
  );
};

export default FollowBox;
