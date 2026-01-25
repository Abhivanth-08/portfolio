import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Code2, Send, Terminal, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Social links
const socialLinks: Array<{
  icon: any;
  label: string;
  href: string;
  color: string;
  download?: boolean;
}> = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhivanth-r-223b2b281', color: 'hover:text-blue-400' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Abhivanth-08', color: 'hover:text-gray-300' },
  { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/Abhivanth_R', color: 'hover:text-yellow-400' },
  { icon: Mail, label: 'Email', href: 'mailto:abhicoder39@gmail.com', color: 'hover:text-red-400' },
  { icon: Download, label: 'Resume', href: 'https://drive.google.com/drive/folders/1IDmNuB4FX-_C1vHHt9TvQvyfLs3cuc52?usp=drive_link', color: 'hover:text-red-800' },
];

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // ✅ EmailJS Integration
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await emailjs.send(
        'service_c5dwn6v',
        'template_qbofn3b', 
        {
          title: 'Portfolio Contact',
          name: name,
          email: email,
          message: message,
          time: new Date().toLocaleString(),
        },
        'NUM5TLQg9ge1FaGDs' 
      );

      console.log('✅ Email sent successfully:', response.text);
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 glow-text">CONNECT</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's build the future together. Reach out for collaborations, projects, or just to say hi!
          </p>
        </motion.div>

        {/* Terminal-style contact box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative p-8 rounded-2xl glass-panel border border-primary/30 overflow-hidden">
            {/* Terminal header */}
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
                <span className="text-muted-foreground">connect --name --email --message</span>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Your name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      required
                      className="w-full bg-transparent border border-primary/20 rounded-lg p-3 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Your email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-transparent border border-primary/20 rounded-lg p-3 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    required
                    className="w-full h-36 bg-transparent border border-primary/20 rounded-lg p-4 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'sending'}
                    className={`flex items-center gap-3 px-6 py-3 rounded-lg font-bold transition-all duration-300 group
                      ${status === 'sending'
                        ? 'bg-primary/10 border border-primary/30 text-muted-foreground cursor-not-allowed'
                        : 'bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary'
                      }`}
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>
                      {status === 'sending'
                        ? 'Sending...'
                        : status === 'sent'
                        ? 'Sent!'
                        : 'Send Message'}
                    </span>
                  </motion.button>

                  {status === 'error' && <p className="text-red-400 text-sm">❌ Failed to send. Try again later.</p>}
                  {status === 'sent' && <p className="text-green-400 text-sm">✅ Message sent successfully!</p>}
                </div>
              </form>

              <div className="flex items-start gap-2 text-green-400">
                <span className="text-primary">$</span>
                <span className={`${isFocused ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}>
                  {isFocused ? '▋ Writing...' : '_ Waiting for input...'}
                </span>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8 text-foreground">Or find me on</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                download={link.download ? "portfolio.zip" : undefined}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl glass-panel border border-primary/20 hover:border-primary/50 transition-all duration-300 ${link.color}`}
              >
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <link.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="font-display font-bold text-sm">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground text-sm">© 2026 Abhivanth R.</p>
        </motion.div>
      </div>
    </section>
  );
};
