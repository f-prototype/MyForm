import React, { useRef, useState } from 'react';
import styles from './Step3.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../slices';
import { ErrMessage } from '../../components/errMessage/ErrMessage';
import { setState } from '../../slices/homeSlice';
import { ModalInner } from '../../components/modalInner/ModalInner';
import { IResponseForm } from '../../interfacesTypes/IResponseForm';
import { MyButton } from '../../components/UI/button/MyButton';

export const Step3 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const store = useSelector((store: RootState) => store.HomeP);
  const [data, setData] = useState(store.about);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newStr = e.target.value.replace(/\s/g, '');
    if (newStr.length <= 200) {
      setData(e.target.value);
    }
    setCount(newStr.length);
  };
  const onSubm = async () => {
    if (data.length === 0) return;
    dispatch(setState({ name: 'about', value: data }));
    const result = JSON.parse(JSON.stringify(store));
    delete result.step;
    const response = await fetch(
      'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(result),
      }
    );
    const res: IResponseForm = await response.json();
    setStatus(res.status);
    ref.current?.classList.add(styles.open);
  };
  const back = (): void => {
    dispatch(setState({ name: 'about', value: data }));
    navigate('/Step2');
  };
  return (
    <>
      <div className={styles.container}>
        <label>
          <p>О себе</p>
          <textarea
            name="story"
            className={styles.area}
            placeholder="It was a dark and stormy night..."
            value={data}
            onChange={onChange}
            id="field-about"
          />
        </label>
        <span className={styles.counter}>{count}/200</span>
        {data === '' && <ErrMessage />}
      </div>
      <div className={styles.btnContainer}>
        <MyButton id="button-back" func={back} className="back" text="Назад" />
        <MyButton
          id="button-send"
          func={onSubm}
          className="next"
          text="Отправить"
        />
      </div>
      <div
        className={styles.modal}
        onClick={(event) => {
          if (event.target instanceof Element) {
            event.target.classList.remove(styles.open);
          }
        }}
        ref={ref}
      >
        <ModalInner status={status} className={styles.open} />
      </div>
    </>
  );
};
