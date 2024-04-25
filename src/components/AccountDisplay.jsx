import Button from './Button';

const AccountDisplay = ({ account, showBio }) => {
  return (
    <div className='followbox-account'>
      <div className='followbox-account-top'>
        <div className='followbox-account-top-left'>
          <div className='profile-picture'></div>
          <div className='followbox-account-info'>
            <h2>{account.name}</h2>
            <p>@{account.username}</p>
          </div>
        </div>
        <Button textColor='black' backgroundColor='white'>
          Follow
        </Button>
      </div>
      {showBio && (
        <p className='bio'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptates debitis hic similique, molestias laborum natus odio id
          veritatis qua.
        </p>
      )}
    </div>
  );
};

export default AccountDisplay;
