import Head from 'next/head';
import { Inter } from 'next/font/google';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '@/components/Nav';

import styles from '../styles/Works.module.scss';
import lav from '../images/lav.png';
import wrath from '../images/wrath.png';
import perfect10 from '../images/perfect10.png';
import lich from '../images/lich.png';


const inter = Inter({ subsets: ['latin'] });

const Works: FC = () => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="elley, geometry dash, gd, gameplay, russian, gp maker, discord, telegram, youtube" />
        <meta property="description" content="💸💸💸Cool gameplay for your level in geometry dash for a reasonable price! 
        This page contains some of Elley's best work, you might like it!🔥🔥🔥" />
        <meta name="Author" content="Савельев Егор Антонович" />
        <meta name="Copyright" content="Elley 2023" />
        <title>Elley | Geometry Dash GP Making 🔨</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Facebook */}
        <meta property="og:locale" content="eng_Eng" />
        <meta property="og:title" content="Elley | Geometry Dash GP Making 🔨" />
        <meta property="og:description" content="💸💸💸Cool gameplay for your level in geometry dash for a reasonable price! 
        This page contains some of Elley's best work, you might like it!🔥🔥🔥" />
        <meta property="og:site_name" content="Elley | Geometry Dash GP Making 🔨" />
      </Head>

      <main className={inter.className + ' ' + styles.main}>
        <Nav />
        <section className={styles.tab}>
          <h1 className={styles.title}>Works</h1>
          <section className={styles.works}>
            <Link href="https://youtu.be/yKq2ysBk-D0" target="_blank">
              <Image className={styles.work} src={wrath} alt={'Wrath'} />
            </Link>

            <Link href="https://youtu.be/Jt2HbU4hqO4" target="_blank">
              <Image className={styles.work} src={lich} alt={'Lich'} />
            </Link>

            <Link href="https://youtu.be/Gh-3fxtZCK0" target="_blank">
              <Image className={styles.work} src={perfect10} alt={'Perfect 10'} />
            </Link>

            <Link href="https://youtu.be/TRY9zpj_fZM" target="_blank">
              <Image className={styles.work} src={lav} alt={'Like A Villain'} />
            </Link>
          </section>
          <footer className={styles.prompt}>
            if my work interests you, click on the link &quot;socials&quot; to contact me!
          </footer>
        </section>
      </main>
    </>
  );
};

export default Works;