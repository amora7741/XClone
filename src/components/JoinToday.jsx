import Button from './Button';

const JoinToday = () => {
  return (
    <div className='jointoday'>
      <h2>Join today.</h2>
      <div className='jointoday-signup'>
        <button>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg'
            className='button-icon'
          />
          Sign up with Google
        </button>
        <button>
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
        <p>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
      </div>
    </div>
  );
};

export default JoinToday;
