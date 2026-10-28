import { ChevronDown, ExternalLink, MapPin } from 'lucide-react';
import type { PickupStore } from '../../types/checkout';
import FormSection from './FormSection';

interface PickupAddressSectionProps {
  stores: PickupStore[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const PickupAddressSection = ({ stores, selectedId, onSelect }: PickupAddressSectionProps) => {
  const store = stores.find((s) => s.id === selectedId) ?? stores[0];

  return (
    <FormSection title="Pickup address">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div>
          <div className="relative">
            <select
              aria-label="Pickup store"
              value={store.id}
              onChange={(e) => onSelect(e.target.value)}
              className="h-10 w-full appearance-none rounded-md border border-gray-200 bg-white pl-3 pr-9 text-xs text-gray-900 outline-none transition-colors focus:border-[#5B3FD6]"
            >
              {stores.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.address}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
          </div>

          <p className="mt-3 text-[11px] text-gray-500">{store.workingHours}</p>
          <p className="mt-3 text-xs font-medium text-gray-900">{store.availability}</p>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100 md:aspect-[2.4/1]">
          <img
            src={store.mapImage}
            alt={`Map: ${store.address}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />

          
          <MapPin
            className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-full drop-shadow"
            fill="#5B3FD6"
            stroke="white"
            aria-hidden="true"
          />

          <a
            href={store.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the map in a new tab"
            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md bg-gray-800 text-white transition-colors hover:bg-gray-700"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </FormSection>
  );
};

export default PickupAddressSection;