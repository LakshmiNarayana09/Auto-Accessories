import { Link } from "react-router-dom";
import { FileText, Pencil } from "lucide-react";
import { managerCustomerEditRoute, managerCustomerRoute } from "../../utils/routes";
import { CUSTOMER_GRID } from "../../data/manager/managerData";
import type { CustomerRecord } from "../../types/manager";
import ToggleSwitch from "../common/ToggleSwitch";

interface CustomerRowProps {
  customer: CustomerRecord;
  onToggle: (id: string, enabled: boolean) => void;
}

export default function CustomerRow({ customer, onToggle }: CustomerRowProps) {
  const fullName = `${customer.lastName} ${customer.firstName}`;

  return (
    <div
      role="row"
      className={`grid grid-cols-1 items-center gap-x-4 gap-y-1 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-800 last:border-b-0 ${CUSTOMER_GRID}`}
    >
      <div role="cell">
        <Link to={managerCustomerRoute(customer.id)} className="text-[#5B3FD6] hover:underline">
          {customer.id}
        </Link>
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Last name: </span>
        {customer.lastName}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">First name: </span>
        {customer.firstName}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Middle name: </span>
        {customer.middleName}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Phone: </span>
        {customer.phone}
      </div>

      <div role="cell" className="break-all">
        <span className="text-gray-400 md:hidden">E-mail: </span>
        {customer.email}
      </div>

      <div role="cell" className="flex items-center gap-3 pt-1 md:pt-0">
        <Link
          to={managerCustomerRoute(customer.id)}
          aria-label={`View ${fullName}`}
          className="text-gray-400 transition-colors hover:text-[#5B3FD6]"
        >
          <FileText size={14} aria-hidden="true" />
        </Link>

        <Link
          to={managerCustomerEditRoute(customer.id)}
          aria-label={`Edit ${fullName}`}
          className="text-gray-500 transition-colors hover:text-[#5B3FD6]"
        >
          <Pencil size={14} aria-hidden="true" />
        </Link>

        <ToggleSwitch
          checked={customer.enabled}
          onChange={(enabled) => onToggle(customer.id, enabled)}
          label={`${customer.enabled ? "Disable" : "Enable"} ${fullName}`}
        />
      </div>
    </div>
  );
}