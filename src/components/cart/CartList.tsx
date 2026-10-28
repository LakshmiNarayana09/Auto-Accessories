import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

import type { CartItem as CartItemType } from "../../types/cart";

interface CartListProps {
  items: CartItemType[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onRemoveSelected: () => void;
}

function CartList({
  items,
  onSelect,
  onSelectAll,
  onIncrease,
  onDecrease,
  onRemove,
  onRemoveSelected,
}: CartListProps) {
  const allSelected =
    items.length > 0 && items.every((item) => item.selected);

  return (
    <div className="overflow-hidden rounded-[3px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <CartHeader
        allSelected={allSelected}
        onSelectAll={onSelectAll}
        onRemoveSelected={onRemoveSelected}
      />

      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onSelect={onSelect}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default CartList;