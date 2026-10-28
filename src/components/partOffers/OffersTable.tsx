import { useState } from 'react';
import type { Offer, OffersSectionData, SortKey, SortState } from '../../types/partOffers';
import { MapPin as MapPinIcon, ListFilter as SortIcon } from 'lucide-react';
import OfferGroup from './OfferGroup';
import { GROUP_GRID, OFFER_GRID } from '../../data/partoffers/columns';

interface SortButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  className?: string;
}

const SortButton = ({ label, active, onClick, className = '' }: SortButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-1 transition-colors hover:text-[#5B3FD6] ${
      active ? 'text-[#5B3FD6]' : ''
    } ${className}`}
  >
    {label}
    <SortIcon className="h-3.5 w-3.5" />
  </button>
);

interface OffersTableProps {
  section: OffersSectionData;
  onAddToCart?: (offer: Offer, quantity: number) => void;
  onShowMore?: (groupId: string) => void;
}

const OffersTable = ({ section, onAddToCart, onShowMore }: OffersTableProps) => {
  const [sort, setSort] = useState<SortState | null>(null);

  const toggleSort = (key: SortKey) =>
    setSort((prev) =>
      prev?.key === key
        ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' }
        : { key, dir: 'asc' },
    );

  const sortOffers = (offers: Offer[]) => {
    if (!sort) return offers;
    const factor = sort.dir === 'asc' ? 1 : -1;
    return [...offers].sort((a, b) => {
      const x = a[sort.key];
      const y = b[sort.key];
      return (typeof x === 'string' && typeof y === 'string'
        ? x.localeCompare(y)
        : Number(x) - Number(y)) * factor;
    });
  };

  const isActive = (key: SortKey) => sort?.key === key;

  return (
    <section className="mt-6" aria-labelledby={`${section.id}-title`}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 id={`${section.id}-title`} className="text-lg font-bold text-gray-900 sm:text-xl">
          {section.title}
        </h2>

        {section.actionLabel && section.actionHref && (
          <a
            href={section.actionHref}
            className="inline-flex items-center gap-1.5 text-xs text-[#5B3FD6] underline decoration-dashed underline-offset-4 hover:decoration-solid"
          >
            <MapPinIcon className="h-4 w-4" />
            {section.actionLabel}
          </a>
        )}
      </div>

      <div className="rounded-xl bg-white pb-1 shadow-sm">
        
        <div className={`hidden py-3 text-xs text-gray-500 ${GROUP_GRID}`}>
          <span className="px-4">Manufacturer and number</span>
          <div className={`grid gap-x-3 px-4 ${OFFER_GRID}`}>
            <SortButton label="Description" active={isActive('description')} onClick={() => toggleSort('description')} />
            <SortButton label="Availability" active={isActive('availability')} onClick={() => toggleSort('availability')} className="justify-self-end" />
            <SortButton label="Lead time" active={isActive('leadTimeDays')} onClick={() => toggleSort('leadTimeDays')} className="justify-self-start" />
            <SortButton label="Price" active={isActive('price')} onClick={() => toggleSort('price')} className="justify-self-end" />
          </div>
        </div>

        <div className="pt-2 lg:pt-0">
          {section.groups.map((group) => (
            <OfferGroup
              key={group.id}
              group={{ ...group, offers: sortOffers(group.offers) }}
              onAddToCart={onAddToCart}
              onShowMore={onShowMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersTable;