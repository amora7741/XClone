import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import JoinToday from './JoinToday';
import SignIn from './SignIn';
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
      <button id='closebutton' onClick={onClose}>
        <img src={CloseIcon} alt='Close button' />
      </button>
      <img src={XIcon} alt='X Icon' id='xicon' />
      {mode === 'signIn' ? (
        <SignIn onClick={() => toggleMode()} />
      ) : (
        <>
          <JoinToday />
          <p className='gray'>
            Have an account already?{' '}
            <span role='button' onClick={() => toggleMode()}>
              Log in
            </span>
          </p>
        </>
      )}
    </Popup>
  );
};

export default AuthModal;
