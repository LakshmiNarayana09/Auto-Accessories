import { Link } from "react-router-dom";
import { orderRoute } from "../../utils/routes";
import { ACCOUNTING_GRID } from "../../data/account/accountData";
import { formatDate } from "../../utils/format";
import type { AccountingDocument, AccountingOrder } from "../../types/account";
import DocumentsDropdown from "./DocumentsDropdown";

interface AccountingRowProps {
  order: AccountingOrder;
  onOpenDocument: (order: AccountingOrder, document: AccountingDocument) => void;
}

export default function AccountingRow({ order, onOpenDocument }: AccountingRowProps) {
  return (
    <div
      role="row"
      className={`grid grid-cols-1 items-center gap-x-4 gap-y-1.5 border-b border-gray-100 px-5 py-4 text-[11px] text-gray-800 last:border-b-0 ${ACCOUNTING_GRID}`}
    >
      <div role="cell">
        <Link to={orderRoute(order.orderNumber)} className="text-[#5B3FD6] hover:underline">
          No. {order.orderNumber}
        </Link>
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Order date: </span>
        {formatDate(order.orderedAt)}
      </div>

      <div role="cell">
        <DocumentsDropdown
          documents={order.documents}
          onOpen={(document) => onOpenDocument(order, document)}
        />
      </div>
    </div>
  );
}