import { MANAGER_ORDER_COLUMNS, MANAGER_ORDER_GRID } from "../../data/manager/managerData";
import type { ManagerOrderRecord } from "../../types/manager";
import ManagerOrderRow from "./ManagerOrderRow";

interface ManagerOrderTableProps {
  orders: ManagerOrderRecord[];
  onToggle: (id: string, enabled: boolean) => void;
}

export default function ManagerOrderTable({ orders, onToggle }: ManagerOrderTableProps) {
  return (
    <div className="md:overflow-x-auto">
      <div role="table" aria-label="Orders" className="md:min-w-[860px]">
        <div
          role="row"
          className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-500 md:grid ${MANAGER_ORDER_GRID}`}
        >
          {MANAGER_ORDER_COLUMNS.map((column) => (
            <div key={column.id} role="columnheader">
              {column.label}
            </div>
          ))}
        </div>

        {orders.length === 0 ? (
          <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
            No orders yet
          </p>
        ) : (
          orders.map((order) => <ManagerOrderRow key={order.id} order={order} onToggle={onToggle} />)
        )}
      </div>
    </div>
  );
}