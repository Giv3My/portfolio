import React from 'react';
import clsx from 'clsx';

import { useActiveMenuItem } from '@/hooks';

import { Navbar, NavigationDots } from '@/components';
import styles from './Header.module.scss';

export const Header = () => {
  const [lastScrollY, setLastScrollY] = React.useState(window.scrollY);
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);

  const headerRef = React.useRef<HTMLElement | null>(null);

  const activeMenuItem = useActiveMenuItem(headerRef, lastScrollY);

  React.useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScroll = () => {
    setLastScrollY(window.scrollY);
    setIsScrollingDown(window.scrollY > lastScrollY);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(styles.header, {
          [styles.hidden]: isScrollingDown,
        })}
      >
        <Navbar activeMenuItem={activeMenuItem} isScrollingDown={isScrollingDown} />
      </header>
      <NavigationDots activeNavItem={activeMenuItem} />
    </>
  );
};
