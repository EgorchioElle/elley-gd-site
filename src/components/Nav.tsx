import React, { FC } from 'react';
import Link from 'next/link';

import styles from '../styles/Nav.module.scss';

export enum NavTypes {
  transparent = 'transparent',
  deafult = 'default'
}

interface NavProps {
  type?: NavTypes
}

const Nav: FC<NavProps> = ({type = NavTypes.deafult}) => {
  return (
    <>
        <nav className={styles.nav + ' ' + styles[`nav-${type}`]}>
          <h1 className={styles['nav-logo']}>
            <Link href="/">Elley</Link>
          </h1>
          <ul className={styles['nav-menu']}>
            <li className={styles[`nav-menu__item_${type}`]}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles[`nav-menu__item_${type}`]}>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default Nav;