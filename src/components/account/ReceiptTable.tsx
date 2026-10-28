import { RECEIPT_COLUMNS, RECEIPT_GRID } from "../../data/account/accountData";
import type { ReceiptRecord } from "../../types/account";
import ReceiptRow from "./ReceiptRow";

interface ReceiptTableProps {
  receipts: ReceiptRecord[];
  onOpenDocuments: (receipt: ReceiptRecord) => void;
}

export default function ReceiptTable({ receipts, onOpenDocuments }: ReceiptTableProps) {
  return (
    <div className="md:overflow-x-auto">
      <div role="table" aria-label="Receipts" className="md:min-w-[700px]">
        <div
          role="row"
          className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-500 md:grid ${RECEIPT_GRID}`}
        >
          {RECEIPT_COLUMNS.map((column) => (
            <div key={column.id} role="columnheader">
              {column.label}
            </div>
          ))}
        </div>

        {receipts.length === 0 ? (
          <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
            No receipts yet
          </p>
        ) : (
          receipts.map((receipt) => (
            <ReceiptRow key={receipt.id} receipt={receipt} onOpenDocuments={onOpenDocuments} />
          ))
        )}
      </div>
    </div>
  );
}