import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import JoinToday from './JoinToday';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import '../styles/AuthModal.scss';
import XIcon from '../assets/icon.svg';
import CloseIcon from '../assets/closebutton.svg';

const AuthModal = ({ initialMode, open, onClose }) => {
  const [mode, setMode] = useState(initialMode);

  const toggleMode = (mode) => setMode(mode);

  return (
    <Popup open={open} onClose={onClose} modal closeOnDocumentClick={false}>
      <button id='closebutton' onClick={onClose}>
        <img src={CloseIcon} alt='Close button' />
      </button>
      <img src={XIcon} alt='X Icon' className='xicon' />
      {mode === 'signIn' && <SignIn onClick={() => toggleMode('signUp')} />}
      {mode === 'signUp' && (
        <>
          <JoinToday onClick={() => toggleMode('createAccount')} />
          <p className='gray'>
            Have an account already?{' '}
            <span role='button' onClick={() => toggleMode('signIn')}>
              Log in
            </span>
          </p>
        </>
      )}
      {mode === 'createAccount' && <CreateAccount />}
    </Popup>
  );
};

export default AuthModal;
