import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './MainLayout.module.scss';
import { IFormInput } from '../../interfacesTypes/IFormInput';

export const MainLayout: FC = () => {
  const { handleSubmit } = useForm<IFormInput>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {};
  return (
    <>
      <main className={styles.formContainer}>
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(onSubmit);
          }}
        >
          <Outlet />
        </form>
      </main>
    </>
  );
};
export default MainLayout;
