import { Trash2 } from "lucide-react";

interface CartHeaderProps {
  allSelected: boolean;
  onSelectAll: () => void;
  onRemoveSelected: () => void;
}

function CartHeader({
  allSelected,
  onSelectAll,
  onRemoveSelected,
}: CartHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eeeeee] px-4 py-3">
      <label className="flex cursor-pointer items-center gap-2 text-xs text-[#444]">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={onSelectAll}
          className="accent-[#6857d9]"
        />
        Select all
      </label>

      <button
        type="button"
        onClick={onRemoveSelected}
        className="flex items-center gap-1.5 text-xs text-[#888] transition hover:text-red-500"
      >
        <Trash2 size={14} />
        Remove selected
      </button>
    </div>
  );
}

export default CartHeader;