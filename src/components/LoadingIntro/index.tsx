import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { getRandomInRange } from '@/utils';

import rocket from '@/assets/rocket.png';
import styles from './LoadingIntro.module.scss';

export const LoadingIntro: React.FC<{
  loading: boolean;
}> = ({ loading }) => {
  React.useEffect(() => {
    if (!loading) {
      stopStarsAnimation();
    }
  }, [loading]);

  const getStarProperties = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const h = getRandomInRange(80, 100);
    const duration = getRandomInRange(0.5, 1.5);
    const delay = getRandomInRange(0.1, 0.5);

    return {
      left: `${x}px`,
      height: `${h}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    } as React.CSSProperties;
  };

  const stopStarsAnimation = () => {
    const stars = document.querySelectorAll(`.${styles.star}`);

    if (!stars) {
      return;
    }

    stars.forEach((star) => {
      const computedStyle = window.getComputedStyle(star);
      const { transform, top, left } = computedStyle;

      (star as HTMLElement).style.transform = transform;
      (star as HTMLElement).style.top = top;
      (star as HTMLElement).style.left = left;
      (
        star as HTMLElement
      ).style.animation = `${styles['stars-animation-end']} 1s linear forwards`;
    });
  };

  return (
    <div className={styles.scene}>
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{
              animation: 'none',
              y: -1000,
            }}
            transition={{
              duration: 1,
            }}
            className={styles.rocket}
          >
            <img src={rocket} alt="rocket" />
          </motion.div>
        )}
      </AnimatePresence>
      {[...Array(50)].map((_, index) => {
        return <i key={index} className={styles.star} style={getStarProperties()} />;
      })}
    </div>
  );
};
