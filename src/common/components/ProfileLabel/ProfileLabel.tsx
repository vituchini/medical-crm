import Icon, { IconTypes } from '../Icon/Icon';

import styles from './ProfileLabel.module.css';

type ProfileLabelColor =
  | 'white'
  | 'gray'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'light-gray'
  | 'black';

type ProfileLabelProps = {
  name?: string;
  src?: string;
  textPosition?: 'left' | 'right' | 'top' | 'bottom';
  imageSize?: number;
  fontSize?: number;
  textColor?: ProfileLabelColor;
  onClick?: () => void;
};

const ProfileLabel = ({
  name,
  src,
  imageSize = 36,
  fontSize = 16,
  textColor = 'black',
  textPosition = 'left',
  onClick,
}: ProfileLabelProps) => {
  return (
    <div
      className={`${styles.container} ${textPosition === 'bottom' || textPosition === 'top' ? styles.horizontal : ''} ${
        styles[textColor]
      } ${onClick ? styles.clickable : ''}`}
      style={{ fontSize }}
      onClick={onClick}
    >
      {name && (
        <div
          className={`${styles.name} ${
            textPosition === 'left' || textPosition === 'top' ? styles.before : styles.after
          }`}
        >
          {name}
        </div>
      )}
      <div
        style={{ width: imageSize, height: imageSize, fontSize: 0.6 * imageSize }}
        className={`${styles.container} ${styles.img} ${styles.letter}`}
      >
        {src ? (
          <img src={src} className={styles.img} />
        ) : name ? (
          name[0]
        ) : (
          <Icon iconColor="primary" type={IconTypes.user} size={0.6 * imageSize} />
        )}
      </div>
    </div>
  );
};

export default ProfileLabel;
