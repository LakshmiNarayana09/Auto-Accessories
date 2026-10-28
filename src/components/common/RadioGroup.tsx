import type { RadioOption } from "../../types/supplierRegistration";

interface RadioGroupProps<T extends string> {
  name: string;
  legend: string;
  options: RadioOption<T>[];
  value: T;
  onChange: (value: T) => void;
  showLegend?: boolean;
  direction?: "row" | "column";
}

export default function RadioGroup<T extends string>({
  name,
  legend,
  options,
  value,
  onChange,
  showLegend = false,
  direction = "row",
}: RadioGroupProps<T>) {
  const layoutClass =
    direction === "column"
      ? "flex flex-col gap-3"
      : "flex flex-wrap items-center gap-x-6 gap-y-2";

  return (
    <fieldset>
      <legend className={showLegend ? "mb-3 text-xs font-medium text-gray-900" : "sr-only"}>
        {legend}
      </legend>
      <div className={layoutClass}>
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-start gap-2 text-xs text-gray-800"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#5B3FD6]"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}