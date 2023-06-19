import React, { useState } from 'react';
import { AdvantagesContainer } from '../../components/advantages/AdvantagesContainer';
import { useNavigate } from 'react-router-dom';
import { CheckboxGroup } from '../../components/checkboxGroup/CheckboxGroup';
import { RadioGroup } from '../../components/radioGroup/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../slices';
import { IState } from '../../interfacesTypes/IState';
import { setRadio, setState, setStep } from '../../slices/homeSlice';
import { MyButtons } from '../../components/buttons/MyButtons';

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
    if (
      data.advantages.length > 0 &&
      isValid &&
      data.checkbox.length &&
      data.radio
    ) {
      dispatch(setState({ name: 'advantages', value: [...data.advantages] }));
      dispatch(setState({ name: 'checkbox', value: data.checkbox }));
      dispatch(setRadio(data.radio));
      dispatch(setStep(3));
      navigate('/Step3');
    }
  };
  const back = (): void => {
    dispatch(setState({ name: 'advantages', value: [...data.advantages] }));
    dispatch(setState({ name: 'checkbox', value: data.checkbox }));
    dispatch(setRadio(data.radio));
    dispatch(setStep(1));
    navigate('/Step');
  };
  return (
    <>
      <AdvantagesContainer data={data.advantages} setData={setData} />
      <CheckboxGroup data={data.checkbox} setData={setData} />
      <RadioGroup data={data.radio} setData={setData} />
      <MyButtons backF={back} nextF={validation} />
    </>
  );
};
