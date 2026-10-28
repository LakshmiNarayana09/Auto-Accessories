import type { CustomerType } from '../../types/checkout';

interface CustomerTypeTabsProps {
  value: CustomerType;
  onChange: (value: CustomerType) => void;
}

const options: { id: CustomerType; label: string }[] = [
  { id: 'individual', label: 'Individual' },
  { id: 'legal', label: 'Legal entity' },
];

const CustomerTypeTabs = ({ value, onChange }: CustomerTypeTabsProps) => (
  <div role="radiogroup" aria-label="Customer type" className="inline-flex rounded-lg bg-gray-100 p-1">
    {options.map((option) => {
      const active = value === option.id;
      return (
        <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={active}
          onClick={() => onChange(option.id)}
          className={`rounded-md px-4 py-2 text-xs font-medium transition-colors ${
            active ? 'bg-[#5B3FD6] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {option.label}
        </button>
      );
    })}
  </div>
);

export default CustomerTypeTabs;