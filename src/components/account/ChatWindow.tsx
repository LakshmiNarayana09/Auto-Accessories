import { useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import type { ChatThread } from "../../types/account";
import MessageBubble from "./MessageBubble";
import MessageComposer from "./MessageComposer";

interface ChatWindowProps {
  thread: ChatThread | null;
  onSend: (text: string) => void;
  onClose: () => void;
  onBack: () => void;
}

export default function ChatWindow({ thread, onSend, onClose, onBack }: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const messageCount = thread?.messages.length ?? 0;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [thread?.id, messageCount]);

  if (!thread) {
    return (
      <div className="grid h-full place-items-center px-6 text-center text-sm text-gray-500">
        Select a conversation to start messaging
      </div>
    );
  }

  const isClosed = thread.status === "closed";

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            aria-label="Back to conversations"
            onClick={onBack}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <h2 className="truncate text-xs font-semibold text-gray-900">Order No. {thread.orderNumber}</h2>
        </div>

        {isClosed ? (
          <span className="text-[11px] text-gray-400">Conversation closed</span>
        ) : (
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md border border-[#5B3FD6] px-3 py-1.5 text-[11px] font-medium text-[#5B3FD6] transition-colors hover:bg-[#F6F3FF]"
          >
            End conversation
          </button>
        )}
      </div>

      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
        <ul aria-label="Messages" className="flex flex-col gap-3">
          {thread.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </ul>
      </div>

      <MessageComposer
        onSend={onSend}
        onAttach={(files) => console.log("Attach:", files)}
        disabled={isClosed}
        placeholder={isClosed ? "This conversation is closed" : "Write a message..."}
      />
    </div>
  );
}