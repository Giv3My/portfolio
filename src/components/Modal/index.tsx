import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { zoomIn } from '@/utils/motion/variants';

import { ProjectInfo } from './ProjectInfo';
import styles from './Modal.module.scss';

interface ModalProps {
  isVisible: boolean;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isVisible }, ref) => {
    return (
      <>
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={zoomIn(0.98, {
              duration: 0.2,
            })}
            className={clsx(styles.modal, {
              [styles.active]: isVisible,
            })}
          >
            <div ref={ref}>
              <ProjectInfo />
            </div>
          </motion.div>
        )}
      </>
    );
  }
);
