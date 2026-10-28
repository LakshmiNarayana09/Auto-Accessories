import { ACCOUNTING_COLUMNS, ACCOUNTING_GRID } from "../../data/account/accountData";
import type { AccountingDocument, AccountingOrder } from "../../types/account";
import AccountingRow from "./AccountingRow";

interface AccountingTableProps {
  orders: AccountingOrder[];
  onOpenDocument: (order: AccountingOrder, document: AccountingDocument) => void;
}

export default function AccountingTable({ orders, onOpenDocument }: AccountingTableProps) {
  return (
    <div role="table" aria-label="Accounting documents">
      <div
        role="row"
        className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-500 md:grid ${ACCOUNTING_GRID}`}
      >
        {ACCOUNTING_COLUMNS.map((column) => (
          <div key={column.id} role="columnheader">
            {column.label}
          </div>
        ))}
      </div>

      {orders.length === 0 ? (
        <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
          No documents yet
        </p>
      ) : (
        orders.map((order) => (
          <AccountingRow key={order.id} order={order} onOpenDocument={onOpenDocument} />
        ))
      )}
    </div>
  );
}