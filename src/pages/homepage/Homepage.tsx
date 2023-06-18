import React from 'react';
import styles from './homepage.module.scss';
import { Link } from '../../components/link/Link';
import { HForm } from '../../components/homepageForm/HForm';
import logo from '../../img/myFace.jpeg';

export const Homepage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a
            href="https://www.youtube.com/watch?v=wp4m6LfdzAU&ab_channel=Kripaman"
            target="_blank"
          >
            <img className={styles.img} src={logo} alt="my face" />
          </a>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.name}>Алексей Сазонов</div>
          <div className={styles.links}>
            <Link href="https://t.me/@prototype_4" text="Telegram" />
            <Link href="https://github.com/f-prototype" text="Github" />
            <Link
              href="https://disk.yandex.ru/i/EZpFio4a2taKKQ"
              text="Resume"
            />
          </div>
        </div>
      </header>
      <HForm />
    </div>
  );
};
