import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { orderRoute } from "../../utils/routes";
import { ORDER_GRID } from "../../data/account/accountData";
import { formatDate, formatPrice } from "../../utils/format";
import type { OrderRecord } from "../../types/account";
import OrderStatusBadge from "./OrderStatusBadge";

interface OrderRowProps {
  order: OrderRecord;
}

export default function OrderRow({ order }: OrderRowProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      role="row"
      className={`grid grid-cols-1 items-start gap-x-4 gap-y-1.5 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-800 last:border-b-0 ${ORDER_GRID}`}
    >
      <div role="cell">
        <Link to={orderRoute(order.number)} className="text-[#5B3FD6] hover:underline">
          No. {order.number}
        </Link>
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Order date: </span>
        {formatDate(order.orderedAt)}
      </div>

      <div role="cell">
        <OrderStatusBadge status={order.status} />
      </div>

      <div role="cell" className="text-gray-600">
        <p className={expanded ? "" : "line-clamp-2"}>{order.contents}</p>
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Payment: </span>
        {order.paymentType}
      </div>

      <div role="cell">
        <p>{order.deliveryType}</p>
        <p className="font-medium text-gray-900">{formatPrice(order.deliveryCost)}</p>
      </div>

      <div role="cell" className="font-medium text-gray-900">
        <span className="font-normal text-gray-400 md:hidden">Total: </span>
        {formatPrice(order.total)}
      </div>

      <div role="cell">
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={expanded ? `Hide details of order ${order.number}` : `Show details of order ${order.number}`}
          onClick={() => setExpanded((prev) => !prev)}
          className="grid h-6 w-6 place-items-center rounded border border-gray-300 text-gray-500 transition-colors hover:border-[#5B3FD6] hover:text-[#5B3FD6]"
        >
          {expanded ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}