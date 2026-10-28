import { MessageSquare } from "lucide-react";

export default function OnlineConsultation() {
  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="flex w-full max-w-[220px] items-start gap-3 rounded-lg bg-white/10 px-4 py-3 text-left transition hover:bg-white/15"
      >
        <MessageSquare size={16} className="mt-0.5 shrink-0 text-white" />
        <span>
          <span className="block text-xs font-semibold text-white">Online consultation</span>
          <span className="block text-[11px] text-white/60">Ask a question</span>
        </span>
      </button>
      <p className="flex items-start gap-2 text-xs text-white/70">
        <span aria-hidden className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
        The service is operating normally
      </p>
    </div>
  );
}