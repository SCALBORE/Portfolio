import { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'profile', label: '01. PROFILE' },
  { id: 'education', label: '02. EDUCATION' },
  { id: 'capabilities', label: '03. CAPABILITIES' },
  { id: 'work', label: '04. WORK' },
  { id: 'credentials', label: '05. CREDENTIALS' },
  { id: 'trajectory', label: '06. TRAJECTORY' },
  { id: 'contact', label: '07. CONTACT' },
];

export function Header({ activeSection, onOpenTerminal, onOpenResume }: HeaderProps) {
  const [latency, setLatency] = useState(12);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuates slightly between 11ms and 15ms
      setLatency(prev => {
        const delta = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2);
        const next = prev + delta;
        return Math.max(10, Math.min(16, next));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-telemetry-header"
      className="fixed top-0 left-0 right-0 z-40 bg-[#0e0e0e]/90 backdrop-blur-md border-b border-[#2a2a2a]"
    >
      <div className="h-16 w-full px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Left Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-2.5 py-1 bg-[#201f1f] border border-[#2a2a2a] hover:border-[#ff5449] transition-colors"
            title="Tavish Sharma // Command Base"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5449] animate-laser"></span>
            <span className="font-mono text-[11px] text-[#e5e2e1] tracking-wider font-bold">TS // 01</span>
          </button>
          
          <div className="hidden sm:flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-mono text-[9px] text-[#e5e2e1] tracking-widest uppercase font-semibold">TAVISH SHARMA</span>
            <span className="font-mono text-[9px] text-[#af8783] tracking-wider">[SYS.VER 3.0]</span>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`group relative px-3 py-2 font-mono text-[11px] tracking-wide transition-all flex items-center gap-2 border-b-2 ${
                  isActive
                    ? 'bg-[#2a2a2a] text-[#ffb4ab] border-[#ff5449]'
                    : 'text-[#e8bcb7]/70 hover:text-[#e5e2e1] hover:bg-[#201f1f] border-transparent'
                }`}
              >
                <span className={`w-1 h-1 bg-[#ff5449] transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Telemetry Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Telemetry Status */}
          <div className="hidden md:flex flex-col text-right font-mono text-[9px] text-[#af8783] border-r border-[#2a2a2a] pr-3">
            <span className="tracking-wider">LATENCY: <span className="text-[#77d1ff] font-semibold">{latency}ms</span></span>
            <span className="tracking-wider">STATUS: <span className="text-[#ffb4ab] font-semibold">ONLINE</span></span>
          </div>

          {/* Action Triggers */}
          <div className="flex items-center gap-2">
            <button
              id="header-resume-btn"
              onClick={onOpenResume}
              className="px-3 py-1 font-mono text-[11px] text-[#e5e2e1] bg-[#1c1b1b] border border-[#2a2a2a] hover:border-[#ff5449] hover:text-[#ffb4ab] transition-colors uppercase flex items-center gap-1.5"
            >
              <FileText className="w-3 h-3 text-[#ff5449]" />
              <span>RESUME.PDF</span>
            </button>

            <button
              id="header-terminal-btn"
              onClick={onOpenTerminal}
              className="px-3 py-1 font-mono text-[11px] bg-[#ff5449] text-[#5c0004] hover:bg-[#e5e2e1] hover:text-[#131313] transition-colors font-bold uppercase flex items-center gap-1.5"
            >
              <Terminal className="w-3 h-3" />
              <span>TERMINAL</span>
            </button>
          </div>

          {/* User Icon Circle */}
          <div 
            onClick={() => scrollTo('profile')} 
            className="w-8 h-8 rounded-full bg-[#ffb4ab] flex items-center justify-center shrink-0 cursor-pointer hover:ring-2 hover:ring-[#ff5449] transition-all"
            title="Profile Dossier"
          >
            <User className="w-4 h-4 text-[#690005]" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e5e2e1] hover:bg-[#201f1f] border border-[#2a2a2a]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e0e0e] border-b border-[#2a2a2a] px-4 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-3 py-2 font-mono text-xs tracking-wider flex items-center justify-between ${
                  isActive ? 'bg-[#2a2a2a] text-[#ffb4ab]' : 'text-[#e5e2e1] hover:bg-[#1c1b1b]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 bg-[#ff5449]"></span>}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
