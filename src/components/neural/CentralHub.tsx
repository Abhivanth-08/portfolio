import React from 'react';
import * as THREE from 'three';

export default function CentralHub({ isMobile }: { isMobile: boolean }) {
  return (
    <group>
      {/* Wireframe outer */}
      <mesh>
        <sphereGeometry args={[isMobile ? 1.6 : 2.6, 64, 64]} />
        <meshBasicMaterial color="#000000" wireframe opacity={0.06} transparent />
      </mesh>

      {/* Metallic core */}
      <mesh>
        <sphereGeometry args={[isMobile ? 1.2 : 2.0, 64, 64]} />
        <meshStandardMaterial color="#d4af76" metalness={0.95} roughness={0.12} />
      </mesh>

      {/* Glow layer */}
      <mesh>
        <sphereGeometry args={[isMobile ? 1.3 : 2.1, 64, 64]} />
        <meshBasicMaterial color="#d4af76" transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

    </group>
  );
}
