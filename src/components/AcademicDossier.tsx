import { useState } from 'react';
import { COURSE_MODULES } from '../data/portfolioData';
import { CourseModule } from '../types';
import { ChevronRight, CheckCircle2, Clock } from 'lucide-react';

interface AcademicDossierProps {
  onSelectModule: (module: CourseModule) => void;
}

export function AcademicDossier({ onSelectModule }: AcademicDossierProps) {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const filteredModules = filterCategory === 'ALL'
    ? COURSE_MODULES
    : COURSE_MODULES.filter(m => m.category === filterCategory);

  return (
    <section 
      id="education"
      className="w-full px-4 md:px-8 xl:px-12 py-16 bg-[#0e0e0e] border-t border-[#2a2a2a]"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#ffb4ab] uppercase tracking-wider mb-3">
        <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
        <span>02 // ACADEMIC DOSSIER</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#e5e2e1] uppercase tracking-tight font-bold">
            Formal Curriculum Architecture
          </h2>
          <p className="text-sm text-[#e8bcb7]/80 max-w-xl mt-1 font-sans">
            Rigorous theoretical and laboratory foundations designed to bridge computation, low-level architecture, and predictive analytics.
          </p>
        </div>

        <div className="font-mono text-[9px] text-[#af8783] text-left md:text-right">
          <span>DEGREE_SPEC: <span className="text-[#e5e2e1]">B.TECH (AI_ML)</span></span><br />
          <span>INST_CODE: <span className="text-[#e5e2e1]">REVA_BLR</span></span>
        </div>
      </div>

      {/* Timeline Banner Block */}
      <div className="w-full bg-[#1c1b1b] border border-[#2a2a2a] p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[9px] px-2 py-0.5 bg-[#2a2a2a] text-[#e5e2e1] tracking-widest uppercase font-semibold">
            DEGREE CANDIDATE
          </span>
          <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] mt-2 font-bold">
            B.Tech in Artificial Intelligence &amp; Machine Learning
          </h3>
          <p className="text-sm text-[#e8bcb7]/80 mt-1 font-sans">
            REVA University, Bangalore | 3rd Semester | Cumulative GPA: <strong className="text-[#ffb4ab] font-normal">8.6 / 10.0</strong>
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] shrink-0">
          <span className="px-3 py-1 bg-[#131313] border border-[#2a2a2a] text-[#77d1ff]">
            2024 — 2028
          </span>
          <span className="px-3 py-1 bg-[#131313] border border-[#2a2a2a] text-[#e5e2e1]">
            STATUS: IN PROGRESS
          </span>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
        <span className="font-mono text-[9px] text-[#af8783] uppercase tracking-wider mr-1">FILTER:</span>
        {['ALL', 'Core', 'Math', 'Systems', 'Hardware'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-2.5 py-0.5 font-mono text-[10px] uppercase transition-colors border ${
              filterCategory === cat
                ? 'bg-[#ffb4ab] text-[#690005] border-[#ffb4ab] font-bold'
                : 'bg-[#1c1b1b] text-[#af8783] border-[#2a2a2a] hover:text-[#e5e2e1]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Coursework Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#2a2a2a] border border-[#2a2a2a]">
        {filteredModules.map((module) => (
          <div 
            key={module.id}
            onClick={() => onSelectModule(module)}
            className="bg-[#1c1b1b] p-4 flex flex-col justify-between min-h-[140px] hover:bg-[#201f1f] transition-all cursor-pointer group relative"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#af8783]">{module.code}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#ffb4ab] text-xs">
                  <ChevronRight className="w-3.5 h-3.5 inline" />
                </span>
              </div>
              <h4 className="font-['Space_Grotesk'] text-base text-[#e5e2e1] mt-3 font-semibold group-hover:text-[#ffb4ab] transition-colors leading-snug">
                {module.title}
              </h4>
            </div>

            <div>
              <p className="font-mono text-[9px] text-[#e8bcb7]/70 mt-2 leading-tight">
                {module.description}
              </p>
              <div className="mt-3 pt-2 border-t border-[#2a2a2a]/60 flex items-center justify-between text-[8px] font-mono text-[#af8783]">
                <span>{module.category.toUpperCase()}</span>
                <span className="flex items-center gap-1 text-[#77d1ff]">
                  {module.status === 'COMPLETED' ? (
                    <><CheckCircle2 className="w-2.5 h-2.5" /> VERIFIED</>
                  ) : (
                    <><Clock className="w-2.5 h-2.5" /> RUNNING</>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
