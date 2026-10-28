
import { useNavigate } from "react-router-dom";

interface OrderSummaryProps {
  itemCount: number;
  total: number;
}

function OrderSummary({ itemCount, total }: OrderSummaryProps) {
  const navigate = useNavigate();

  return (
    <aside className="h-fit overflow-hidden rounded-[3px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="border-b border-[#eeeeee] px-4 py-3">
        <h2 className="text-xs font-semibold text-[#222]">Your Order</h2>
      </div>

      <div className="border-b border-[#eeeeee] px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#333]">Products</span>
          <span className="text-xs font-medium text-[#333]">
            {itemCount}
          </span>
        </div>

        <div className="mt-3 flex h-8 overflow-hidden rounded border border-[#eeeeee]">
          <input
            type="text"
            placeholder="Promo code"
            aria-label="Promo code"
            className="min-w-0 flex-1 bg-transparent px-2 text-xs outline-none placeholder:text-[#aaa]"
          />

          <button
            type="button"
            aria-label="Apply promo code"
            className="px-3 text-xs text-[#666] hover:text-[#6857d9]"
          >
            →
          </button>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#333]">Total</span>
          <span className="text-sm font-semibold text-[#222]">
            {total.toLocaleString()} ₽
          </span>
        </div>

        <button
          type="button"
          disabled={itemCount === 0}
          onClick={() => navigate("/checkout")}
          className="mt-3 h-9 w-full rounded bg-[#6857d9] text-xs font-medium text-white transition hover:bg-[#5847ca] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Checkout
        </button>

        <p className="mt-2 text-center text-[9px] leading-4 text-[#999]">
          The price depends on the type of purchase.
          <br />
          After registration, the final cost will be recalculated.
        </p>
      </div>
    </aside>
  );
}

export default OrderSummary;