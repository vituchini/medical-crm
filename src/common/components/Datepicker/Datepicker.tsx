import 'react-datepicker/dist/react-datepicker.css';

import React, { ComponentProps } from 'react';

import DatePickerAbstraction from 'react-datepicker';
import style from './Datepicker.module.css';

type DatepickerProps = {
  onChange: (date: Date) => Date;
  value?: Date;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  subLabel?: string;
} & ComponentProps<any>;

const Datepicker = ({ error = false, disabled = false, ...props }: DatepickerProps) => {
  return (
    <div className={style.datepickerWrapper}>
      {props.subLabel && (
        <label className={`${style.subLabel} ${props.error ? style.error : ''}`}>{props.subLabel}</label>
      )}
      <DatePickerAbstraction
        {...props}
        selected={props.value}
        placeholderText={props.placeholder}
        className={`${style.datepicker} ${error ? style.error : ''} ${disabled ? style.disabled : ''}`}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Datepicker;
