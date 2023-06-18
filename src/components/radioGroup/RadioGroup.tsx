import React from 'react';
import styles from './RadioGroup.module.scss';
import { IRadioGroupProps } from '../../interfacesTypes/IRadioGroupProps';
import { ErrMessage } from '../errMessage/ErrMessage';

export const RadioGroup: React.FC<IRadioGroupProps> = ({ data, setData }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData((prev) => {
      return { ...prev, radio: +event.target.value };
    });
  };
  return (
    <>
      <div className={styles.RadioGroup}>
        <p>RadioGroup</p>
        <label>
          <input
            type="radio"
            onChange={onChange}
            value={1}
            name="rad"
            checked={data === 1 ? true : false}
            id="field-radio-group-option-1"
          />
          1
        </label>
        <label>
          <input
            type="radio"
            onChange={onChange}
            value={2}
            name="rad"
            checked={data === 2 ? true : false}
            id="field-radio-group-option-2"
          />
          2
        </label>
        <label>
          <input
            type="radio"
            onChange={onChange}
            value={3}
            name="rad"
            checked={data === 3 ? true : false}
            id="field-radio-group-option-3"
          />
          3
        </label>
      </div>
      {!data && <ErrMessage />}
    </>
  );
};
