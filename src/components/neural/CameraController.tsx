import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { useThree } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

type CameraControllerHandle = {
  focusOn: (pos: THREE.Vector3, distance?: number, durationMs?: number) => void;
  reset: (durationMs?: number) => void;
};

const CameraController = forwardRef<CameraControllerHandle, { initial?: THREE.Vector3 }>(function CameraController(props, ref) {
  const { camera } = useThree();
  const target = new THREE.Vector3(0, 0, 0);
  const defaultPos = new THREE.Vector3(0, 0, 8);
  const springRef = useRef<any>();

  const [, api] = useSpring(() => ({
    from: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
  }));

  useImperativeHandle(ref, () => ({
    focusOn: (pos: THREE.Vector3, distance = 3, durationMs = 800) => {
      const dir = pos.clone().sub(target).normalize().multiplyScalar(distance);
      const dest = pos.clone().add(dir);
      api.start({ x: dest.x, y: dest.y, z: dest.z, config: { mass: 1, tension: 170, friction: 26 } });
      // lookAt pos
      camera.lookAt(pos);
    },
    reset: (durationMs = 600) => {
      api.start({ x: defaultPos.x, y: defaultPos.y, z: defaultPos.z, config: { mass: 1, tension: 170, friction: 26 } });
      camera.lookAt(0, 0, 0);
    },
  }));

  // apply spring values to camera
  useSpring({
    to: async (next) => {
      // no-op to keep the api alive
    },
  });

  return null;
});

export default CameraController;
