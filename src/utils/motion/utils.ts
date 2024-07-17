import { MotionProps, Transition, Variants } from 'framer-motion';
import { fadeIn } from './variants';

const getHiddenPosition = (
  value: number,
  direction: 'top' | 'right' | 'bottom' | 'left' = 'left'
) => {
  return {
    x: direction === 'left' ? -value : direction === 'right' ? value : 0,
    y: direction === 'top' ? -value : direction === 'bottom' ? value : 0,
  } as const;
};

export const fadeFrom = (
  direction: 'top' | 'right' | 'bottom' | 'left' = 'left',
  transition?: Transition
) => {
  return {
    hidden: {
      ...fadeIn.hidden,
      ...getHiddenPosition(100, direction),
    },
    visible: {
      ...fadeIn.visible,
      x: 0,
      y: 0,
      transition: {
        ...transition,
        duration: 0.5,
      },
    },
  } as Variants;
};

export const textFadeFrom = (
  direction: 'top' | 'right' | 'bottom' | 'left' = 'left',
  transition?: Transition
) => {
  return {
    ...fadeFrom(direction, transition),
    hidden: {
      ...fadeFrom(direction, transition).hidden,
      ...getHiddenPosition(50, direction),
    },
  } as Variants;
};

export const staggerContainer = (stagger: number, variants?: Variants) => {
  return {
    hidden: variants?.hidden,
    visible: {
      ...variants?.visible,
      transition: {
        staggerChildren: stagger,
      },
    },
  } as Variants;
};

export const getInViewAnimationProps = (variants: Variants, props?: MotionProps) => {
  return {
    variants: variants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: {
      once: true,
      amount: 0.8,
    },
    ...props,
  };
};
