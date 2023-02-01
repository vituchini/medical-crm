import { ChangeEvent } from 'react';
import styles from './RadioButton.module.css';

type RadioGroupOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  name: string;
  value: RadioGroupOption;
  options: RadioGroupOption[];
  onChange?: (arg: RadioGroupOption, e: ChangeEvent<HTMLInputElement>) => void;
  column?: boolean;
};

const RadioButton = ({ onChange, value, column, options, name }: RadioGroupProps) => {
  return (
    <div className={`${styles.radioGroup} ${column ? styles.column : ''}`}>
      {options.map((option: RadioGroupOption) => {
        return (
          <div
            className={`${styles.radioButton} ${option.value === value.value ? styles.checked : ''}`}
            key={option.value}
          >
            <label
              htmlFor={`${name}_${option.value}`}
              className={`${value.value !== option.value ? styles.pointer : ''}`}
            >
              <input
                className={`${styles.radioStyled} ${value.value !== option.value ? styles.pointer : ''}`}
                name={name}
                id={`${name}_${option.value}`}
                type="radio"
                value={option.value}
                checked={value.value === option.value}
                onChange={(e) => onChange && onChange(option, e)}
              />
              <span>{option.label}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
