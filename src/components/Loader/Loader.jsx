import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        display="flex"
        wrapperClassName="Loader"
        visible={true}
      />
    </div>
  );
};






