import './CircularLoader.css';

type CircularLoaderProps = {
  visible?: boolean;
};

const CircularLoader = ({ visible }: CircularLoaderProps) => {
  return <div className="container">{visible && <div className="loader"></div>}</div>;
};

export default CircularLoader;
