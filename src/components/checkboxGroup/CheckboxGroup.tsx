import React from 'react';
import styles from './CheckboxGroup.module.scss';
import { IState } from '../../interfacesTypes/IState';

type State = React.Dispatch<React.SetStateAction<IState>>;

interface ICheckboxGroupProps {
  data: number[];
  setData: State;
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  data,
  setData,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData((prev) => {
      if (prev.checkbox.includes(+event.target.value)) {
        const res = prev.checkbox.filter(
          (item) => item !== +event.target.value
        );
        return {
          ...prev,
          checkbox: res,
        };
      } else {
        const res = [...prev.checkbox, +event.target.value];
        return { ...prev, checkbox: res };
      }
    });
  };

  return (
    <div className={styles.checkboxGroup}>
      <p>CheckboxGroup</p>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          value={1}
          checked={data.includes(1) ? true : false}
        />
        1
      </label>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          value={2}
          checked={data.includes(2) ? true : false}
        />
        2
      </label>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          value={3}
          checked={data.includes(3) ? true : false}
        />
        3
      </label>
    </div>
  );
};
