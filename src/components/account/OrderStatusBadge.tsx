import { ORDER_STATUS } from "../../data/account/accountData";
import type { OrderStatus } from "../../types/account";

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const { label, className } = ORDER_STATUS[status];

  return (
    <span
      className={`inline-flex min-w-[72px] items-center justify-center whitespace-nowrap rounded px-2 py-0.5 text-[10px] font-medium ${className}`}
    >
      {label}
    </span>
  );
}