import React from 'react';
import { motion } from 'framer-motion';
import { skillsData as data } from '../data/skillsData';

// Mobile-only skills cards. Visible only on small screens via parent usage.
export default function MobileSkills() {
  return (
    <section className="md:hidden py-8 px-4">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h3 className="font-display text-3xl font-bold mb-2">SKILLS</h3>
          <p className="text-sm text-muted-foreground">Quick overview of my core skills (mobile)</p>
        </motion.div>

        <div className="space-y-4">
          {data.map((cat) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="p-4 rounded-2xl glass-panel border border-primary/20 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="inline-block px-3 py-1 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                  {cat.name}
                </div>
                {/* optional color indicator */}
                <div className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
              </div>

              {/* optional description removed (not present on category items) */}

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/10 border border-primary/10 text-foreground"
                    title={s.description}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

 
