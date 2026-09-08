import { useState, FormEvent } from 'react';
import { Copy, Check, Send } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export function ContactSection({ onShowToast }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSent, setTransmissionSent] = useState(false);

  const emailAddress = "tavish.sharma@domain.placeholder";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    onShowToast("CHANNEL ADDRESS COPIED TO BUFFER.");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTransmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionSent(true);
      onShowToast("TRANSMISSION PACKET DISPATCHED TO GATEWAY.");
      setSubject('');
      setMessage('');
      setTimeout(() => setTransmissionSent(false), 6000);
    }, 1200);
  };

  return (
    <section 
      id="contact"
      className="w-full px-4 md:px-8 xl:px-12 py-24 bg-[#0e0e0e] relative overflow-hidden border-t border-[#2a2a2a]"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#ffb4ab] uppercase tracking-wider mb-3">
        <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
        <span>07 // DISPATCH</span>
      </div>

      <div className="max-w-4xl">
        <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl text-[#e5e2e1] uppercase font-bold tracking-tighter mb-4 leading-tight">
          LET’S BUILD SOMETHING INTELLIGENT.
        </h2>

        <p className="text-base sm:text-lg text-[#e8bcb7]/90 max-w-2xl mb-8 font-sans leading-relaxed">
          Open to internships, applied research collaborations, open-source development, and ambitious software engineering challenges.
        </p>

        {/* Primary Direct Transmission Box */}
        <div className="bg-[#1c1b1b] p-6 md:p-8 border border-[#2a2a2a] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="font-mono text-[9px] text-[#af8783] uppercase tracking-widest block mb-1 font-semibold">
              DIRECT TRANSMISSION CHANNEL
            </span>
            <span className="font-mono text-xl sm:text-2xl text-[#e5e2e1] select-all font-bold tracking-tight">
              {emailAddress}
            </span>
            <p className="text-xs text-[#af8783] mt-1 font-mono">
              Inquiries answered within standard 24h operational cycle.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleCopy}
              className="px-6 py-3 bg-[#ffb4ab] text-[#690005] font-mono text-[11px] font-bold uppercase transition-transform active:scale-95 hover:bg-[#e5e2e1] hover:text-[#131313] flex items-center gap-2 shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ADDRESS COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Interactive Dispatch Terminal Form */}
        <div className="bg-[#131313] border border-[#2a2a2a] p-6">
          <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-3 mb-4">
            <span className="font-mono text-[10px] text-[#77d1ff] uppercase tracking-wider font-semibold">
              ENCRYPTED DISPATCH PACKET [PORT_3000]
            </span>
            <span className="font-mono text-[9px] text-[#af8783]">PROTOCOL: DIRECT_MAIL_RELAY</span>
          </div>

          {transmissionSent ? (
            <div className="p-4 bg-[#1c1b1b] border border-[#ff5449] font-mono text-xs text-[#e5e2e1] flex flex-col gap-1">
              <span className="text-[#ffb4ab] font-bold">✓ DISPATCH VERIFIED &amp; TRANSMITTED</span>
              <p className="text-[#e8bcb7]/80 text-[11px]">Your message has been queued to Tavish Sharma's communication buffer. Expect response shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleTransmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[9px] text-[#af8783] uppercase mb-1">
                    YOUR CALLSIGN / NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lead Architect // Recruiter"
                    className="w-full bg-[#0e0e0e] border border-[#2a2a2a] p-2.5 font-mono text-xs text-[#e5e2e1] focus:border-[#ff5449] focus:outline-none placeholder-[#af8783]/50"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[9px] text-[#af8783] uppercase mb-1">
                    RETURN TRANSMISSION COORD (EMAIL)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. architect@lab.ai"
                    className="w-full bg-[#0e0e0e] border border-[#2a2a2a] p-2.5 font-mono text-xs text-[#e5e2e1] focus:border-[#ff5449] focus:outline-none placeholder-[#af8783]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[9px] text-[#af8783] uppercase mb-1">
                  SUBJECT / VECTOR TARGET
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Summer ML Research Fellowship // Full-Stack Role"
                  className="w-full bg-[#0e0e0e] border border-[#2a2a2a] p-2.5 font-mono text-xs text-[#e5e2e1] focus:border-[#ff5449] focus:outline-none placeholder-[#af8783]/50"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] text-[#af8783] uppercase mb-1">
                  TRANSMISSION BRIEF
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Project specifications, timeline parameters, or collaboration scope..."
                  className="w-full bg-[#0e0e0e] border border-[#2a2a2a] p-2.5 font-mono text-xs text-[#e5e2e1] focus:border-[#ff5449] focus:outline-none placeholder-[#af8783]/50 resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isTransmitting}
                  className="px-6 py-2.5 bg-[#201f1f] border border-[#2a2a2a] hover:border-[#ff5449] hover:bg-[#ff5449] hover:text-[#5c0004] text-[#e5e2e1] font-mono text-xs font-bold uppercase transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isTransmitting ? 'TRANSMITTING PACKET...' : 'DISPATCH TRANSMISSION'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Telemetry Location Metadata Block */}
      <div className="mt-16 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[9px] text-[#af8783]">
        <div className="flex items-center gap-4">
          <span className="text-[#e5e2e1]">TAVISH SHARMA // AI/ML × FULL-STACK</span>
          <span>•</span>
          <span>03 / 2026 // BANGALORE, IN</span>
        </div>
        <div className="flex items-center gap-2 text-[#ffb4ab] font-bold">
          <span className="w-1.5 h-1.5 bg-[#ffb4ab] animate-laser"></span>
          <span>END OF TRANSMISSION — ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>
    </section>
  );
}
