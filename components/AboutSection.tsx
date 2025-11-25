import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 border-b border-blueprint-line/30 pb-4">
          <h2 className="text-4xl font-mono text-white">THE ARCHITECTS</h2>
          <div className="text-blueprint-line text-sm">SECTION D: STAFF LOUNGE</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {['Lead Architect', 'Systems Eng.', 'Design Lead'].map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ rotateX: 90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2, type: "spring" }}
              className="origin-top"
            >
              <div className="bg-blueprint-bg border border-blueprint-line/40 p-1 relative group hover:border-blueprint-glow transition-colors">
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-blueprint-line/20 rotate-1 backdrop-blur-sm z-10" />
                
                <div className="aspect-[3/4] overflow-hidden bg-black/50 relative mb-4">
                  <img 
                    src={`https://picsum.photos/seed/team${idx}/400/500`} 
                    alt="Team Member" 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(14,165,233,0.1)_25%,rgba(14,165,233,0.1)_50%,transparent_50%,transparent_75%,rgba(14,165,233,0.1)_75%,rgba(14,165,233,0.1)_100%)] bg-[length:10px_10px] opacity-20" />
                </div>
                
                <div className="p-4 border-t border-blueprint-line/20">
                  <h3 className="font-mono text-white text-xl">MEMBER_0{idx + 1}</h3>
                  <p className="font-mono text-blueprint-line text-sm">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="font-mono text-blueprint-text"
            >
              <h3 className="text-2xl text-white mb-6 border-l-4 border-blueprint-glow pl-4">CORE VALUES</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blueprint-glow"></span>
                  PRECISION ENGINEERING
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blueprint-glow"></span>
                  SCALABLE INFRASTRUCTURE
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blueprint-glow"></span>
                  AESTHETIC FUNCTIONALITY
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="border border-dashed border-blueprint-line p-8 relative"
            >
               <div className="absolute top-0 left-0 bg-blueprint-bg px-2 -translate-y-1/2 text-xs text-blueprint-line">MISSION STATEMENT.txt</div>
               <p className="font-mono text-sm leading-7 text-gray-400">
                 "To construct digital realities that transcend the screen. We treat every line of code as a structural beam, every pixel as a finishing material. We don't just build software; we architect experiences."
               </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
