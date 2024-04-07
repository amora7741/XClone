import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import JoinToday from './JoinToday';
import '../styles/AuthModal.scss';
import XIcon from '../assets/icon.svg';
import CloseIcon from '../assets/closebutton.svg';

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
        <>
          <button id='closebutton' onClick={onClose}>
            <img src={CloseIcon} alt='Close button' />
          </button>
          <img src={XIcon} alt='X Icon' id='xicon' />
          <JoinToday />
          <p className='gray'>
            Have an account already? <span role='button'>Log in</span>
          </p>
        </>
      )}
    </Popup>
  );
};

export default AuthModal;
