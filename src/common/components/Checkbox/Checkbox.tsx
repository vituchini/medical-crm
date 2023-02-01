import './Checkbox.css';

import React, { ChangeEvent, FunctionComponent } from 'react';

type CheckboxType = {
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FunctionComponent<CheckboxType> = (props) => {
  const indeterminateVal = props.indeterminate ? 'indeterminate' : '';
  return (
    <>
      <label className="label-checkbox">
        <input
          type="checkbox"
          className={'checkbox ' + indeterminateVal}
          disabled={props.disabled}
          checked={props.checked}
          name={props.name}
          id={props.name}
          onChange={(ev) => props.onChange && props.onChange(ev.target.checked, ev)}
        />
      </label>
    </>
  );
};

export default Checkbox;
