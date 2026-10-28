import { useState } from 'react';
import type { FilterOption } from '../../types/catalog';

interface CheckboxFilterProps {
  options: FilterOption[];
  selected: string[];
  onToggle: (value: string) => void;
  searchable?: boolean;
  initialVisible?: number;
}

const CheckboxFilter = ({
  options,
  selected,
  onToggle,
  searchable = false,
  initialVisible = 5,
}: CheckboxFilterProps) => {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  const q = query.trim().toLowerCase();
  const filtered = options.filter((o) => o.value.toLowerCase().includes(q));
  const showAll = expanded || q !== '';
  const visible = showAll ? filtered : filtered.slice(0, initialVisible);
  const canExpand = q === '' && filtered.length > initialVisible;

  return (
    <div>
      {searchable && (
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Quick search"
          aria-label="Quick search"
          className="mb-2 h-8 w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#5B3FD6] focus:outline-none"
        />
      )}

      <ul className={`space-y-0.5 ${showAll ? 'max-h-56 overflow-y-auto pr-1' : ''}`}>
        {visible.map((option) => (
          <li key={option.value}>
            <label className="flex cursor-pointer items-center gap-2 py-1 text-xs text-gray-700">
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={() => onToggle(option.value)}
                className="h-4 w-4 shrink-0 rounded border-gray-300 accent-[#5B3FD6]"
              />
              <span className="truncate">{option.value}</span>
              <span className="text-gray-400">({option.count})</span>
            </label>
          </li>
        ))}
        {visible.length === 0 && <li className="py-1 text-xs text-gray-400">Nothing found</li>}
      </ul>

      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-xs text-[#5B3FD6] hover:underline"
        >
          {expanded ? 'Show less' : 'Show all'}
        </button>
      )}
    </div>
  );
};

export default CheckboxFilter;