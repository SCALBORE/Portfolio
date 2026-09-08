import { useState, FormEvent } from 'react';
import { Terminal, Share2, FileText, Send } from 'lucide-react';
import { IDENTITY_JSON } from '../data/portfolioData';

interface IdentityTerminalProps {
  onOpenResume: () => void;
  onOpenTerminalModal: () => void;
}

export function IdentityTerminal({ onOpenResume, onOpenTerminalModal }: IdentityTerminalProps) {
  const [inlineCommand, setInlineCommand] = useState('');
  const [inlineOutput, setInlineOutput] = useState<string | null>(null);

  const handleRunCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = inlineCommand.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setInlineOutput(null);
      setInlineCommand('');
      return;
    }
    if (cmd === 'help') {
      setInlineOutput("Available commands: 'cat /etc/identity.json', 'whoami', 'skills', 'gpa', 'contact', 'clear', 'open-terminal'");
    } else if (cmd.includes('whoami')) {
      setInlineOutput("tavish_sharma // role: AI/ML Engineering & Full-Stack Developer [REVA Univ]");
    } else if (cmd.includes('skills')) {
      setInlineOutput("Core: Python (PEP8, OOP), Data: NumPy, Pandas, Scikit-learn, Web: Flask, JS, DBMS: SQL, Tools: Git/CLI");
    } else if (cmd.includes('gpa')) {
      setInlineOutput("Cumulative Academic Index: 8.6 / 10.0 CGPA (Verified)");
    } else if (cmd.includes('contact')) {
      setInlineOutput("Direct Dispatch: tavish.sharma@domain.placeholder // Location: Bangalore, India");
    } else if (cmd.includes('cat') || cmd.includes('identity')) {
      setInlineOutput(JSON.stringify(IDENTITY_JSON, null, 2));
    } else if (cmd === 'open-terminal') {
      onOpenTerminalModal();
      setInlineOutput("Launching full terminal workspace...");
    } else {
      setInlineOutput(`Command not found: ${cmd}. Type 'help' or click buttons below.`);
    }
    setInlineCommand('');
  };

  return (
    <section 
      id="terminal"
      className="w-full px-4 md:px-8 xl:px-12 py-16 bg-[#131313] border-t border-[#2a2a2a]"
    >
      <div className="w-full max-w-5xl mx-auto bg-[#0e0e0e] border border-[#2a2a2a]">
        {/* Terminal Header Bar */}
        <div className="h-10 bg-[#201f1f] px-4 flex items-center justify-between border-b border-[#2a2a2a]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#ffb4ab] rounded-none"></span>
            <span className="w-2.5 h-2.5 bg-[#af8783] rounded-none"></span>
            <span className="w-2.5 h-2.5 bg-[#353534] rounded-none"></span>
            <span className="font-mono text-[9px] text-[#af8783] ml-2 font-bold tracking-wider">
              TS_SESSION // IDENTITY_CONSOLE_v3.08
            </span>
          </div>
          <div className="font-mono text-[9px] text-[#77d1ff] flex items-center gap-2">
            <span>NODE: @scalbore</span>
            <button
              onClick={onOpenTerminalModal}
              className="px-2 py-0.5 bg-[#131313] border border-[#2a2a2a] hover:border-[#ff5449] hover:text-[#ffb4ab] transition-colors uppercase font-mono text-[8px]"
            >
              EXPAND HUD
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm text-[#e5e2e1] flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#af8783] text-[9px]">
            <span>HOST: REVA-SYSTEMS</span>
            <span>//</span>
            <span>AUTH: ED25519_VALIDATED</span>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[#ffb4ab] font-bold text-xs sm:text-sm">$ cat /etc/identity.json</p>
            <pre className="text-xs font-mono text-[#e8bcb7]/90 bg-[#1c1b1b] border border-[#2a2a2a] p-4 overflow-x-auto leading-relaxed">
{JSON.stringify(IDENTITY_JSON, null, 2)}
            </pre>
          </div>

          {/* Interactive Inline Prompt */}
          <form onSubmit={handleRunCommand} className="flex items-center gap-2 pt-2 border-t border-[#2a2a2a]">
            <span className="text-[#ff5449] text-xs font-bold">$</span>
            <input
              type="text"
              value={inlineCommand}
              onChange={(e) => setInlineCommand(e.target.value)}
              placeholder="type 'help', 'skills', 'whoami', 'open-terminal'..."
              className="flex-1 bg-transparent text-xs font-mono text-[#e5e2e1] placeholder-[#af8783]/60 focus:outline-none"
            />
            <button
              type="submit"
              className="p-1.5 bg-[#201f1f] text-[#ffb4ab] hover:bg-[#2a2a2a] transition-colors"
              title="Execute"
            >
              <Send className="w-3 h-3" />
            </button>
          </form>

          {inlineOutput && (
            <div className="p-3 bg-[#131313] border border-[#ff5449]/40 text-xs font-mono text-[#77d1ff] whitespace-pre-wrap">
              {inlineOutput}
            </div>
          )}

          {/* Action Trigger Row */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a 
              href="https://github.com/scalbore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#ffb4ab] text-[#690005] font-mono text-[11px] font-bold uppercase transition-colors hover:bg-[#e5e2e1] hover:text-[#131313] flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>[ GITHUB // @scalbore ]</span>
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1c1b1b] border border-[#2a2a2a] text-[#e5e2e1] font-mono text-[11px] uppercase transition-colors hover:border-[#ffb4ab] hover:text-[#ffb4ab] flex items-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>[ LINKEDIN PROFILE ]</span>
            </a>

            <button 
              onClick={onOpenResume}
              className="px-4 py-2 bg-[#1c1b1b] border border-[#2a2a2a] text-[#e5e2e1] font-mono text-[11px] uppercase transition-colors hover:border-[#77d1ff] hover:text-[#77d1ff] flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#77d1ff]" />
              <span>[ VIEW RESUME ]</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
