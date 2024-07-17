import React from 'react';

import { useMenuAnimation } from '@/hooks';
import { menuItems, socials } from './data';

import { MobileMenu } from './MobileMenu';
import rocket from '@/assets/rocket.png';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  activeMenuItem: number;
  isScrollingDown: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeMenuItem, isScrollingDown }) => {
  const { backgroundWidth, offset, moveBackground, setBackgroundOnActiveTab } =
    useMenuAnimation(activeMenuItem, styles);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#">
          <img src={rocket} alt="rocket" />
        </a>
      </div>
      <div className={styles.menu}>
        {menuItems.map((menuItem, index) => (
          <a
            key={menuItem}
            href={`#${menuItem}`}
            className={styles['menu-item']}
            onMouseOver={moveBackground(index)}
            onMouseLeave={setBackgroundOnActiveTab}
          >
            {menuItem}
          </a>
        ))}
        <div
          className={styles.background}
          style={{
            width: `${backgroundWidth}px`,
            transform: `translateX(${offset}px)`,
          }}
        />
      </div>
      <div className={styles.socials}>
        {socials.map((social) => (
          <a key={social.name} href={social.link} className={styles.link} target="_blank">
            <img src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>
      <MobileMenu activeMenuItem={activeMenuItem} isScrollingDown={isScrollingDown} />
    </nav>
  );
};
