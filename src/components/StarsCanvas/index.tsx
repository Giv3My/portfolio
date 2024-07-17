import React from 'react';
import { Canvas } from '@react-three/fiber';

import { StarBackground } from './StarBackground';
import styles from './StarsCanvas.module.scss';

export const StarsCanvas = () => {
  return (
    <div className={styles.stars}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <React.Suspense fallback={null}>
          <StarBackground />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
