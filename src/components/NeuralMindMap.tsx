import React, { useRef, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, Text, OrbitControls } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';
import { skillsData } from '@/data/skillsData';

// Helper: create a thin cylinder between two points
function Connection({ start, end, intensity = 0.3 }: { start: THREE.Vector3; end: THREE.Vector3; intensity?: number }) {
  // Static thin cylinder connecting two points (no continuous animation)
  const dir = end.clone().sub(start);
  const len = dir.length();
  const mid = start.clone().lerp(end, 0.5);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());

  return (
    <mesh position={mid.toArray()} quaternion={quaternion} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.02, 0.02, len, 8]} />
      <meshStandardMaterial color="#d4af76" emissive="#d4af76" emissiveIntensity={intensity} transparent opacity={0.95} />
    </mesh>
  );
}

function Central({ position }: { position: THREE.Vector3 }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshStandardMaterial color="#d4af76" metalness={0.9} roughness={0.12} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.76, 64, 64]} />
        <meshBasicMaterial color="#d4af76" transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <Html center position={[0, 0, 1.2]} style={{ pointerEvents: 'none' }}>
        <div style={{ color: '#d4af76', fontWeight: 700, fontSize: 20, textAlign: 'center' }}>Skills</div>
      </Html>
    </group>
  );
}

function CategoryNode({ name, pos, index, hovered, onHover, onClick, size = 1.4 }: any) {
  // Static category hub (no continuous rotation)
  return (
    <group position={pos}>
      <mesh onPointerOver={() => onHover(true)} onPointerOut={() => onHover(false)} onClick={onClick}>
        <cylinderGeometry args={[size, size, 0.28, 32]} />
        <meshStandardMaterial color="#d4af76" transparent opacity={hovered ? 0.95 : 0.5} emissive="#d4af76" emissiveIntensity={hovered ? 1.2 : 0.25} />
      </mesh>
      <Text position={[0, 0.6, 0]} fontSize={0.28} color="#d4af76" anchorX="center" anchorY="middle">
        {name}
      </Text>
    </group>
  );
}

function SkillPlaque({ label, desc, pos, visible, hovered, onHover }: any) {
  // simple spring-scale on hover for rectangular skill plaque
  const props = useSpring({ scale: hovered ? 1.08 : 1, config: { tension: 300, friction: 20 } });

  return (
    <group position={pos}>
      <a.mesh onPointerOver={() => onHover(true)} onPointerOut={() => onHover(false)} visible={visible} scale={props.scale.to((s: number) => [s, s, s])}>
        <boxGeometry args={[1.2, 0.5, 0.12]} />
        <meshStandardMaterial color="#d4af76" transparent opacity={hovered ? 0.98 : 0.9} emissive="#d4af76" emissiveIntensity={hovered ? 1.2 : 0.45} />
      </a.mesh>
      {visible && (
        <Html position={[0, -0.8, 0]} center distanceFactor={6} transform>
          <div style={{ background: 'rgba(0,0,0,0.7)', color: '#d4af76', padding: 8, borderRadius: 6, minWidth: 140, textAlign: 'center' }}>
            <strong>{label}</strong>
            <div style={{ fontSize: 12, opacity: 0.9 }}>{desc}</div>
          </div>
        </Html>
      )}
    </group>
  );
}

export default function NeuralMindMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // state
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<{ cat: number; idx: number } | null>(null);
  const [openCat, setOpenCat] = useState<number | null>(null);

  // positions radial
  const positions = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    const count = 4;
    const r = Math.max(window.innerWidth / 90, 8);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      arr.push(new THREE.Vector3(Math.cos(angle) * r, Math.sin(angle) * (r * 0.1), Math.sin(angle) * r));
    }
    return arr;
  }, []);

  const handleCategoryClick = (i: number) => {
    if (openCat === i) {
      setOpenCat(null);
    } else {
      setOpenCat(i);
    }
  };

  const handleBackgroundClick = () => {
    setOpenCat(null);
  };

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 4, 22], fov: 50 }} onPointerMissed={handleBackgroundClick}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={0.9} color="#d4af76" />

        {/* central hub */}
        <Central position={new THREE.Vector3(0, 0, 0)} />

        {/* categories */}
        {skillsData.map((cat, i) => {
          const pos = positions[i];
          const isHovered = hoveredCat === i;
          const isOpen = openCat === i;
          return (
            <group key={cat.name} position={pos.toArray()}>
              <CategoryNode
                name={cat.name}
                pos={pos.toArray()}
                index={i}
                hovered={isHovered || isOpen}
                onHover={(v: boolean) => setHoveredCat(v ? i : null)}
                onClick={() => handleCategoryClick(i)}
                size={isOpen ? 2.6 : 1.8}
              />
              <Connection start={new THREE.Vector3(0, 0, 0)} end={pos} intensity={isHovered || isOpen ? 0.9 : 0.28} />

              {/* Level 2 skill plaques */}
              {cat.skills.map((s, idx) => {
                const angle = (idx / cat.skills.length) * Math.PI * 2;
                const spread = isOpen ? 3.6 : 1.0; // if open, spread further
                const sx = pos.x + Math.cos(angle) * spread;
                const sy = pos.y - 0.2 - (idx % 2) * 0.2;
                const sz = pos.z + Math.sin(angle) * spread;
                const visible = isOpen || hoveredCat === i;
                const hs = hoveredSkill && hoveredSkill.cat === i && hoveredSkill.idx === idx;
                return (
                  <group key={s.name} position={[sx, sy, sz]}>
                    <SkillPlaque label={s.name} desc={s.description} pos={new THREE.Vector3(sx, sy, sz)} visible={visible} hovered={hs} onHover={(v: boolean) => setHoveredSkill(v ? { cat: i, idx } : null)} />
                    {visible && <Connection start={pos} end={new THREE.Vector3(sx, sy, sz)} intensity={hs ? 1.2 : 0.35} />}
                  </group>
                );
              })}
            </group>
          );
        })}

        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}
