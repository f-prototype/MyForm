import React, { useState } from 'react';
import { MyInput } from '../../components/UI/input/MyInput';
import styles from './Step1.module.scss';
import { MySelect } from '../../components/UI/select/MySelect';
import { RootState } from '../../slices';
import { useSelector, useDispatch } from 'react-redux';
import { setState, setStep } from '../../slices/homeSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IFormInput } from '../../interfacesTypes/IFormInput';
import { OptionType } from '../../interfacesTypes/Option';
import { MyButtons } from '../../components/buttons/MyButtons';

export const Step1 = () => {
  const pattern = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
  const options: OptionType[] = [
    { title: 'Мужской', value: 'man' },
    { title: 'Женский', value: 'woman' },
  ];
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'all',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((store: RootState) => store.HomeP);
  const [data, setData] = useState({
    nickname: store.nickname,
    name: store.name,
    sername: store.sername,
    sex: store.sex,
  });
  const getSelected = (value?: string): OptionType | undefined => {
    if (value) {
      return options.find((item) => item.value === value);
    }
    return undefined;
  };
  let selectedOption = getSelected(data.sex);
  const handleSelect = (value: string): void => {
    setData((prev) => {
      return { ...prev, sex: value };
    });
    selectedOption = getSelected(value);
  };
  const onHandleClick = async () => {
    const result = await trigger(['nickname', 'sername', 'name']);
    if (result && data.sex) {
      dispatch(setState({ name: 'nickname', value: data.nickname }));
      dispatch(setState({ name: 'name', value: data.name }));
      dispatch(setState({ name: 'sername', value: data.sername }));
      dispatch(setState({ name: 'sex', value: data.sex }));
      dispatch(setStep(2));
      navigate('/Step2');
    }
  };
  const back = (): void => {
    dispatch(setState({ name: 'nickname', value: data.nickname }));
    dispatch(setState({ name: 'name', value: data.name }));
    dispatch(setState({ name: 'sername', value: data.sername }));
    dispatch(setState({ name: 'sex', value: data.sex }));
    dispatch(setStep(0));
    navigate('/');
  };
  const setInput = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setData((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  return (
    <>
      <div className={styles.container}>
        <MyInput
          name={'nickname'}
          required={true}
          pattern={pattern}
          text="Никнейм"
          value={data.nickname}
          onChange={setInput}
          reg={register}
          errors={errors}
          id="field-nickname"
        />
        <MyInput
          name={'name'}
          required={true}
          pattern={/^[а-яА-ЯёЁa-zA-Z]+$/}
          max={50}
          text="Имя"
          value={data.name}
          onChange={setInput}
          reg={register}
          errors={errors}
          id="field-name"
        />
        <MyInput
          name={'sername'}
          required={true}
          pattern={/^[а-яА-ЯёЁa-zA-Z]+$/}
          max={50}
          text="Фамилия"
          value={data.sername}
          onChange={setInput}
          reg={register}
          errors={errors}
          id="field-sername"
        />
        <MySelect
          mode="rows"
          placeholder="Не выбрано"
          options={options}
          selected={selectedOption || null}
          onChange={handleSelect}
        />
      </div>
      <MyButtons backF={back} nextF={onHandleClick} />
    </>
  );
};
