import React from 'react';
import styles from './homepage.module.scss';
import { Link } from '../../components/link/Link';
import { HForm } from '../../components/homepageForm/HForm';

export const Homepage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <div className={styles.userInfo}>
          <div className={styles.name}>Алексей Сазонов</div>
          <div className={styles.links}>
            <Link href="/" text="Telegram" />
            <Link href="/" text="Github" />
            <Link href="/" text="Resume" />
          </div>
        </div>
      </header>
      <HForm />
    </div>
  );
};
