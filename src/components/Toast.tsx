interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-12 right-4 z-50 animate-bounce duration-300">
      <div className="px-4 py-2.5 bg-[#1c1b1b] border border-[#ff5449] shadow-2xl flex items-center gap-3">
        <span className="w-2 h-2 bg-[#ff5449] animate-laser"></span>
        <span className="font-mono text-xs text-[#e5e2e1] font-semibold tracking-wide uppercase">
          {message}
        </span>
      </div>
    </div>
  );
}
