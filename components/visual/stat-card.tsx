import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  hint?: string | null;
  accent?: "cyan" | "violet";
};

export function StatCard({ label, value, hint, accent = "cyan" }: StatCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[1.75rem] p-5 transition hover:-translate-y-0.5",
        accent === "violet" ? "border-violet-400/15" : "border-cyan-400/15"
      )}
    >
      <div className="text-sm text-mute">{label}</div>
      <div className="mt-3 display-font text-2xl font-semibold text-white">{value}</div>
      {hint ? <div className="mt-2 text-xs text-mute">{hint}</div> : null}
    </div>
  );
}
