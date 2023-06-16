import React from 'react';
import styles from './RadioGroup.module.scss';
import { IState } from '../../interfacesTypes/IState';

type State = React.Dispatch<React.SetStateAction<IState>>;

interface IRadioGroupProps {
  data: number | null;
  setData: State;
}

export const RadioGroup: React.FC<IRadioGroupProps> = ({ data, setData }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData((prev) => {
      return { ...prev, radio: +event.target.value };
    });
  };
  return (
    <div className={styles.RadioGroup}>
      <p>RadioGroup</p>
      <label>
        <input
          type="radio"
          onChange={onChange}
          value={1}
          name="rad"
          checked={data === 1 ? true : false}
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
        />
        3
      </label>
    </div>
  );
};
