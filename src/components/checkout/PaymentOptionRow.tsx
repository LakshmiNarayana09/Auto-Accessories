import type { PaymentMethod } from '../../types/checkout';
import RadioDot from '../common/RadioDot';

interface PaymentOptionRowProps {
  name: string;
  method: PaymentMethod;
  selected: boolean;
  onSelect: () => void;
}

const PaymentOptionRow = ({ name, method, selected, onSelect }: PaymentOptionRowProps) => {
  const Icon = method.icon;

  return (
    <label
      className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg border px-4 py-3 transition-colors focus-within:ring-2 focus-within:ring-[#5B3FD6]/30 ${
        selected ? 'border-[#5B3FD6] bg-[#EEEBFB]' : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <input type="radio" name={name} checked={selected} onChange={onSelect} className="sr-only" />
      <span className="flex items-center gap-3 text-xs text-gray-900">
        <Icon className="h-4 w-4 shrink-0 text-gray-500" />
        {method.title}
      </span>
      <RadioDot checked={selected} />
    </label>
  );
};

export default PaymentOptionRow;