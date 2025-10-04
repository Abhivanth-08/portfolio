import { Canvas } from '@react-three/fiber';
import { Float, useTexture, Billboard } from '@react-three/drei';
import { useEffect, useState } from 'react';

const LogoPlane = ({ position, scale, speed, rotation, floatConfig }: { position: [number, number, number], scale: number, speed: number, rotation?: [number, number, number], floatConfig?: { rotationIntensity?: number, floatIntensity?: number } }) => {
  const texture = useTexture('/abhi.png');
  const rotIntensity = floatConfig?.rotationIntensity ?? 0.6;
  const floatIntensity = floatConfig?.floatIntensity ?? 1.5;
  return (
    <Float speed={speed} rotationIntensity={rotIntensity} floatIntensity={floatIntensity}>
      <Billboard>
        <mesh position={position} scale={scale} rotation={rotation ?? [0, 0, 0]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} transparent opacity={0.6} toneMapped={false} />
        </mesh>
      </Billboard>
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
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
        
  {/* Top left area */}
  <LogoPlane position={[-6, 4, 0]} scale={1.4} speed={1.5} rotation={[0, 0.3, 0]} floatConfig={{ rotationIntensity: 1, floatIntensity: 2 }} />
  <LogoPlane position={[-8, 2, -2]} scale={1.1} speed={2} rotation={[0.2, 0.4, 0]} floatConfig={{ rotationIntensity: 0.5, floatIntensity: 1.5 }} />
        
  {/* Top right area */}
  <LogoPlane position={[7, 5, -1]} scale={1.2} speed={1.8} rotation={[1, 0, 0]} floatConfig={{ rotationIntensity: 0.8, floatIntensity: 1 }} />
  <LogoPlane position={[9, 3, 1]} scale={0.9} speed={2.2} rotation={[0.1, 0.6, 0]} floatConfig={{ rotationIntensity: 1, floatIntensity: 2 }} />
        
  {/* Middle left */}
  <LogoPlane position={[-7, 0, -3]} scale={1.3} speed={1.6} rotation={[0.2, 0.2, 0]} floatConfig={{ rotationIntensity: 0.5, floatIntensity: 1.5 }} />
  <LogoPlane position={[-5, -2, 2]} scale={1.4} speed={1.9} rotation={[0.8, 0.1, 0]} floatConfig={{ rotationIntensity: 0.8, floatIntensity: 1 }} />
        
  {/* Middle right */}
  <LogoPlane position={[8, -1, -2]} scale={1.4} speed={1.7} rotation={[0.3, 0.2, 0]} floatConfig={{ rotationIntensity: 1, floatIntensity: 2 }} />
  <LogoPlane position={[6, 1, 3]} scale={1.2} speed={2.1} rotation={[0.1, 0.1, 0]} floatConfig={{ rotationIntensity: 0.5, floatIntensity: 1.5 }} />
        
  {/* Bottom left */}
  <LogoPlane position={[-8, -4, 1]} scale={1.0} speed={1.4} rotation={[0.6, 0.3, 0]} floatConfig={{ rotationIntensity: 0.8, floatIntensity: 1 }} />
  <LogoPlane position={[-6, -6, -1]} scale={0.9} speed={2.3} rotation={[0.2, 0.4, 0]} floatConfig={{ rotationIntensity: 1, floatIntensity: 2 }} />
        
  {/* Bottom right */}
  <LogoPlane position={[7, -5, 2]} scale={1.1} speed={1.5} rotation={[0.1, 0.2, 0]} floatConfig={{ rotationIntensity: 0.5, floatIntensity: 1.5 }} />
  <LogoPlane position={[9, -3, -3]} scale={1.0} speed={2} rotation={[0.2, 0.5, 0]} floatConfig={{ rotationIntensity: 1, floatIntensity: 2 }} />
        
  {/* Center scattered */}
  <LogoPlane position={[0, 2, -4]} scale={1.1} speed={2.5} rotation={[0.4, 0, 0]} floatConfig={{ rotationIntensity: 0.8, floatIntensity: 1 }} />
  <LogoPlane position={[2, -2, 4]} scale={1.2} speed={1.8} rotation={[0.2, 0.1, 0]} floatConfig={{ rotationIntensity: 0.5, floatIntensity: 1.5 }} />
  <LogoPlane position={[-2, 0, 5]} scale={1.0} speed={2.2} rotation={[0.1, 0.3, 0]} floatConfig={{ rotationIntensity: 1, floatIntensity: 2 }} />
      </Canvas>
    </div>
  );
};
