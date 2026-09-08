import { CAPABILITY_VECTORS } from '../data/portfolioData';

export function CapabilitiesSection() {
  return (
    <section 
      id="capabilities"
      className="w-full px-4 md:px-8 xl:px-12 py-16 bg-[#131313] border-t border-[#2a2a2a]"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#ffb4ab] uppercase tracking-wider mb-3">
        <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
        <span>03 // SYSTEM CAPABILITIES</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#e5e2e1] uppercase tracking-tight font-bold">
            Verified Engineering Stack
          </h2>
          <p className="text-sm text-[#e8bcb7]/80 max-w-xl mt-1 font-sans">
            Honest capability matrix. Every capability reflects hands-on codebase execution without synthetic proficiency metrics.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[9px] text-[#af8783]">
          <span className="w-2 h-2 bg-[#ffb4ab]"></span> 
          <span>OPERATIONAL</span>
          <span className="w-2 h-2 bg-[#af8783] ml-2"></span> 
          <span>REINFORCING</span>
        </div>
      </div>

      {/* Capability Panels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#2a2a2a] border border-[#2a2a2a]">
        {CAPABILITY_VECTORS.map((cap) => {
          const statusColor = 
            cap.statusType === 'primary' ? 'text-[#ffb4ab]' :
            cap.statusType === 'tertiary' ? 'text-[#77d1ff]' : 'text-[#af8783]';

          const dotColor = 
            cap.statusType === 'primary' ? 'bg-[#ffb4ab]' :
            cap.statusType === 'tertiary' ? 'bg-[#77d1ff]' : 'bg-[#af8783]';

          return (
            <div 
              key={cap.id} 
              className="bg-[#1c1b1b] p-6 flex flex-col justify-between hover:bg-[#201f1f] transition-colors group relative"
            >
              <div>
                <div className="flex items-center justify-between text-[#af8783] font-mono text-[9px] mb-3">
                  <span>{cap.vectorId}</span>
                  <span className={`${statusColor} font-bold`}>{cap.statusTag}</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#e5e2e1] mb-2 font-bold group-hover:text-[#ffb4ab] transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-[#e8bcb7]/80 font-sans mb-4 leading-relaxed">
                  {cap.description}
                </p>

                {cap.tags && cap.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cap.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 bg-[#131313] border border-[#2a2a2a] font-mono text-[9px] text-[#e5e2e1] hover:border-[#ff5449] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 bg-[#201f1f]/60 p-3 border border-[#2a2a2a]/60">
                <div className="flex items-center gap-2 font-mono text-[9px] text-[#e5e2e1]">
                  <span className={`w-1.5 h-1.5 ${dotColor} shrink-0`}></span>
                  <span className="truncate">{cap.footerStandard}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
