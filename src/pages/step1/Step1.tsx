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

const test = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const options = [
  { title: 'Мужской', value: 'man' },
  { title: 'Женский', value: 'woman' },
];

export const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onBlur',
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
  const getSelected = (value?: string) => {
    if (value) {
      return options.find((item) => item.value === value);
    }
    return undefined;
  };
  let selectedOption = getSelected(data.sex);
  const handleSelect = (value: string) => {
    setData((prev) => {
      return { ...prev, sex: value };
    });
    selectedOption = getSelected(value);
  };
  const onHandleClick = () => {
    if (!errors.nickname && !errors.name && !errors.sername && data.sex) {
      dispatch(setState({ name: 'nickname', value: data.nickname }));
      dispatch(setState({ name: 'name', value: data.name }));
      dispatch(setState({ name: 'sername', value: data.sername }));
      dispatch(setState({ name: 'sex', value: data.sex }));
      dispatch(setStep(2));
      navigate('/Step2');
    }
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
          pattern={test}
          text="Никнейм"
          value={data.nickname}
          onChange={setInput}
          reg={register}
          errors={errors}
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
        />
        <MySelect
          mode="rows"
          placeholder="Не выбрано"
          options={options}
          selected={selectedOption || null}
          onChange={handleSelect}
        />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.back} onClick={() => navigate('/')}>
          Назад
        </button>
        <button className={styles.next} onClick={onHandleClick}>
          Далее
        </button>
      </div>
    </>
  );
};
