import React from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { fadeIn, zoomIn } from '@/utils/motion/variants';
import { staggerContainer } from '@/utils/motion/utils';
import { menuItems, socials } from '../data';
import type { NavbarProps } from '..';

import styles from './MobileMenu.module.scss';

interface MobileMenu extends NavbarProps {}

export const MobileMenu: React.FC<MobileMenu> = ({ activeMenuItem, isScrollingDown }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (isScrollingDown) {
      setIsMenuOpen(false);
    }
  }, [isScrollingDown]);

  return (
    <nav
      className={clsx(styles['mobile-menu'], {
        [styles.active]: isMenuOpen,
      })}
    >
      <div className={styles['menu-icon']} onClick={handleMenuClick}>
        <span className={styles['middle-line']} />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.menu}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer(0.2, fadeIn)}
          >
            <div className={styles.items}>
              {menuItems.map((menuItem, index) => (
                <motion.a
                  key={menuItem}
                  href={`#${menuItem}`}
                  className={clsx(styles.item, {
                    [styles.active]: activeMenuItem === index,
                  })}
                  variants={zoomIn(0, {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  })}
                >
                  {menuItem}
                </motion.a>
              ))}
            </div>
            <motion.div className={styles.socials} variants={fadeIn}>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className={styles.link}
                  target="_blank"
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
