import { RotatingTriangles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <RotatingTriangles
      colors={['#51E5FF', '#7DE2D1', '#FF7E6B']}
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Loader;
