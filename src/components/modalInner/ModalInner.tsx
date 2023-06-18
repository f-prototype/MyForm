import React from 'react';
import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import styles from './ModalInner.module.scss';
import { Link } from 'react-router-dom';
import { ModalInnerProps } from '../../interfacesTypes/ModalInnerProps';

export const ModalInner: React.FC<ModalInnerProps> = ({
  status,
  className,
}) => {
  if (status === 'success') {
    return (
      <div className={styles.modalInner}>
        <h3>Форма успешно отправлена</h3>
        <div className={styles.imgContainer}>
          <BsCheckCircleFill className={styles.img} />
        </div>

        <Link to="/" className={styles.btn} id="button-to-main">
          На главную
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.modalInner}>
        <h3>Ошибка</h3>
        <div className={styles.imgContainerErr}>
          <BsFillXCircleFill className={styles.imgErr} />
        </div>

        <button
          className={styles.btn}
          onClick={(e) => {
            if (e.target instanceof Element) {
              e.target.parentElement?.parentElement?.classList.remove(
                className
              );
            }
          }}
          id="button-close"
        >
          Закрыть
        </button>
      </div>
    );
  }
};
