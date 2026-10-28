interface QuantityStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const QuantityStepper = ({ value, min = 1, max = 99, onChange }: QuantityStepperProps) => (
  <div className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white">
    <button
      type="button"
      aria-label="Decrease quantity"
      disabled={value <= min}
      onClick={() => onChange(value - 1)}
      className="h-full w-7 text-gray-500 transition-colors hover:text-[#5B3FD6] disabled:text-gray-300 disabled:hover:text-gray-300"
    >
      −
    </button>
    <span className="min-w-[1.5rem] text-center text-xs font-medium text-gray-900" aria-live="polite">
      {value}
    </span>
    <button
      type="button"
      aria-label="Increase quantity"
      disabled={value >= max}
      onClick={() => onChange(value + 1)}
      className="h-full w-7 text-gray-500 transition-colors hover:text-[#5B3FD6] disabled:text-gray-300 disabled:hover:text-gray-300"
    >
      +
    </button>
  </div>
);

export default QuantityStepper;