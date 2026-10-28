import { PRICE_LIST_STATUS } from "../../data/account/accountData";
import type { PriceListStatus } from "../../types/account";

interface StatusBadgeProps {
  status: PriceListStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = PRICE_LIST_STATUS[status];

  return (
    <span
      className={`inline-flex min-w-[72px] items-center justify-center rounded px-2 py-0.5 text-[10px] font-medium ${className}`}
    >
      {label}
    </span>
  );
}