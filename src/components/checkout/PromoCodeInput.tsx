import { useId } from 'react';
import { ArrowRight } from 'lucide-react';

interface PromoCodeInputProps {
  value: string;
  error?: string;
  appliedPercent: number;
  onChange: (value: string) => void;
  onApply: () => void;
}

const PromoCodeInput = ({ value, error, appliedPercent, onChange, onApply }: PromoCodeInputProps) => {
  const id = useId();

  return (
    <div>
      <div
        className={`flex items-center gap-2 rounded-md border bg-white pl-3 pr-1.5 ${
          error ? 'border-red-400' : 'border-gray-200 focus-within:border-[#5B3FD6]'
        }`}
      >
        <div className="min-w-0 flex-1 py-1.5">
          <label htmlFor={id} className="block text-[10px] text-gray-400">
            Promo code
          </label>
          <input
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); // don't submit the whole checkout form
                onApply();
              }
            }}
            aria-invalid={error ? true : undefined}
            className="w-full bg-transparent text-xs font-medium uppercase text-gray-900 outline-none"
          />
        </div>

        <button
          type="button"
          onClick={onApply}
          aria-label="Apply promo code"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#5B3FD6]/40 text-[#5B3FD6] transition-colors hover:bg-[#EEEBFB]"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {error && <p className="mt-1 text-[11px] text-red-500">{error}</p>}
      {!error && appliedPercent > 0 && (
        <p className="mt-1 text-[11px] text-green-600">Promo code applied: −{appliedPercent}%</p>
      )}
    </div>
  );
};

export default PromoCodeInput;