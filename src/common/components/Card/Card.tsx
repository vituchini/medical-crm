import { ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
  header?: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
};

const Card = ({ header, children }: CardProps) => {
  return (
    <div className={styles.container}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;
