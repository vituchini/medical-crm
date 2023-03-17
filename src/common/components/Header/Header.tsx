import Icon, { IconTypes } from '../Icon/Icon';
import { ReactNode, useState } from 'react';

import styles from './Header.module.css';

type HeaderProps = {
  leftActions: ReactNode | ReactNode[];
  rightActions: ReactNode | ReactNode[];
  mobileActions: ReactNode | ReactNode[];
  onClick: () => void;
};

const Header = ({ leftActions, rightActions, mobileActions, onClick }: HeaderProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.hamburger} onClick={onClick}>
          <Icon type={IconTypes.hamburger} iconColor="white" />
        </div>
        <div className={styles.leftContainer}>{leftActions}</div>
        <div className={styles.rightContainer}>{rightActions}</div>
      </div>
      <div className={`${styles.mobileContainer} ${styles.displayMobile}`}>{mobileActions}</div>
    </div>
  );
};

export default Header;
