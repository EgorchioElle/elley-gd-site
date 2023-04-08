
import { Inter } from 'next/font/google';
import { FC } from 'react';

import styles from '../styles/Error.module.scss';

const inter = Inter({ subsets: ['latin'] });

const Error: FC = () => {

  return (
    <>
      <main className={inter.className + ' ' + styles.main}>

      </main>
    </>
  );
};

export default Error;