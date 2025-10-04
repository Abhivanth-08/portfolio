import React, { useRef } from 'react';
import { Text } from '@react-three/drei';

export default function CategoryNode({
  name,
  color,
  position,
  onClick,
  isDimmed,
  size = 1,
}: {
  name: string;
  color: string;
  position: [number, number, number];
  onClick: () => void;
  isDimmed: boolean;
  size?: number;
}) {
  const ref = useRef<any>();

  return (
    <group position={position}>
      <mesh ref={ref} onClick={onClick}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} transparent opacity={isDimmed ? 0.25 : 0.6} emissive={color as any} emissiveIntensity={isDimmed ? 0.05 : 0.35} />
      </mesh>
      <Text position={[0, isDimmed ? 1.1 : size + 0.6, 0]} fontSize={0.35} color={color} anchorX="center" anchorY="middle">{name}</Text>
    </group>
  );
}
