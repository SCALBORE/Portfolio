import { BlueprintProject } from '../types';
import { ExternalLink, Cpu } from 'lucide-react';

interface BlueprintModalProps {
  project: BlueprintProject | null;
  onClose: () => void;
}

export function BlueprintModal({ project, onClose }: BlueprintModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1c1b1b] border border-[#ff5449] w-full max-w-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b border-[#2a2a2a] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 bg-[#ff5449] text-[#5c0004] font-bold">
              {project.code}
            </span>
            <span className="font-mono text-[10px] text-[#af8783] uppercase tracking-widest">
              SYSTEM BLUEPRINT SPECIFICATION
            </span>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-xs text-[#af8783] hover:text-[#e5e2e1] px-2 py-0.5 border border-[#2a2a2a]"
          >
            [CLOSE]
          </button>
        </div>

        <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-[#e5e2e1] font-bold uppercase mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-[#ffb4ab] mb-4">
          {project.subtitle} &bull; STACK: {project.techStack}
        </p>

        {/* Status Readout Banner */}
        <div className="p-4 bg-[#0e0e0e] border border-[#2a2a2a] mb-6 flex flex-col gap-1">
          <span className="font-mono text-[9px] text-[#ff5449] uppercase tracking-widest font-bold">
            STATUS READOUT
          </span>
          <p className="font-mono text-xs text-[#e5e2e1] font-semibold">
            {project.statusReadout}
          </p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-sm text-[#e8bcb7] leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Target Engineering Metrics */}
        <div className="mb-6">
          <div className="font-mono text-[10px] text-[#af8783] uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#77d1ff]" />
            <span>CALIBRATION METRICS:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 bg-[#0e0e0e] p-3 border border-[#2a2a2a]">
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key} className="flex flex-col">
                <span className="font-mono text-[9px] text-[#af8783]">{key}</span>
                <span className="font-mono text-xs text-[#e5e2e1] font-semibold">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Pillars */}
        <div className="mb-6">
          <div className="font-mono text-[10px] text-[#af8783] uppercase tracking-wider mb-2 font-bold">
            ARCHITECTURAL SUBSYSTEMS:
          </div>
          <div className="space-y-1.5">
            {project.architectureDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#e8bcb7]">
                <span className="w-1.5 h-1.5 bg-[#77d1ff] mt-1 shrink-0"></span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {project.githubSlug && (
            <a
              href={`https://github.com/${project.githubSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 bg-[#201f1f] border border-[#2a2a2a] hover:border-[#ff5449] text-[#e5e2e1] font-mono text-xs font-bold uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{project.liveUrl ? "GITHUB REPOSITORY" : "GITHUB REPOSITORY STUB"}</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 bg-[#201f1f] border border-[#2a2a2a] hover:border-[#77d1ff] text-[#e5e2e1] font-mono text-xs font-bold uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>VIEW LIVE</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-[#ff5449] text-[#5c0004] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#e5e2e1] hover:text-[#131313] transition-colors"
          >
            RETURN TO DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
}
