import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import { useMobile } from '@/hooks/useMobile';

function CosmicParticles({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = isMobile ? 1500 : 5000;

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    // Create cosmic spiral formation
    const radius = Math.random() * 40 + 10;
    const angle = (i / particleCount) * Math.PI * 8;
    const height = (Math.random() - 0.5) * 30;
    
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = height;
    positions[i * 3 + 2] = Math.sin(angle) * radius;

    // Cosmic colors (primarily gold tones with slight variance)
    const goldVariance = (Math.random() - 0.5) * 0.15;
    colors[i * 3] = 0.83 + goldVariance;
    colors[i * 3 + 1] = 0.69 + goldVariance * 0.6;
    colors[i * 3 + 2] = 0.46 + goldVariance * 0.3;

    sizes[i] = Math.random() * 0.15 + 0.05;
  }

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Cosmic rotation with multiple layers (reduced on mobile)
    const rotationSpeed = isMobile ? 0.01 : 0.02;
    pointsRef.current.rotation.y = time * rotationSpeed;
    pointsRef.current.rotation.x = Math.sin(time * 0.01) * (isMobile ? 0.05 : 0.1);
    pointsRef.current.rotation.z = time * (isMobile ? 0.002 : 0.005);

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const colors = pointsRef.current.geometry.attributes.color.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];
      
      // AI wave-like motion (simplified on mobile)
      const waveIntensity = isMobile ? 1.5 : 3;
      const wave1 = Math.sin(x * 0.1 + time * 2) * Math.cos(z * 0.1 + time * 1.5) * waveIntensity;
      const wave2 = Math.sin(x * 0.05 + time * 0.5) * Math.cos(z * 0.05 + time * 0.3) * (isMobile ? 1 : 2);
      const wave3 = Math.sin(Math.sqrt(x*x + z*z) * 0.1 + time * 3) * (isMobile ? 0.5 : 1);
      
      positions[i3 + 1] = y + wave1 + wave2 + wave3;

      // Pulsing color intensity
      const colorIntensity = 0.7 + Math.sin(time * 2 + i * 0.01) * 0.3;
      colors[i3] *= colorIntensity;
      colors[i3 + 1] *= colorIntensity;
      colors[i3 + 2] *= colorIntensity;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.12}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function HologramSphere({ isMobile }: { isMobile: boolean }) {
  const mainRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mainRef.current || !glowRef.current) return;
    const time = state.clock.getElapsedTime();
    const rotationSpeed = isMobile ? 0.08 : 0.16;
    mainRef.current.rotation.y = time * rotationSpeed;
    mainRef.current.rotation.x = Math.sin(time * 0.12) * (isMobile ? 0.06 : 0.12);
    // Subtle pulsing for glow
    const pulse = 1 + Math.sin(time * 1.5) * 0.03;
    glowRef.current.scale.setScalar(pulse);
  });

  return (
    <group>
      {/* Polished metallic gold sphere (central focal element) */}
      <mesh ref={mainRef}>
        <sphereGeometry args={[isMobile ? 1.8 : 2.6, 64, 64]} />
        <meshStandardMaterial
          color="#d4af76"
          metalness={0.95}
          roughness={0.18}
          reflectivity={1}
          {...({ emissive: '#7a5a2b', emissiveIntensity: 0.12 } as any)}
        />
      </mesh>

      {/* Soft additive glow layer to create ambient golden halo */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[isMobile ? 1.92 : 2.78, 64, 64]} />
        <meshBasicMaterial
          color="#d4af76"
          transparent
          opacity={0.12}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Subtle wireframe detail on surface */}
      <mesh>
        <sphereGeometry args={[isMobile ? 1.8 : 2.6, 64, 64]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export const Hero3D = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Transforming Ideas into Intelligent Realities';
  const isMobile = useMobile();
  const parallaxSlow = useParallax(isMobile ? 0.1 : 0.3);
  const parallaxMedium = useParallax(isMobile ? 0.2 : 0.5);
  const parallaxFast = useParallax(isMobile ? 0.3 : 0.8);

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 1000);
        }
      }, 150);
      return () => clearInterval(typingInterval);
    }
  }, [isTyping, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, isMobile ? 8 : 12], fov: isMobile ? 60 : 75 }}>
          <ambientLight intensity={isMobile ? 0.45 : 0.35} />
          {/* Single gold point light to emphasize the gold hologram */}
          <pointLight position={[10, 10, 10]} intensity={isMobile ? 0.9 : 1.4} color="#d4af76" />
          <CosmicParticles isMobile={isMobile} />
          <HologramSphere isMobile={isMobile} />
        </Canvas>
      </div>

      {/* Enhanced Radial Glow Overlay with Parallax */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, hsl(40 70% 65% / 0.2) 0%, transparent 40%),
            radial-gradient(circle at 30% 20%, hsl(180 80% 60% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, hsl(300 80% 60% / 0.1) 0%, transparent 50%)
          `,
          transform: `translateY(${parallaxSlow}px)`,
        }}
      />
      
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, hsl(40 60% 50% / 0.05) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, hsl(180 60% 50% / 0.05) 0%, transparent 60%)
          `,
          transform: `translateY(${parallaxMedium}px)`,
        }}
      />
      
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 60% 40%, hsl(300 60% 50% / 0.03) 0%, transparent 70%)
          `,
          transform: `translateY(${parallaxFast}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-48">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Name with Breathing Neon Pulse Effect */}
          <motion.h1 
            className={`font-display font-black tracking-wide relative ${isMobile ? 'text-4xl md:text-6xl' : 'text-6xl md:text-8xl'}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              textShadow: isMobile ? 
                `0 0 10px hsl(40 80% 65% / 0.8), 0 0 20px hsl(40 80% 65% / 0.6)` :
                `0 0 20px hsl(40 80% 65% / 0.8), 0 0 40px hsl(40 80% 65% / 0.6), 0 0 60px hsl(40 80% 65% / 0.4), 0 0 80px hsl(40 80% 65% / 0.2)`,
            }}
          >
            <motion.span
              animate={{
                textShadow: isMobile ? [
                  `0 0 10px hsl(40 80% 65% / 0.8), 0 0 20px hsl(40 80% 65% / 0.6)`,
                  `0 0 15px hsl(40 90% 70% / 1), 0 0 30px hsl(40 90% 70% / 0.8)`,
                  `0 0 10px hsl(40 80% 65% / 0.8), 0 0 20px hsl(40 80% 65% / 0.6)`
                ] : [
                  `0 0 20px hsl(40 80% 65% / 0.8), 0 0 40px hsl(40 80% 65% / 0.6), 0 0 60px hsl(40 80% 65% / 0.4), 0 0 80px hsl(40 80% 65% / 0.2)`,
                  `0 0 30px hsl(40 90% 70% / 1), 0 0 60px hsl(40 90% 70% / 0.8), 0 0 90px hsl(40 90% 70% / 0.6), 0 0 120px hsl(40 90% 70% / 0.4)`,
                  `0 0 20px hsl(40 80% 65% / 0.8), 0 0 40px hsl(40 80% 65% / 0.6), 0 0 60px hsl(40 80% 65% / 0.4), 0 0 80px hsl(40 80% 65% / 0.2)`
                ]
              }}
              transition={{ duration: isMobile ? 4 : 3, repeat: Infinity, ease: "easeInOut" }}
              className="breathing-glow"
            >
              Abhivanth R
            </motion.span>
          </motion.h1>

          {/* Title with Typing Animation */}
          <motion.div
            className="text-3xl md:text-4xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.span 
              className="px-8 py-4 glass-panel rounded-xl border border-primary/30 holographic-border inline-block relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <motion.span
                className="relative z-10"
                style={{
                  textShadow: !isTyping ? `
                    0 0 15px hsl(40 80% 65% / 0.8),
                    0 0 30px hsl(40 80% 65% / 0.4)
                  ` : 'none'
                }}
              >
                {displayText}
                {isTyping && <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>}
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Building the future with AI, Robotics, and Innovation.
            <br />
            Transforming ideas into intelligent solutions.
          </motion.p>

          {/* Enhanced CTA Button with 3D Hover Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.button 
              className="group relative px-10 py-5 text-lg font-bold tracking-wider overflow-hidden rounded-xl transition-all duration-500"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Golden ring ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                style={{
                  background: 'linear-gradient(45deg, transparent, hsl(40 80% 65%), transparent)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Main button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 group-hover:from-primary group-hover:to-accent transition-all duration-500 rounded-xl" />
              
              {/* 3D shadow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-primary/60 transition-all duration-500 rounded-xl transform translate-z-[-10px]" />
              
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/30 to-accent/30 transition-all duration-500 rounded-xl" />
              
              <span className="relative z-10 text-primary-foreground font-display">
                EXPLORE MY WORK
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
