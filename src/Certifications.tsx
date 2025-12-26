import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certificate {
  title: string;
  description: string;
  date: string;
  link: string;
}

interface CertificationGroup {
  organization: string;
  logo?: string;
  certificates: Certificate[];
  gradient: string;
}

const certificationGroups: CertificationGroup[] = [
  {
    organization: 'NPTEL',
    gradient: 'from-primary/20 to-accent/20',
    certificates: [
      {
        title: 'Introduction to Large Language Models (LLMs)',
        description: 'Focused on fundamentals of LLM architectures, training paradigms, and applications.',
        date: 'October 2025',
        link: 'https://drive.google.com/file/d/1dQ_v7JsS1njJvknenTHk7ablNRD57bgn/view',
      },
      {
        title: 'Introduction to Industry 4.0 & Internet of Things',
        description: 'Covered cyber-physical systems, IoT architectures, and smart manufacturing concepts.',
        date: 'April 2025',
        link: 'https://drive.google.com/file/d/1UB8QA3f4gEVP24BGngoCO4XsWyWfyj8G/view',
      },
      {
        title: 'Data Analytics with Python',
        description: 'Hands-on data analysis using Python libraries for real-world datasets.',
        date: 'April 2024',
        link: 'https://drive.google.com/file/d/1amVgINAAPPxPW0vXlhLHkCQK38ejbpkC/view',
      },
    ],
  },
  {
    organization: 'GitHub',
    gradient: 'from-accent/20 to-primary/20',
    certificates: [
      {
        title: 'GitHub Foundations Certification',
        description: 'Demonstrated proficiency in Git, GitHub workflows, version control, and collaboration.',
        date: 'May 2025',
        link: 'https://drive.google.com/file/d/1BlRilXy5tCp2gFcN9rKNCi5eeeeFhrUL/view',
      },
    ],
  },
  {
    organization: 'IIT Bombay Spoken Tutorial',
    gradient: 'from-primary/20 to-accent/20',
    certificates: [
      {
        title: 'Python Programming',
        description: 'Comprehensive training in Python programming fundamentals and advanced concepts.',
        date: 'December 2025',
        link: 'https://drive.google.com/file/d/1Gub2oVcNb24vaTi5whKRRKREHDxB2Bqt/view',
      },
      {
        title: 'PostgreSQL Database Management',
        description: 'Database design, SQL querying, and PostgreSQL administration.',
        date: 'December 2025',
        link: 'https://drive.google.com/file/d/1z5JG-CYJSUyMXQz-wp6DWwCZtPHn8VUM/view',
      },
      {
        title: 'Java Programming',
        description: 'Object-oriented programming and Java development best practices.',
        date: 'May 2025',
        link: 'https://drive.google.com/file/d/1TdhkpujrzLcV172KTanRDjR0LnKpNieI/view',
      },
      {
        title: 'C++ Programming',
        description: 'Advanced C++ programming and system-level development.',
        date: 'May 2025',
        link: 'https://drive.google.com/file/d/1-FX6VH61yly7xZTjDODDLyuRFqRnQRGW/view',
      },
      {
        title: 'C Programming',
        description: 'Foundation in C programming and procedural programming concepts.',
        date: 'May 2025',
        link: 'https://drive.google.com/file/d/1rxWaZt2aOI_vCkUaODlsc3FNCpr0JwgR/view',
      },
    ],
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="relative py-32 px-6 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 70% 50%, hsl(var(--accent) / 0.3) 0%, transparent 50%)`,
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
            CERTIFICATIONS & CREDENTIALS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications in AI, software development, and emerging technologies
          </p>
        </motion.div>

        {/* Certification Groups */}
        <div className="space-y-12">
          {certificationGroups.map((group, groupIndex) => (
            <motion.div
              key={group.organization}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2, duration: 0.8 }}
            >
              {/* Organization Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-primary/30">
                  <Award className="w-5 h-5 text-primary" strokeWidth={2} />
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {group.organization}
                  </h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.certificates.map((cert, certIndex) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.2 + certIndex * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className={`h-full p-6 rounded-xl glass-panel border border-primary/20 hover:border-primary/50 transition-all duration-500 relative overflow-hidden bg-gradient-to-br ${group.gradient}`}>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/20 to-accent/20 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Certificate Title */}
                        <h4 className="font-display text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {cert.title}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-foreground/70 mb-4 flex-grow leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm text-primary/80 mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>

                        {/* View Certificate Button */}
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary font-semibold transition-all duration-300 group/btn"
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats/CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full glass-panel border border-primary/30">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">
                {certificationGroups.reduce((acc, group) => acc + group.certificates.length, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Certifications</p>
            </div>
            <div className="w-px h-8 bg-primary/30" />
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">
                {certificationGroups.length}
              </p>
              <p className="text-sm text-muted-foreground">Issuing Organizations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
