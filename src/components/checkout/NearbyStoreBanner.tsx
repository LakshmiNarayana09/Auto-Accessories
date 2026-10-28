import { Info } from 'lucide-react';
import { formatPrice } from '../../utils/format';

interface NearbyStoreBannerProps {
  priceFrom: number;
  distanceMeters: number;
  onAccept: () => void;
  onDismiss: () => void;
}

const NearbyStoreBanner = ({ priceFrom, distanceMeters, onAccept, onDismiss }: NearbyStoreBannerProps) => (
  <div
    role="status"
    className="flex flex-col gap-3 rounded-xl bg-[#FDEEE4] p-3 sm:flex-row sm:items-center sm:justify-between sm:px-4"
  >
    <div className="flex items-start gap-3">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
      <div className="text-xs text-gray-900">
        <p>
          We found a store from another supplier. Prices from{' '}
          <span className="font-bold">{formatPrice(priceFrom)}</span>.
        </p>
        <p className="mt-0.5 text-[11px] text-gray-500">Located within {distanceMeters} m of you.</p>
      </div>
    </div>

    <div className="flex shrink-0 items-center gap-2 pl-7 sm:pl-0">
      <span className="mr-1 text-xs text-gray-700">Want to pick it up?</span>
      <button
        type="button"
        onClick={onAccept}
        className="rounded-md bg-[#5B3FD6] px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#4A33B8]"
      >
        Yes
      </button>
      <button
        type="button"
        onClick={onDismiss}
        className="rounded-md border border-[#5B3FD6] bg-white px-4 py-1.5 text-xs font-medium text-[#5B3FD6] transition-colors hover:bg-[#EEEBFB]"
      >
        No
      </button>
    </div>
  </div>
);

export default NearbyStoreBanner;