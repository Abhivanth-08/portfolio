import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Zap, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import abhivanthPhoto from '@/assets/abhivanth-photo.png';
import { RippleEffect } from './RippleEffect';
import { useParallax } from '@/hooks/useParallax';

const domains = [
  {
    icon: Brain,
    title: 'AI Engineer',
    description: 'Specializing in machine learning, computer vision, and intelligent systems. Building AI agents that solve real-world problems with PyTorch, LangChain, and OpenCV.',
  },
  {
    icon: Cpu,
    title: 'IoT Developer',
    description: 'Creating connected systems with Raspberry Pi, ESP32, and embedded technologies. Bridging hardware and software seamlessly for intelligent automation.',
  },
  {
    icon: Zap,
    title: 'Innovator',
    description: 'Pushing boundaries in robotics, automation, and intelligent systems. From NDT robots to defect detection systems, transforming ideas into reality.',
  },
  {
    icon: Rocket,
    title: 'Researcher',
    description: 'Published researcher in computer vision and AI. Exploring cutting-edge technologies in data privacy and sustainable agriculture with ethical AI approaches.',
  },
];

export const About = () => {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const parallaxSlow = useParallax(0.2);
  const parallaxMedium = useParallax(0.4);

  useEffect(() => {
    // Only auto-cycle if user is not interacting
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev + 1) % domains.length);
    }, 3000); // Reduced to 3 seconds for better responsiveness

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  // Reset interaction state after a delay
  useEffect(() => {
    if (isUserInteracting) {
      const timer = setTimeout(() => {
        setIsUserInteracting(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isUserInteracting]);

  const currentDomain = domains[currentDomainIndex];

  const handleDomainChange = (index: number) => {
    setCurrentDomainIndex(index);
    setIsUserInteracting(true);
  };

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects with Parallax */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ transform: `translateY(${parallaxSlow}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ 
            animationDelay: '1.5s',
            transform: `translateY(${parallaxMedium}px)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
            WHO I AM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist at the intersection of AI, IoT, and Innovation
          </p>
        </motion.div>

        {/* Photo and Cycling Domain Display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20">
          {/* Photo with Holographic Frame */}
          <RippleEffect>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className="relative group liquid-distortion"
            >
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden glass-panel border-2 border-primary/30 p-2">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/40 via-accent/40 to-primary/40 blur-xl transition-all duration-700 animate-pulse-glow" />
                
                {/* Photo */}
                <div className="relative z-10 w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src={abhivanthPhoto} 
                    alt="Abhivanth R" 
                    className="w-full h-full object-cover liquid-distortion"
                    style={{ width: '100%', height: '100%' }}
                  />
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-60 mix-blend-overlay" />
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-primary/70 rounded-tl-xl" />
                <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-primary/70 rounded-br-xl" />
              </div>
            </motion.div>
          </RippleEffect>

          {/* Cycling Domain Panel */}
          <div className="flex-1 max-w-2xl">
            <AnimatePresence mode="wait">
              <RippleEffect>
                <motion.div
                  key={currentDomainIndex}
                  initial={{ opacity: 0, x: 100, rotateY: 30 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -30 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 120, damping: 20 }}
                  className="relative p-10 rounded-2xl glass-panel holographic-border hover:shadow-[0_0_50px_hsl(var(--glow-primary)/0.5)] transition-all duration-300 liquid-distortion"
                  style={{ transformStyle: 'preserve-3d', minHeight: '300px' }}
                >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-xl opacity-50" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-5 rounded-xl bg-primary/10 border border-primary/30">
                    <currentDomain.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-4xl font-bold mb-6 glow-text">
                    {currentDomain.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {currentDomain.description}
                  </p>
                </div>

                {/* Progress indicator dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {domains.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDomainChange(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                        index === currentDomainIndex 
                          ? 'bg-primary w-8' 
                          : 'bg-primary/30 hover:bg-primary/60'
                      }`}
                    />
                  ))}
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary/50 rounded-br-2xl" />
                </motion.div>
              </RippleEffect>
            </AnimatePresence>
          </div>
        </div>

        {/* Fun Fact / Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <RippleEffect>
            <div className="inline-block p-8 rounded-2xl glass-panel border border-primary/30 max-w-4xl liquid-distortion">
              <p className="text-2xl md:text-3xl font-display font-medium italic text-primary">
                "The future belongs to those who blend creativity with technology."
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                — My Philosophy
              </p>
            </div>
          </RippleEffect>
        </motion.div>
      </div>
    </section>
  );
};