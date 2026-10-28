import { Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

import type { Brand } from "../../types/brand";

interface BrandCardProps {
  brand: Brand;
}

function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link
      to={`/brands/${brand.id}`}
      className="group flex h-[54px] w-full items-center gap-3 rounded-[2px] border border-[#f0f0f3] bg-white px-2.5 text-left shadow-[0_2px_6px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-[1px] hover:border-[#dcd9f8] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
    >
      
      <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-[#dfe0ed] text-white group-hover:bg-[#d4d3e5]">
        {brand.logo ? (
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-full w-full object-contain"
          />
        ) : (
          <ImageIcon
            size={17}
            strokeWidth={1.5}
          />
        )}
      </div>

      
      <span className="truncate text-[10px] font-medium text-[#222222]">
        {brand.name}
      </span>
    </Link>
  );
}

export default BrandCard;