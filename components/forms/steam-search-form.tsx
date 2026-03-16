"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import type { Locale, MessageDictionary } from "@/lib/types";

type SteamSearchFormProps = {
  locale: Locale;
  messages: MessageDictionary["home"];
};

export function SteamSearchForm({ locale, messages }: SteamSearchFormProps) {
  const router = useRouter();
  const [profileInput, setProfileInput] = useState("");
  const [faceitNickname, setFaceitNickname] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="glass-panel scan-overlay rounded-[2rem] p-5 shadow-card sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();

        if (!profileInput.trim()) {
          return;
        }

        const search = new URLSearchParams({
          profile: profileInput.trim()
        });

        if (faceitNickname.trim()) {
          search.set("faceit", faceitNickname.trim());
        }

        startTransition(() => {
          router.push(`/${locale}/analyze?${search.toString()}`);
        });
      }}
    >
      <div className="grid gap-4 md:grid-cols-[1.65fr_1fr_auto]">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            {messages.profileLabel}
          </label>
          <input
            type="text"
            required
            value={profileInput}
            onChange={(event) => setProfileInput(event.target.value)}
            placeholder={messages.profilePlaceholder}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/45 focus:bg-white/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            {messages.faceitLabel}
          </label>
          <input
            type="text"
            value={faceitNickname}
            onChange={(event) => setFaceitNickname(event.target.value)}
            placeholder={messages.faceitPlaceholder}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/45 focus:bg-white/10"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="glass-button flex h-[58px] w-full items-center justify-center rounded-2xl px-6 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-75"
            disabled={isPending}
          >
            {isPending ? messages.loading : messages.submit}
          </button>
        </div>
      </div>

      <p className="mt-4 text-sm text-mute">{messages.helper}</p>
    </form>
  );
}
