import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { appRoutes } from '@/routes';

import styles from '../styles/Nav.module.scss';





const Nav: FC = () => {
  const { pathname } = useRouter();

  return (
    <>
      <nav className={styles.nav}>
        <section className={styles.image}>
          <div className={styles.indicator}></div>
        </section>
        <ul className={styles.list}>
          {appRoutes.map((item) => {
            return (
              <li key={item.id} className={pathname === item.path ? styles['list-item-selected'] : styles['list-item']}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <footer className={styles.footer}>
          ©Elley 2023
        </footer>
      </nav>
    </>
  );
};

export default Nav;