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
            <h1>This is the first post</h1>
          </div>
          <div className='post'>
            <h1>This is the second post</h1>
          </div>
        </>
      )}
    </>
  );
};

export default ForYou;
