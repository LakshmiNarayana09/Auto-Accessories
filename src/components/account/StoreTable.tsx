import { STORE_COLUMNS, STORE_GRID } from "../../data/account/accountData";
import type { StoreRecord } from "../../types/account";
import StoreRow from "./StoreRow";

interface StoreTableProps {
  stores: StoreRecord[];
  onToggle: (id: string, enabled: boolean) => void;
}

export default function StoreTable({ stores, onToggle }: StoreTableProps) {
  return (
    <div className="md:overflow-x-auto">
      <div role="table" aria-label="Stores" className="md:min-w-[800px]">
        <div
          role="row"
          className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-500 md:grid ${STORE_GRID}`}
        >
          {STORE_COLUMNS.map((column) => (
            <div key={column.id} role="columnheader">
              {column.label}
            </div>
          ))}
        </div>

        {stores.length === 0 ? (
          <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
            No stores yet
          </p>
        ) : (
          stores.map((store) => <StoreRow key={store.id} store={store} onToggle={onToggle} />)
        )}
      </div>
    </div>
  );
}