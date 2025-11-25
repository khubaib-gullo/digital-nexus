import React from 'react';
import { motion } from 'framer-motion';
import { Send, Twitter, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative py-20">
      
      <div className="absolute top-10 w-full text-center border-b border-blueprint-line/20 pb-4">
         <h2 className="text-4xl font-mono text-white">COMMUNICATIONS</h2>
         <div className="text-blueprint-line text-sm">SECTION E: TERMINAL</div>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl px-6 relative z-10"
      >
        {/* The "Console" */}
        <div className="bg-blueprint-bg border-2 border-blueprint-line p-1 rounded-lg shadow-[0_0_50px_rgba(14,165,233,0.1)]">
          <div className="border border-blueprint-line/30 p-8 md:p-12 relative overflow-hidden">
            
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] opacity-20" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-mono text-white mb-6">ESTABLISH UPLINK</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-blueprint-line text-xs font-mono mb-2">USER_ID (NAME)</label>
                    <input type="text" className="w-full bg-black/50 border border-blueprint-line/50 text-white p-3 font-mono focus:border-blueprint-glow focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-blueprint-line text-xs font-mono mb-2">SIGNAL_FREQ (EMAIL)</label>
                    <input type="email" className="w-full bg-black/50 border border-blueprint-line/50 text-white p-3 font-mono focus:border-blueprint-glow focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-blueprint-line text-xs font-mono mb-2">PAYLOAD (MESSAGE)</label>
                    <textarea rows={4} className="w-full bg-black/50 border border-blueprint-line/50 text-white p-3 font-mono focus:border-blueprint-glow focus:outline-none transition-colors"></textarea>
                  </div>
                  <button className="w-full bg-blueprint-line/10 border border-blueprint-glow text-blueprint-glow font-mono py-4 hover:bg-blueprint-glow hover:text-black transition-all flex items-center justify-center gap-2 group">
                    <span>TRANSMIT DATA</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-between border-l border-dashed border-blueprint-line/30 pl-8 md:pl-12">
                 <div>
                    <h4 className="text-white font-mono mb-4">COORDINATES</h4>
                    <p className="text-gray-400 font-mono text-sm mb-2">123 Innovation Blvd, Sector 7</p>
                    <p className="text-gray-400 font-mono text-sm">Neo-Tokyo, CA 90210</p>
                 </div>

                 <div className="mt-8">
                   <h4 className="text-white font-mono mb-4">FREQUENCY CHANNELS</h4>
                   <div className="flex gap-4">
                     <a href="#" className="p-3 border border-blueprint-line/30 text-blueprint-line hover:border-blueprint-glow hover:text-blueprint-glow hover:shadow-[0_0_10px_rgba(0,242,255,0.5)] transition-all">
                       <Twitter size={20} />
                     </a>
                     <a href="#" className="p-3 border border-blueprint-line/30 text-blueprint-line hover:border-blueprint-glow hover:text-blueprint-glow hover:shadow-[0_0_10px_rgba(0,242,255,0.5)] transition-all">
                       <Linkedin size={20} />
                     </a>
                     <a href="#" className="p-3 border border-blueprint-line/30 text-blueprint-line hover:border-blueprint-glow hover:text-blueprint-glow hover:shadow-[0_0_10px_rgba(0,242,255,0.5)] transition-all">
                       <Github size={20} />
                     </a>
                   </div>
                 </div>

                 <div className="mt-auto pt-8">
                   <div className="text-[10px] text-blueprint-line/40 font-mono">
                     SYSTEM STATUS: ONLINE <br/>
                     LATENCY: 12ms
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
