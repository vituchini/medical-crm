import Icon, { IconTypes } from '../Icon/Icon';

import { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonColor = 'gray' | 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'light-gray' | 'black';

type ButtonType = 'fill' | 'border';
type ButtonSize = 'small' | 'medium' | 'fullWidth';

export type ButtonProps = {
  color?: ButtonColor;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: (event: any) => void;
  children?: ReactNode | ReactNode[];
  icon?: IconTypes;
};

const Button = ({
  children,
  icon,
  color = 'primary',
  size = 'medium',
  type = 'fill',
  onClick,
  disabled,
}: ButtonProps) => {
  const buttonColor = `${color}-${type}`;
  return (
    <button
      className={`${styles.button} ${styles[buttonColor]} ${styles[size]} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children && children}
      {icon && <Icon type={icon} size={size === 'small' ? 12 : 18} iconColor={type === 'fill' ? 'white' : color} />}
    </button>
  );
};

export default Button;
