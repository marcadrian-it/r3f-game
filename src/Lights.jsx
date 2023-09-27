import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Lights() {
  const light = useRef();

  useFrame((state) => {
    light.current.position.z = state.camera.position.z + 1 - 4;
    light.current.target.position.z = state.camera.position.z - 4;
    light.current.target.updateMatrixWorld();
  });
  return (
    <>
      <directionalLight
        ref={light}
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-near={1}
        shadow-camera-far={25}
        shadow-camera-top={25}
        shadow-camera-right={25}
        shadow-camera-bottom={-25}
        shadow-camera-left={-25}
      />

      <ambientLight intensity={0.5} />
    </>
  );
}
