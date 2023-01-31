import styles from './CircularLoader.module.css';

type CircularLoaderProps = {
  size?: number;
};

const CircularLoader = ({ size = 48 }: CircularLoaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} style={{ width: `${size}px`, height: `${size}px` }}></div>
    </div>
  );
};

export default CircularLoader;
