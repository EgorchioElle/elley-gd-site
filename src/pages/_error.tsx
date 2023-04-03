
import { Inter } from 'next/font/google';
import { FC } from 'react';
import Image from 'next/image';

import styles from '../styles/Error.module.scss';
import errorIcon from '../images/svg/error.svg';

import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

const Error: FC = () => {

  return (
    <>
    <Nav />
      <main className={inter.className + ' ' + styles.main}>
          <section className={styles.content}>
              <Image className={styles.image} src={errorIcon} alt="error" />
              <h2 className={styles.alert}>Кажется тебя настигла ошибка, но ты всегда можешь вернуться обратно!</h2>
          </section>
      </main>
    </>
  );
};

export default Error;