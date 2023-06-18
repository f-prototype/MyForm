import React from 'react';
import styles from './Advantages.module.scss';
import { MyInput } from '../UI/input/MyInput';
import { useForm } from 'react-hook-form';
import { IFormInput } from '../../interfacesTypes/IFormInput';
import { MdDelete } from 'react-icons/md';
import { IAdvantagesProps } from '../../interfacesTypes/IAdvantagesProps';

export const AdvantagesContainer: React.FC<IAdvantagesProps> = ({
  data,
  setData,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'all',
  });
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        const indexed = index;
        return (
          <div className={styles.row} key={'advantages' + index}>
            <MyInput
              reg={register}
              required={true}
              name={'advantages' + index}
              pattern={/^[а-яА-ЯёЁa-zA-Z0-9-_.]+$/}
              errors={errors}
              text={index === 0 ? 'Навыки' : undefined}
              value={item}
              onChange={(name = '', e: React.ChangeEvent<HTMLInputElement>) =>
                setData((prev) => {
                  let res = [...prev.advantages];
                  res[index] = e.target.value;
                  return { ...prev, advantages: res };
                })
              }
              id={`field-advantages-${index + 1}`}
            >
              <MdDelete
                className={styles.img}
                onClick={() => {
                  if (data.length === 1) return;
                  const res = data.filter((elem, index) => indexed !== index);
                  setData((prev) => {
                    return { ...prev, advantages: res };
                  });
                }}
                id={`button-remove-${index + 1}`}
              />
            </MyInput>
          </div>
        );
      })}
      <button
        className={styles.btnAdd}
        onClick={() => {
          setData((prev) => {
            const res = [...data, ''];
            return { ...prev, advantages: res };
          });
        }}
        id="button-add"
      >
        +
      </button>
    </div>
  );
};
