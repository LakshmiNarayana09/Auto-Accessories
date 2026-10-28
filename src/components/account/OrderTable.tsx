import { ORDER_COLUMNS, ORDER_GRID } from "../../data/account/accountData";
import type { OrderRecord } from "../../types/account";
import OrderRow from "./OrderRow";

interface OrderTableProps {
  orders: OrderRecord[];
}

export default function OrderTable({ orders }: OrderTableProps) {
  return (
    <div className="md:overflow-x-auto">
      <div role="table" aria-label="Orders" className="md:min-w-[820px]">
        <div
          role="row"
          className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-500 md:grid ${ORDER_GRID}`}
        >
          {ORDER_COLUMNS.map((column) => (
            <div key={column.id} role="columnheader">
              {column.id === "actions" ? <span className="sr-only">{column.label}</span> : column.label}
            </div>
          ))}
        </div>

        {orders.length === 0 ? (
          <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
            No orders found
          </p>
        ) : (
          orders.map((order) => <OrderRow key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
}