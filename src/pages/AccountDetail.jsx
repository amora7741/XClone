import AuthModal from '../components/AuthModal';
import { useContext, useEffect } from 'react';
import { ScrollRestoration, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AccountDetail = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    navigate(-1);
  };

  const handleModalClose = () => {
    navigate('/');
  };

  useEffect(() => {
    console.log(username);
  }, [username]);

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
              <h1>{user.name}</h1>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default AccountDetail;
