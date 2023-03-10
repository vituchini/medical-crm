import Icon, { IconColor, IconTypes } from '../Icon/Icon';
import React, { ChangeEvent } from 'react';

import styles from './Input.module.css';

type IconPosition = 'left' | 'right';

export type InputProps = {
  value: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: any, e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  id?: string;
  error?: boolean;
  label?: string;
  icon?: {
    type: IconTypes;
    position: IconPosition;
    iconColor?: IconColor;
    size?: number;
  };
};

const Input = ({
  value,
  icon,
  error,
  placeholder,
  disabled,
  onChange,
  id,
  label,
  name,
  type,
  ...props
}: InputProps) => {
  return (
    <div className={`${error && styles.error}`}>
      {label && (
        <label htmlFor={id} className={`${styles.label} ${error ? styles.error : ''}`}>
          {label}
        </label>
      )}
      <div
        className={`${icon && styles.inputWithIcon} ${icon && icon.position === 'left' && styles.leftIconPosition} ${
          icon && icon.position === 'right' && styles.rightIconPosition
        }  `}
      >
        <input
          type={type}
          name={name}
          id={id}
          className={`${styles.inputWrapper} ${disabled && styles.disabled} `}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(type === 'number' ? Number(e.target.value) : e.target.value, e);
          }}
          disabled={disabled}
        />
        {icon && <Icon iconColor={icon.iconColor} type={icon.type} size={icon.size ? icon.size : 16} />}
      </div>
    </div>
  );
};

export default Input;
