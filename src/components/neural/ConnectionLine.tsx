import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ConnectionLine({ start, end, active }: { start: [number, number, number]; end: [number, number, number]; active: boolean; }) {
  const ref = useRef<any>();

  // Compute mid point and orientation
  const startV = new THREE.Vector3(...start);
  const endV = new THREE.Vector3(...end);
  const mid = startV.clone().lerp(endV, 0.5);
  const dir = endV.clone().sub(startV);
  const len = dir.length();
  const axis = new THREE.Vector3(0, 1, 0);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, dir.clone().normalize());

  useFrame(({ clock }) => {
    if (!ref.current) return;
    // animate emissiveIntensity via material
    const t = clock.getElapsedTime();
    const intensity = active ? 0.8 + Math.abs(Math.sin(t * 4)) * 0.6 : 0.2;
    ref.current.material.emissiveIntensity = intensity;
  });

  return (
    <mesh position={mid.toArray()} quaternion={quaternion} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.02, 0.02, len, 8]} />
      <meshStandardMaterial color="#d4af76" emissive="#d4af76" emissiveIntensity={0.2} transparent opacity={0.9} />
    </mesh>
  );
}
