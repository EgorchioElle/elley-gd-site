import React, { FC } from 'react';

import styles from '../styles/Footer.module.scss';

const Footer: FC = () => {
  return (
    <>
        <footer className={styles.footer}>
            <h2 className={styles['footer-title']}>©Elley 2023</h2>
        </footer>
    </>
  );
};

export default Footer;