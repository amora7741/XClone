import Button from './Button';

const JoinToday = () => {
  const futureImplement = () => {
    alert('Not implemented yet :(');
  };

  return (
    <div className='jointoday'>
      <h2>Join today.</h2>
      <div className='jointoday-signup'>
        <button onClick={() => futureImplement()}>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg'
            className='button-icon'
          />
          Sign up with Google
        </button>
        <button onClick={() => futureImplement()}>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg'
            className='button-icon'
          />
          Sign up with Apple
        </button>
        <p className='separator'>or</p>
        <Button backgroundColor='rgb(29, 155, 240)' textColor='white'>
          Create account
        </Button>
        <p className='signup-terms'>
          By signing up, you agree to the{' '}
          <span>
            <a href=''>Terms of Service</a>
          </span>{' '}
          and{' '}
          <span>
            <a href=''>Privacy Policy</a>
          </span>
          , including{' '}
          <span>
            <a href=''>Cookie Use</a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default JoinToday;
