import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, TrendingUp , Briefcase} from 'lucide-react';

const timelineItems = [
  {
    icon: GraduationCap,
    year: '2023 - 2027',
    title: 'B.E. Computer Science & Engineering',
    subtitle: 'Specialization in AIML',
    institution: 'K P R Institute of Engineering and Technology',
    description: 'Focused on AI, Machine Learning, and IoT systems with hands-on project experience.',
    achievements: ['CGPA: 8.8', 'Research & Projects'],
  },
  {
    icon: Briefcase,
    year: 'Jan 2025 - Feb 2025',
    title: 'Internship - ML Engineer',
    subtitle: 'Nitroware Technologies',
    institution: 'Coimbatore',
    description: 'Built a machine learning model to predict breaching events and gained hands-on experience with Flask and various ML algorithms.',
    achievements: ['Developed predictive ML model', 'Implemented Flask-based application', 'Enhanced understanding of ML workflows'],
  },
  {
    icon: Award,
    year: ' Sep 2025',
    title: 'Publication (Accepted)',
    subtitle: 'Data Privacy in Sustainable Agriculture',
    institution: 'CRC Book Chapter',
    description: 'Secure and Ethical AI-Driven Approaches to Data Privacy in Sustainable Agriculture (Accepted).',
    achievements: ['CRC Book Chapter - Blockchain and AI for Security and Privacy in Smart Agriculture'],
  },
  {
    icon: BookOpen,
    year: '2022 - 2023',
    title: 'AI & Robotics Projects',
    subtitle: 'Independent Research',
    institution: 'Self-Driven Innovation',
    description: 'Developed multiple AI agents, robots, and computer vision systems for real-world applications.',
    achievements: ['6+ Major Projects', 'Open Source Contributions', 'Technical Blogs'],
  },
  {
    icon: TrendingUp,
    year: 'Ongoing',
    title: 'Continuous Learning',
    subtitle: 'Advanced Specializations',
    institution: 'Online Platforms & Courses',
    description: 'Constantly upskilling in cutting-edge AI technologies, LLMs, and emerging tech.',
    achievements: ['Multiple Certifications', 'Hackathon Wins', 'Active Community Member'],
  },
];

export const Education = () => {
  return (
    <section id="education" className="relative py-32 px-6 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.3) 0%, transparent 50%)`,
        }} />
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
            JOURNEY & MILESTONES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic excellence meets hands-on innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex-1 group"
                >
                  <div className="p-8 rounded-2xl glass-panel border border-primary/20 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-accent/10 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon & Year */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                          <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="font-display text-lg font-bold text-primary">
                          {item.year}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-display text-2xl font-bold mb-2 text-foreground group-hover:glow-text transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-lg text-primary/80 mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20 text-primary"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>

                {/* Central Node (Desktop Only) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2"
                >
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background animate-pulse-glow" />
                </motion.div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};