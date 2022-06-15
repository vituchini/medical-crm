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
};

const Button = ({ children, color = 'primary', size = 'medium', type = 'fill', onClick, disabled }: ButtonProps) => {
  const buttonColor = `${color}-${type}`;
  return (
    <button
      className={`${styles.button} ${styles[buttonColor]} ${styles[size]} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
