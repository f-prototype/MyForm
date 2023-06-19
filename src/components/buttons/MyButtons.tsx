import React from 'react';
import styles from './MyButtons.module.scss';
import { IMyButtonsProps } from '../../interfacesTypes/IMyButtonsProps';

export const MyButtons: React.FC<IMyButtonsProps> = ({ backF, nextF }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.back} onClick={backF} id="button-back">
        Назад
      </button>
      <button className={styles.next} onClick={nextF} id="button-next">
        Далее
      </button>
    </div>
  );
};
