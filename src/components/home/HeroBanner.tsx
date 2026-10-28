
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBannerImage from "../../assets/home/heroImg.png";

function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-[18px] bg-gradient-to-r from-[#4b3c4e] via-[#a17789] to-[#d4a48d]">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(255,255,255,.25),transparent_28%),linear-gradient(110deg,rgba(38,28,43,.75),rgba(166,112,130,.55),rgba(238,185,110,.35))]" />

      <div className="relative min-h-[230px] sm:min-h-[270px] lg:min-h-[315px]">
       
        <div className="absolute left-7 top-1/2 z-20 max-w-[430px] -translate-y-1/2 text-white sm:left-10 lg:left-9">
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-[28px]">
            Original Motor Oils
            <br />
            with a{" "}
            <span className="inline-block rounded-md bg-[#ff542f] px-2 py-1">
              15%
            </span>{" "}
            Discount
          </h1>

          <p className="mt-4 text-xs text-white/70 sm:text-sm">
            Promotion valid from June 1 to June 30, 2021
          </p>

         
          <div className="mt-9 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-white" />
            <span className="h-[2px] w-8 bg-white/30" />
            <span className="h-[2px] w-8 bg-white/30" />
          </div>
        </div>

       
        <div className="absolute bottom-0 right-[3%] z-10 hidden h-full w-[52%] lg:block">
          <img
            src={heroBannerImage}
            alt="Original motor oils"
            className="h-full w-full object-contain object-right-bottom"
          />
        </div>

       
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-[-1px] top-1/2 z-30 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-r-md bg-white text-gray-500 shadow-md transition hover:text-[#6254d9]"
        >
          <ChevronLeft size={17} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-[-1px] top-1/2 z-30 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-l-md bg-white text-gray-500 shadow-md transition hover:text-[#6254d9]"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;

