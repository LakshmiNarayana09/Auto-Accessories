import { useId, useState, type InputHTMLAttributes } from 'react';
import { CircleCheck } from 'lucide-react';

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  required?: boolean;
  error?: string;
  valid?: boolean;
  className?: string;
}

const TextField = ({
  label,
  value,
  onValueChange,
  required,
  error,
  valid,
  className = '',
  id,
  onFocus,
  onBlur,
  ...rest
}: TextFieldProps) => {
  const [focused, setFocused] = useState(false);
  const autoId = useId();
  const inputId = id ?? autoId;
  const floated = focused || value !== '';

  return (
    <div className={className}>
      <div className="relative">
        <input
          {...rest}
          id={inputId}
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
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`h-11 w-full rounded-md border bg-white px-3 pr-9 pt-3 text-xs text-gray-900 outline-none transition-colors ${
            error ? 'border-red-400' : 'border-gray-200 focus:border-[#5B3FD6]'
          }`}
        />

        <label
          htmlFor={inputId}
          className={`pointer-events-none absolute left-3 text-gray-400 transition-all ${
            floated ? 'top-1.5 text-[10px]' : 'top-1/2 -translate-y-1/2 text-xs'
          }`}
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>

        {valid && (
          <CircleCheck
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500"
            fill="currentColor"
            stroke="white"
            aria-hidden="true"
          />
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-[11px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;