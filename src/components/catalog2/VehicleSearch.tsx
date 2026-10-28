import { Search } from "lucide-react";
import { useState } from "react";

interface VehicleSearchProps {
  title: string;
  placeholder: string;
  example: string;
  buttonColor?: string;
}

const VehicleSearch = ({
  title,
  placeholder,
  example,
  buttonColor = "#5B3FD6",
}: VehicleSearchProps) => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (!value.trim()) return;

    console.log("Searching:", value);
  };

  return (
    <div className="w-full">
      <label className="mb-2 block text-[9px] font-medium text-gray-700 sm:text-[10px]">
        {title}
      </label>

      <div className="flex h-9 w-full overflow-hidden rounded-md border border-gray-200 bg-white">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent px-3 text-[9px] text-gray-700 outline-none placeholder:text-gray-400 sm:text-[10px]"
        />

        <button
          type="button"
          onClick={handleSearch}
          aria-label="Search"
          style={{ backgroundColor: buttonColor }}
          className="flex w-9 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-90"
        >
          <Search className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </div>

      <p className="mt-1.5 text-[7px] text-gray-400 sm:text-[8px]">
        Example:{" "}
        <span className="text-[#5B3FD6]">{example}</span>
      </p>
    </div>
  );
};

export default VehicleSearch;