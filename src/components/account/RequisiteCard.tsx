import { Link } from "react-router-dom";
import { CreditCard, Pencil, Trash2 } from "lucide-react";
import { requisiteEditRoute } from "../../utils/routes";
import type { RequisiteRecord } from "../../types/account";

interface RequisiteCardProps {
  requisite: RequisiteRecord;
  onDelete: (requisite: RequisiteRecord) => void;
}

export default function RequisiteCard({ requisite, onDelete }: RequisiteCardProps) {
  const { id, name, last4 } = requisite;

  return (
    <li className="flex items-start justify-between gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex min-w-0 items-start gap-3">
        <CreditCard size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[#5B3FD6]" />
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-gray-900">{name}</p>
          <p className="mt-1.5 text-[11px] text-gray-500">
            <span aria-hidden="true">•••• </span>
            <span className="sr-only">Card ending in </span>
            {last4}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2.5">
        <Link
          to={requisiteEditRoute(id)}
          aria-label={`Edit ${name}`}
          className="text-gray-500 transition-colors hover:text-[#5B3FD6]"
        >
          <Pencil size={14} aria-hidden="true" />
        </Link>
        <button
          type="button"
          aria-label={`Delete ${name}`}
          onClick={() => onDelete(requisite)}
          className="text-gray-500 transition-colors hover:text-red-500"
        >
          <Trash2 size={14} aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}