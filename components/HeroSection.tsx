import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	// Zoom effect: Scales up the "map" to transition into the "room"
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 20]);
	const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
	const roomOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

	return (
		<div ref={containerRef} className="h-[200vh] relative z-10">
			{/* Sticky container for the zoom effect */}
			<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
				{/* The Overhead Map View */}
				<motion.div
					style={{ scale, opacity }}
					className="absolute w-[80vw] h-[80vh] border border-blueprint-line/30 flex items-center justify-center bg-blueprint-bg/50 backdrop-blur-sm"
				>
					<div className="absolute top-4 left-4 text-xs font-mono text-blueprint-line">
						FIG 1.0: OVERHEAD PLAN
					</div>

					{/* Schematic lines representing the whole office */}
					<div className="w-1/2 h-1/2 border-2 border-dashed border-blueprint-line/40 relative">
						<div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
							<div className="border border-blueprint-line/20 p-2 flex items-center justify-center text-[10px] text-center">
								DESIGN
							</div>
							<div className="border border-blueprint-line/20 p-2 flex items-center justify-center text-[10px] text-center">
								DEVELOP
							</div>
							<div className="border border-blueprint-line/20 p-2 flex items-center justify-center text-[10px] text-center">
								TEST
							</div>
							<div className="border border-blueprint-line/20 p-2 flex items-center justify-center text-[10px] text-center">
								DEPLOY
							</div>
						</div>
					</div>
				</motion.div>

				{/* The Detailed "Room" View (Lobby) */}
				<motion.div
					style={{ opacity: roomOpacity }}
					className="relative z-20 text-center p-12 border-4 border-double border-blueprint-line bg-blueprint-bg/90 max-w-4xl w-full mx-4"
				>
					<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blueprint-bg px-4 text-blueprint-line font-mono text-sm">
						SECTION A-1: RECEPTION
					</div>

					<h1 className="text-4xl md:text-8xl sm:text-6xl font-bold font-mono text-white mb-6 tracking-tighter shadow-blueprint-glow drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]">
						Digital<span className="text-blueprint-glow">Nexus</span>
					</h1>

					<div className="flex items-center justify-center space-x-4 mb-8">
						<div className="h-px w-16 bg-blueprint-line/50"></div>
						<p className="font-mono text-blueprint-text text-lg">
							ARCHITECTING THE FUTURE
						</p>
						<div className="h-px w-16 bg-blueprint-line/50"></div>
					</div>

					<button className="group relative px-8 py-3 bg-transparent border border-blueprint-line text-blueprint-line font-mono hover:bg-blueprint-line/10 transition-all overflow-hidden">
						<span className="relative z-10">INITIALIZE TOUR</span>
						<div className="absolute bottom-0 left-0 h-1 w-full bg-blueprint-glow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
					</button>

					{/* Decorative dimensions */}
					<div className="absolute -left-8 top-0 bottom-0 w-px bg-blueprint-line/30 flex flex-col justify-between py-2">
						<span className="text-[9px] -rotate-90 text-blueprint-line/50">
							2400mm
						</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default HeroSection;
