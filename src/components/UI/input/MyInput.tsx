import React from 'react';
import styles from './MyInput.module.scss';
import { ErrMessage } from '../../errMessage/ErrMessage';

interface IMtInputProps {
  name: formNameTypes;
  pattern: RegExp;
  required: boolean;
  max?: number;
  text?: string;
  value?: string;
  onChange?: (name: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  reg: any;
  errors: {
    [key: string]: any;
  };
  children?: any;
}

type formNameTypes =
  | 'number'
  | 'email'
  | 'nickname'
  | 'name'
  | 'sername'
  | 'sex'
  | 'advantages'
  | string;

export const MyInput: React.FC<IMtInputProps> = ({
  name,
  pattern,
  required,
  max,
  text,
  value,
  onChange,
  reg,
  errors,
  children,
}) => {
  return (
    <label className={styles.container}>
      {text && <p>{text}</p>}
      <div>
        <input
          {...reg(name, {
            pattern: pattern,
            required: required,
          })}
          value={value || ''}
          onChange={
            onChange !== undefined ? (e) => onChange(name, e) : undefined
          }
          className={styles.input}
          maxLength={max}
        />
        {children}
      </div>

      {(errors[name] || value === '') && <ErrMessage />}
    </label>
  );
};
