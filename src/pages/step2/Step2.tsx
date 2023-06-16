import React, { useState } from 'react';
import styles from './Step2.module.scss';
import { AdvantagesContainer } from '../../components/advantages/AdvantagesContainer';
import { useNavigate } from 'react-router-dom';
import { CheckboxGroup } from '../../components/checkboxGroup/CheckboxGroup';
import { RadioGroup } from '../../components/radioGroup/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../slices';
import { IState } from '../../interfacesTypes/IState';
import { setRadio, setState, setStep } from '../../slices/homeSlice';

export const Step2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store.HomeP);
  const [data, setData] = useState<IState>({
    advantages: store.advantages,
    checkbox: store.checkbox,
    radio: store.radio,
  });
  const validation = () => {
    let isValid = true;
    for (let elem of data.advantages) {
      if (elem === '') isValid = false;
    }
    if (data.advantages.length > 0 && isValid) {
      dispatch(setState({ name: 'advantages', value: [...data.advantages] }));
      dispatch(setState({ name: 'checkbox', value: data.checkbox }));
      dispatch(setRadio(data.radio));
      dispatch(setStep(3));
      navigate('/Step3');
    }
  };
  return (
    <>
      <AdvantagesContainer data={data.advantages} setData={setData} />
      <CheckboxGroup data={data.checkbox} setData={setData} />
      <RadioGroup data={data.radio} setData={setData} />
      <div className={styles.btnContainer}>
        <button className={styles.back} onClick={() => navigate('/Step')}>
          Назад
        </button>
        <button className={styles.next} onClick={validation}>
          Далее
        </button>
      </div>
    </>
  );
};
