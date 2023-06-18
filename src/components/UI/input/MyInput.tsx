import React from 'react';
import styles from './MyInput.module.scss';
import { ErrMessage } from '../../errMessage/ErrMessage';
import { IMyInputProps } from '../../../interfacesTypes/IMyInputProps';

export const MyInput: React.FC<IMyInputProps> = ({
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
  id,
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
          id={id}
        />
        {children}
      </div>

      {(errors[name] || value === '') && <ErrMessage />}
    </label>
  );
};
