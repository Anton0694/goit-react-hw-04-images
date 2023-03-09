import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
        display="flex"
        wrapperClassName=""
        visible={true}
      />
    
  );
};






