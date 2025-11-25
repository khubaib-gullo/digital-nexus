import React from 'react';

const BlueprintBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-blueprint-bg">
      {/* Major Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Minor Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Crosshairs & Technical Marks */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-blueprint-line" />
      <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-blueprint-line" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-blueprint-line" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-blueprint-line" />

      {/* Axis Labels */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-blueprint-line/40 -rotate-90 font-mono tracking-widest">
        Y-AXIS ELEVATION: 00.00 - 100.00
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-blueprint-line/40 font-mono tracking-widest">
        X-AXIS WIDTH: MAX_VIEWPORT
      </div>
    </div>
  );
};

export default BlueprintBackground;
