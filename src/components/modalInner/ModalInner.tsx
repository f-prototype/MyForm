import React from 'react';
import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import styles from './ModalInner.module.scss';
import { Link } from 'react-router-dom';

interface ModalInnerProps {
  status: string;
  className: string;
}
export const ModalInner: React.FC<ModalInnerProps> = ({
  status,
  className,
}) => {
  return (
    <div className={styles.modalInner}>
      <h3>{status === 'success' ? 'Форма успешно отправлена' : 'Ошибка'}</h3>
      <div
        className={
          status === 'success' ? styles.imgContainer : styles.imgContainerErr
        }
      >
        {status === 'success' ? (
          <BsCheckCircleFill className={styles.img} />
        ) : (
          <BsFillXCircleFill className={styles.imgErr} />
        )}
      </div>
      {status === 'success' ? (
        <Link to="/" className={styles.btn}>
          На главную
        </Link>
      ) : (
        <button
          className={styles.btn}
          onClick={(e) => {
            if (e.target instanceof Element) {
              e.target.parentElement?.parentElement?.classList.remove(
                className
              );
            }
          }}
        >
          Закрыть
        </button>
      )}
    </div>
  );
};
