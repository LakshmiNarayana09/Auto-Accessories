import { formatDate } from "../../utils/format";
import type { ChatThread } from "../../types/account";

interface ChatListItemProps {
  thread: ChatThread;
  selected: boolean;
  onSelect: (id: string) => void;
}

export default function ChatListItem({ thread, selected, onSelect }: ChatListItemProps) {
  return (
    <li>
      <button
        type="button"
        aria-current={selected ? "true" : undefined}
        onClick={() => onSelect(thread.id)}
        className={`w-full border-b border-gray-100 px-4 py-3 text-left transition-colors hover:bg-gray-50 ${
          selected ? "bg-gray-100" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[11px] font-medium text-gray-900">
            Order No. {thread.orderNumber}
          </span>
          <span className="shrink-0 text-[10px] text-gray-400">{formatDate(thread.lastDate)}</span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="line-clamp-2 text-[10px] text-gray-500">{thread.preview}</p>
          {thread.unread > 0 && (
            <span
              aria-label={`${thread.unread} unread messages`}
              className="grid h-4 min-w-4 shrink-0 place-items-center rounded-full bg-orange-500 px-1 text-[10px] font-semibold text-white"
            >
              {thread.unread}
            </span>
          )}
        </div>
      </button>
    </li>
  );
}