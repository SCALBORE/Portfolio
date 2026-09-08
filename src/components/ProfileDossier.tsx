import { useState } from 'react';
import { PROFILE_DOSSIER } from '../data/portfolioData';

export function ProfileDossier() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  return (
    <section 
      id="profile"
      className="w-full px-4 md:px-8 xl:px-12 py-16 bg-[#131313] border-t border-[#2a2a2a]"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Dossier Label & Quotation */}
        <div className="lg:w-5/12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#ffb4ab] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
              <span>01 // PROFILE DOSSIER</span>
            </div>
            
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#e5e2e1] tracking-tight uppercase mb-6 font-bold leading-tight">
              {PROFILE_DOSSIER.quote}
            </h2>
          </div>

          <div className="p-6 bg-[#1c1b1b] border border-[#2a2a2a] relative">
            <div className="font-mono text-[9px] text-[#af8783] uppercase tracking-widest mb-2 font-semibold">
              CORE DIRECTIVE
            </div>
            <p className="text-sm text-[#e8bcb7]/90 leading-relaxed font-sans">
              {PROFILE_DOSSIER.coreDirective}
            </p>
            <div className="mt-4 flex items-center gap-3 font-mono text-[11px] text-[#af8783]">
              <span className="text-[#ffb4ab] font-bold">STATUS:</span> {PROFILE_DOSSIER.status}
            </div>
          </div>
        </div>

        {/* Right Column: Telemetry Matrix Grid */}
        <div className="lg:w-7/12 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[#2a2a2a] border border-[#2a2a2a]">
            {PROFILE_DOSSIER.telemetry.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#1c1b1b] p-6 flex flex-col justify-between hover:bg-[#201f1f] transition-colors"
              >
                <span className="font-mono text-[9px] text-[#af8783] tracking-wider font-medium">
                  {item.label}
                </span>
                <span className={`font-['Space_Grotesk'] text-lg sm:text-xl mt-2 font-semibold ${item.highlight ? 'text-[#ffb4ab]' : 'text-[#e5e2e1]'}`}>
                  {item.value}
                </span>
                <span className="font-mono text-[9px] text-[#af8783] mt-1">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Inline Visual Data Chart: Academic Efficiency Sparkline */}
          <div className="mt-6 p-4 bg-[#0e0e0e] border border-[#2a2a2a] flex flex-col gap-2 relative">
            <div className="flex items-center justify-between font-mono text-[9px] text-[#af8783]">
              <span className="tracking-wider">PERFORMANCE INDEX TRAJECTORY</span>
              <span className="text-[#77d1ff] font-semibold">STABLE // HIGH-TIER</span>
            </div>

            {/* Sparkline SVG with hover nodes */}
            <div className="relative w-full h-14 flex items-center">
              <svg 
                className="w-full h-12 text-[#ffb4ab]" 
                preserveAspectRatio="none" 
                viewBox="0 0 500 48"
              >
                {/* Horizontal Baseline Grids */}
                <line x1="0" y1="40" x2="500" y2="40" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="0" y1="24" x2="500" y2="24" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="0" y1="8" x2="500" y2="8" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2 2" />

                {/* Polyline */}
                <polyline 
                  fill="none" 
                  points="0,40 100,32 200,28 300,16 400,14 500,8" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                />
                
                {/* Nodes */}
                {PROFILE_DOSSIER.sparklinePoints.map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r={hoveredPoint === i ? "5" : i === 5 ? "3.5" : "2"}
                    fill={hoveredPoint === i ? "#ff5449" : "currentColor"}
                    className="cursor-pointer transition-all duration-150"
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}
              </svg>

              {/* Hover Floating Data Readout */}
              {hoveredPoint !== null && (
                <div 
                  className="absolute -top-8 px-2 py-1 bg-[#201f1f] border border-[#ff5449] text-[10px] font-mono text-[#e5e2e1] pointer-events-none transform -translate-x-1/2 whitespace-nowrap z-20 shadow-lg"
                  style={{ left: `${(PROFILE_DOSSIER.sparklinePoints[hoveredPoint].x / 500) * 100}%` }}
                >
                  <span className="text-[#ffb4ab] font-bold">{PROFILE_DOSSIER.sparklinePoints[hoveredPoint].term}:</span>{' '}
                  {PROFILE_DOSSIER.sparklinePoints[hoveredPoint].gpa} GPA
                </div>
              )}
            </div>

            {/* Scale Marker Ticks */}
            <div className="flex justify-between items-center text-[8px] font-mono text-[#af8783] px-1">
              <span>SEM 01 [8.4]</span>
              <span>SEM 02 [8.6]</span>
              <span className="text-[#ffb4ab]">CURRENT [8.8 TRAJECTORY]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
