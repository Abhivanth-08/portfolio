import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Github, Code2, Send, Terminal, Download } from 'lucide-react';

const socialLinks = [
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/abhivanth-r-223b2b281',
    color: 'hover:text-blue-400'
  },
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/Abhivanth-08',
    color: 'hover:text-gray-300'
  },
  { 
    icon: Code2, 
    label: 'LeetCode', 
    href: 'https://leetcode.com/u/Abhivanth_R',
    color: 'hover:text-yellow-400'
  },
  { 
    icon: Mail, 
    label: 'Email', 
    href: 'mailto:abhicoder39@gmail.com',
    color: 'hover:text-red-400'
  },
  {
    icon: Download, 
    label: 'Resume', 
    href: 'ABHIVANTH R.pdf',
    color: 'hover:text-red-800'
  },
];

export const Contact = () => {
  const [terminalText, setTerminalText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">
            CONNECT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's build the future together. Reach out for collaborations, projects, or just to say hi!
          </p>
        </motion.div>

        {/* Terminal UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative p-8 rounded-2xl glass-panel border border-primary/30 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/20">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-display text-primary font-bold">abhivanth@terminal:~</span>
              <div className="flex gap-2 ml-auto">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground">cat message.txt</span>
              </div>
              
              <div className="pl-4">
                <textarea
                  placeholder="Type your message here... Press Ctrl+D to send"
                  value={terminalText}
                  onChange={(e) => setTerminalText(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="w-full h-32 bg-transparent border border-primary/20 rounded-lg p-4 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Send Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-6 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-primary font-bold transition-all duration-300 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </motion.button>

              <div className="flex items-start gap-2 text-green-400">
                <span className="text-primary">$</span>
                <span className={`${isFocused ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}>
                  {isFocused ? '▋ Writing...' : '_ Waiting for input...'}
                </span>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8 text-foreground">
            Or find me on
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl glass-panel border border-primary/20 hover:border-primary/50 transition-all duration-300 ${link.color}`}
              >
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <link.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="font-display font-bold text-sm">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Abhivanth R.
          </p>
        </motion.div>
      </div>
    </section>
  );
};