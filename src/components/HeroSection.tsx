import { HERO_BACKDROP_IMAGE } from '../data/portfolioData';

export function HeroSection() {
  return (
    <section 
      id="hero-section"
      className="relative w-full min-h-[92vh] flex flex-col justify-between p-4 md:p-8 xl:p-12 overflow-hidden bg-[#0e0e0e] select-none"
    >
      {/* Atmospheric Visual Backdrop */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-luminosity opacity-40 transform scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        style={{ backgroundImage: `url('${HERO_BACKDROP_IMAGE}')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent" />

      {/* Top System Readout Bar */}
      <div className="relative z-10 w-full flex flex-wrap items-center justify-between gap-3 text-[#e8bcb7] font-mono text-[11px]">
        <div className="flex items-center gap-2 px-3 py-1 bg-[#201f1f]/80 backdrop-blur-sm border border-[#2a2a2a]">
          <span className="w-2 h-2 rounded-none bg-[#ffb4ab] animate-laser"></span>
          <span className="text-[#e5e2e1] tracking-widest uppercase font-semibold">
            AVAILABLE FOR INTERNSHIPS // COLLABORATIONS
          </span>
        </div>
        
        <div className="flex items-center gap-4 font-mono text-[9px] text-[#af8783]">
          <span>LOC: <strong className="text-[#e5e2e1] font-normal">BLR [13.0827° N, 77.5877° E]</strong></span>
          <span>INDEX: <strong className="text-[#ffb4ab] font-normal">SYS_V3.08</strong></span>
        </div>
      </div>

      {/* Central Hero Headline Layer */}
      <div className="relative z-10 my-auto py-8 flex flex-col max-w-6xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[9px] px-2 py-0.5 bg-[#ffb4ab] text-[#690005] font-bold uppercase tracking-widest">
            PERSONNEL DOSSIER
          </span>
          <span className="font-mono text-[9px] text-[#af8783] tracking-widest">
            // CLASSIFICATION: UNRESTRICTED
          </span>
        </div>

        <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl md:text-[88px] md:leading-[88px] text-[#e5e2e1] uppercase font-bold tracking-tighter mb-4">
          TAVISH SHARMA
        </h1>

        <p className="text-base sm:text-lg text-[#ffb4ab] tracking-widest uppercase mb-4 font-mono font-medium">
          AI / ML ENGINEERING // FULL-STACK DEVELOPMENT
        </p>

        <p className="max-w-2xl text-[#e8bcb7]/90 text-sm sm:text-base leading-relaxed font-sans">
          Building intelligent systems and digital experiences at the intersection of applied machine learning, deterministic software engineering, and the modern decentralized web.
        </p>
      </div>

      {/* Bottom Telemetry HUD Matrix */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#2a2a2a] w-full mt-6 border border-[#2a2a2a]">
        <div className="bg-[#0e0e0e] p-4 flex flex-col justify-between hover:bg-[#1c1b1b] transition-colors group">
          <span className="font-mono text-[9px] text-[#af8783] tracking-wider">ACADEMIC STANDING</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#e5e2e1]">8.6</span>
            <span className="font-mono text-[9px] text-[#af8783]">/ 10.0 CGPA</span>
          </div>
        </div>

        <div className="bg-[#0e0e0e] p-4 flex flex-col justify-between hover:bg-[#1c1b1b] transition-colors group">
          <span className="font-mono text-[9px] text-[#af8783] tracking-wider">CURRENT TERM</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#e5e2e1]">SEM 03</span>
            <span className="font-mono text-[9px] text-[#ffb4ab]">B.TECH AI&amp;ML</span>
          </div>
        </div>

        <div className="bg-[#0e0e0e] p-4 flex flex-col justify-between hover:bg-[#1c1b1b] transition-colors group">
          <span className="font-mono text-[9px] text-[#af8783] tracking-wider">INSTITUTION</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-['Space_Grotesk'] text-lg font-semibold text-[#e5e2e1] uppercase tracking-tight">REVA UNIV</span>
            <span className="font-mono text-[9px] text-[#af8783]">BANGALORE</span>
          </div>
        </div>

        <div className="bg-[#0e0e0e] p-4 flex flex-col justify-between hover:bg-[#1c1b1b] transition-colors group">
          <span className="font-mono text-[9px] text-[#af8783] tracking-wider">CORE VECTOR</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-['Space_Grotesk'] text-lg font-semibold text-[#ffb4ab] uppercase tracking-tight">NEURAL &amp; FULL-STACK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
