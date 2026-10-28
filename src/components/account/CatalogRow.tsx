import { Link } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { partRoute } from "../../utils/routes";
import { CATALOG_GRID } from "../../data/account/accountData";
import { formatDays, formatPieces, formatPrice } from "../../utils/format";
import type { CatalogItem } from "../../types/account";
import RatingBadge from "./RatingBadge";

interface CatalogRowProps {
  item: CatalogItem;
}

export default function CatalogRow({ item }: CatalogRowProps) {
  return (
    <div
      role="row"
      className={`grid grid-cols-1 gap-x-4 gap-y-1 border-b border-gray-100 px-5 py-3 text-xs text-gray-800 last:border-b-0 ${CATALOG_GRID}`}
    >
      <div role="cell" className="flex items-center gap-3">
        <Link to={partRoute(item.partNumber)} className="text-[#5B3FD6] hover:underline">
          {item.partNumber}
        </Link>
        <RatingBadge rating={item.rating} />
      </div>

      <div role="cell">{item.description}</div>

      <div role="cell">
        <span className="text-gray-400 md:hidden">Availability: </span>
        {formatPieces(item.quantity)}
      </div>

      <div role="cell" className="flex items-center gap-1.5">
        <span className="text-gray-400 md:hidden">Lead time:</span>
        {formatDays(item.leadTimeDays)}
        <CircleCheck size={14} aria-hidden="true" className="fill-green-500 text-white" />
      </div>

      <div role="cell" className="font-medium text-gray-900">
        {formatPrice(item.price)}
      </div>
    </div>
  );
}