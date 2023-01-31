import './RadioButton.css';

import { ChangeEvent } from 'react';

type RadioGroupItem = {
  value: string;
  label: string;
};

type RadioGroupProps<T> = {
  name: string;
  value: T;
  options: T[];
  convertToItem: (arg: T) => RadioGroupItem;
  onChange?: (arg: T, e: ChangeEvent<HTMLInputElement>) => void;
  direction?: 'row' | 'column';
};

function RadioButton<T>(props: RadioGroupProps<T>) {
  const value = props.convertToItem(props.value);
  return (
    <div className={`radioGroup ${props.direction === 'column' ? 'column' : ''}`}>
      {props.options.map((option: any) => {
        const item = props.convertToItem(option);
        return (
          <div className={`radioButton ${value.value === item.value ? 'checked' : ''}`} key={item.value}>
            <label htmlFor={`${props.name}_${item.value}`} className={`${value.value !== item.value ? 'pointer' : ''}`}>
              <input
                className={`radioStyled ${value.value !== item.value ? 'pointer' : ''}`}
                name={props.name}
                id={`${props.name}_${item.value}`}
                type="radio"
                value={item.value}
                checked={value.value === item.value}
                onChange={(e) => {
                  props.onChange && props.onChange(option, e);
                }}
              />
              <span>{item.label}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioButton;
