import { Flag } from 'lucide-react';

export function TrajectorySection() {
  return (
    <section 
      id="trajectory"
      className="w-full px-4 md:px-8 xl:px-12 py-16 bg-[#0e0e0e] border-t border-[#2a2a2a]"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#ffb4ab] uppercase tracking-wider mb-3">
        <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
        <span>06 // FORWARD VECTOR</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#e5e2e1] uppercase tracking-tight font-bold">
            Current Trajectory &amp; Vectors
          </h2>
          <p className="text-sm text-[#e8bcb7]/80 max-w-xl mt-1 font-sans">
            Targeted engineering goals, structural disciplines, and active national hackathon deployments.
          </p>
        </div>

        <div className="font-mono text-[9px] text-[#af8783]">
          <span>CYCLE: <strong className="text-[#e5e2e1] font-normal">2026 // ROADMAP</strong></span>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#2a2a2a] border border-[#2a2a2a] mb-8">
        {/* Pillar 01 */}
        <div className="bg-[#1c1b1b] p-6 flex flex-col justify-between hover:bg-[#201f1f] transition-colors">
          <div>
            <span className="font-mono text-[9px] text-[#ffb4ab] uppercase tracking-widest font-semibold">
              PILLAR 01 // INTERFACE
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] mt-2 mb-3 uppercase font-bold">
              Full-Stack Scale
            </h3>
            <p className="text-xs text-[#e8bcb7]/80 leading-relaxed font-sans">
              Building high-performance web applications and digital interfaces with surgical precision, uncompromising typographics, and sub-second latency.
            </p>
          </div>
          <div className="mt-6 font-mono text-[9px] text-[#af8783] border-t border-[#2a2a2a] pt-3">
            TARGET: FLASK × MODERN REACTIVE WEB
          </div>
        </div>

        {/* Pillar 02 */}
        <div className="bg-[#1c1b1b] p-6 flex flex-col justify-between hover:bg-[#201f1f] transition-colors">
          <div>
            <span className="font-mono text-[9px] text-[#77d1ff] uppercase tracking-widest font-semibold">
              PILLAR 02 // INTELLIGENCE
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] mt-2 mb-3 uppercase font-bold">
              AI / ML Rigor
            </h3>
            <p className="text-xs text-[#e8bcb7]/80 leading-relaxed font-sans">
              Developing rigorous machine learning foundations, stochastic modeling, statistical pipelines, and adaptive intelligent agent architectures.
            </p>
          </div>
          <div className="mt-6 font-mono text-[9px] text-[#af8783] border-t border-[#2a2a2a] pt-3">
            TARGET: PRODUCTION MODEL PIPELINES
          </div>
        </div>

        {/* Pillar 03 */}
        <div className="bg-[#1c1b1b] p-6 flex flex-col justify-between hover:bg-[#201f1f] transition-colors">
          <div>
            <span className="font-mono text-[9px] text-[#e8bcb7] uppercase tracking-widest font-semibold">
              PILLAR 03 // INFRASTRUCTURE
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] mt-2 mb-3 uppercase font-bold">
              Software Engineering
            </h3>
            <p className="text-xs text-[#e8bcb7]/80 leading-relaxed font-sans">
              Strengthening low-overhead Data Structures &amp; Algorithms, relational DBMS calculus, Python object paradigms, and distributed system stability.
            </p>
          </div>
          <div className="mt-6 font-mono text-[9px] text-[#af8783] border-t border-[#2a2a2a] pt-3">
            TARGET: HIGH-EFFICIENCY ALGORITHMS
          </div>
        </div>
      </div>

      {/* Live Milestone Spotlight: SIH */}
      <div className="bg-[#201f1f] border border-[#2a2a2a] p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden group">
        <div className="absolute -right-8 -top-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
          <Flag className="w-64 h-64 text-[#ffb4ab]" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 font-mono text-[9px] text-[#ffb4ab] mb-2">
            <span className="w-2 h-2 bg-[#ffb4ab] animate-laser"></span>
            <span className="uppercase tracking-widest font-bold">NATIONAL HACKATHON INITIATIVE</span>
          </div>

          <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-[#e5e2e1] uppercase font-bold leading-tight">
            Smart India Hackathon (SIH) Preparation
          </h3>

          <p className="text-sm text-[#e8bcb7]/80 max-w-2xl mt-2 font-sans leading-relaxed">
            Assembling high-impact prototype architecture across national deployment tracks. Translating technical research and machine learning models into solved sovereign operational problem statements.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10">
          <div className="px-4 py-2 bg-[#0e0e0e] border border-[#2a2a2a] font-mono text-[11px] text-[#77d1ff] flex items-center justify-center">
            TRACK: PRE-ROUND COHORTS
          </div>
          <div className="px-4 py-2 bg-[#ffb4ab] text-[#690005] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center justify-center shadow-md">
            PROTOTYPE IN PROGRESS
          </div>
        </div>
      </div>
    </section>
  );
}
