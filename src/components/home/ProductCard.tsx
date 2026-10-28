
import type { Product } from "../../types/home";
import StarRating from "../common/StarRating";
import { ShoppingCart as CartIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { addToCart } from "../../store/cartSlice";

interface ProductCardProps {
  product: Product;
}

const formatPrice = (value: number) =>
  `${value.toLocaleString("en-US")} ₽`;

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    article,
    title,
    image,
    imageAlt,
    rating,
    reviewsCount,
    price,
    oldPrice,
  } = product;

  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-lg sm:p-4">
      
      <div className="flex aspect-square w-full items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="min-w-0 truncate text-[10px] text-gray-400 sm:text-[11px]">
          Article: {article}
        </span>

        <div className="shrink-0">
          <StarRating
            rating={rating}
            reviewsCount={reviewsCount}
          />
        </div>
      </div>

      
      <h3 className="mt-2 line-clamp-2 min-h-[32px] text-xs font-medium text-gray-900 sm:min-h-[40px] sm:text-sm">
        {title}
      </h3>

      
      <div className="mt-auto flex items-end justify-between gap-2 pt-4">
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
          <span className="text-base font-bold text-gray-900 sm:text-lg lg:text-xl">
            {formatPrice(price)}
          </span>

          {oldPrice && (
            <span className="text-[10px] text-gray-400 line-through sm:text-[11px]">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          aria-label={`Add ${title} to cart`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#5B3FD6] text-[#5B3FD6] transition-colors group-hover:bg-[#5B3FD6] group-hover:text-white hover:bg-[#4A33B8] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6] sm:h-9 sm:w-9"
        >
          <CartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
