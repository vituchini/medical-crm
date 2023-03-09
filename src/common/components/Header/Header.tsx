import Icon, { IconTypes } from '../Icon/Icon';

import ProfileLabel from '../ProfileLabel/ProfileLabel';
import styles from './Header.module.css';
import { useState } from 'react';

type Option = {
  label: string;
  path: `${'/'}${string}`;
}
type HeaderProps = {
  options: Option[]
}

const Header = ({options} : HeaderProps ) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.container}>
       <div>
        <div className={styles.hamburger} onClick={() => setVisible((prev) => !prev)}>
          <Icon type={IconTypes.hamburger} iconColor="white" />
        </div>
        <div className={`${styles.leftContainer} ${visible ? '' : styles.hide}`}>
         {options.map((option) =><a key={option.label} className={location.pathname.startsWith(option.path) ? styles.active : ''} href={option.path}>
            {option.label}
          </a>
        )}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <ProfileLabel name="test" src="" textColor="white" />
        <Icon type={IconTypes.notification} iconColor="white" />
      </div>
    </div>
  );
};

export default Header;
