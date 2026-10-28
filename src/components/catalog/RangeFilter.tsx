interface RangeFilterProps {
  label: string;
  min: string;
  max: string;
  boundMin: number;
  boundMax: number;
  onChange: (bound: 'min' | 'max', value: string) => void;
}

const inputClass =
  'h-9 w-full min-w-0 rounded-md border border-gray-200 bg-gray-50 px-3 text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#5B3FD6] focus:bg-white focus:outline-none';

const RangeFilter = ({ label, min, max, boundMin, boundMax, onChange }: RangeFilterProps) => (
  <div className="grid grid-cols-2 gap-2">
    <input
      type="text"
      inputMode="numeric"
      value={min}
      onChange={(e) => onChange('min', e.target.value.replace(/\D/g, ''))}
      placeholder={`from ${boundMin}`}
      aria-label={`${label}: from`}
      className={inputClass}
    />
    <input
      type="text"
      inputMode="numeric"
      value={max}
      onChange={(e) => onChange('max', e.target.value.replace(/\D/g, ''))}
      placeholder={`to ${boundMax}`}
      aria-label={`${label}: to`}
      className={inputClass}
    />
  </div>
);

export default RangeFilter;