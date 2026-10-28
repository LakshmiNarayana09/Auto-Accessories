import { CHAT_TABS } from "../../data/account/accountData";
import type { ChatThread } from "../../types/account";
import PillTabs from "../common/PillTabs";
import ChatListItem from "./ChatListItem";

interface ChatListProps {
  threads: ChatThread[]; 
  activeTab: string;
  onTabChange: (id: string) => void;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function ChatList({ threads, activeTab, onTabChange, selectedId, onSelect }: ChatListProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-gray-100 px-4 py-3">
        <PillTabs tabs={CHAT_TABS} activeId={activeTab} onChange={onTabChange} ariaLabel="Conversation status" />
      </div>

      {threads.length === 0 ? (
        <p className="px-4 py-10 text-center text-xs text-gray-500">No conversations</p>
      ) : (
        <ul aria-label="Conversations" className="min-h-0 flex-1 overflow-y-auto">
          {threads.map((thread) => (
            <ChatListItem
              key={thread.id}
              thread={thread}
              selected={thread.id === selectedId}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </div>
  );
}