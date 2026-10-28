import { useEffect, useId, useRef, useState } from 'react';
import type { SupplierInfo } from '../../types/partOffers';
import { X as CloseIcon } from 'lucide-react';
import SupplierStats from './SupplierStats';

interface SupplierPopoverProps {
  label: string;
  info: SupplierInfo;
  rating?: number;
}

const SupplierPopover = ({ label, info, rating }: SupplierPopoverProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const variant = info.statsVariant ?? (rating !== undefined ? 'gauge' : 'rings');

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
        className={`underline decoration-dotted underline-offset-4 transition-colors hover:text-[#5B3FD6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B3FD6] ${
          open ? 'text-[#5B3FD6]' : ''
        }`}
      >
        {label}
      </button>

      {open && (
        <>
          
          <div
            className="fixed inset-0 z-40 bg-black/40 sm:hidden"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          <div
            id={panelId}
            ref={panelRef}
            role="dialog"
            aria-label="About the supplier"
            tabIndex={-1}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-5 text-left text-gray-900 shadow-2xl outline-none sm:absolute sm:inset-x-auto sm:bottom-auto sm:right-0 sm:top-full sm:mt-2 sm:max-h-none sm:w-[420px] sm:overflow-visible sm:rounded-xl sm:border sm:border-gray-100 lg:left-0 lg:right-auto"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-bold">About the supplier</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="-mr-1 -mt-1 rounded-md p-1 text-gray-400 hover:text-gray-700 sm:hidden"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <dl className="mt-3 grid grid-cols-2 gap-4 text-xs">
              <div>
                <dt className="text-gray-400">Order processing time</dt>
                <dd className="mt-1 font-medium text-gray-900">{info.processingTime}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Price updated</dt>
                <dd className="mt-1 font-medium text-gray-900">{info.priceUpdated}</dd>
              </div>
            </dl>

            <div className="mt-4">
              <SupplierStats
                variant={variant}
                approved={info.approvedPercent}
                returns={info.returnsPercent}
                rating={rating}
              />
            </div>

            <h4 className="mt-4 text-xs font-bold">{info.returnTitle}</h4>
            <p className="mt-2 text-[11px] leading-relaxed text-gray-500">{info.returnText}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SupplierPopover;