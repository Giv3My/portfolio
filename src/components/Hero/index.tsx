import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { useTypingAnimation } from '@/hooks';
import { fadeFromLeft, fadeFromRight } from '@/utils/motion/variants';
import { getInViewAnimationProps } from '@/utils/motion/utils';
import { sequence } from './data';
import { Phase } from '@/hooks/useTypingAnimation/types';

import { StarsCanvas } from '@/components';
import blackhole from '@/assets/blackhole.webm';
import icons from '@/assets/mainIconsdark.svg';
import cvLink from '@/assets/docs/CV.pdf';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  const { typingText, phase } = useTypingAnimation(sequence);

  return (
    <section className={styles.hero} id="about" data-section-id="0">
      <motion.div
        className={styles.wrapper}
        {...getInViewAnimationProps(
          {},
          {
            viewport: {
              once: true,
              amount: 0.25,
            },
          }
        )}
      >
        <div className={styles.text}>
          <motion.div variants={fadeFromLeft({ delay: 0.5 })}>
            <h1>
              <span>Hello, I'm</span>
            </h1>
            <h1
              className={clsx(styles.typing, {
                [styles['cursor-blink']]: phase === Phase.Pausing,
              })}
            >
              {typingText}
            </h1>
          </motion.div>
          <motion.p variants={fadeFromLeft({ delay: 1 })}>
            I'm a Frontend Developer specializing in crafting responsive and visually
            appealing web applications. Browse my portfolio to see my latest projects and
            skills in action.
          </motion.p>
          <motion.a
            href={cvLink}
            className={styles['cv-button']}
            target="_blank"
            variants={fadeFromLeft({ delay: 1.5 })}
          >
            Open CV
          </motion.a>
        </div>
        <div className={styles.img}>
          <motion.img src={icons} alt="icons" variants={fadeFromRight({ delay: 1 })} />
        </div>
        <video autoPlay loop muted playsInline>
          <source src={blackhole} type="video/webm" />
        </video>
      </motion.div>
      <StarsCanvas />
    </section>
  );
};
