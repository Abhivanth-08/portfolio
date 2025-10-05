import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Versatile Mini Robot',
    category: 'Robotics & IoT',
    description:
      'Designed a multifunctional robot with object recognition, color detection, QR/text scanning, translation, and virtual assistance.',
    tech: ['Python', 'OpenCV', 'Raspberry Pi', 'Sensors'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://example.com/versatile-mini-robot', 
    github: 'https://github.com/Abhivanth-08/Mini_Robot',
  },
  {
    title: 'NDT Robot',
    category: 'Industrial Automation',
    description:
      'Autonomous mini robot using ultrasonic, infrared, and eddy current sensors for real-time crack and defect detection with ML.',
    tech: ['Python', 'OpenCV', 'Sensors', 'ML', 'Raspberry Pi'],
    gradient: 'from-accent/20 to-primary/20',
    demo: 'https://example.com/ndt-robot',
    github: 'https://github.com/Abhivanth-08/NDT',
  },
  {
    title: 'Info Redaction Agent',
    category: 'AI & NLP',
    description:
      'AI system to automatically detect and redact PII from PDFs, text, and structured data ensuring privacy compliance.',
    tech: ['Python', 'LangChain', 'PyMuPDF', 'Docling', 'FastAPI'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://0207abhi-info-redaction.hf.space',
    github: 'https://github.com/Abhivanth-08/info_redaction_main',
  },
  {
    title: 'College Chatbot',
    category: 'AI Assistant',
    description:
      'AI-powered chatbot automating admissions, events, food orders, and exam prep with real-time data access for the college.',
    tech: ['Python', 'LangChain', 'Docling', 'LanceDB', 'FastAPI'],
    gradient: 'from-accent/20 to-primary/20',
    demo: 'https://example.com/college-chatbot',
    github: 'https://github.com/Abhivanth-08/College_chatbot',
  },
  {
    title: 'Resume Reformer Agent',
    category: 'AI Tools',
    description:
      'AI agent that reformats and optimizes resumes based on job descriptions to improve ATS compatibility and keyword alignment.',
    tech: ['Python', 'LangChain', 'Prompt Engineering', 'PyMuPDF', 'Docling'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://example.com/resume-reformer-agent',
    github: 'https://github.com/Abhivanth-08/Resume-Reformer',
  },
  {
    title: 'Exhibit Defect Detection',
    category: 'Computer Vision',
    description:
      'AI-CNN-based system integrated with IoT for detecting defects in museum exhibits and enabling predictive maintenance.',
    tech: ['Python', 'PyTorch', 'CNN', 'Raspberry Pi'],
    gradient: 'from-accent/20 to-primary/20',
    demo: 'https://example.com/exhibit-defect-detection',
    github: 'https://github.com/Abhivanth-08/Exhibit_defect_detection_system',
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
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
            FEATURED PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovation meets execution. Here are some of my cutting-edge projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
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
                className="relative h-full p-8 rounded-2xl glass-panel border border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-primary/20 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Category */}
                  <div className="inline-block px-4 py-2 mb-4 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:glow-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary border border-primary/20 text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">View</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-primary/20 text-foreground transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
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
      </div>
    </section>
  );
};
