import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Layout, Cpu, Bot } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative py-32 space-y-48">
      
      {/* SaaS: UI Reveal */}
      <ServiceChamber 
        title="SaaS & Micro-SaaS"
        icon={<Layout className="w-8 h-8 text-blueprint-glow" />}
        code="REF: UI_LAYER_01"
      >
        <div className="relative w-full h-64 md:h-80 border border-blueprint-line/50 bg-black overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-700">
             <div className="text-blueprint-line font-mono text-xs border border-dashed border-blueprint-line p-4">
                [WIREFRAME MOCKUP]
                <br />
                Waiting for render...
             </div>
          </div>
          <img 
            src="https://picsum.photos/seed/saas/800/600" 
            alt="SaaS Interface"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
          />
          <div className="absolute bottom-2 right-2 text-[10px] font-mono text-blueprint-glow animate-pulse">
            RENDERING...
          </div>
        </div>
      </ServiceChamber>

      {/* DevOps: Pulsing Network */}
      <ServiceChamber 
        title="AWS DevOps Infrastructure"
        icon={<Database className="w-8 h-8 text-blueprint-glow" />}
        code="REF: CLOUD_NET_02"
        align="right"
      >
        <div className="relative w-full h-64 md:h-80 border border-blueprint-line/50 bg-black/50 p-4 flex items-center justify-center">
           <svg width="100%" height="100%" viewBox="0 0 200 100" className="overflow-visible">
              <motion.path
                d="M 10 50 Q 50 10 100 50 T 190 50"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle cx="10" cy="50" r="3" fill="#00f2ff">
                <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
              </motion.circle>
              <motion.circle cx="100" cy="50" r="3" fill="#00f2ff">
                 <animate attributeName="r" values="3;5;3" dur="1s" begin="0.5s" repeatCount="indefinite" />
              </motion.circle>
              <motion.circle cx="190" cy="50" r="3" fill="#00f2ff">
                 <animate attributeName="r" values="3;5;3" dur="1s" begin="1s" repeatCount="indefinite" />
              </motion.circle>
           </svg>
           <div className="absolute top-2 left-2 text-[10px] font-mono text-blueprint-line">
             DATA_STREAM_ACTIVE
           </div>
        </div>
      </ServiceChamber>

      {/* AI: Rotating Sphere */}
      <ServiceChamber 
        title="AI Software Core"
        icon={<Cpu className="w-8 h-8 text-blueprint-glow" />}
        code="REF: NEURAL_NET_03"
      >
        <div className="relative w-full h-64 md:h-80 border border-blueprint-line/50 bg-black/50 flex items-center justify-center perspective-1000">
           <motion.div 
             className="w-32 h-32 border border-blueprint-glow rounded-full shadow-[0_0_30px_rgba(0,242,255,0.3)] relative"
             animate={{ rotateY: 360, rotateX: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             style={{ transformStyle: "preserve-3d" }}
           >
             <div className="absolute inset-0 border border-blueprint-line rounded-full rotate-45 transform"></div>
             <div className="absolute inset-0 border border-blueprint-line rounded-full -rotate-45 transform"></div>
           </motion.div>
           <motion.div 
             className="absolute text-blueprint-glow font-mono text-sm bg-black px-2"
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
           >
             PROCESSING TENSORS
           </motion.div>
        </div>
      </ServiceChamber>

      {/* Agents: Autonomous Shapes */}
      <ServiceChamber 
        title="Autonomous Agents"
        icon={<Bot className="w-8 h-8 text-blueprint-glow" />}
        code="REF: AGENT_SWARM_04"
        align="right"
      >
        <div className="relative w-full h-64 md:h-80 border border-blueprint-line/50 bg-black/50 overflow-hidden">
           {[...Array(5)].map((_, i) => (
             <motion.div
                key={i}
                className="absolute w-6 h-6 border border-blueprint-glow bg-blueprint-glow/10"
                animate={{
                  x: [Math.random() * 200, Math.random() * 200 - 100],
                  y: [Math.random() * 100, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
                style={{ top: '50%', left: '50%' }}
             >
               <div className="absolute -top-3 left-0 text-[8px] text-blueprint-line">AGT_{i}</div>
             </motion.div>
           ))}
        </div>
      </ServiceChamber>

    </div>
  );
};

interface ServiceChamberProps {
  title: string;
  icon: React.ReactNode;
  code: string;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

const ServiceChamber: React.FC<ServiceChamberProps> = ({ title, icon, code, children, align = 'left' }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-6 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Description Panel */}
      <motion.div 
        initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <div className="border-l-2 border-blueprint-line pl-4 relative">
          <div className="absolute -top-6 left-0 text-[10px] text-blueprint-line/60 font-mono">{code}</div>
          <div className="mb-4">{icon}</div>
          <h2 className="text-3xl font-mono font-bold text-white mb-4">{title}</h2>
          <p className="text-blueprint-text font-mono text-sm leading-relaxed">
            Module active. Analyzing system requirements. Optimized for scalability and performance. 
            Detailed schematics available upon request.
          </p>
          <div className="mt-4 flex gap-2">
            <div className="h-1 w-2 bg-blueprint-line animate-pulse"></div>
            <div className="h-1 w-2 bg-blueprint-line animate-pulse delay-75"></div>
            <div className="h-1 w-2 bg-blueprint-line animate-pulse delay-150"></div>
          </div>
        </div>
      </motion.div>

      {/* Visual Panel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ServicesSection;
