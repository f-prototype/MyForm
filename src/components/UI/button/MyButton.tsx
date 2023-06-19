import React from 'react';
import styles from './MyButton.module.scss';
import { IMyButtonProps } from '../../../interfacesTypes/IMyButtonProps';

export const MyButton: React.FC<IMyButtonProps> = ({
  id,
  func,
  className,
  text,
}) => {
  return (
    <button className={styles[className]} onClick={func} id={id}>
      {text}
    </button>
  );
};
