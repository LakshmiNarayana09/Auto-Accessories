import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import type { CartItem as CartItemType } from "../../types/cart";
import type { RootState, AppDispatch } from "../../store/store";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/cartSlice";

import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

function Cart() {
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const items = useMemo<CartItemType[]>(
    () =>
      cartItems.map(({ product, quantity }) => ({
        id: product.id,
        name: product.title,
        brand: product.brand ?? "",
        article: product.article,
        image: product.image,
        deliveryDays: product.deliveryDays ?? 0,
        price: product.price,
        quantity,
        selected: selectedIds.includes(product.id),
      })),
    [cartItems, selectedIds]
  );

  const selectedItems = items.filter((item) => item.selected);

  const itemCount = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSelect = (id: number) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedIds((current) =>
      items.length > 0 && items.every((item) => current.includes(item.id))
        ? []
        : items.map((item) => item.id)
    );
  };

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
    setSelectedIds((current) =>
      current.filter((selectedId) => selectedId !== id)
    );
  };

  const handleRemoveSelected = () => {
    selectedIds.forEach((id) => {
      dispatch(removeFromCart(id));
    });

    setSelectedIds([]);
  };

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-[1420px] px-4 py-12 md:px-6">
        <h1 className="mb-8 text-2xl font-semibold text-[#222]">
          Shopping Cart
        </h1>

        <div className="rounded bg-white px-5 py-12 text-center shadow-sm">
          <ShoppingCart className="mx-auto mb-4 text-[#999]" size={40} />

          <h2 className="text-lg font-semibold text-[#333]">
            Your cart is empty
          </h2>

          <p className="mt-2 text-sm text-[#888]">
            Add products to your cart to see them here.
          </p>

          <Link
            to="/"
            className="mt-5 inline-flex rounded bg-[#6857d9] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#5847ca]"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1420px] px-4 py-5 md:px-6">
      <h1 className="mb-5 text-xl font-semibold text-[#222] md:text-2xl">
        Shopping Cart
        <span className="ml-2 text-sm font-normal text-[#999]">
          ({items.length} products)
        </span>
      </h1>

      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px]">
        <CartList
          items={items}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
          onRemoveSelected={handleRemoveSelected}
        />

        <OrderSummary itemCount={itemCount} total={total} />
      </div>
    </section>
  );
}

export default Cart;