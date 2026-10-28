import { useMemo, useState } from "react";
import BrandFilters from "./BrandFilters";
import BrandGrid from "./BrandGrid";
import { brands } from "../../data/brand/brandData";

function Brands() {
  const [selectedLetter, setSelectedLetter] = useState("");

  const filteredBrands = useMemo(() => {
    if (!selectedLetter) {
      return brands;
    }

    return brands.filter((brand) => brand.letter === selectedLetter);
  }, [selectedLetter]);

  return (
    <main className="bg-white">
      <section className="border-t border-[#eeeeee] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-5 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-[15px] font-bold leading-none text-[#222222]">
            Brand List
          </h1>
          <BrandFilters selectedLetter={selectedLetter} onLetterChange={setSelectedLetter} />
        </div>
      </section>

      <section className="bg-[#f7f7f8]">
        <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6 lg:px-8">
          <BrandGrid brands={filteredBrands} />
        </div>
      </section>
    </main>
  );
}

export default Brands;