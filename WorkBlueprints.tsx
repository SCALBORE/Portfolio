import { BLUEPRINT_PROJECTS } from '../data/portfolioData';
import { BlueprintProject } from '../types';
import { Maximize2 } from 'lucide-react';

interface WorkBlueprintsProps {
  onSelectBlueprint: (project: BlueprintProject) => void;
}

export function WorkBlueprints({ onSelectBlueprint }: WorkBlueprintsProps) {
  return (
    <section 
      id="work"
      className="w-full px-4 md:px-8 xl:px-12 py-16 bg-[#0e0e0e] border-t border-[#2a2a2a]"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#ffb4ab] uppercase tracking-wider mb-3">
        <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
        <span>04 // SELECTED WORK ARCHIVE</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#e5e2e1] uppercase tracking-tight font-bold">
            System Build Blueprints
          </h2>
          <p className="text-sm text-[#e8bcb7]/80 max-w-xl mt-1 font-sans">
            Strict honesty policy: Active builds undergo real-time local compilation before public benchmarking.
          </p>
        </div>

        <div className="font-mono text-[9px] text-[#af8783]">
          <span>ARCHIVE_STATE: <strong className="text-[#e5e2e1] font-normal">05 ACTIVE SLOTS</strong></span>
        </div>
      </div>

      {/* 5 Visual Blueprint Slots */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project 01: AI/ML Pipeline */}
        <div 
          onClick={() => onSelectBlueprint(BLUEPRINT_PROJECTS[0])}
          className="bg-[#1c1b1b] border border-[#2a2a2a] p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden group cursor-pointer hover:border-[#ff5449]/80 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffb4ab]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between text-[#af8783] font-mono text-[9px] mb-4">
              <span className="text-[#ffb4ab] font-bold">[SYS_AI_01]</span>
              <span className="flex items-center gap-1.5">
                PIPELINE_DEV
                <Maximize2 className="w-3 h-3 text-[#ffb4ab] opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] uppercase font-bold group-hover:text-[#ffb4ab] transition-colors leading-tight">
              AI / ML Intelligent System Pipeline
            </h3>
            
            <p className="font-mono text-[11px] text-[#af8783] mt-1 uppercase tracking-wider">
              Automated Prediction &amp; Feature Engine
            </p>

            {/* Wireframe Technical Schematic Graphic */}
            <div className="my-6 p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col gap-2">
              <div className="flex justify-between items-center text-[#af8783] font-mono text-[9px]">
                <span>SCHEMATIC // PIPELINE</span>
                <span>SCK_LRN</span>
              </div>
              <div className="h-24 w-full flex items-center justify-center relative">
                <svg className="w-full h-full text-[#353534]" viewBox="0 0 200 80">
                  <rect x="10" y="25" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  <rect x="80" y="25" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  <rect x="150" y="25" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="50" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="120" y1="40" x2="150" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="65" cy="40" r="2.5" fill="#ff5449" />
                  <circle cx="135" cy="40" r="2.5" fill="#ff5449" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-4 bg-[#0e0e0e] border border-[#2a2a2a] p-4">
            <span className="font-mono text-[9px] text-[#ffb4ab] uppercase tracking-widest block font-bold">
              STATUS READOUT
            </span>
            <p className="font-mono text-[13px] text-[#e5e2e1] mt-1 font-medium leading-tight">
              PROJECT DETAILS COMING SOON // IN ACTIVE DEVELOPMENT
            </p>
          </div>
        </div>

        {/* Project 02: Full-Stack Web App */}
        <div 
          onClick={() => onSelectBlueprint(BLUEPRINT_PROJECTS[1])}
          className="bg-[#1c1b1b] border border-[#2a2a2a] p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden group cursor-pointer hover:border-[#77d1ff]/80 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#77d1ff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between text-[#af8783] font-mono text-[9px] mb-4">
              <span className="text-[#77d1ff] font-bold">[SYS_WEB_02]</span>
              <span className="flex items-center gap-1.5">
                APP_DEPLOY
                <Maximize2 className="w-3 h-3 text-[#77d1ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] uppercase font-bold group-hover:text-[#77d1ff] transition-colors leading-tight">
              Full-Stack Web Application
            </h3>
            
            <p className="font-mono text-[11px] text-[#af8783] mt-1 uppercase tracking-wider">
              Modular Micro-Client &amp; Python Backend
            </p>

            {/* Wireframe Technical Schematic Graphic */}
            <div className="my-6 p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col gap-2">
              <div className="flex justify-between items-center text-[#af8783] font-mono text-[9px]">
                <span>SCHEMATIC // REST_API</span>
                <span>FLASK // JS</span>
              </div>
              <div className="h-24 w-full flex items-center justify-center relative">
                <svg className="w-full h-full text-[#353534]" viewBox="0 0 200 80">
                  <circle cx="40" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="160" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M 58 35 L 142 35" stroke="currentColor" strokeWidth="1" />
                  <path d="M 142 45 L 58 45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="100" cy="35" r="2.5" fill="#77d1ff" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-4 bg-[#0e0e0e] border border-[#2a2a2a] p-4">
            <span className="font-mono text-[9px] text-[#77d1ff] uppercase tracking-widest block font-bold">
              STATUS READOUT
            </span>
            <p className="font-mono text-[13px] text-[#e5e2e1] mt-1 font-medium leading-tight">
              PROJECT DETAILS COMING SOON // REPOSITORY SYNC PENDING
            </p>
          </div>
        </div>

        {/* Project 03: Experimental Neural Build */}
        <div 
          onClick={() => onSelectBlueprint(BLUEPRINT_PROJECTS[2])}
          className="bg-[#1c1b1b] border border-[#2a2a2a] p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden group cursor-pointer hover:border-[#ff5449]/80 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff5449]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between text-[#af8783] font-mono text-[9px] mb-4">
              <span className="text-[#ffb4ab] font-bold">[SYS_EXP_03]</span>
              <span className="flex items-center gap-1.5">
                RESEARCH_LAB
                <Maximize2 className="w-3 h-3 text-[#ffb4ab] opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] uppercase font-bold group-hover:text-[#ffb4ab] transition-colors leading-tight">
              Experimental Neural Build
            </h3>
            
            <p className="font-mono text-[11px] text-[#af8783] mt-1 uppercase tracking-wider">
              Computational Matrix Optimization
            </p>

            {/* Wireframe Technical Schematic Graphic */}
            <div className="my-6 p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col gap-2">
              <div className="flex justify-between items-center text-[#af8783] font-mono text-[9px]">
                <span>SCHEMATIC // SYNAPSE_NET</span>
                <span>NUMPY // TENSOR</span>
              </div>
              <div className="h-24 w-full flex items-center justify-center relative">
                <svg className="w-full h-full text-[#353534]" viewBox="0 0 200 80">
                  <circle cx="30" cy="20" r="3" fill="currentColor" />
                  <circle cx="30" cy="40" r="3" fill="currentColor" />
                  <circle cx="30" cy="60" r="3" fill="currentColor" />
                  <circle cx="100" cy="30" r="3.5" fill="#ff5449" />
                  <circle cx="100" cy="50" r="3.5" fill="#ff5449" />
                  <circle cx="170" cy="40" r="3" fill="currentColor" />
                  
                  <line x1="30" y1="20" x2="100" y2="30" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="30" y1="40" x2="100" y2="30" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="30" y1="60" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="100" y1="30" x2="170" y2="40" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="100" y1="50" x2="170" y2="40" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-4 bg-[#0e0e0e] border border-[#2a2a2a] p-4">
            <span className="font-mono text-[9px] text-[#ffb4ab] uppercase tracking-widest block font-bold">
              STATUS READOUT
            </span>
            <p className="font-mono text-[13px] text-[#e5e2e1] mt-1 font-medium leading-tight">
              PROJECT DETAILS COMING SOON // BENCHMARKING
            </p>
          </div>
        </div>

        {/* Project 04: NOVA Chat Interface */}
        <div 
          onClick={() => onSelectBlueprint(BLUEPRINT_PROJECTS[3])}
          className="bg-[#1c1b1b] border border-[#2a2a2a] p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden group cursor-pointer hover:border-[#77d1ff]/80 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#77d1ff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between text-[#af8783] font-mono text-[9px] mb-4">
              <span className="text-[#77d1ff] font-bold">[SYS_LLM_04]</span>
              <span className="flex items-center gap-1.5">
                LLM_DEPLOY
                <Maximize2 className="w-3 h-3 text-[#77d1ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] uppercase font-bold group-hover:text-[#77d1ff] transition-colors leading-tight">
              NOVA — Local LLM Chat Interface
            </h3>
            
            <p className="font-mono text-[11px] text-[#af8783] mt-1 uppercase tracking-wider">
              Qwen2.5-1.5B Conversational Engine
            </p>

            {/* Wireframe Technical Schematic Graphic */}
            <div className="my-6 p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col gap-2">
              <div className="flex justify-between items-center text-[#af8783] font-mono text-[9px]">
                <span>SCHEMATIC // INFERENCE_API</span>
                <span>FLASK // QWEN2.5</span>
              </div>
              <div className="h-24 w-full flex items-center justify-center relative">
                <svg className="w-full h-full text-[#353534]" viewBox="0 0 200 80">
                  <rect x="15" y="20" width="50" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <rect x="135" y="20" width="50" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M 65 35 L 135 35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M 135 45 L 65 45" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="45" r="2.5" fill="#77d1ff" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-4 bg-[#0e0e0e] border border-[#2a2a2a] p-4">
            <span className="font-mono text-[9px] text-[#77d1ff] uppercase tracking-widest block font-bold">
              STATUS READOUT
            </span>
            <p className="font-mono text-[13px] text-[#e5e2e1] mt-1 font-medium leading-tight">
              LIVE // FRONTEND DEPLOYED ON GITHUB PAGES
            </p>
          </div>
        </div>

        {/* Project 05: 2D Terminal Graphics Engine */}
        <div 
          onClick={() => onSelectBlueprint(BLUEPRINT_PROJECTS[4])}
          className="bg-[#1c1b1b] border border-[#2a2a2a] p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden group cursor-pointer hover:border-[#ff5449]/80 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffb4ab]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between text-[#af8783] font-mono text-[9px] mb-4">
              <span className="text-[#ffb4ab] font-bold">[SYS_GFX_05]</span>
              <span className="flex items-center gap-1.5">
                GRAPHICS_ENGINE
                <Maximize2 className="w-3 h-3 text-[#ffb4ab] opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] uppercase font-bold group-hover:text-[#ffb4ab] transition-colors leading-tight">
              2D Terminal Graphics Engine
            </h3>
            
            <p className="font-mono text-[11px] text-[#af8783] mt-1 uppercase tracking-wider">
              Display-List Rasterization in C
            </p>

            {/* Wireframe Technical Schematic Graphic */}
            <div className="my-6 p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col gap-2">
              <div className="flex justify-between items-center text-[#af8783] font-mono text-[9px]">
                <span>SCHEMATIC // RASTER_ENGINE</span>
                <span>C // ANSI_CLI</span>
              </div>
              <div className="h-24 w-full flex items-center justify-center relative">
                <svg className="w-full h-full text-[#353534]" viewBox="0 0 200 80">
                  <circle cx="45" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                  <rect x="90" y="20" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <polygon points="165,20 185,60 145,60" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="45" cy="40" r="2.5" fill="#ff5449" />
                  <circle cx="110" cy="40" r="2.5" fill="#ff5449" />
                  <circle cx="165" cy="47" r="2.5" fill="#ff5449" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-4 bg-[#0e0e0e] border border-[#2a2a2a] p-4">
            <span className="font-mono text-[9px] text-[#ffb4ab] uppercase tracking-widest block font-bold">
              STATUS READOUT
            </span>
            <p className="font-mono text-[13px] text-[#e5e2e1] mt-1 font-medium leading-tight">
              LIVE // DASHBOARD DEPLOYED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
