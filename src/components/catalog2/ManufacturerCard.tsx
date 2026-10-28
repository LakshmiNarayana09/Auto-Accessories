import type { Manufacturer } from "../../types/catalog2";

interface ManufacturerCardProps {
  manufacturer: Manufacturer;
}

const ManufacturerCard = ({ manufacturer }: ManufacturerCardProps) => {
  return (
    <div className="min-h-[112px] rounded-md border border-gray-100 bg-white px-3 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md">
      <div className="flex gap-3">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-100 bg-white text-[10px] font-medium text-[#5B3FD6]">
          {manufacturer.letter}
        </div>

        <div className="min-w-0">
          <h3 className="text-[8px] font-medium uppercase text-gray-500">
            {manufacturer.name}
          </h3>

          <div className="mt-1.5 space-y-1">
            {manufacturer.models.map((model) => (
              <button
                key={model}
                type="button"
                className="block text-left text-[8px] leading-tight text-gray-600 transition-colors hover:text-[#5B3FD6]"
              >
                {model}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerCard;