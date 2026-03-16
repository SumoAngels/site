import type { GameSummary, MessageDictionary } from "@/lib/types";
import { formatCompactNumber } from "@/lib/utils";

type HoursChartProps = {
  games: GameSummary[];
  locale: string;
  messages: MessageDictionary["analyze"];
};

export function HoursChart({ games, locale, messages }: HoursChartProps) {
  if (!games.length) {
    return (
      <div className="glass-panel rounded-[1.75rem] p-6 text-sm text-mute">
        {messages.noGames}
      </div>
    );
  }

  const maxHours = Math.max(...games.map((game) => game.hours), 1);

  return (
    <div className="glass-panel rounded-[1.75rem] p-6">
      <div className="mb-6 flex flex-col gap-1">
        <h2 className="display-font text-xl font-semibold tracking-[0.12em] text-white">
          {messages.gamesTitle}
        </h2>
        <p className="text-sm text-mute">{messages.chartHours}</p>
      </div>

      <div className="space-y-4">
        {games.map((game, index) => (
          <div key={`${game.appid}-${index}`} className="space-y-2">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="truncate text-slate-200">{game.name}</span>
              <span className="text-cyan-200">{formatCompactNumber(game.hours, locale)} h</span>
            </div>
            <div className="h-3 rounded-full bg-white/5">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_25px_rgba(53,215,255,0.35)]"
                style={{ width: `${Math.max((game.hours / maxHours) * 100, 8)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
