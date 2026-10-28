import { Link } from 'react-router-dom';
import type { CatalogProduct, SpecRow } from '../../types/catalog';
import { formatPrice } from '../../utils/format';

interface CatalogCardProps {
  product: CatalogProduct;
  specs: SpecRow[];
}

const CatalogCard = ({ product, specs }: CatalogCardProps) => {
  const offersHref = `/parts/offers?article=${encodeURIComponent(product.article)}`;

  return (
    <article className="group relative focus-within:z-20 hover:z-20">
      <div className="rounded-2xl bg-white p-3 shadow-xs transition-shadow group-focus-within:rounded-b-none group-focus-within:shadow-lg group-hover:rounded-b-none group-hover:shadow-lg sm:p-4">
        <div className="flex aspect-[4/3] items-center justify-center">
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <p className="mt-3 text-sm font-bold text-gray-900">{product.brand}</p>
        <h2 className="mt-1 line-clamp-2 min-h-[2rem] text-xs text-gray-700">{product.title}</h2>

        <p className="mt-2 text-[11px] text-gray-400">
          Article:{' '}
          <Link to={offersHref} className="text-[#5B3FD6] hover:underline">
            {product.article}
          </Link>
        </p>

        <Link
          to={offersHref}
          className="mt-3 block rounded-lg bg-[#EEEBFB] py-2 text-center text-xs font-medium text-[#4A33B8] transition-colors group-focus-within:bg-[#5B3FD6] group-focus-within:text-white group-hover:bg-[#5B3FD6] group-hover:text-white"
        >
          Prices from {formatPrice(product.priceFrom)}
        </Link>
      </div>

     
      <dl className="absolute inset-x-0 top-full hidden space-y-1 rounded-b-2xl bg-white px-4 pb-4 pt-1 shadow-lg group-focus-within:block group-hover:block">
        {specs.map(({ key, label }) => (
          <div key={key} className="flex gap-1 text-[11px]">
            <dt className="text-gray-400">{label}:</dt>
            <dd className="font-medium text-gray-900">{product.attributes[key]}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
};

export default CatalogCard;