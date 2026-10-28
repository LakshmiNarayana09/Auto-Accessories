import { useMemo, useState } from "react";
import { MOCK_CHATS } from "../../data/account/accountData";
import type { ChatMessage, ChatStatus, ChatThread } from "../../types/account";
import PageHeading from "../common/PageHeading";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

type MobileView = "list" | "chat";

const currentTime = (): string =>
  new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

export default function Chats() {
  const [threads, setThreads] = useState<ChatThread[]>(MOCK_CHATS);
  const [activeTab, setActiveTab] = useState<ChatStatus>("open");
  const [selectedId, setSelectedId] = useState<string | null>(
    MOCK_CHATS.find((t) => t.status === "open")?.id ?? null,
  );
  const [mobileView, setMobileView] = useState<MobileView>("list");

  const visibleThreads = useMemo(
    () => threads.filter((thread) => thread.status === activeTab),
    [threads, activeTab],
  );
  const selected = threads.find((thread) => thread.id === selectedId) ?? null;

  const handleTabChange = (id: string): void => {
    const tab = id as ChatStatus;
    setActiveTab(tab);
    setSelectedId(threads.find((thread) => thread.status === tab)?.id ?? null);
  };

  const handleSelect = (id: string): void => {
    setSelectedId(id);
    setMobileView("chat");
    setThreads((prev) => prev.map((thread) => (thread.id === id ? { ...thread, unread: 0 } : thread)));
  };

  const handleSend = (text: string): void => {
    if (!selected) return;
    const message: ChatMessage = { id: String(Date.now()), author: "me", text, time: currentTime() };

    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === selected.id
          ? {
              ...thread,
              preview: text,
              lastDate: new Date().toISOString().slice(0, 10),
              messages: [...thread.messages, message],
            }
          : thread,
      ),
    );
  };

  const handleClose = (): void => {
    if (!selected) return;
    setThreads((prev) =>
      prev.map((thread) => (thread.id === selected.id ? { ...thread, status: "closed" } : thread)),
    );
    setSelectedId(threads.find((t) => t.status === "open" && t.id !== selected.id)?.id ?? null);
    setMobileView("list");
  };

  return (
    <>
      <PageHeading title="My chats" />

      <div className="flex h-[70vh] min-h-[440px] overflow-hidden rounded-xl bg-white shadow-sm lg:h-[540px]">
        <div
          className={`${mobileView === "chat" ? "hidden" : "flex"} w-full flex-col lg:flex lg:w-[270px] lg:shrink-0 lg:border-r lg:border-gray-100`}
        >
          <ChatList
            threads={visibleThreads}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
        </div>

        <div className={`${mobileView === "chat" ? "flex" : "hidden"} min-w-0 flex-1 flex-col lg:flex`}>
          <ChatWindow
            thread={selected}
            onSend={handleSend}
            onClose={handleClose}
            onBack={() => setMobileView("list")}
          />
        </div>
      </div>
    </>
  );
}