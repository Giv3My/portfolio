import React from 'react';
import clsx from 'clsx';

import { menuItems } from '../Navbar/data';

import styles from './NavigationDots.module.scss';

interface NavigationDotsProps {
  activeNavItem: number;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({ activeNavItem }) => {
  return (
    <div className={styles['nav-dots']}>
      {menuItems.map((menuItem, index) => (
        <a
          key={menuItem}
          href={`#${menuItem}`}
          className={clsx(styles.dot, {
            [styles.active]: activeNavItem === index,
          })}
        />
      ))}
    </div>
  );
};
