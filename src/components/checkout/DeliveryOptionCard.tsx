import type { DeliveryMethod } from '../../types/checkout';
import RadioDot from '../common/RadioDot';

interface DeliveryOptionCardProps {
  name: string;
  method: DeliveryMethod;
  selected: boolean;
  onSelect: () => void;
}

const DeliveryOptionCard = ({ name, method, selected, onSelect }: DeliveryOptionCardProps) => (
  <label
    className={`flex cursor-pointer gap-3 rounded-lg border p-3 transition-colors focus-within:ring-2 focus-within:ring-[#5B3FD6]/30 ${
      selected ? 'border-[#5B3FD6]/40 shadow-md' : 'border-gray-200 hover:border-gray-300'
    }`}
  >
    <input type="radio" name={name} checked={selected} onChange={onSelect} className="sr-only" />
    <RadioDot checked={selected} className="mt-0.5" />
    <span className="min-w-0">
      <span className="block text-xs font-semibold text-gray-900">{method.title}</span>
      <span className="mt-1 block text-[11px] leading-snug text-gray-400">{method.description}</span>
    </span>
  </label>
);

export default DeliveryOptionCard;