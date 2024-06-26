import { useState, useContext, useEffect } from 'react';
import AuthModal from '../components/AuthModal';
import { AuthContext } from '../context/AuthContext';
import { ScrollRestoration, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import AccountDisplay from '../components/AccountDisplay';

const Connect = () => {
  const { user } = useContext(AuthContext);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate('/');
  };

  const handleClick = () => {
    navigate(-1);
  };

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const url = `${import.meta.env.VITE_BASE_API}/api/users/`;
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
      fetchAccounts();
    }
  }, [user]);

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
          <main className='connect-main'>
            <div className='connect-main-top'>
              <button onClick={handleClick}>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <g>
                    <path d='M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z'></path>
                  </g>
                </svg>
              </button>
              <h1>Connect</h1>
            </div>
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
                          <AccountDisplay account={account} showBio />
                        </Link>
                      ))}
                    </>
                  ) : (
                    <p>No users to follow.</p>
                  )}
                </>
              )}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Connect;
