import { useId, useState, type TextareaHTMLAttributes } from "react";

interface TextAreaFieldProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange"> {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  required?: boolean;
  error?: string;
  className?: string;
}

export default function TextAreaField({
  label,
  value,
  onValueChange,
  required,
  error,
  className = "",
  id,
  onFocus,
  onBlur,
  ...rest
}: TextAreaFieldProps) {
  const [focused, setFocused] = useState(false);
  const autoId = useId();
  const fieldId = id ?? autoId;
  const floated = focused || value !== "";

  return (
    <div className={className}>
      <div className="relative">
        <textarea
          rows={6}
          {...rest}
          id={fieldId}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={`min-h-[140px] w-full resize-y rounded-md border bg-white px-3 pb-3 pt-6 text-xs text-gray-900 outline-none transition-colors ${
            error ? "border-red-400" : "border-gray-200 focus:border-[#5B3FD6]"
          }`}
        />

        <label
          htmlFor={fieldId}
          className={`pointer-events-none absolute left-3 text-gray-400 transition-all ${
            floated ? "top-1.5 text-[10px]" : "top-3 text-xs"
          }`}
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      </div>

      {error && (
        <p id={`${fieldId}-error`} className="mt-1 text-[11px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}