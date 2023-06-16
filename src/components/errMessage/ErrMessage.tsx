import React from 'react';
import styles from './ErrMessage.module.scss';
import { BiError } from 'react-icons/bi';

export const ErrMessage = () => {
  return (
    <div className={styles.errMessage}>
      {' '}
      <BiError color="c97676" />
      Невалидное поле
    </div>
  );
};
