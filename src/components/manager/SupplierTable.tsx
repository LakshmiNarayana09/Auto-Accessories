import { SUPPLIER_COLUMNS, SUPPLIER_GRID } from "../../data/manager/managerData";
import type { SupplierRecord } from "../../types/manager";
import SupplierRow from "./SupplierRow";

interface SupplierTableProps {
  suppliers: SupplierRecord[];
  onToggle: (id: string, enabled: boolean) => void;
}

export default function SupplierTable({ suppliers, onToggle }: SupplierTableProps) {
  return (
    <div className="md:overflow-x-auto">
      <div role="table" aria-label="Suppliers" className="md:min-w-[760px]">
        <div
          role="row"
          className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-500 md:grid ${SUPPLIER_GRID}`}
        >
          {SUPPLIER_COLUMNS.map((column) => (
            <div key={column.id} role="columnheader">
              {column.label}
            </div>
          ))}
        </div>

        {suppliers.length === 0 ? (
          <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
            No suppliers yet
          </p>
        ) : (
          suppliers.map((supplier) => (
            <SupplierRow key={supplier.id} supplier={supplier} onToggle={onToggle} />
          ))
        )}
      </div>
    </div>
  );
}