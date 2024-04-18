const Tweet = ({ timestamp, content, user }) => {
  return (
    <>
      <div className='profile-picture'></div>
      <div className='tweet-content'>
        <div className='tweet-content-top'>
          <div className='tweet-content-top-user'>
            <h5>{user.name}</h5>
            <p>@{user.username}</p>
          </div>
          <button>
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <g>
                <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
              </g>
            </svg>
          </button>
        </div>
        <div className='tweet-content-text'>
          <p>{content}</p>
        </div>
        <div className='tweet-buttons'></div>
      </div>
    </>
  );
};

export default Tweet;
