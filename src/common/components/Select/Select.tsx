import React, { ComponentProps, ReactElement } from 'react';

import SelectAbstraction from 'react-select';
import style from './Select.module.css';

type SelectProps<T> = {
  isSearchable?: boolean;
  isFullWidth?: boolean;
  error?: boolean;
  disabled?: boolean;
  subLabel?: string;
  alignText?: 'left' | 'center' | 'right';
  onChange?: (value: T | T[], actionItem: any) => void;
} & ComponentProps<SelectAbstraction>;

const Select = <T,>({
  isSearchable = false,
  disabled = false,
  alignText = 'left',
  ...props
}: SelectProps<T>): ReactElement => {
  const widthElement = () => ({ width: props.isFullWidth ? '100%' : '200px' });
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
    menu: (provided: any, state: any) => ({
      ...provided,
      ...widthElement(),
      textAlign: alignText,
    }),
    control: (base: any, state: any) => ({
      ...base,
      border: 0,
      boxShadow: 0,
      pointerEvents: state.isDisabled ? 'auto' : '',
      cursor: state.isDisabled ? 'not-allowed' : 'default',
      '&:hover': {
        border: 0,
      },
      ...widthElement(),
      textAlign: alignText,
      ...errorElement(),
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      '&:hover': {
        background: 'var(--light-gray)',
      },
      background: state.isSelected ? 'var(--light-gray)' : 'var(--white)',
      color: 'var(--black)',
      ...widthElement(),
      textAlign: alignText,
    }),
  });

  return (
    <>
      {props.subLabel && (
        <label className={`${style.subLabel} ${props.error ? style.error : ''}`}>{props.subLabel}</label>
      )}
      <SelectAbstraction
        {...props}
        isDisabled={disabled}
        isSearchable={isSearchable}
        onChange={props.onChange}
        styles={getStyles()}
      />
    </>
  );
};

export default Select;
