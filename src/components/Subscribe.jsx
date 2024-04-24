import Button from './Button';

const Subscribe = () => {
  return (
    <div className='asidecontainer subscribe'>
      <h1>Subscribe to Premium</h1>
      <p>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <Button backgroundColor='rgb(29, 155, 240)' textColor='white'>
        Subscribe
      </Button>
    </div>
  );
};

export default Subscribe;
