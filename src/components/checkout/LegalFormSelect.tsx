import type { LegalForm } from '../../types/checkout';
import RadioDot from '../common/RadioDot';

interface LegalFormSelectProps {
  value: LegalForm;
  onChange: (value: LegalForm) => void;
}

const options: { id: LegalForm; label: string }[] = [
  { id: 'llc', label: 'LLC' },
  { id: 'sole-proprietor', label: 'Sole proprietor' },
];

const LegalFormSelect = ({ value, onChange }: LegalFormSelectProps) => (
  <div role="radiogroup" aria-label="Legal form" className="flex flex-wrap gap-x-6 gap-y-2">
    {options.map((option) => (
      <label
        key={option.id}
        className="flex cursor-pointer items-center gap-2 rounded text-xs text-gray-900 focus-within:ring-2 focus-within:ring-[#5B3FD6]/30"
      >
        <input
          type="radio"
          name="legalForm"
          checked={value === option.id}
          onChange={() => onChange(option.id)}
          className="sr-only"
        />
        <RadioDot checked={value === option.id} />
        {option.label}
      </label>
    ))}
  </div>
);

export default LegalFormSelect;