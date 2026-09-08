export function Footer() {
  return (
    <footer 
      id="bottom-telemetry-rail"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0e0e0e]/90 backdrop-blur-md border-t border-[#2a2a2a] h-8 px-4 flex items-center justify-between font-mono text-[9px] text-[#af8783] select-none"
    >
      <div>SYS.LOC: BLR // REVA.UNIV</div>
      <div className="hidden sm:block">COORD: 13.0827° N, 77.5877° E</div>
      <div className="flex items-center gap-2">
        <span>SCALBORE // 2026</span>
        <span className="w-1 h-1 bg-[#ff5449] animate-laser"></span>
      </div>
    </footer>
  );
}
