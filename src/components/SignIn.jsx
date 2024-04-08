import Button from './Button';

const SignIn = ({ onClick }) => {
  const notImplemented = () => {
    alert('Not implemented yet :(');
  };

  return (
    <div className='signin-container'>
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
        <form action=''>
          <input placeholder='Phone, email, or username'></input>
        </form>
        <Button backgroundColor='white' textColor='black'>
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
    </div>
  );
};

export default SignIn;
