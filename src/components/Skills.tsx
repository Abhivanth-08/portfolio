import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MobileSkills from './MobileSkills';
import { skillsData } from '../data/skillsData';

export const Skills = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const categories = skillsData.map((c) => c.name);
  const hoveredCategory = hoveredNode ? skillsData.find((c) => c.name === hoveredNode) : null;

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden bg-transparent">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
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
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text text-primary">
            SKILL NETWORK
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Neural Fabric Behind My Creations
          </p>
        </motion.div>

  {/* Mobile-only simple skills cards (shows on small screens) */}
  <MobileSkills />

  {/* Neural Network Architecture (hidden on small screens) */}
  <div className="hidden md:block relative min-h-[600px] py-12">
          
          {/* Layer Labels */}
          <div className="absolute top-0 left-0 right-0 flex justify-between px-12 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-sm font-display font-bold text-primary uppercase tracking-wider">
                
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <span className="text-sm font-display font-bold text-primary uppercase tracking-wider">
                
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <span className="text-sm font-display font-bold text-primary uppercase tracking-wider">
                
              </span>
            </motion.div>
          </div>

          {/* Connection Lines - Connect from SKILLS to dots on buttons */}
          <svg 
            className="absolute left-0 top-20 w-full h-[600px] pointer-events-none" 
            viewBox="0 0 1200 600" 
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Lines from RIGHT of SKILLS circle to LEFT DOT of category buttons */}
            {categories.map((category, index) => {
              // SKILLS: Circle button - w-32 h-32 (128px), positioned in first column
              // Grid has 3 columns with gap-32, so each column is ~33.33% wide
              const skillsColumnCenter = 100; // Center of first column in viewBox
              const skillsRadius = 64; // Half of 128px
              const skillsRightEdgeX = skillsColumnCenter + skillsRadius; // 264
              const skillsY = 280; // Vertical center
              
              // Category buttons: In middle column
              // Button structure: px-8 py-5, has a dot (w-3 h-3) with gap-3 before text
              // The dot is at left edge + px-8 (32px) + half of w-3 (6px) = left + 35px
              const middleColumnCenter = 600; // Center of middle column
              const buttonHalfWidth = 80; // Approximate half-width of button
              const buttonLeftEdge = middleColumnCenter - buttonHalfWidth; // ~520
              const dotPositionX = buttonLeftEdge + 35; // Position of the dot center
              
              // Vertical positioning: gap-16 (64px) between buttons
              const firstButtonY = 100; // Y position of first button center
              const buttonSpacing = 120; // 64px gap + ~56px button height
              const categoryY = firstButtonY + index * buttonSpacing;
              
              return (
                <motion.line
                  key={`line-input-${category}`}
                  x1={skillsRightEdgeX}
                  y1={skillsY}
                  x2={dotPositionX}
                  y2={categoryY}
                  stroke="hsl(var(--primary))"
                  strokeWidth={hoveredNode === category ? "4" : "2"}
                  strokeDasharray="8 4"
                  opacity={hoveredNode === category ? "1" : "0.4"}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 1 }}
                  filter={hoveredNode === category ? "url(#glow)" : "none"}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
            
            {/* Lines from RIGHT of category buttons to LEFT DOT of sub-skill buttons */}
            <AnimatePresence>
              {hoveredCategory && hoveredCategory.skills.map((_, skillIndex) => {
                const categoryIndex = categories.indexOf(hoveredNode ?? '');
                
                // Right edge of category button (accounting for text width)
                const categoryButtonRightX = 700; // Right side of middle column
                const categoryY = 100 + categoryIndex * 120;
                
                // Sub-skill buttons: in right third (66%-100%)
                // Dots are at left edge + padding (px-5 = 20px) + dot position
                const subButtonLeftX = 875; // Left side of right column
                const dotOffsetX = 28; // px-5 padding + dot position
                const subDotX = subButtonLeftX + dotOffsetX;
                
                const skillCount = hoveredCategory!.skills.length;
                const subButtonSpacing = 55;
                const totalHeight = skillCount * subButtonSpacing;
                const startY = 300 - (totalHeight / 2); // Center vertically
                const subY = startY + skillIndex * subButtonSpacing;
                
                return (
                  <motion.line
                    key={`line-output-${categoryIndex}-${skillIndex}`}
                    x1={categoryButtonRightX}
                    y1={categoryY}
                    x2={subDotX}
                    y2={subY}
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.95 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.03 }}
                    filter="url(#glow)"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </AnimatePresence>
          </svg>

          <div className="grid grid-cols-3 gap-32 items-center pt-16 relative" style={{ zIndex: 2 }}>
            
            {/* INPUT LAYER - Single SKILLS Node */}
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Single Input Node */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-32 h-32 rounded-full glass-panel border-4 border-primary flex items-center justify-center cursor-pointer z-10"
                  style={{
                    boxShadow: '0 0 40px hsl(var(--primary) / 0.6)',
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent animate-pulse" />
                  <span className="relative z-10 font-display font-bold text-primary text-2xl">
                    SKILLS
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* HIDDEN LAYER - Category Nodes */}
            <div className="flex flex-col gap-16 justify-center items-center">
              {categories.map((category, index) => {
                const isHovered = hoveredNode === category;
                
                return (
                  <motion.div
                    key={`hidden-${category}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.5 + index * 0.15,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    onMouseEnter={() => setHoveredNode(category)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="relative z-10"
                  >
                    {/* Hidden Node */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="relative px-8 py-5 rounded-2xl glass-panel border-3 border-primary/50 hover:border-primary flex items-center justify-center cursor-pointer transition-all duration-300"
                      style={{
                        boxShadow: isHovered 
                          ? '0 0 40px hsl(var(--primary) / 0.8), 0 0 80px hsl(var(--primary) / 0.4)' 
                          : '0 0 20px hsl(var(--primary) / 0.3)',
                      }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" />
                      <div className="relative z-10 flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                        <span className="font-display font-bold text-primary text-lg">
                          {category}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* OUTPUT LAYER - Sub-skills (only show for hovered category) */}
            <div className="flex flex-col justify-center min-h-[500px] relative" style={{ zIndex: 3 }}>
              <AnimatePresence mode="wait">
                {hoveredCategory && (
                  <motion.div
                    key={hoveredNode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    {hoveredCategory!.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={`output-${hoveredNode}-${skill.name}`}
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 50, scale: 0.8 }}
                        transition={{ 
                          delay: skillIndex * 0.05,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {/* Output Node */}
                        <motion.div
                          whileHover={{ scale: 1.08, x: 10 }}
                          className="relative px-5 py-3 rounded-lg glass-panel border-2 border-primary hover:border-primary transition-all duration-300 cursor-pointer"
                          style={{
                            boxShadow: '0 0 25px hsl(var(--primary) / 0.5)',
                          }}
                        >
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-primary/20" />
                          <div className="relative z-10 flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" 
                              style={{
                                boxShadow: '0 0 10px hsl(var(--primary))',
                              }}
                            />
                            <span className="text-sm font-bold text-foreground">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Neural Network Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <span className="text-primary font-bold"></span> 
          </p>
        </motion.div>
      </div>
    </section>
  );
};
