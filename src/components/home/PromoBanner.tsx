
import type { PromoBannerData } from '../../types/home';

const PromoBanner = ({
  title,
  badge,
  image,
  imageAlt,
  href,
}: PromoBannerData) => (
  <a
    href={href}
    className="relative flex h-full min-h-[340px] w-full flex-col overflow-hidden rounded-2xl bg-[#5B3FD6] p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6]"
  >
    
    <h3 className="relative z-10 max-w-[12rem] text-lg font-bold leading-snug sm:text-xl">
      {title}
    </h3>

    
    <div
      className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-orange-500"
      aria-hidden="true"
    />

    
    <img
      src={image}
      alt={imageAlt}
      loading="lazy"
      className="absolute bottom-2 left-2 z-10 h-auto w-[65%] max-w-[220px] object-contain transition-transform duration-300 hover:scale-105 sm:w-[68%] md:w-[62%] lg:w-[65%]"
    />

    
    <span className="absolute bottom-3 right-3 z-20 rounded-md bg-orange-500 px-2 py-1 text-[10px] font-bold uppercase text-white">
      {badge}
    </span>
  </a>
);

export default PromoBanner;

