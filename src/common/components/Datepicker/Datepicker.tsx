import 'react-datepicker/dist/react-datepicker.css';

import DatePickerAbstraction, { CalendarContainer } from 'react-datepicker';
import Icon, { IconTypes } from '../Icon/Icon';
import React, { ComponentProps, ReactNode } from 'react';

import style from './Datepicker.module.css';

type DatepickerProps = {
  onChange: (dateS: string, date: Date) => Date;
  value?: string;
  placeholder?: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  editabled?: boolean;
  iconPosition?: 'left' | 'right';
} & ComponentProps<any>;

const CustomCalendarContainer = ({ className, children }: { className: string; children: ReactNode | ReactNode }) => (
  <div className={style.customCalendarContainer}>
    <CalendarContainer className={className}>{children}</CalendarContainer>
  </div>
);

const Datepicker = ({ editabled = true, iconPosition = 'left', ...props }: DatepickerProps) => {
  return (
    <div className={style.datepickerWrapper}>
      <label htmlFor={props.value} className={`${style.label} ${props.error ? style.error : ''}`}>
        {props.label}
        <div className={style.icon}>
          <span className={style.iconEl + ' ' + style[iconPosition]}>
            <Icon size={16} type={IconTypes.date} />
          </span>
          <DatePickerAbstraction
            {...props}
            popperClassName={style.someCustomClass}
            calendarContainer={CustomCalendarContainer}
            selected={props.value}
            placeholderText={props.placeholder}
            readOnly={!editabled}
            className={`
              ${style.datepicker} 
              ${style[iconPosition]} 
              ${props.error ? style.error : ''} 
              ${props.disabled ? style.disabled : ''}`}
            onChange={(date: Date) => props.onChange(date.toISOString(), date)}
          />
        </div>
      </label>
    </div>
  );
};

export default Datepicker;
