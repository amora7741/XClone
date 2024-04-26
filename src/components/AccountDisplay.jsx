import { useState, useContext } from 'react';
import { TweetContext } from '../context/TweetContext';
import Button from './Button';

const AccountDisplay = ({ account, showBio }) => {
  const [isFollowing, setIsFollowing] = useState(account.isFollowing);
  const { handleFollow } = useContext(TweetContext);

  const handleFollowClick = async (e) => {
    e.preventDefault();
    const response = await handleFollow(account._id);

    setIsFollowing(response.data.isFollowing);
  };

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
        <Button
          textColor={isFollowing ? 'white' : 'black'}
          backgroundColor={isFollowing ? 'transparent' : 'white'}
          borderColor={isFollowing ? 'darkgray' : null}
          onClick={handleFollowClick}
        >
          {isFollowing ? 'Following' : 'Follow'}
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
