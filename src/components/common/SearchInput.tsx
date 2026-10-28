import { useId } from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({
  value,
  onValueChange,
  placeholder = "Search",
  className = "",
}: SearchInputProps) {
  const id = useId();

  return (
    <div role="search" className={`relative ${className}`}>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-gray-200 bg-white pl-3 pr-9 text-xs text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#5B3FD6]"
      />
      <Search
        size={16}
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
}