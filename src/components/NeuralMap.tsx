import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useMobile } from '@/hooks/useMobile';
import CentralHub from '@/components/neural/CentralHub';
import CategoryNode from '@/components/neural/CategoryNode';
import SkillNode from '@/components/neural/SkillNode';
import ConnectionLine from '@/components/neural/ConnectionLine';
import Particles from '@/components/neural/Particles';
import CameraController from '@/components/neural/CameraController';
import { OrbitControls } from '@react-three/drei';
import { skillsData as defaultSkills } from '@/data/skillsData';

export default function NeuralMap({ skills = defaultSkills }: { skills?: any[] }) {
  const isMobile = useMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const cameraRef = useRef<any>();

  // dynamic radius based on viewport - use larger spread to occupy full canvas
  const spread = typeof window !== 'undefined' ? Math.min(window.innerWidth / 90, 12) : (isMobile ? 4 : 10);
  const positions = [0, 1, 2, 3].map((i) => {
    const angle = (i / 4) * Math.PI * 2;
    const r = isMobile ? Math.max(4, spread * 0.6) : Math.max(8, spread);
    return [Math.cos(angle) * r, 0, Math.sin(angle) * r] as [number, number, number];
  });

  return (
    <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, isMobile ? 12 : 10], fov: 65 }}>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#d4af76" />

      <Particles count={isMobile ? 250 : 500} />

      <group>
        <CentralHub isMobile={isMobile} />

        {skills.map((cat, idx) => {
          const pos = positions[idx];
          const isOpen = openIndex === idx;

          return (
            <group key={cat.name} position={pos}>
              <CategoryNode name={cat.name} color="#d4af76" position={[0,0,0]} onClick={() => setOpenIndex(isOpen ? null : idx)} isDimmed={openIndex !== null && !isOpen} size={isMobile ? 1.4 : 2.2} />

              {/* connection to hub */}
              <ConnectionLine start={[0,0,0]} end={pos} active={isOpen} />

              {/* Level 2 nodes */}
              {isOpen && cat.skills.map((s: any, i: number) => {
                const a = (i / cat.skills.length) * Math.PI * 2;
                const r = isMobile ? 1.6 : 2.6;
                const sx = Math.cos(a) * r;
                const sz = Math.sin(a) * r;
                return (
                  <group key={s.name} position={[sx, 0, sz]}>
                    <SkillNode name={s.name} description={s.description} position={[0,0,0]} visible={true} />
                    <ConnectionLine start={[0,0,0]} end={[sx,0,sz]} active={true} />
                  </group>
                );
              })}
            </group>
          );
        })}

      </group>

      <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.15} enableZoom={true} />
    </Canvas>
  );
}
