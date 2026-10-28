import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

const FilterSection = ({ title, children }: FilterSectionProps) => {
  const [open, setOpen] = useState(true);

  return (
    <section className="border-b border-gray-100 py-4 first:pt-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 text-left text-xs font-medium text-gray-900"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="mt-3">{children}</div>}
    </section>
  );
};

export default FilterSection;