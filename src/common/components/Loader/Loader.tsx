import styles from './Loader.module.css';

type LoaderProps = {
  size?: number;
};

const Loader = ({ size = 48 }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} style={{ width: `${size}px`, height: `${size}px` }}></div>
    </div>
  );
};

export default Loader;
