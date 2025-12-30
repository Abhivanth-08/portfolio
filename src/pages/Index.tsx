import { Hero3D } from '@/components/Hero3D';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { FloatingObjects } from '@/components/FloatingObjects';

const Index = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
  {/* Floating 3D Objects Background (now using logo planes) */}
  <FloatingObjects />
      
      {/* Smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation - Floating */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 glass-panel rounded-full border border-primary/30 backdrop-blur-lg">
        <ul className="flex gap-8 font-display text-sm font-bold">
          {['About', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <Hero3D />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass-panel border border-primary/30 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 text-primary group-hover:animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Index;