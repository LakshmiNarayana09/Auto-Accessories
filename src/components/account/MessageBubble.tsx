import type { ChatMessage } from "../../types/account";

interface MessageBubbleProps {
  message: ChatMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isMine = message.author === "me";

  return (
    <li className={`flex flex-col ${isMine ? "items-end" : "items-start"}`}>
      <p
        className={`max-w-[85%] whitespace-pre-line rounded-lg px-3 py-2 text-[11px] leading-relaxed text-gray-800 sm:max-w-[75%] ${
          isMine ? "border border-gray-200 bg-white" : "bg-[#EEEAFB]"
        }`}
      >
        {message.text}
      </p>
      <span className="mt-1 text-[10px] text-gray-400">{message.time}</span>
    </li>
  );
}