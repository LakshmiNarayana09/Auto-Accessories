import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";
import { storeEditRoute } from "../../utils/routes";
import { STORE_GRID, STORE_STATUS } from "../../data/account/accountData";
import type { StoreRecord } from "../../types/account";
import StatusPill from "../common/StatusPill";
import ToggleSwitch from "../common/ToggleSwitch";

interface StoreRowProps {
  store: StoreRecord;
  onToggle: (id: string, enabled: boolean) => void;
}

export default function StoreRow({ store, onToggle }: StoreRowProps) {
  const status = STORE_STATUS[store.status];

  return (
    <div
      role="row"
      className={`grid grid-cols-1 items-center gap-x-4 gap-y-1 border-b border-gray-100 px-5 py-3 text-[11px] text-gray-800 last:border-b-0 ${STORE_GRID}`}
    >
      <div role="cell">
        <Link to={storeEditRoute(store.id)} className="text-[#5B3FD6] hover:underline">
          {store.name}
        </Link>
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">City: </span>
        {store.city}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Address: </span>
        {store.address}
      </div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Phone: </span>
        {store.phone}
      </div>

      <div role="cell" className="break-words">
        <span className="text-gray-400 md:hidden">E-mail: </span>
        {store.email}
      </div>

      <div role="cell">
        <StatusPill label={status.label} className={status.className} />
      </div>

      <div role="cell" className="flex items-center gap-3 pt-1 md:pt-0">
        <Link
          to={storeEditRoute(store.id)}
          aria-label={`Edit ${store.name}`}
          className="text-gray-500 transition-colors hover:text-[#5B3FD6]"
        >
          <Pencil size={14} aria-hidden="true" />
        </Link>

        <ToggleSwitch
          checked={store.enabled}
          onChange={(enabled) => onToggle(store.id, enabled)}
          label={`${store.enabled ? "Disable" : "Enable"} ${store.name}`}
        />
      </div>
    </div>
  );
}