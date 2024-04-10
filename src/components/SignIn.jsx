import { useState } from 'react';
import Button from './Button';

const SignIn = ({ onClick }) => {
  const notImplemented = () => {
    alert('Not implemented yet :(');
  };

  const [loginCredentials, setLoginCredentials] = useState('');
  const [password, setPassword] = useState('');
  const [secondPage, setSecondPage] = useState(false);

  return (
    <div className='signin-container'>
      {!secondPage && (
        <>
          <h2>Sign in to X</h2>
          <div className='signin-form'>
            <Button
              backgroundColor='white'
              textColor='black'
              onClick={notImplemented}
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg'
                className='button-icon'
              />
              Sign in with Google
            </Button>
            <Button
              backgroundColor='white'
              textColor='black'
              onClick={notImplemented}
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg'
                className='button-icon'
              />
              Sign in with Apple
            </Button>
            <p className='separator'>or</p>
            <form>
              <div className='fieldholder'>
                <input
                  name='login'
                  id='login'
                  required
                  value={loginCredentials}
                  onChange={(e) => setLoginCredentials(e.target.value)}
                />
                <label htmlFor='login'>Email or username</label>
              </div>
            </form>
            <Button
              backgroundColor='white'
              textColor='black'
              onClick={() => setSecondPage(true)}
            >
              Next
            </Button>
            <Button
              backgroundColor='transparent'
              textColor='white'
              borderColor='rgb(113, 118, 123)'
              onClick={notImplemented}
            >
              Forgot password?
            </Button>
          </div>
          <p className='gray'>
            Don't have an account?{' '}
            <span role='button' onClick={onClick}>
              Sign up
            </span>
          </p>
        </>
      )}

      {secondPage && (
        <>
          <h2>Enter your password</h2>
          <form className='signin-form second'>
            <div className='fieldholder'>
              <input
                name='login'
                id='login'
                required
                value={loginCredentials}
                disabled
              />
              <label htmlFor='login'>Email or username</label>
            </div>
            <div className='fieldholder'>
              <input
                name='password'
                id='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor='password'>Password</label>
            </div>
            <Button backgroundColor='white' textColor='black' type='submit'>
              Log in
            </Button>
            <p className='gray'>
              Don't have an account?{' '}
              <span role='button' onClick={onClick}>
                Sign up
              </span>
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default SignIn;
