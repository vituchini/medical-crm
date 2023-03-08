import styles from './ProfileLabel.module.css';

type ProfileLabelColor = 'gray' | 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'light-gray' | 'black';

type ProfileLabelProps = {
  name?: string;
  src: string;
  textPosition?: 'left' | 'right' | 'top' | 'bottom';
  imageSize?: number;
  fontSize?: number;
  textColor?: ProfileLabelColor;
};

const ProfileLabel = ({
  name,
  src,
  imageSize = 36,
  fontSize = 16,
  textColor = 'black',
  textPosition = 'left',
}: ProfileLabelProps) => {
  return (
    <div
      className={`${styles.container} ${textPosition === 'bottom' || textPosition === 'top' ? styles.horizontal : ''} ${
        styles[textColor]
      }`}
      style={{ fontSize }}
    >
      {name && (
        <div className={textPosition === 'left' || textPosition === 'top' ? styles.before : styles.after}>{name}</div>
      )}
      <div
        style={{ width: imageSize, height: imageSize, fontSize: 0.6 * imageSize }}
        className={`${styles.container} ${styles.img} ${styles.letter}`}
      >
        {src ? <img src={src} className={styles.img} /> : name ? name[0] : ''}
      </div>
    </div>
  );
};

export default ProfileLabel;
