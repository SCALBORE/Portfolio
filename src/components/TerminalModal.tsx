import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { IDENTITY_JSON, CAPABILITY_VECTORS, BLUEPRINT_PROJECTS, COURSE_MODULES } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface LogEntry {
  command?: string;
  output: string;
  type?: 'cmd' | 'output' | 'error' | 'success';
}

export function TerminalModal({ isOpen, onClose, onOpenResume }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      output: "TAVISH_SHARMA // COMMAND_CONSOLE v3.08\nConnected to node: @scalbore [REVA-SYSTEMS]\nType 'help' for available system commands or 'exit' to close.",
      type: 'success'
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    setHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const lower = trimmed.toLowerCase();

    if (lower === 'clear' || lower === 'cls') {
      setLogs([]);
      setInput('');
      return;
    }

    if (lower === 'exit' || lower === 'quit') {
      onClose();
      return;
    }

    let out = '';
    let type: LogEntry['type'] = 'output';

    if (lower === 'help') {
      out = `AVAILABLE DIAGNOSTIC & TELEMETRY COMMANDS:
  help                 Display command directory
  whoami               Display active engineer identity
  cat /etc/identity.json View raw personnel JSON record
  skills               List operational technical stack
  projects             List active system blueprints
  education            Display academic profile & coursework
  gpa                  View verified academic telemetry
  resume               Launch verified personnel dossier
  neofetch             Render engineering environment specs
  matrix               Simulate stream throughput
  date                 Display current host clock
  contact              Retrieve direct dispatch coords
  clear                Purge terminal buffer
  exit                 Terminate console session`;
    } else if (lower === 'whoami') {
      out = `USER: Tavish Sharma (@scalbore)
ROLE: AI/ML Engineering & Full-Stack Technologist
INSTITUTION: REVA University, Bangalore
STATUS: ACTIVE PIPELINE RESEARCH`;
    } else if (lower.includes('cat') && (lower.includes('identity') || lower.includes('json'))) {
      out = JSON.stringify(IDENTITY_JSON, null, 2);
    } else if (lower === 'skills') {
      out = CAPABILITY_VECTORS.map(c => `[${c.statusTag}] ${c.title}: ${c.description}`).join('\n');
    } else if (lower === 'projects') {
      out = BLUEPRINT_PROJECTS.map(p => `${p.code} ${p.title} -> ${p.statusReadout}`).join('\n');
    } else if (lower === 'education') {
      out = `DEGREE: B.Tech in Artificial Intelligence & Machine Learning\nREVA University (2024 - 2028)\nCGPA: 8.6 / 10.0\n\nCOURSEWORK MODULES:\n` +
        COURSE_MODULES.map(m => `• ${m.code}: ${m.title} (${m.description})`).join('\n');
    } else if (lower === 'gpa') {
      out = `CUMULATIVE GRADE POINT AVERAGE: 8.6 / 10.0\nSTATUS: VERIFIED ACADEMIC RECORD\nCYCLE: 3RD SEMESTER`;
    } else if (lower === 'resume') {
      out = `Opening Resume Dossier...`;
      onOpenResume();
    } else if (lower === 'neofetch') {
      out = `
  ######   scalbore@reva-command-center
 #######   -----------------------------
   ###     OS: Arch Linux x86_64 / Terminal HUD
   ###     HOST: REVA-SYSTEMS C&IT Node
  #####    KERNEL: 6.8.9-arch1-aiml
 #######   UPTIME: 3 Semesters (Active)
  #####    PACKAGES: Python 3.12, PyTorch, Scikit-learn, React 19
   ###     SHELL: zsh 5.9
   ###     TERMINAL: ts-command-center v3.08
  #####    CPU: Neural Matrix Accelerators [8.6 CGPA]
 #######   MEMORY: 100% Deterministic Engineering
      `;
    } else if (lower === 'matrix') {
      out = `01000001 01001001 00101111 01001101 01001100
01010011 01000011 01000001 01001100 01000010
01001111 01010010 01000101 00100000 00110010
ALL COMPUTATIONAL RUNTIMES CONVERGING OPTIMALLY.`;
    } else if (lower === 'date') {
      out = new Date().toUTCString() + ' (LOCAL: ' + new Date().toString() + ')';
    } else if (lower === 'contact') {
      out = `DIRECT TRANSMISSION: tavish.sharma@domain.placeholder
LOCATION: Bangalore, India [13.0827° N, 77.5877° E]
GITHUB: https://github.com/scalbore`;
    } else {
      out = `zsh: command not found: ${trimmed}. Type 'help' for diagnostics.`;
      type = 'error';
    }

    setLogs(prev => [...prev, { command: trimmed, output: out, type }]);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < history.length) {
          setHistoryIndex(nextIdx);
          setInput(history[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0e0e0e] border border-[#ff5449] w-full max-w-4xl h-[80vh] flex flex-col shadow-2xl relative">
        {/* Top Control Bar */}
        <div className="h-10 bg-[#201f1f] px-4 flex items-center justify-between border-b border-[#2a2a2a] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#ff5449]"></span>
            <span className="w-2.5 h-2.5 bg-[#af8783]"></span>
            <span className="w-2.5 h-2.5 bg-[#353534]"></span>
            <span className="font-mono text-xs text-[#e5e2e1] font-bold tracking-wider ml-2">
              BASH // INTERACTIVE_TELEMETRY_SHELL [TS_CLI_3.08]
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLogs([])}
              className="font-mono text-[10px] text-[#af8783] hover:text-[#e5e2e1] uppercase"
            >
              CLEAR
            </button>
            <button
              onClick={onClose}
              className="font-mono text-xs text-[#ffb4ab] hover:text-[#e5e2e1] font-bold px-2 py-0.5 border border-[#2a2a2a] bg-[#1c1b1b]"
            >
              [ESC // EXIT]
            </button>
          </div>
        </div>

        {/* Console Output Area */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-6 overflow-y-auto font-mono text-xs space-y-3 bg-[#0e0e0e] text-[#e5e2e1] cursor-text"
        >
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              {log.command && (
                <div className="flex items-center gap-2 text-[#ffb4ab]">
                  <span className="text-[#af8783]">scalbore@reva:~$</span>
                  <span className="font-bold">{log.command}</span>
                </div>
              )}
              <pre className={`whitespace-pre-wrap leading-relaxed ${
                log.type === 'error' ? 'text-red-400' :
                log.type === 'success' ? 'text-[#77d1ff]' : 'text-[#e8bcb7]/90'
              }`}>
                {log.output}
              </pre>
            </div>
          ))}

          {/* Active Input Line */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              executeCommand(input);
            }} 
            className="flex items-center gap-2 pt-2"
          >
            <span className="text-[#af8783] shrink-0">scalbore@reva:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-[#e5e2e1] caret-[#ff5449]"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Suggestions Footer */}
        <div className="h-10 bg-[#1c1b1b] border-t border-[#2a2a2a] px-4 flex items-center justify-between font-mono text-[10px] text-[#af8783] shrink-0 overflow-x-auto gap-3">
          <span className="shrink-0">QUICK CMDS:</span>
          <div className="flex items-center gap-2 shrink-0">
            {['help', 'whoami', 'skills', 'projects', 'education', 'gpa', 'neofetch', 'clear'].map(c => (
              <button
                key={c}
                onClick={() => executeCommand(c)}
                className="px-2 py-0.5 bg-[#201f1f] hover:bg-[#2a2a2a] hover:text-[#ffb4ab] border border-[#2a2a2a] transition-colors"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
