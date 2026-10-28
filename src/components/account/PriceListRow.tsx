import { X } from "lucide-react";
import { PRICE_LIST_GRID } from "../../data/account/accountData";
import { formatDate } from "../../utils/format";
import type { PriceListRecord } from "../../types/account";
import StatusBadge from "./StatusBadge";

interface PriceListRowProps {
  record: PriceListRecord;
  onCancel: (id: string) => void;
}

export default function PriceListRow({ record, onCancel }: PriceListRowProps) {
  return (
    <div
      role="row"
      className={`grid grid-cols-1 items-center gap-x-4 gap-y-1 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-800 last:border-b-0 ${PRICE_LIST_GRID}`}
    >
      <div role="cell" className="font-medium text-gray-900">
        {record.number}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Upload date: </span>
        {formatDate(record.uploadedAt)}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Processing date: </span>
        {formatDate(record.processedAt)}
      </div>

      <div role="cell">
        <StatusBadge status={record.status} />
      </div>

      <div role="cell" className="text-gray-600">
        {record.comment}
      </div>

      <div role="cell">
        <button
          type="button"
          aria-label={`Cancel price list ${record.number}`}
          onClick={() => onCancel(record.id)}
          className="inline-flex items-center gap-1.5 text-gray-600 transition-colors hover:text-red-500"
        >
          <X size={12} aria-hidden="true" />
          Cancel
        </button>
      </div>
    </div>
  );
}