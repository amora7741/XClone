import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <Oval
      wrapperClass='spinner'
      height={25}
      color='rgb(29, 155, 240)'
      secondaryColor='rgb(51, 54, 57)'
      strokeWidth={6}
    />
  );
};

export default LoadingSpinner;
