import 'react-datepicker/dist/react-datepicker.css';

import Icon, { IconTypes } from '../Icon/Icon';
import React, { ComponentProps } from 'react';

import DatePickerAbstraction from 'react-datepicker';
import style from './Datepicker.module.css';

type DatepickerProps = {
  onChange: (date: Date) => Date;
  error?: boolean;
  disabled?: boolean;
  isFullWidth?: boolean;
  iconPosition?: 'left' | 'right';
  value?: Date;
  placeholder?: string;
  subLabel?: string;
} & ComponentProps<any>;

const Datepicker = ({ iconPosition = 'left', ...props }: DatepickerProps) => {
  return (
    <div className={`${style.datepickerWrapper}  ${props.isFullWidth ? style.fullWidth : ''}`}>
      {props.subLabel && (
        <label className={`${style.subLabel} ${props.error ? style.error : ''}`}>{props.subLabel}</label>
      )}
      <div className={style.icon}>
        <span className={style.iconEl + ' ' + style[iconPosition]}>
          <Icon size={16.67} type={IconTypes.date} />
        </span>
        <DatePickerAbstraction
          {...props}
          selected={props.value}
          placeholderText={props.placeholder}
          className={`${style.datepicker} ${style[iconPosition]} ${props.error ? style.error : ''} ${
            props.disabled ? style.disabled : ''
          }`}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Datepicker;
