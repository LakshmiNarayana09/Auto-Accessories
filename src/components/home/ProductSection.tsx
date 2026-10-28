

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductSectionData } from "../../types/home";
import SectionHeader from "../common/SectionHeader";
import { ChevronRight as ChevronRightIcon } from "lucide-react";
import PromoBanner from "./PromoBanner";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  data: ProductSectionData;
}

const itemWidth =
  "w-full sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]";

const ProductSection = ({ data }: ProductSectionProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateCanScroll = useCallback(() => {
    const el = scrollerRef.current;

    if (!el) return;

    setCanScrollNext(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 4
    );
  }, []);

  useEffect(() => {
    updateCanScroll();

    window.addEventListener("resize", updateCanScroll);

    return () => {
      window.removeEventListener("resize", updateCanScroll);
    };
  }, [updateCanScroll, data.products.length]);

  const scrollNext = () => {
    const el = scrollerRef.current;

    if (!el) return;

    el.scrollBy({
      left: el.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">
      <SectionHeader
        title={data.title}
        linkLabel={data.viewAllLabel}
        linkHref={data.viewAllHref}
      />

      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={updateCanScroll}
          className="
            -mx-4 -my-4
            flex snap-x snap-mandatory
            gap-3 overflow-x-auto
            px-4 py-4
            sm:-mx-6 sm:gap-4 sm:px-6
            lg:-mx-3 lg:px-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          
          {data.banner && (
            <div className={`${itemWidth} shrink-0 snap-start`}>
              <PromoBanner {...data.banner} />
            </div>
          )}

          
          {data.products.map((product) => (
            <div
              key={product.id}
              className={`${itemWidth} shrink-0 snap-start`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        
        {canScrollNext && (
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Show next products"
            className="
              absolute right-2 top-1/2 hidden
              h-8 w-8 -translate-y-1/2
              items-center justify-center rounded-full
              border border-gray-200 bg-white text-gray-600
              shadow-sm transition-colors hover:text-[#5B3FD6]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-[#5B3FD6]
              md:flex lg:-right-4
            "
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
