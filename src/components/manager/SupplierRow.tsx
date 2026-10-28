import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";
import { managerSupplierEditRoute, managerSupplierRoute } from "../../utils/routes";
import { SUPPLIER_GRID } from "../../data/manager/managerData";
import type { SupplierRecord } from "../../types/manager";
import ToggleSwitch from "../common/ToggleSwitch";

interface SupplierRowProps {
  supplier: SupplierRecord;
  onToggle: (id: string, enabled: boolean) => void;
}

export default function SupplierRow({ supplier, onToggle }: SupplierRowProps) {
  return (
    <div
      role="row"
      className={`grid grid-cols-1 items-center gap-x-4 gap-y-1 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-800 last:border-b-0 ${SUPPLIER_GRID}`}
    >
      <div role="cell">
        <Link to={managerSupplierRoute(supplier.id)} className="text-[#5B3FD6] hover:underline">
          {supplier.name}
        </Link>
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Tax ID: </span>
        {supplier.taxId}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Phone: </span>
        {supplier.phone}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Contact person: </span>
        {supplier.contactPerson}
      </div>

      <div role="cell" className="flex items-center gap-3 pt-1 md:pt-0">
        <Link
          to={managerSupplierEditRoute(supplier.id)}
          aria-label={`Edit ${supplier.name}`}
          className="text-gray-500 transition-colors hover:text-[#5B3FD6]"
        >
          <Pencil size={14} aria-hidden="true" />
        </Link>

        <ToggleSwitch
          checked={supplier.enabled}
          onChange={(enabled) => onToggle(supplier.id, enabled)}
          label={`${supplier.enabled ? "Disable" : "Enable"} ${supplier.name}`}
        />
      </div>
    </div>
  );
}