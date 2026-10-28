interface RadioDotProps {
  checked: boolean;
  className?: string;
}

const RadioDot = ({ checked, className = '' }: RadioDotProps) => (
  <span
    aria-hidden="true"
    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
      checked ? 'border-[#5B3FD6]' : 'border-gray-300'
    } ${className}`}
  >
    {checked && <span className="h-1.5 w-1.5 rounded-full bg-[#5B3FD6]" />}
  </span>
);

export default RadioDot;