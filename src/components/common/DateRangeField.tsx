import { CalendarDays } from "lucide-react";
import type { DateRange } from "../../types/account";

interface DateRangeFieldProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
  label?: string;
  className?: string;
}

const inputClass =
  "w-[118px] bg-transparent text-xs text-gray-800 outline-none [&::-webkit-calendar-picker-indicator]:hidden";

export default function DateRangeField({
  value,
  onChange,
  label = "Date range",
  className = "",
}: DateRangeFieldProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`flex h-10 items-center gap-2 rounded-md border border-gray-200 bg-white px-3 transition-colors focus-within:border-[#5B3FD6] ${className}`}
    >
      <CalendarDays size={16} aria-hidden="true" className="shrink-0 text-gray-500" />

      <input
        type="date"
        aria-label="From date"
        value={value.from}
        max={value.to || undefined}
        onChange={(e) => onChange({ ...value, from: e.target.value })}
        className={inputClass}
      />

      <span aria-hidden="true" className="text-xs text-gray-400">
        -
      </span>

      <input
        type="date"
        aria-label="To date"
        value={value.to}
        min={value.from || undefined}
        onChange={(e) => onChange({ ...value, to: e.target.value })}
        className={inputClass}
      />
    </div>
  );
}