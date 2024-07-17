import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';

export const StarBackground = () => {
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(3500), {
      radius: 1.2,
    })
  );

  const ref: any = React.useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled>
        <PointMaterial
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
          color="#fff"
          transparent
        />
      </Points>
    </group>
  );
};
