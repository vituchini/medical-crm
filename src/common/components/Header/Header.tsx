import Icon, { IconTypes } from '../Icon/Icon';
import { ReactNode, useState } from 'react';

import styles from './Header.module.css';

type HeaderProps = {
  leftActions: ReactNode | ReactNode[];
  rightActions: ReactNode | ReactNode[];
  mobileActions: ReactNode | ReactNode[];
};

const Header = ({ leftActions, rightActions, mobileActions }: HeaderProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.hamburger} onClick={() => setVisible((prev) => !prev)}>
          <Icon type={IconTypes.hamburger} iconColor="white" />
        </div>
        <div className={styles.leftContainer}>{leftActions}</div>
        <div className={styles.rightContainer}>{rightActions}</div>
      </div>
      <div className={`${styles.mobileContainer} ${visible ? styles.displayMobile : ''}`}>{mobileActions}</div>
    </div>
  );
};

export default Header;
