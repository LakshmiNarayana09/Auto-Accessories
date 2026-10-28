import BrandCard from "./BrandCard";
import type { Brand } from "../../types/brand";

interface BrandGridProps {
  brands: Brand[];
}

function BrandGrid({ brands }: BrandGridProps) {
  if (brands.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-sm text-gray-500">No brands found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}

export default BrandGrid;