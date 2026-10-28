import { Link } from "react-router-dom";
import { FileText, Pencil } from "lucide-react";
import { managerOrderEditRoute, managerOrderRoute } from "../../utils/routes";
import { MANAGER_ORDER_GRID } from "../../data/manager/managerData";
import type { ManagerOrderRecord } from "../../types/manager";
import ToggleSwitch from "../common/ToggleSwitch";

interface ManagerOrderRowProps {
  order: ManagerOrderRecord;
  onToggle: (id: string, enabled: boolean) => void;
}

export default function ManagerOrderRow({ order, onToggle }: ManagerOrderRowProps) {
  return (
    <div
      role="row"
      className={`grid grid-cols-1 items-center gap-x-4 gap-y-1 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-800 last:border-b-0 ${MANAGER_ORDER_GRID}`}
    >
      <div role="cell">
        <Link to={managerOrderRoute(order.id)} className="text-[#5B3FD6] hover:underline">
          {order.id}
        </Link>
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Last name: </span>
        {order.lastName}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">First name: </span>
        {order.firstName}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Middle name: </span>
        {order.middleName}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Phone: </span>
        {order.phone}
      </div>

      <div role="cell" className="break-all">
        <span className="text-gray-400 md:hidden">E-mail: </span>
        {order.email}
      </div>

      <div role="cell" className="flex items-center gap-3 pt-1 md:pt-0">
        <Link
          to={managerOrderRoute(order.id)}
          aria-label={`View order ${order.id}`}
          className="text-gray-400 transition-colors hover:text-[#5B3FD6]"
        >
          <FileText size={14} aria-hidden="true" />
        </Link>

        <Link
          to={managerOrderEditRoute(order.id)}
          aria-label={`Edit order ${order.id}`}
          className="text-gray-500 transition-colors hover:text-[#5B3FD6]"
        >
          <Pencil size={14} aria-hidden="true" />
        </Link>

        <ToggleSwitch
          checked={order.enabled}
          onChange={(enabled) => onToggle(order.id, enabled)}
          label={`${order.enabled ? "Disable" : "Enable"} order ${order.id}`}
        />
      </div>
    </div>
  );
}