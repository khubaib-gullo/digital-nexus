import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'FinTech Core', category: 'SaaS', image: 'https://picsum.photos/seed/fintech/600/400', description: 'Banking infrastructure overhaul.' },
  { id: 2, title: 'HealthData AI', category: 'AI Ops', image: 'https://picsum.photos/seed/health/600/400', description: 'Diagnostic neural network.' },
  { id: 3, title: 'Retail Bot', category: 'Agents', image: 'https://picsum.photos/seed/retail/600/400', description: 'Autonomous customer service unit.' },
  { id: 4, title: 'Logistics Map', category: 'DevOps', image: 'https://picsum.photos/seed/logistics/600/400', description: 'Real-time fleet tracking.' },
  { id: 5, title: 'CyberSec Grid', category: 'Security', image: 'https://picsum.photos/seed/cyber/600/400', description: 'Intrusion detection system.' },
];

const PortfolioSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-blueprint-bg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Wall Background Styling */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20 border-t border-b border-blueprint-line/30"
          style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(14, 165, 233, 0.1) 50%)', backgroundSize: '200px 100%' }}
        />

        <div className="absolute top-10 left-10 z-10">
          <h2 className="text-4xl font-mono text-white mb-2">PROJECT SHOWCASE</h2>
          <div className="text-blueprint-line text-sm">SECTION C: ARCHIVE WALL</div>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-24">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[50vh] w-[400px] flex-shrink-0 cursor-pointer border border-blueprint-line/30 hover:border-blueprint-glow transition-colors bg-black/40"
            >
              <div className="absolute top-2 left-2 z-10 bg-black px-2 py-1 text-xs font-mono text-blueprint-line border border-blueprint-line">
                IMG_{project.id.toString().padStart(3, '0')}
              </div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              
              {/* Projection overlay effect */}
              <div className="absolute inset-0 bg-blueprint-line/10 pointer-events-none group-hover:bg-transparent transition-colors" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 border-t border-blueprint-line translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-mono text-white">{project.title}</h3>
                <p className="text-xs text-blueprint-line">{project.category}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-black border border-blueprint-glow max-w-3xl w-full relative p-1"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blueprint-glow" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blueprint-glow" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blueprint-glow" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blueprint-glow" />

              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-blueprint-line hover:text-white z-10"
              >
                <X />
              </button>

              <div className="flex flex-col md:flex-row gap-6 p-6">
                <div className="w-full md:w-1/2">
                   <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto border border-blueprint-line/30" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center font-mono">
                   <div className="text-xs text-blueprint-line mb-2">PROJECT DETAILS</div>
                   <h3 className="text-3xl text-white font-bold mb-4">{selectedProject.title}</h3>
                   <p className="text-gray-400 mb-6">{selectedProject.description}</p>
                   
                   <div className="mt-auto pt-4 border-t border-dashed border-blueprint-line/30">
                     <button className="flex items-center gap-2 text-blueprint-glow hover:text-white transition-colors text-sm">
                       VIEW SCHEMATICS <ExternalLink size={14} />
                     </button>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
