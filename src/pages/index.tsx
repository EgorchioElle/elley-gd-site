import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';

import styles from '../styles/Index.module.scss';

const Intro: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/about');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="elley, geometry dash, gd, gameplay, russian, gp maker, discord, telegram, youtube" />
        <meta property="description" content="💸💸💸Cool gameplay for your level in geometry dash for a reasonable price!💸💸💸" />
        <meta name="Author" content="Савельев Егор Антонович" />
        <meta name="Copyright" content="Elley 2023" />
        <title>Elley | Geometry Dash GP Making 🔨</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Facebook */}
        <meta property="og:locale" content="eng_Eng" />
        <meta property="og:title" content="Elley | Geometry Dash GP Making 🔨" />
        <meta property="og:description" content="💸💸💸Cool gameplay for your level in geometry dash for a reasonable price!💸💸💸" />
        <meta property="og:site_name" content="Elley | Geometry Dash GP Making 🔨" />
      </Head>
      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles['fading-lines']}></div>
        </section>
      </main>
    </>
  );
};

export default Intro;
