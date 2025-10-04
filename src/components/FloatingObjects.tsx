import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useEffect, useState } from 'react';

const FloatingShape = ({ position, scale, speed }: { position: [number, number, number], scale: number, speed: number }) => {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#FFD700"
          attach="material"
          distort={0.3}
          speed={2}
          opacity={0.6}
          transparent
          emissive="#FFD700"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const FloatingCube = ({ position, scale, speed }: { position: [number, number, number], scale: number, speed: number }) => {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh position={position} scale={scale} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#FFD700"
          attach="material"
          distort={0.2}
          speed={1.5}
          opacity={0.4}
          transparent
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, scale, speed }: { position: [number, number, number], scale: number, speed: number }) => {
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1}>
      <mesh position={position} scale={scale} rotation={[1, 0, 0]}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshDistortMaterial
          color="#FFD700"
          attach="material"
          distort={0.15}
          speed={1}
          opacity={0.5}
          transparent
          emissive="#FFD700"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
};

export const FloatingObjects = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.3 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
        
        {/* Top left area */}
        <FloatingShape position={[-6, 4, 0]} scale={0.8} speed={1.5} />
        <FloatingCube position={[-8, 2, -2]} scale={0.6} speed={2} />
        
        {/* Top right area */}
        <FloatingTorus position={[7, 5, -1]} scale={0.7} speed={1.8} />
        <FloatingShape position={[9, 3, 1]} scale={0.5} speed={2.2} />
        
        {/* Middle left */}
        <FloatingCube position={[-7, 0, -3]} scale={0.5} speed={1.6} />
        <FloatingTorus position={[-5, -2, 2]} scale={0.6} speed={1.9} />
        
        {/* Middle right */}
        <FloatingShape position={[8, -1, -2]} scale={0.7} speed={1.7} />
        <FloatingCube position={[6, 1, 3]} scale={0.4} speed={2.1} />
        
        {/* Bottom left */}
        <FloatingTorus position={[-8, -4, 1]} scale={0.6} speed={1.4} />
        <FloatingShape position={[-6, -6, -1]} scale={0.5} speed={2.3} />
        
        {/* Bottom right */}
        <FloatingCube position={[7, -5, 2]} scale={0.7} speed={1.5} />
        <FloatingShape position={[9, -3, -3]} scale={0.6} speed={2} />
        
        {/* Center scattered */}
        <FloatingTorus position={[0, 2, -4]} scale={0.4} speed={2.5} />
        <FloatingCube position={[2, -2, 4]} scale={0.5} speed={1.8} />
        <FloatingShape position={[-2, 0, 5]} scale={0.4} speed={2.2} />
      </Canvas>
    </div>
  );
};
