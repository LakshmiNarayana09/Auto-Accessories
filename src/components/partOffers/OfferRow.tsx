import { useState, type ReactNode } from 'react';
import type { Offer } from '../../types/partOffers';
import { formatDays, formatPieces, formatPrice } from '../../utils/format';
import { ShoppingCart as CartIcon, CircleCheck as CheckCircleIcon, Crown as CrownIcon } from 'lucide-react';
import Tooltip from '../common/Tooltip';
import QuantityStepper from './QuantityStepper';
import { OFFER_GRID } from '../../data/partoffers/columns';

interface CellProps {
  label: string;
  children: ReactNode;
}


const Cell = ({ label, children }: CellProps) => (
  <div>
    <span className="mb-0.5 block text-[10px] uppercase tracking-wide text-gray-400 lg:hidden">
      {label}
    </span>
    {children}
  </div>
);

interface OfferRowProps {
  offer: Offer;
  onAddToCart?: (offer: Offer, quantity: number) => void;
}

const OfferRow = ({ offer, onAddToCart }: OfferRowProps) => {
  const [quantity, setQuantity] = useState(offer.defaultQuantity ?? 1);

  return (
    <div
      className={`grid grid-cols-3 gap-x-3 gap-y-3 px-4 py-3 lg:items-center ${OFFER_GRID} ${
        offer.isDealer ? 'bg-[#FDEBD5]' : ''
      }`}
    >
      <p className="col-span-3 text-sm text-gray-900 lg:col-span-1">{offer.description}</p>

      <Cell label="Availability">
        <div className="flex items-center gap-1.5 lg:justify-end">
          {offer.isDealer && (
            <Tooltip label="Dealer">
              <span tabIndex={0} aria-label="Dealer" className="text-orange-500">
                <CrownIcon className="h-3.5 w-3.5" />
              </span>
            </Tooltip>
          )}
          <span className="text-xs text-gray-800">{formatPieces(offer.availability)}</span>
        </div>
      </Cell>

      <Cell label="Lead time">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-800">{formatDays(offer.leadTimeDays)}</span>
          <CheckCircleIcon className="h-3.5 w-3.5 text-green-500" />
        </div>
      </Cell>

      <Cell label="Price">
        <span className="block text-sm font-semibold text-gray-900 lg:text-right">
          {formatPrice(offer.price)}
        </span>
      </Cell>

      
      <div className="col-span-3 flex items-center justify-between gap-3 lg:contents">
        <div className="lg:justify-self-end">
          <QuantityStepper value={quantity} max={offer.availability} onChange={setQuantity} />
        </div>
        <button
          type="button"
          onClick={() => onAddToCart?.(offer, quantity)}
          aria-label={`Add ${offer.description} to cart`}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#5B3FD6] transition-colors hover:bg-[#EEEBFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B3FD6]"
        >
          <CartIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default OfferRow;