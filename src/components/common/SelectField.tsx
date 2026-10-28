import { useId, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import type { SelectOption } from "../../types/supplierRegistration";

interface SelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  label: string;
  value: string;
  options: SelectOption[];
  onValueChange: (value: string) => void;
  error?: string;
  className?: string;
}

export default function SelectField({
  label,
  value,
  options,
  onValueChange,
  error,
  className = "",
  id,
  ...rest
}: SelectFieldProps) {
  const autoId = useId();
  const selectId = id ?? autoId;

  return (
    <div className={className}>
      <label htmlFor={selectId} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <select
          {...rest}
          id={selectId}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${selectId}-error` : undefined}
          className={`h-11 w-full cursor-pointer appearance-none rounded-md border bg-white px-3 pr-9 text-xs outline-none transition-colors ${
            value === "" ? "text-gray-400" : "text-gray-900"
          } ${error ? "border-red-400" : "border-gray-200 focus:border-[#5B3FD6]"}`}
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-900">
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>

      {error && (
        <p id={`${selectId}-error`} className="mt-1 text-[11px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}