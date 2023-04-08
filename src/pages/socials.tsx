import Head from 'next/head';
import { Inter } from 'next/font/google';
import { FC } from 'react';
import Link from 'next/link';

import styles from '../styles/Socials.module.scss';

import Nav from '@/components/Nav';
import { socials } from '@/socials';

const inter = Inter({ subsets: ['latin'] });

const Socials: FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="elley, geometry dash, gd, gameplay, russian, gp maker, discord, telegram, youtube" />
        <meta property="description" content="💸💸💸Cool gameplay for your level in geometry dash for a reasonable price! 
        This page contains the social networks of Elley, have a nice chat!💬💬💬" />
        <meta name="Author" content="Савельев Егор Антонович" />
        <meta name="Copyright" content="Elley 2023" />
        <title>Elley | Geometry Dash GP Making 🔨</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Facebook */}
        <meta property="og:locale" content="eng_Eng" />
        <meta property="og:title" content="Elley | Geometry Dash GP Making 🔨" />
        <meta property="og:description" content="💸💸💸Cool gameplay for your level in geometry dash for a reasonable price! 
        This page contains the social networks of Elley, have a nice chat!💬💬💬" />
        <meta property="og:site_name" content="Elley | Geometry Dash GP Making 🔨" />
      </Head>

      <main className={inter.className + ' ' + styles.main}>
        <Nav />
        <section className={styles.tab}>
          <h1 className={styles.title}>Socials</h1>
          <p className={styles.description}>
            And of course I&rsquo;m on social media!
          </p>
          <p className={styles.description}>
            You can watch more of my gameplays on my youtube channel or contact me on discord or telegram about the part
          </p>
          <section className={styles.socials}>
            {socials.map((social) => {
              return (
                <Link href={social.path} title={social.title} key={social.id} className={styles.social + ' ' + styles[social.title]}></Link>
              );
            })}
          </section>
          <footer className={styles.prompt}>
            That&rsquo;s all for now, there will be something bigger soon!
          </footer>
        </section>
      </main>
    </>
  );
};

export default Socials;