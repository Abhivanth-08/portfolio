import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, BookOpen, Calendar } from 'lucide-react';

interface Blog {
  title: string;
  description: string;
  url: string;
  date: string;
  category: string;
  readTime: string;
  gradient: string;
}

const blogs: Blog[] = [
  {
    title: "AI Foley Studio",
    description: "Teaching Machines to Hear: How I Built an AI Foley Studio That Syncs Footsteps in Real Time.",
    url: "https://medium.com/@abhicoder39/introduction-0d08e502f1af",
    date: "2026",
    category: "Technical Writing",
    readTime: "5 min read",
    gradient: "from-primary/20 via-accent/20 to-primary/20"
  },
  {
    title: "Beyond Autoregression: How VL-JEPA Redefines Vision-Language Models",
    description: "A deep dive into VL-JEPA's revolutionary approach to vision-language modeling, exploring how it moves beyond traditional autoregressive methods to create more efficient and powerful multimodal AI systems.",
    url: "https://medium.com/@abhicoder39/beyond-autoregression-how-vl-jepa-redefines-vision-language-models-39a2e8d7c414",
    date: "2026",
    category: "AI Research",
    readTime: "8 min read",
    gradient: "from-accent/20 via-primary/20 to-accent/20"
  }
];

export const Blogs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="blogs" className="relative py-32 px-6 overflow-hidden bg-transparent">
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
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
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
            BLOG POSTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, insights, and explorations into AI, machine learning, and technology
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.url}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="relative h-full p-8 rounded-2xl glass-panel border border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-primary/20 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-fit px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                      {blog.category}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:glow-text transition-all duration-300">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {blog.description}
                  </p>

                  {/* Read Time */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Read Button */}
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary/30 to-accent/30 hover:from-primary/40 hover:to-accent/40 border border-primary/40 text-foreground font-semibold transition-all duration-300 group/link"
                  >
                    <span>Read on Medium</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  </a>

                  {/* Neural Connection Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"
                      style={{
                        boxShadow: '0 0 10px hsl(var(--primary))',
                      }}
                    />
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Floating Number */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0.3 }}
                className="absolute -top-6 -left-6 font-display text-8xl font-black text-primary/10 z-0"
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Neural Network Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <span className="text-primary font-bold">Stay tuned</span> for more insights and technical deep dives
          </p>
        </motion.div>
      </div>
    </section>
  );
};
