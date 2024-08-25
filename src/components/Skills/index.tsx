import React from 'react';
import { motion } from 'framer-motion';

import {
  textFadeFromTop,
  fadeFromLeft,
  textFadeFromLeft,
  fadeFromRight,
  textFadeFromRight,
} from '@/utils/motion/variants';
import { getInViewAnimationProps } from '@/utils/motion/utils';
import { skillCategories } from './data';

import styles from './Skills.module.scss';

export const Skills: React.FC = () => {
  return (
    <motion.section className={styles.skills} id="skills" data-section-id="1">
      <motion.h2 className={styles.title} {...getInViewAnimationProps(textFadeFromTop)}>
        Making apps with modern technologies
      </motion.h2>
      <div className={styles.categories}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.name} className={styles.category}>
            <motion.h2
              className={styles.name}
              {...getInViewAnimationProps(
                categoryIndex % 2 === 0 ? textFadeFromLeft : textFadeFromRight
              )}
            >
              {category.name}
            </motion.h2>
            <div className={styles.icons}>
              {category.skills.map((skill, index) => {
                const delay = index * 0.2;
                const variants =
                  categoryIndex % 2 === 0
                    ? fadeFromLeft({ delay })
                    : fadeFromRight({ delay });

                return (
                  <motion.div
                    key={skill.name}
                    className={styles.icon}
                    {...getInViewAnimationProps(variants, {
                      viewport: {
                        once: true,
                        amount: 0.4,
                      },
                    })}
                  >
                    <a href={skill.link} className={styles.link} target="_blank">
                      <img
                        src={skill.src}
                        width={skill.width || 72}
                        height={skill.height || 72}
                        alt={skill.name}
                      />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
