import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { orderRoute } from "../../utils/routes";
import { RECEIPT_GRID, RECEIPT_STATUS } from "../../data/account/accountData";
import { formatDate, formatPrice } from "../../utils/format";
import type { ReceiptRecord } from "../../types/account";

interface ReceiptRowProps {
  receipt: ReceiptRecord;
  onOpenDocuments: (receipt: ReceiptRecord) => void;
}

export default function ReceiptRow({ receipt, onOpenDocuments }: ReceiptRowProps) {
  const status = RECEIPT_STATUS[receipt.status];

  return (
    <div
      role="row"
      className={`grid grid-cols-1 items-center gap-x-4 gap-y-1 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-800 transition-colors last:border-b-0 hover:bg-gray-50 ${RECEIPT_GRID}`}
    >
      <div role="cell">
        <Link to={orderRoute(receipt.orderNumber)} className="text-[#5B3FD6] hover:underline">
          No. {receipt.orderNumber}
        </Link>
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Order date: </span>
        {formatDate(receipt.orderedAt)}
      </div>

      <div role="cell" className="flex items-center gap-1.5">
        <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${status.dotClass}`} />
        <span className={status.textClass}>{status.label}</span>
      </div>

      <div role="cell" className="font-medium text-gray-900">
        <span className="font-normal text-gray-400 md:hidden">Amount: </span>
        {formatPrice(receipt.amount)}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Transfer date: </span>
        {formatDate(receipt.transferredAt)}
      </div>

      <div role="cell" className="pt-1 md:pt-0">
        <button
          type="button"
          aria-label={`Open documents for order ${receipt.orderNumber}`}
          onClick={() => onOpenDocuments(receipt)}
          className="grid h-7 w-7 place-items-center rounded-md bg-[#EEEAFB] text-[#5B3FD6] transition-colors hover:bg-[#5B3FD6] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6]"
        >
          <FileText size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}