export function CornerHUD() {
  return (
    <>
      <div 
        id="hud-reticle-tl"
        className="fixed top-2 left-2 pointer-events-none text-surface-container-highest z-50 font-mono text-[9px] tracking-widest select-none"
      >
        + [00,00]
      </div>
      <div 
        id="hud-reticle-tr"
        className="fixed top-2 right-2 pointer-events-none text-surface-container-highest z-50 font-mono text-[9px] tracking-widest select-none"
      >
        [00,FF] +
      </div>
      <div 
        id="hud-reticle-bl"
        className="fixed bottom-2 left-2 pointer-events-none text-surface-container-highest z-50 font-mono text-[9px] tracking-widest select-none"
      >
        + [FF,00]
      </div>
      <div 
        id="hud-reticle-br"
        className="fixed bottom-2 right-2 pointer-events-none text-surface-container-highest z-50 font-mono text-[9px] tracking-widest select-none"
      >
        [FF,FF] +
      </div>
    </>
  );
}
