import React, { ChangeEvent } from 'react';

import style from './Checkbox.module.css';

type CheckboxProps = {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  rightText?: string;
  leftText?: string;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = (props: CheckboxProps) => {
  return (
    <label className={`${style.labelCheckbox} ${props.disabled ? style.disabled : ''}`}>
      {props.leftText && <span className={`${style.text} ${props.error ? style.error : ''}`}>{props.leftText}</span>}
      <input
        type="checkbox"
        className={`
        ${style.checkbox} 
        ${props.indeterminate ? style.indeterminate : ''} 
        ${props.error ? style.error : ''} 
        ${props.disabled ? style.disabled : ''}`}
        disabled={props.disabled}
        checked={props.checked}
        name={props.name}
        onChange={(ev) => props.onChange && props.onChange(ev.target.checked, ev)}
      />
      {props.rightText && <span className={`${style.text} ${props.error ? style.error : ''}`}>{props.rightText}</span>}
    </label>
  );
};

export default Checkbox;
