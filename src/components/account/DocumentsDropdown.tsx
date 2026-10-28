import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, FileText } from "lucide-react";
import type { AccountingDocument } from "../../types/account";

interface DocumentsDropdownProps {
  documents: AccountingDocument[];
  onOpen: (document: AccountingDocument) => void;
  label?: string;
}

export default function DocumentsDropdown({
  documents,
  onOpen,
  label = "Document list",
}: DocumentsDropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e: MouseEvent): void => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 text-[11px] text-gray-800 transition-colors hover:text-[#5B3FD6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6]"
      >
        <FileText size={14} aria-hidden="true" className="text-[#5B3FD6]" />
        {label}
        <ChevronDown
          size={12}
          aria-hidden="true"
          className={`text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          id={listId}
          className="absolute left-0 top-full z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white py-1 shadow-lg md:left-auto md:right-0"
        >
          {documents.length === 0 ? (
            <li className="px-3 py-2 text-[11px] text-gray-500">No documents</li>
          ) : (
            documents.map((document) => (
              <li key={document.id}>
                <button
                  type="button"
                  onClick={() => {
                    onOpen(document);
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-[11px] text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#5B3FD6]"
                >
                  <FileText size={13} aria-hidden="true" className="shrink-0 text-gray-400" />
                  {document.name}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}