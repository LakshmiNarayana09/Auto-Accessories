import type { Offer, OfferGroupData } from '../../types/partOffers';
import { formatDays, formatPrice } from '../../utils/format';
import { ChevronDown as ChevronDownIcon, Star as StarIcon } from 'lucide-react';
import Tooltip from '../common/Tooltip';
import OfferRow from './OfferRow';
import { GROUP_GRID, OFFER_GRID } from '../../data/partoffers/columns';
import SupplierPopover from './SupplierPopover';

interface OfferGroupProps {
  group: OfferGroupData;
  onAddToCart?: (offer: Offer, quantity: number) => void;
  onShowMore?: (groupId: string) => void;
}

const OfferGroup = ({ group, onAddToCart, onShowMore }: OfferGroupProps) => {
  const { manufacturer, partNumber, partHref, supplierLabel, rating, supplier, offers } = group;

  return (
    <div className="mx-2 pb-2 sm:mx-3">
     
      <div className={`flex items-center justify-between rounded-md bg-gray-100 text-xs text-gray-700 ${GROUP_GRID}`}>
        <span className="px-4 py-2 font-semibold text-gray-900">{manufacturer}</span>

        <div className="px-4 py-2">
          {supplier ? (
            <SupplierPopover label={supplierLabel} info={supplier} rating={rating} />
          ) : (
            <span>{supplierLabel}</span>
          )}
        </div>
      </div>

      <div className={GROUP_GRID}>
       
        <div className="flex items-center gap-2 px-4 py-3 lg:h-14 lg:py-0">
          <a href={partHref} className="text-xs text-[#5B3FD6] hover:underline">
            {partNumber}
          </a>
          {rating !== undefined && (
            <Tooltip label="Sales rating">
              <span
                tabIndex={0}
                className="inline-flex items-center gap-0.5 text-[11px] font-medium text-gray-700"
              >
                <StarIcon className="h-3 w-3 text-amber-400" />
                {rating}/5
              </span>
            </Tooltip>
          )}
        </div>

        <div className="min-w-0 divide-y divide-gray-100">
          {offers.map((offer) => (
            <OfferRow key={offer.id} offer={offer} onAddToCart={onAddToCart} />
          ))}

          {group.moreOffersCount ? (
            <div
              className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-xs text-gray-500 lg:grid lg:gap-x-3 ${OFFER_GRID}`}
            >
              <button
                type="button"
                onClick={() => onShowMore?.(group.id)}
                className="inline-flex items-center gap-1 text-[#5B3FD6] hover:underline"
              >
                {group.moreOffersCount} more offers
                <ChevronDownIcon className="h-3.5 w-3.5" />
              </button>
              {group.minLeadTimeDays !== undefined && (
                <span className="lg:col-start-3">from {formatDays(group.minLeadTimeDays)}</span>
              )}
              {group.minPrice !== undefined && (
                <span className="lg:col-start-4 lg:text-right">from {formatPrice(group.minPrice)}</span>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OfferGroup;