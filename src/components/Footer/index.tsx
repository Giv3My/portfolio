import React from 'react';

import { getCurrentYear } from '@/utils/getCurrentYear';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p>{getCurrentYear()}</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};
