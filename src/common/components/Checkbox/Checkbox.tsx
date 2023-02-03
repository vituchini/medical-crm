import React, { ChangeEvent, FunctionComponent } from 'react';

import style from './Checkbox.module.css';

type CheckboxProps = {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = (props: CheckboxProps) => {
  'checkbox ' + props.indeterminate ? 'indeterminate' : '';
  return (
    <label className={style.labelCheckbox}>
      <input
        type="checkbox"
        className={`${style.checkbox} ${props.indeterminate ? style.indeterminate : ''}`}
        disabled={props.disabled}
        checked={props.checked}
        name={props.name}
        onChange={(ev) => props.onChange && props.onChange(ev.target.checked, ev)}
      />
    </label>
  );
};

export default Checkbox;
