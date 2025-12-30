import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Video } from 'lucide-react';
import { getProjectById } from '@/data/projectsData';
import { useEffect } from 'react';

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? getProjectById(projectId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Extract video ID from video link for embedding
  const getEmbedUrl = (url: string) => {
    // Check for YouTube URLs
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = '';
      if (url.includes('youtube.com/watch')) {
        videoId = url.split('v=')[1]?.split('&')[0] || '';
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
      } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('embed/')[1]?.split('?')[0] || '';
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Check if it's a Google Drive folder link
    if (url.includes('/folders/')) {
      const folderId = url.split('/folders/')[1]?.split('?')[0];
      return `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;
    }
    // Check if it's a Google Drive file link
    if (url.includes('/file/d/')) {
      const fileId = url.split('/file/d/')[1]?.split('/')[0];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    // If videoId is provided, use it
    if (project.videoId) {
      return `https://drive.google.com/file/d/${project.videoId}/preview`;
    }
    return url;
  };

  // Get context-aware demo button label
  const getDemoLabel = () => {
    switch (project.demoType) {
      case 'live':
        return 'Live Demo';
      case 'simulation':
        return 'Simulation Demo';
      case 'repository':
        return 'Project Files';
      case 'interactive':
        return 'Interactive Demo';
      default:
        return 'View Demo';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header with Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-50 glass-panel border-b border-primary/20 backdrop-blur-lg"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Portfolio</span>
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">{getDemoLabel()}</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-primary/20 text-foreground transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="w-fit px-4 py-2 mb-4 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
              {project.category}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl">
              {project.description}
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-primary/20 shadow-2xl">
              <div className="aspect-video w-full bg-secondary/20 relative">
                {project.videoDemo && (
                  <iframe
                    src={getEmbedUrl(project.videoDemo)}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    title={`${project.title} Demo Video`}
                    style={{ border: 'none' }}
                  />
                )}
              </div>
              {/* Video Overlay Badge */}
              <div className="absolute top-4 right-4 px-4 py-2 rounded-lg glass-panel border border-accent/30 text-accent flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span className="text-sm font-medium">Project Demo</span>
              </div>
            </div>
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Full Description */}
              <div className="glass-panel border border-primary/20 rounded-2xl p-8">
                <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                  About This Project
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>

              {/* Engineering Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="glass-panel border border-primary/20 rounded-2xl p-8">
                  <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                    Engineering Challenges
                  </h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div 
                        key={index}
                        className="flex gap-4 p-4 rounded-lg bg-secondary/20 border border-primary/10 hover:border-primary/20 transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Architecture */}
              {project.architecture && (
                <div className="glass-panel border border-accent/30 rounded-2xl p-8 bg-gradient-to-br from-accent/5 to-transparent">
                  <h2 className="font-display text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                    <span className="text-accent">•</span>
                    System Architecture
                  </h2>
                  <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                    <code className="text-sm md:text-base text-foreground font-mono leading-relaxed block overflow-x-auto">
                      {project.architecture}
                    </code>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Tech Stack & Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:sticky lg:top-24 space-y-8 self-start"
            >
              {/* Tech Stack */}
              <div className="glass-panel border border-primary/20 rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-panel border border-primary/20 rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary transition-all duration-300 group"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div>
                      <div className="font-semibold">{getDemoLabel()}</div>
                      <div className="text-xs text-muted-foreground">
                        {project.demoType === 'live' && 'Try it live'}
                        {project.demoType === 'simulation' && 'View simulation'}
                        {project.demoType === 'repository' && 'Browse files'}
                        {project.demoType === 'interactive' && 'Interactive experience'}
                        {!project.demoType && 'View the project'}
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-secondary/80 border border-primary/20 text-foreground transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <div>
                      <div className="font-semibold">Source Code</div>
                      <div className="text-xs text-muted-foreground">View on GitHub</div>
                    </div>
                  </a>
                  
                  {project.videoDemo && (
                    <a
                      href={project.videoDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent transition-all duration-300 group"
                    >
                      <Video className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-semibold">Hardware Demo</div>
                        <div className="text-xs text-muted-foreground">Watch full video</div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center py-16 glass-panel border border-primary/20 rounded-2xl"
          >
            <h3 className="font-display text-3xl font-bold mb-4 text-foreground">
              Interested in this project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Feel free to explore the code, try the demo, or reach out if you have any questions!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/#contact"
                className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/#projects"
                className="px-8 py-3 rounded-lg bg-secondary hover:bg-secondary/80 border border-primary/20 text-foreground font-semibold transition-colors duration-300"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
