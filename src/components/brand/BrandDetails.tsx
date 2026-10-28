import { ShoppingCart } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { brands } from "../../data/brand/brandData";

function BrandDetails() {
  const { id } = useParams();

  const brand = brands.find(
    (item) => item.id === Number(id)
  );

  if (!brand) {
    return (
      <main className="bg-[#f7f7f8] px-4 py-10">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-lg font-semibold text-[#222]">
            Brand not found
          </h1>

          <Link
            to="/brands"
            className="mt-4 inline-block text-sm text-[#6157d9]"
          >
            ← Back to brands
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f7f7f8]">
      
      <section className="border-t border-[#eeeeee] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row">
            
            <div className="flex h-[96px] w-[96px] shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-[#dfdfdf] sm:h-[110px] sm:w-[110px]">
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-2xl font-bold text-[#6157d9]">
                  {brand.name.charAt(0)}
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-[18px] font-bold text-[#222222]">
                {brand.name}
              </h1>

              {brand.country && (
                <p className="mt-1 text-[11px] text-[#444]">
                  Country: {brand.country}
                </p>
              )}

              {brand.website && (
                <p className="mt-1 text-[11px] text-[#444]">
                  Manufacturer website:{" "}
                  <a
                    href={`https://${brand.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-500 hover:underline"
                  >
                    {brand.website}
                  </a>
                </p>
              )}

              {brand.description && (
                <p className="mt-2 max-w-[1050px] text-[10px] leading-[1.6] text-[#555]">
                  {brand.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="overflow-hidden border border-[#eeeeee] bg-white">
           
            <div className="hidden grid-cols-[1.1fr_3fr_1.5fr_70px] border-b border-[#eeeeee] bg-white px-4 py-2 text-[9px] text-[#777] sm:grid">
              <span>Number</span>
              <span>Name</span>
              <span>Stock availability</span>
              <span></span>
            </div>

            {brand.products?.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 gap-2 border-b border-[#eeeeee] px-4 py-3 last:border-b-0 sm:grid-cols-[1.1fr_3fr_1.5fr_70px] sm:items-center sm:gap-0 sm:py-2">
                
                <div>
                  <span className="text-[9px] text-[#222]">
                    {product.number}
                  </span>
                </div>

                <div>
                  <span className="text-[9px] text-[#222]">
                    {product.name}
                  </span>
                </div>

                
                <div>
                  <span className="text-[9px] text-[#222]">
                    {product.stock} pcs.
                  </span>
                </div>

                <div className="sm:text-right">
                  <button
                    type="button"
                    className="inline-flex h-[22px] items-center gap-1.5 rounded-[4px] border border-[#6157d9] px-2.5 text-[9px] font-medium text-[#6157d9] transition hover:bg-[#6157d9] hover:text-white">
                    <ShoppingCart size={11} />
                    Buy
                  </button>
                </div>
              </div>
            ))}

            {!brand.products?.length && (
              <div className="px-4 py-10 text-center">
                <p className="text-sm text-gray-500">
                  No products available for this brand.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BrandDetails;