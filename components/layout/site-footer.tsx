import type { MessageDictionary } from "@/lib/types";

type SiteFooterProps = {
  messages: MessageDictionary;
};

export function SiteFooter({ messages }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-mute sm:px-6 lg:px-8">
        <div className="display-font text-base font-semibold tracking-[0.18em] text-white">
          {messages.footer.title}
        </div>
        <p className="max-w-3xl">{messages.footer.description}</p>
        <p className="max-w-3xl text-xs text-mute/90">{messages.footer.sources}</p>
      </div>
    </footer>
  );
}
