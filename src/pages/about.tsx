import Head from 'next/head';
import { Inter } from 'next/font/google';
import { FC } from 'react';

import Nav from '@/components/Nav';

import styles from '../styles/About.module.scss';


const inter = Inter({ subsets: ['latin'] });

const Home: FC = () => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="elley, geometry dash, gd, gameplay, russian, gp maker, discord, telegram, youtube" />
        <meta property="description" content="💸💸💸Cool gameplay for your level in geometry dash for a reasonable price! 
        This page contains information about Elley!🏷️🏷️🏷️" />
        <meta name="Author" content="Савельев Егор Антонович" />
        <meta name="Copyright" content="Elley 2023" />
        <title>Elley | Geometry Dash GP Making 🔨</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Facebook */}
        <meta property="og:locale" content="eng_Eng" />
        <meta property="og:title" content="Elley | Geometry Dash GP Making 🔨" />
        <meta property="og:description" content="💸💸💸Cool gameplay for your level in geometry dash for a reasonable price! 
        This page contains information about Elley!🏷️🏷️🏷️" />
        <meta property="og:site_name" content="Elley | Geometry Dash GP Making 🔨" />
      </Head>

      <main className={inter.className + ' ' + styles.main}>
        <Nav />
        <section className={styles.tab}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.description}>
            I&rsquo;m glad to see you! I&rsquo;m Egor Savelyev, 15 year old Russian athlete, programmer and geometry dash player
          </p>
          <p className={styles.description}>
            I always see things through to the end if I really like it, and I do it quickly
          </p>
          <p className={styles.description}>
            Specifically on this site you can see my activities in GD
          </p>
          <footer className={styles.prompt}>
            Click on the link &quot;works&quot; to see my best works in geometry dash!
          </footer>
        </section>
      </main>
    </>
  );
};

export default Home;