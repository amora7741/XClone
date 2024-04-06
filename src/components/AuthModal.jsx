import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import JoinToday from './JoinToday';
import './styles/AuthModal.scss';

const AuthModal = ({ initialMode, open, onClose }) => {
  const [mode, setMode] = useState(initialMode);

  const toggleMode = () => {
    mode === 'signIn' ? setMode('signUp') : setMode('signIn');
  };

  return (
    <Popup open={open} onClose={onClose} modal>
      {mode === 'signIn' ? (
        <div>
          <h1>Sign In</h1>
          <h2>
            Don't have an account?{' '}
            <span>
              <button onClick={() => toggleMode()}>Sign up</button>
            </span>
          </h2>
        </div>
      ) : (
        <JoinToday />
      )}
    </Popup>
  );
};

export default AuthModal;
