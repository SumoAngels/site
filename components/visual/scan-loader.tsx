import { cn } from "@/lib/utils";

type ScanLoaderProps = {
  compact?: boolean;
};

export function ScanLoader({ compact = false }: ScanLoaderProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-white/[0.03]",
        compact ? "h-20" : "h-56"
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/5 to-violet-500/5" />
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-cyan-300/20" />
      <div className="absolute inset-x-0 top-1/2 h-16 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent blur-xl" />
      <div className="absolute inset-x-8 top-0 h-28 animate-pulseLine bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent blur-md" />
      <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.28em] text-cyan-200/70">
        SteamScan
      </div>
    </div>
  );
}
