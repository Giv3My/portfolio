import React from 'react';
import { motion } from 'framer-motion';

import { textFadeFromTop, fadeFromLeft } from '@/utils/motion/variants';
import { getInViewAnimationProps, staggerContainer } from '@/utils/motion/utils';
import { skills } from './data';

import styles from './Skills.module.scss';

export const Skills: React.FC = () => {
  return (
    <motion.section
      className={styles.skills}
      id="skills"
      data-section-id="1"
      {...getInViewAnimationProps(staggerContainer(0.2), {
        viewport: {
          once: true,
          amount: 0.35,
        },
      })}
    >
      <motion.h2 className={styles.title} {...getInViewAnimationProps(textFadeFromTop)}>
        Making apps with modern technologies
      </motion.h2>
      <div className={styles.icons}>
        {skills.map((skill) => (
          <motion.div key={skill.name} className={styles.icon} variants={fadeFromLeft()}>
            <img
              src={skill.src}
              width={skill.width || 72}
              height={skill.height || 72}
              alt={skill.name}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
