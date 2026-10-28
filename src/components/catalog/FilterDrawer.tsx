import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  resultsCount: number;
  children: ReactNode;
}

const FilterDrawer = ({ open, onClose, resultsCount, children }: FilterDrawerProps) => {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />

      <div className="absolute inset-y-0 left-0 flex w-[90%] max-w-[380px] flex-col bg-[#f6f7fa]">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-base font-bold text-gray-900">Filters</h2>
          <button type="button" onClick={onClose} aria-label="Close filters" className="rounded-md p-1 text-gray-500 hover:text-gray-900">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4">{children}</div>

        <div className="border-t border-gray-200 bg-white p-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg bg-[#5B3FD6] py-2.5 text-sm font-medium text-white hover:bg-[#4A33B8]"
          >
            Show {resultsCount} items
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;