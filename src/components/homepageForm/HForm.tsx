import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import styles from './HForm.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setState, setStep } from '../../slices/homeSlice';
import type { RootState } from '../../slices';
import { useNavigate } from 'react-router-dom';
import { IFormInput } from '../../interfacesTypes/IFormInput';
import { ErrMessage } from '../errMessage/ErrMessage';
import { MyButton } from '../UI/button/MyButton';

export const HForm: React.FC = () => {
  const store = useSelector((store: RootState) => store.HomeP);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'all',
  });
  const [data, setData] = useState({
    num: store.phone,
    mail: store.email,
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData((prev) => {
      if (event.target.name === 'phone') {
        return { ...prev, num: event.target.value };
      } else {
        return { ...prev, mail: event.target.value };
      }
    });
  };
  const onHandleClick = async () => {
    await trigger(['phone', 'email']);
    if (!errors.email && !errors.phone && data.num) {
      dispatch(setState({ name: 'email', value: data.mail }));
      dispatch(setState({ name: 'phone', value: data.num.toString() }));
      dispatch(setStep(1));
      navigate('/Step');
    }
  };
  return (
    <>
      <label>
        <p>Номер телефона</p>
        <InputMask
          mask="+7 (999) 999-99-99"
          alwaysShowMask={true}
          maskChar={'9'}
          {...register('phone', { required: true })}
          value={data.num}
          onChange={onChange}
        />
        {(errors.phone || data.num === '') && <ErrMessage />}
      </label>
      <label>
        <p>Email</p>
        <input
          {...register('email', {
            pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            required: true,
            minLength: 1,
          })}
          value={data.mail}
          onChange={onChange}
        />
        {(errors.email || data.mail === '') && <ErrMessage />}
      </label>
      <div className={styles.btnContainer}>
        <MyButton
          className="next"
          func={onHandleClick}
          id="button-start"
          text="Начать"
        />
      </div>
    </>
  );
};
