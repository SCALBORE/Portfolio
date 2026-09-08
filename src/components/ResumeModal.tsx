import { Printer, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { IDENTITY_JSON, COURSE_MODULES, CAPABILITY_VECTORS, CREDENTIAL_ITEMS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export function ResumeModal({ isOpen, onClose, onShowToast }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `TAVISH SHARMA - PERSONNEL DOSSIER
AI/ML Engineering & Full-Stack Development
REVA University, Bangalore | B.Tech AIML (2024 - 2028)
CGPA: 8.6 / 10.0
Github: https://github.com/scalbore
Email: tavish.sharma@domain.placeholder

CORE SKILLS:
- Python (PEP8, OOP, Scripting)
- Machine Learning (Scikit-Learn, Supervised/Unsupervised, Model Evaluation)
- Data Science (NumPy, Pandas, Matplotlib, Seaborn)
- Software Engineering (DSA, Flask, HTML/CSS/JS)
- Databases (DBMS, SQL, Relational Schema Design)
- Tools: Git, GitHub, Linux CLI

CREDENTIALS:
- Ignite India 5.0 (Wadhwani Foundation) - Content & Program Completion (84 Hours total)
- Python Matplotlib Data Visualization Specialization`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    onShowToast("RESUME DOSSIER COPIED TO CLIPBOARD.");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#131313] border border-[#ff5449] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Modal Top Rail */}
        <div className="h-12 bg-[#1c1b1b] border-b border-[#2a2a2a] px-4 md:px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff5449] animate-laser"></span>
            <span className="font-mono text-xs text-[#ffb4ab] uppercase font-bold tracking-wider">
              DOSSIER // RESUME.PDF [DOC_ID: TS-2026-ENG]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-2.5 py-1 bg-[#201f1f] border border-[#2a2a2a] text-[#e5e2e1] hover:text-[#ffb4ab] font-mono text-[10px] flex items-center gap-1.5 transition-colors uppercase"
            >
              {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIED' : 'COPY TEXT'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-2.5 py-1 bg-[#ff5449] text-[#5c0004] hover:bg-[#e5e2e1] font-mono text-[10px] font-bold flex items-center gap-1.5 transition-colors uppercase"
            >
              <Printer className="w-3 h-3" />
              <span>PRINT / SAVE PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-2.5 py-1 bg-[#201f1f] border border-[#2a2a2a] text-[#af8783] hover:text-[#e5e2e1] font-mono text-[10px] transition-colors uppercase"
            >
              [CLOSE]
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 md:p-10 overflow-y-auto font-sans text-[#e5e2e1] space-y-8 bg-[#0e0e0e]">
          {/* Header section */}
          <div className="border-b border-[#2a2a2a] pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="font-mono text-[10px] text-[#ffb4ab] tracking-widest uppercase mb-1">
                ENGINEERING PROFILE RECORD
              </div>
              <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#e5e2e1] font-bold uppercase tracking-tight">
                {IDENTITY_JSON.engineer}
              </h1>
              <p className="font-mono text-xs text-[#77d1ff] mt-1 uppercase tracking-wider">
                AI / ML Engineering &bull; Full-Stack Development &bull; Systems Modeling
              </p>
            </div>

            <div className="font-mono text-[10px] text-[#af8783] text-left md:text-right space-y-0.5">
              <div>LOCATION: Bangalore, Karnataka, India</div>
              <div>AFFILIATION: REVA University (AIML Dept)</div>
              <div>EMAIL: tavish.sharma@domain.placeholder</div>
              <div>GITHUB: github.com/scalbore</div>
            </div>
          </div>

          {/* Academic Profile */}
          <div>
            <div className="font-mono text-xs text-[#ffb4ab] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
              <span>1.0 ACADEMIC PROFILE &amp; STANDING</span>
            </div>
            <div className="bg-[#1c1b1b] border border-[#2a2a2a] p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#e5e2e1]">
                  Bachelor of Technology (B.Tech) — Artificial Intelligence &amp; Machine Learning
                </h3>
                <p className="text-xs text-[#e8bcb7]/80">REVA University, Bangalore | School of Computing &amp; Information Technology</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="font-mono text-sm font-bold text-[#ffb4ab]">8.6 / 10.0 CGPA</span>
                <div className="font-mono text-[9px] text-[#af8783]">COHORT: 2024 — 2028 (3RD SEM)</div>
              </div>
            </div>
          </div>

          {/* Verified Technical Stack */}
          <div>
            <div className="font-mono text-xs text-[#ffb4ab] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
              <span>2.0 CORE TECHNICAL COMPETENCIES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CAPABILITY_VECTORS.map(cap => (
                <div key={cap.id} className="p-3 bg-[#1c1b1b] border border-[#2a2a2a]">
                  <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                    <span className="font-bold text-[#e5e2e1]">{cap.title}</span>
                    <span className="text-[#ffb4ab]">{cap.statusTag}</span>
                  </div>
                  <p className="text-xs text-[#e8bcb7]/70 mb-2">{cap.description}</p>
                  {cap.tags && (
                    <div className="flex flex-wrap gap-1">
                      {cap.tags.map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono px-1.5 py-0.5 bg-[#131313] border border-[#2a2a2a] text-[#e5e2e1]">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Coursework Modules */}
          <div>
            <div className="font-mono text-xs text-[#ffb4ab] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
              <span>3.0 FORMAL CURRICULUM ARCHITECTURE</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {COURSE_MODULES.map(m => (
                <div key={m.id} className="p-2.5 bg-[#1c1b1b] border border-[#2a2a2a]">
                  <div className="font-mono text-[8px] text-[#af8783]">{m.code}</div>
                  <div className="font-semibold text-xs text-[#e5e2e1] mt-1">{m.title}</div>
                  <div className="font-mono text-[8px] text-[#77d1ff] mt-1">{m.category.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accreditations & Certifications */}
          <div>
            <div className="font-mono text-xs text-[#ffb4ab] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
              <span>4.0 ACCREDITATIONS &amp; PROGRAMS</span>
            </div>
            <div className="space-y-2">
              {CREDENTIAL_ITEMS.map(c => (
                <div key={c.id} className="p-3 bg-[#1c1b1b] border border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <div className="font-bold text-xs text-[#e5e2e1]">{c.title}</div>
                    <div className="text-[11px] text-[#e8bcb7]/70">{c.description}</div>
                  </div>
                  <div className="font-mono text-[9px] text-[#af8783] shrink-0 sm:text-right">
                    <span>{c.completedDate}</span> &bull; <span className="text-[#ffb4ab]">{c.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer of Dossier */}
          <div className="pt-4 border-t border-[#2a2a2a] font-mono text-[9px] text-[#af8783] flex justify-between">
            <span>OFFICIAL DOSSIER RECORD // COMPILED 2026</span>
            <span>VERIFIED ACADEMIC STANDING [8.6 CGPA]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
