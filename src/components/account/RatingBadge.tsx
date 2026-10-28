import { Star } from "lucide-react";

interface RatingBadgeProps {
  rating: number;
  max?: number;
  tooltip?: string;
}

export default function RatingBadge({ rating, max = 5, tooltip = "Sales rating" }: RatingBadgeProps) {
  return (
    <span
      tabIndex={0}
      aria-label={`${tooltip}: ${rating} out of ${max}`}
      className="group relative inline-flex items-center gap-1 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-700 outline-none focus-visible:ring-2 focus-visible:ring-[#5B3FD6]"
    >
      <Star size={10} aria-hidden="true" className="fill-amber-400 text-amber-400" />
      {rating}/{max}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-[10px] font-normal text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100"
      >
        {tooltip}
      </span>
    </span>
  );
}