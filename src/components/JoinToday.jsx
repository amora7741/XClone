const JoinToday = () => {
  return (
    <div className='jointoday'>
      <h2>Join today.</h2>
      <div className='jointoday-signup'>
        <button>Sign up with Google</button>
        <button>Sign up with Apple</button>
        <p className='separator'>or</p>
        <button>Create account</button>
        <p>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
      </div>
    </div>
  );
};

export default JoinToday;
