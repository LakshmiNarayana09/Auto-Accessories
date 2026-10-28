import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Camera, Paperclip, Send } from "lucide-react";

interface MessageComposerProps {
  onSend: (text: string) => void;
  onAttach?: (files: File[]) => void;
  disabled?: boolean;
  placeholder?: string;
}

const iconButton =
  "grid h-8 w-8 shrink-0 place-items-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#5B3FD6] disabled:cursor-not-allowed disabled:opacity-40";

export default function MessageComposer({
  onSend,
  onAttach,
  disabled = false,
  placeholder = "Write a message...",
}: MessageComposerProps) {
  const [text, setText] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText("");
  };

  const handleFiles = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files ?? []);
    if (files.length > 0) onAttach?.(files);
    e.target.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-gray-100 px-4 py-3">
      <button type="button" aria-label="Attach file" disabled={disabled} onClick={() => fileRef.current?.click()} className={iconButton}>
        <Paperclip size={16} aria-hidden="true" />
      </button>
      <button type="button" aria-label="Attach photo" disabled={disabled} onClick={() => imageRef.current?.click()} className={iconButton}>
        <Camera size={16} aria-hidden="true" />
      </button>

      <input ref={fileRef} type="file" multiple onChange={handleFiles} className="sr-only" tabIndex={-1} />
      <input ref={imageRef} type="file" accept="image/*" multiple onChange={handleFiles} className="sr-only" tabIndex={-1} />

      <label htmlFor="chat-message" className="sr-only">
        Message
      </label>
      <input
        id="chat-message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete="off"
        className="h-9 min-w-0 flex-1 bg-transparent text-xs text-gray-900 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
      />

      <button
        type="submit"
        aria-label="Send message"
        disabled={disabled || text.trim() === ""}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#5B3FD6] text-white transition-colors hover:bg-[#4A32B8] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send size={15} aria-hidden="true" />
      </button>
    </form>
  );
}