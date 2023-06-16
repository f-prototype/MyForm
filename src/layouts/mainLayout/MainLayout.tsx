import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './MainLayout.module.scss';
import { IFormInput } from '../../interfacesTypes/IFormInput';

export const MainLayout: FC = () => {
  const { handleSubmit } = useForm<IFormInput>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // dispatch(setState({ name: 'email', value: data.email }));
    // dispatch(setState({ name: 'number', value: data.phone.toString() }));
  };
  return (
    <>
      <main className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Outlet />
        </form>
      </main>
    </>
  );
};
export default MainLayout;
