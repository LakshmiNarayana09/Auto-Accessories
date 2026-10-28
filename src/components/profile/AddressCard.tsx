import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { addressEditRoute } from "../../utils/routes";
import type { AddressRecord } from "../../types/account";

interface AddressCardProps {
  address: AddressRecord;
  onDelete: (address: AddressRecord) => void;
}

export default function AddressCard({ address, onDelete }: AddressCardProps) {
  const { id, street, city, postalCode } = address;

  return (
    <li className="flex items-start justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 transition-colors hover:bg-gray-50">
      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-900">{street}</p>
        <p className="mt-2 text-[11px] text-gray-500">
          {city}, {street}
        </p>
        <p className="mt-1 text-[11px] text-gray-500">Postal code {postalCode}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2.5">
        <Link
          to={addressEditRoute(id)}
          aria-label={`Edit address ${street}`}
          className="text-gray-500 transition-colors hover:text-[#5B3FD6]"
        >
          <Pencil size={14} aria-hidden="true" />
        </Link>
        <button
          type="button"
          aria-label={`Delete address ${street}`}
          onClick={() => onDelete(address)}
          className="text-gray-500 transition-colors hover:text-red-500"
        >
          <Trash2 size={14} aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}