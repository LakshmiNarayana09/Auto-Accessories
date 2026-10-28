import { CUSTOMER_COLUMNS, CUSTOMER_GRID } from "../../data/manager/managerData";
import type { CustomerRecord } from "../../types/manager";
import CustomerRow from "./CustomerRow";

interface CustomerTableProps {
  customers: CustomerRecord[];
  onToggle: (id: string, enabled: boolean) => void;
}

export default function CustomerTable({ customers, onToggle }: CustomerTableProps) {
  return (
    <div className="md:overflow-x-auto">
      <div role="table" aria-label="Customers" className="md:min-w-[860px]">
        <div
          role="row"
          className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-500 md:grid ${CUSTOMER_GRID}`}
        >
          {CUSTOMER_COLUMNS.map((column) => (
            <div key={column.id} role="columnheader">
              {column.label}
            </div>
          ))}
        </div>

        {customers.length === 0 ? (
          <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
            No customers yet
          </p>
        ) : (
          customers.map((customer) => (
            <CustomerRow key={customer.id} customer={customer} onToggle={onToggle} />
          ))
        )}
      </div>
    </div>
  );
}