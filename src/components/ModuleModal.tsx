import { CourseModule } from '../types';
import { CheckCircle2, Clock } from 'lucide-react';

interface ModuleModalProps {
  module: CourseModule | null;
  onClose: () => void;
}

export function ModuleModal({ module, onClose }: ModuleModalProps) {
  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1c1b1b] border border-[#ff5449] w-full max-w-xl p-6 shadow-2xl relative">
        <div className="flex justify-between items-center border-b border-[#2a2a2a] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 bg-[#201f1f] text-[#ffb4ab] border border-[#2a2a2a] font-bold">
              {module.code}
            </span>
            <span className="font-mono text-[10px] text-[#af8783] uppercase tracking-widest">
              CURRICULUM MODULE BREAKDOWN
            </span>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-xs text-[#af8783] hover:text-[#e5e2e1] px-2 py-0.5 border border-[#2a2a2a]"
          >
            [CLOSE]
          </button>
        </div>

        <h3 className="font-['Space_Grotesk'] text-2xl text-[#e5e2e1] font-bold mb-1">
          {module.title}
        </h3>
        <p className="font-mono text-xs text-[#77d1ff] mb-4">
          CATEGORY: {module.category.toUpperCase()} &bull; {module.description}
        </p>

        {/* Status Card */}
        <div className="p-3 bg-[#0e0e0e] border border-[#2a2a2a] mb-4 flex items-center justify-between font-mono text-xs">
          <span className="text-[#af8783]">VERIFICATION STATUS:</span>
          <span className="flex items-center gap-1.5 text-[#ffb4ab] font-bold">
            {module.status === 'COMPLETED' ? (
              <><CheckCircle2 className="w-4 h-4 text-green-400" /> COMPLETED &amp; VERIFIED</>
            ) : (
              <><Clock className="w-4 h-4 text-[#77d1ff]" /> CURRENT SEMESTER CYCLE</>
            )}
          </span>
        </div>

        {/* Syllabus Key Topics */}
        <div className="mb-4">
          <div className="font-mono text-[10px] text-[#af8783] uppercase tracking-wider mb-2 font-bold">
            CORE MATHEMATICAL &amp; COMPUTATIONAL TOPICS:
          </div>
          <div className="space-y-1.5">
            {module.topics.map((topic, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-sans text-[#e8bcb7]">
                <span className="w-1 h-1 bg-[#ff5449]"></span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Frameworks & Laboratory Tools */}
        <div className="mb-6">
          <div className="font-mono text-[10px] text-[#af8783] uppercase tracking-wider mb-2 font-bold">
            LABORATORY TOOLS &amp; ENVIRONMENTS:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {module.tools.map((tool, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-[#201f1f] border border-[#2a2a2a] font-mono text-xs text-[#e5e2e1]">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#ff5449] text-[#5c0004] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#e5e2e1] hover:text-[#131313] transition-colors"
        >
          ACKNOWLEDGE &amp; RETURN
        </button>
      </div>
    </div>
  );
}
