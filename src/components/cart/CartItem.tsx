import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "../../types/cart";

interface CartItemProps {
  item: CartItemType;
  onSelect: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

function CartItem({
  item,
  onSelect,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="grid grid-cols-1 gap-4 border-b border-[#eeeeee] p-4 last:border-b-0 sm:grid-cols-[auto_80px_minmax(0,1fr)_auto] sm:items-center">
      <input
        type="checkbox"
        checked={item.selected}
        onChange={() => onSelect(item.id)}
        aria-label={`Select ${item.name}`}
        className="accent-[#6857d9]"
      />

      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 rounded object-contain"
      />

      <div className="min-w-0">
        <p className="text-xs font-semibold text-[#333]">{item.brand}</p>

        <p className="mt-1 text-sm text-[#333]">{item.name}</p>

        <p className="mt-1 text-[11px] text-[#999]">
          Article: {item.article}
        </p>

        <p className="mt-1 text-[11px] text-[#777]">
          Delivery: {item.deliveryDays} days
        </p>

        <p className="mt-2 text-xs text-[#555] sm:hidden">
          Unit price: {item.price.toLocaleString()} ₽
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-col sm:items-end">
        <div className="flex items-center rounded border border-[#e8e8e8]">
          <button
            type="button"
            onClick={() => onDecrease(item.id)}
            disabled={item.quantity <= 1}
            aria-label="Decrease quantity"
            className="p-2 text-[#666] hover:text-[#6857d9] disabled:opacity-40"
          >
            <Minus size={13} />
          </button>

          <span className="min-w-7 text-center text-xs">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => onIncrease(item.id)}
            aria-label="Increase quantity"
            className="p-2 text-[#666] hover:text-[#6857d9]"
          >
            <Plus size={13} />
          </button>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold text-[#222]">
            {(item.price * item.quantity).toLocaleString()} ₽
          </p>

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name}`}
            className="mt-2 text-[#999] transition hover:text-red-500"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;