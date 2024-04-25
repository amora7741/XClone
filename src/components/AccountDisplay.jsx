import Button from './Button';

const AccountDisplay = ({ account }) => {
  return (
    <div className='followbox-account'>
      <div className='followbox-account-left'>
        <div className='profile-picture'></div>
        <div className='followbox-account-details'>
          <h2>{account.name}</h2>
          <p>@{account.username}</p>
        </div>
      </div>
      <Button backgroundColor='white' textColor='black'>
        Follow
      </Button>
    </div>
  );
};

export default AccountDisplay;
