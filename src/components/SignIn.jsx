import { useState } from 'react';
import Button from './Button';
import axios from 'axios';

const SignIn = ({ onClick }) => {
  const notImplemented = () => {
    alert('Not implemented yet :(');
  };

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [secondPage, setSecondPage] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_API}/api/auth/login`;

    try {
      const response = await axios.post(url, formData);

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
                  name='username'
                  id='username'
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <label htmlFor='username'>Email or username</label>
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
          <form className='signin-form second' onSubmit={handleFormSubmit}>
            <div className='fieldholder'>
              <input
                name='username'
                id='username'
                required
                value={formData.username}
                disabled
              />
              <label htmlFor='username'>Email or username</label>
            </div>
            <div className='fieldholder'>
              <input
                name='password'
                id='password'
                required
                value={formData.password}
                onChange={handleInputChange}
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
