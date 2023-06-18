import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../slices';
import styles from './StepLayout.module.scss';

export const StepLayout = () => {
  const step = useSelector((state: RootState) => state.HomeP.step);

  return (
    <div className={styles.container}>
      <div className={`${styles.progressBar} ${styles['step' + step]}`}>
        <div className={styles.stepDot}></div>
        <div className={styles.stepDot}></div>
        <div className={styles.stepDot}></div>
      </div>
      <div className={`${styles.test} ${styles['stepS' + step]}`}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <Outlet />
    </div>
  );
};
