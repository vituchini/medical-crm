import React, { ComponentProps } from 'react';

import SelectAbstraction from 'react-select';
import style from './Select.module.css';

type alignText = 'left' | 'center' | 'right';
type SelectProps = {
  isSearchable?: boolean;
  isFullWidth?: boolean;
  isError?: boolean;
  alignText?: alignText;
  subLabel?: string;
  onChange?: (valueItem: any, actionItem: any) => void;
} & ComponentProps<SelectAbstraction>;

const alignElement = (props: SelectProps) => {
  switch (props.alignText) {
    case 'left':
      return { textAlign: 'left' };
    case 'center':
      return { textAlign: 'center' };
    case 'right':
      return { textAlign: 'right' };
    default:
      return { textAlign: 'left' };
  }
};

const widthElement = (props: SelectProps) => {
  switch (props.isFullWidth) {
    case true:
      return { width: '100%' };
    case false:
      return { width: '200px' };
    default:
      return { width: '200px' };
  }
};

const errorElement = (props: SelectProps) => {
  switch (props.isError) {
    case true:
      return {
        border: '1px solid var(--danger)',
        '&:hover': {
          border: '1px solid var(--danger)',
        },
      };
    case false:
      return {};
    default:
      return {};
  }
};

const Select = ({ isSearchable = false, ...props }: SelectProps) => {
  return (
    <label>
      {props.subLabel && (
        <span className={`${style.subLabel} ${props.isError ? style.error : ''}`}>{props.subLabel}</span>
      )}
      <SelectAbstraction
        {...props}
        isSearchable={isSearchable}
        onChange={props.onChange}
        styles={{
          menu: (provided: any, state: any) => ({
            ...provided,
            ...widthElement(props),
            ...alignElement(props),
          }),
          control: (base: any, state: any) => ({
            ...base,
            border: state.isFocused ? 0 : 0,
            boxShadow: state.isFocused ? 0 : 0,
            pointerEvents: state.isDisabled ? 'auto' : '',
            cursor: state.isDisabled ? 'not-allowed' : 'default',
            '&:hover': {
              border: state.isFocused ? 0 : 0,
            },
            ...widthElement(props),
            ...alignElement(props),
            ...errorElement(props),
          }),
          option: (provided: any, state: any) => ({
            ...provided,
            '&:hover': {
              background: 'var(--light-gray)',
            },
            background: state.isSelected ? 'var(--light-gray)' : 'var(--white)',
            color: 'var(--black)',
            ...widthElement(props),
            ...alignElement(props),
          }),
          singleValue: (provided: any, state: any) => ({
            ...provided,
          }),
        }}
      />
    </label>
  );
};

export default Select;
