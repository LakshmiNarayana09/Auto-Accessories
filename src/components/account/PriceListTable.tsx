import { PRICE_LIST_COLUMNS, PRICE_LIST_GRID } from "../../data/account/accountData";
import type { PriceListRecord } from "../../types/account";
import PriceListRow from "./PriceListRow";

interface PriceListTableProps {
  records: PriceListRecord[];
  onCancel: (id: string) => void;
}

export default function PriceListTable({ records, onCancel }: PriceListTableProps) {
  return (
    <div role="table" aria-label="Price lists">
      <div
        role="row"
        className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-500 md:grid ${PRICE_LIST_GRID}`}
      >
        {PRICE_LIST_COLUMNS.map((column) => (
          <div key={column.id} role="columnheader">
            {column.label}
          </div>
        ))}
      </div>

      {records.length === 0 ? (
        <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
          No price lists
        </p>
      ) : (
        records.map((record) => <PriceListRow key={record.id} record={record} onCancel={onCancel} />)
      )}
    </div>
  );
}