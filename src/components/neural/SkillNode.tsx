import React, { useRef } from 'react';
import { Html } from '@react-three/drei';

export default function SkillNode({
  name,
  description,
  position,
  visible,
  onHover,
}: {
  name: string;
  description: string;
  position: [number, number, number];
  visible: boolean;
  onHover?: (v: boolean) => void;
}) {
  const ref = useRef<any>();

  return (
    <group position={position}>
      <mesh ref={ref} visible={visible} onPointerOver={() => onHover?.(true)} onPointerOut={() => onHover?.(false)}>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshStandardMaterial color="#d4af76" emissive="#d4af76" emissiveIntensity={0.6} />
      </mesh>
      {visible && (
        <Html position={[0, 0.6, 0]} center distanceFactor={6} transform>
          <div style={{ background: 'rgba(0,0,0,0.7)', padding: 8, borderRadius: 8, color: '#d4af76', minWidth: 160 }}>
            <strong>{name}</strong>
            <div style={{ fontSize: 12 }}>{description}</div>
          </div>
        </Html>
      )}
    </group>
  );
}
