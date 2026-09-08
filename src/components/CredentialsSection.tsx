import { useState } from 'react';
import { CREDENTIAL_ITEMS } from '../data/portfolioData';
import { CredentialItem } from '../types';
import { ShieldCheck, Copy, Check } from 'lucide-react';

export function CredentialsSection() {
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);
  const [copiedHash, setCopiedHash] = useState(false);

  const handleCopy = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section 
      id="credentials"
      className="w-full px-4 md:px-8 xl:px-12 py-16 bg-[#131313] border-t border-[#2a2a2a]"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#ffb4ab] uppercase tracking-wider mb-3">
        <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
        <span>05 // VERIFIED CREDENTIALS</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#e5e2e1] uppercase tracking-tight font-bold">
            Institutional Accreditations
          </h2>
          <p className="text-sm text-[#e8bcb7]/80 max-w-xl mt-1 font-sans">
            Formal curriculum programs, venture modeling, and specialized technical mastery certs.
          </p>
        </div>

        <div className="font-mono text-[9px] text-[#af8783] flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#ffb4ab]" />
          <span>AUTHENTICITY: <strong className="text-[#e5e2e1] font-normal">VERIFIED_HASH</strong></span>
        </div>
      </div>

      {/* Minimalist Vertical Archive List */}
      <div className="flex flex-col gap-[1px] bg-[#2a2a2a] border border-[#2a2a2a]">
        {CREDENTIAL_ITEMS.map((item) => {
          const isPending = item.status === 'CERTIFICATE PENDING';

          return (
            <div 
              key={item.id}
              onClick={() => setSelectedCred(item)}
              className="bg-[#1c1b1b] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-[#201f1f] cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <span className={`font-mono text-xl sm:text-2xl font-bold ${isPending ? 'text-[#af8783]' : 'text-[#ffb4ab]'}`}>
                  {item.index}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl text-[#e5e2e1] uppercase font-bold group-hover:text-[#ffb4ab] transition-colors">
                      {item.title}
                    </h3>
                    <span className={`px-2 py-0.5 bg-[#201f1f] border border-[#2a2a2a] font-mono text-[9px] font-semibold ${
                      isPending ? 'text-[#ffb4ab]' : 'text-[#77d1ff]'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#e8bcb7]/80 mt-1 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 md:shrink-0 font-mono text-[11px] justify-between md:justify-end">
                <span className="text-[#af8783] text-[10px] sm:text-[11px]">{item.completedDate}</span>
                <span className={`px-3 py-1 bg-[#201f1f] border border-[#2a2a2a] text-[10px] sm:text-[11px] ${
                  isPending ? 'text-[#ffb4ab] border-[#ff5449]/40' : 'text-[#e5e2e1]'
                }`}>
                  {isPending ? 'CERTIFICATE PENDING' : 'STATUS: ISSUED'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verification Hash Modal Drawer */}
      {selectedCred && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1c1b1b] border border-[#ff5449] w-full max-w-lg p-6 shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-[#2a2a2a] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff5449] animate-laser"></span>
                <span className="font-mono text-[10px] text-[#ffb4ab] uppercase tracking-widest font-bold">
                  CREDENTIAL VERIFICATION MATRIX
                </span>
              </div>
              <button 
                onClick={() => setSelectedCred(null)}
                className="font-mono text-xs text-[#af8783] hover:text-[#e5e2e1] px-2 py-1 border border-[#2a2a2a]"
              >
                [ESC // CLOSE]
              </button>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl text-[#e5e2e1] font-bold uppercase mb-1">
              {selectedCred.title}
            </h3>
            <p className="font-mono text-xs text-[#77d1ff] mb-4">
              ISSUER: {selectedCred.issuer} • DURATION: {selectedCred.hours || selectedCred.badge}
            </p>

            <div className="bg-[#0e0e0e] border border-[#2a2a2a] p-4 font-mono text-xs text-[#e5e2e1] flex flex-col gap-2 mb-4">
              <div className="text-[10px] text-[#af8783]">CRYPTOGRAPHIC VERIFICATION RECORD:</div>
              <div className="p-2 bg-[#131313] border border-[#2a2a2a] text-[11px] text-[#ffb4ab] break-all select-all flex items-center justify-between">
                <span>{selectedCred.verificationHash}</span>
                <button
                  onClick={() => handleCopy(selectedCred.verificationHash)}
                  className="ml-2 p-1.5 hover:bg-[#2a2a2a] text-[#e5e2e1] transition-colors"
                  title="Copy Hash"
                >
                  {copiedHash ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="text-[10px] text-[#af8783]">STATUS: <span className="text-[#e5e2e1]">{selectedCred.status}</span></div>
            </div>

            <p className="text-xs text-[#e8bcb7]/70 font-sans mb-6">
              {selectedCred.description}
            </p>

            <button
              onClick={() => setSelectedCred(null)}
              className="w-full py-2 bg-[#ff5449] text-[#5c0004] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#e5e2e1] hover:text-[#131313] transition-colors"
            >
              DISMISS RECORD
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
