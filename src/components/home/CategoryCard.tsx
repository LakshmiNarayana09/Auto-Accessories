import type { CategoryCardData } from '../../types/home';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';
interface CategoryCardProps extends Omit<CategoryCardData, 'id'> {
  className?: string;
}

const CategoryCards = ({
  title,
  buttonLabel,
  href,
  image,
  imageAlt,
  className = '',
}: CategoryCardProps) => (
  <article
    className={`relative flex min-h-[190px] overflow-hidden rounded-2xl bg-[#E9EBF7] p-5 sm:min-h-[210px] ${className}`}
  >
    <div
      className="absolute -bottom-14 right-2 h-40 w-40 rounded-full bg-orange-500 sm:h-44 sm:w-44"
      aria-hidden="true"
    />

    <img
      src={image}
      alt={imageAlt}
      loading="lazy"
      className="absolute bottom-0 right-3 z-10 h-[85%] max-w-[45%] object-contain"
    />

    <div className="relative z-20 flex max-w-[55%] flex-col items-start justify-between gap-5">
      <h3 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">{title}</h3>

      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-lg bg-[#5B3FD6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4A33B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6]"
      >
        {buttonLabel}
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  </article>
);

export default CategoryCards;