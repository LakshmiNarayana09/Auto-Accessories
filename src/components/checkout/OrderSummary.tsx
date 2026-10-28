
import { formatPrice } from "../../utils/format";
import PromoCodeInput from "./PromoCodeInput";

interface OrderSummaryProps {
  itemsCount: number;
  deliveryCost: number;
  discount: number;
  total: number;
  promoCode: string;
  promoError?: string;
  promoPercent: number;
  onPromoChange: (value: string) => void;
  onPromoApply: () => void;
}

interface RowProps {
  label: string;
  value: string;
  valueClass?: string;
}

const Row = ({
  label,
  value,
  valueClass = "",
}: RowProps) => (
  <div className="flex items-center justify-between text-xs">
    <span className="text-gray-700">{label}</span>
    <span className={`font-medium text-gray-900 ${valueClass}`}>
      {value}
    </span>
  </div>
);

function OrderSummary({
  itemsCount,
  deliveryCost,
  discount,
  total,
  promoCode,
  promoError,
  promoPercent,
  onPromoChange,
  onPromoApply,
}: OrderSummaryProps) {
  const isEmpty = itemsCount === 0;

  return (
    <div className="rounded-xl bg-white p-4 shadow-xs">
      <h2 className="border-b border-gray-100 pb-3 text-xs font-medium text-gray-900">
        Your order
      </h2>

      <div className="mt-3 space-y-2">
        <Row
          label="Items"
          value={String(itemsCount)}
        />

        <Row
          label="Delivery"
          value={
            deliveryCost > 0
              ? formatPrice(deliveryCost)
              : "Free"
          }
        />

        {discount > 0 && (
          <Row
            label="Discount"
            value={`−${formatPrice(discount)}`}
            valueClass="!text-green-600"
          />
        )}
      </div>

      <div className="mt-3">
        <PromoCodeInput
          value={promoCode}
          error={promoError}
          appliedPercent={promoPercent}
          onChange={onPromoChange}
          onApply={onPromoApply}
        />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-700">
          Total
        </span>

        <span className="text-lg font-bold text-gray-900">
          {formatPrice(total)}
        </span>
      </div>

      <button
        type="submit"
        disabled={isEmpty}
        className="mt-4 w-full rounded-lg bg-[#5B3FD6] py-3 text-xs font-medium text-white transition-colors hover:bg-[#4A33B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6] disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Place order
      </button>

      <p className="mt-3 text-[10px] leading-snug text-gray-400">
        The price depends on the customer type. It may be adjusted after registration.
      </p>
    </div>
  );
}

export default OrderSummary;
