import React from 'react';

import { Phase } from './types';

const TYPING_MS = 100;
const DELETING_MS = 50;
const PAUSING_MS = 1500;

export const useTypingAnimation = (sequence: string[]) => {
  const [sequenceIndex, setSequenceIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [phase, setPhase] = React.useState(Phase.Typing);

  React.useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        if (sequence[sequenceIndex] === currentText) {
          setPhase(Phase.Pausing);
          return;
        }

        const intervalId = setInterval(() => {
          setCurrentText((prevText) =>
            sequence[sequenceIndex].slice(0, prevText.length + 1)
          );
        }, TYPING_MS);

        return () => clearInterval(intervalId);
      }
      case Phase.Deleting: {
        if (!currentText.length) {
          setSequenceIndex((prevIndex) => (prevIndex + 1) % sequence.length);
          setPhase(Phase.Typing);
        }

        const intervalId = setInterval(() => {
          setCurrentText((prevText) =>
            sequence[sequenceIndex].slice(0, prevText.length - 1)
          );
        }, DELETING_MS);

        return () => clearInterval(intervalId);
      }
      case Phase.Pausing: {
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSING_MS);

        return () => clearTimeout(timeout);
      }
      default:
        return;
    }
  }, [currentText, phase, sequenceIndex]);

  return { typingText: currentText, phase } as const;
};
