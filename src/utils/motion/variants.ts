import { Transition, Variants } from 'framer-motion';
import { fadeFrom, textFadeFrom } from './utils';

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
} as Variants;

export const fadeFromLeft = (transition?: Transition) => fadeFrom('left', transition);

export const fadeFromRight = (transition?: Transition) => fadeFrom('right', transition);

export const textFadeFromTop = textFadeFrom('top');

export const zoomIn = (initialScale: number, transition?: Transition) => {
  return {
    hidden: {
      ...fadeIn.hidden,
      scale: initialScale,
    },
    visible: {
      ...fadeIn.visible,
      scale: 1,
      transition: {
        duration: 0.5,
        ...transition,
      },
    },
  } as Variants;
};
