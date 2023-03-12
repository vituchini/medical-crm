import Icon, { IconTypes } from '../Icon/Icon';
import React, { ComponentProps, ReactElement } from 'react';

import SelectAbstraction from 'react-select';
import style from './Select.module.css';

type SelectProps<T> = {
  isSearchable?: boolean;
  isFullWidth?: boolean;
  error?: boolean;
  disabled?: boolean;
  value?: T;
  subLabel?: string;
  alignText?: 'left' | 'center' | 'right';
  onChange?: (value: T | T[], actionItem: any) => void;
} & ComponentProps<SelectAbstraction>;

const DropdownIndicator = () => {
  return (
    <div className={style.arrowSelect}>
      <Icon size={10} type={IconTypes.arrowDown} />
    </div>
  );
};

const Select = <T,>({
  isSearchable = false,
  disabled = false,
  alignText = 'left',
  ...props
}: SelectProps<T>): ReactElement => {
  const errorElement = () =>
    props.error
      ? {
          border: '1px solid var(--danger)',
          '&:hover': {
            border: '1px solid var(--danger)',
          },
        }
      : {};

  const getStyles = () => ({
    menu: (provided: any) => ({
      ...provided,
      width: '100%',
      textAlign: alignText,
    }),
    control: (base: any, state: any) => ({
      ...base,
      border: '1px solid var(--default)',
      boxShadow: 0,
      pointerEvents: state.isDisabled ? 'auto' : '',
      cursor: state.isDisabled ? 'not-allowed' : 'default',
      background: state.isDisabled ? 'var(--default)' : 'var(--white)',
      minHeight: '32px',
      fontSize: '12px',
      '&:focus': {
        border: '1px solid var(--default)',
      },
      '&:hover': {
        border: '1px solid var(--default)',
      },
      textAlign: alignText,
      flexWrap: 'nowrap',
      width: '100%',
      ...errorElement(),
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      '&:hover': {
        background: 'var(--light-gray)',
      },
      background: state.isSelected ? 'var(--light-gray)' : 'var(--white)',
      paddingLeft: '16px',
      paddingRight: '16px',
      color: 'var(--black)',
      fontSize: '12px',
      textAlign: alignText,
      width: '100%',
    }),
    valueContainer: (base: any) => ({
      ...base,
      paddingLeft: '16px',
      paddingRight: '16px',
    }),
  });

  return (
    <div className={style.selectWrapper}>
      {props.subLabel && (
        <label className={`${style.subLabel} ${props.error ? style.error : ''}`}>{props.subLabel}</label>
      )}
      <SelectAbstraction
        {...props}
        value={props.value}
        isDisabled={disabled}
        isSearchable={isSearchable}
        onChange={props.onChange}
        styles={getStyles()}
        components={{ DropdownIndicator }}
      />
    </div>
  );
};

export default Select;
