import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';

const ForYou = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Oval
          wrapperClass='spinner'
          height={25}
          color='rgb(29, 155, 240)'
          secondaryColor='rgb(51, 54, 57)'
          strokeWidth={6}
        />
      ) : (
        <>
          <div className='post'>
            <p>This is the first post</p>
          </div>
          <div className='post'>
            <p>This is the second post</p>
          </div>
        </>
      )}
    </>
  );
};

export default ForYou;
