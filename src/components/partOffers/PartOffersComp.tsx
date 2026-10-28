
import Breadcrumbs from "./BreadCrumbs";
import OffersTable from "./OffersTable";
import { partOffersData } from "../../data/partoffers/partOffersData";
import type { Offer } from "../../types/partOffers";

function PartOffersComp() {
  const { breadcrumbs, brand, partNumber, description, sections } = partOffersData;

  const handleAddToCart = (offer: Offer, quantity: number) => {
    console.log("Added to cart:", offer.id, "x", quantity);
  };

  const handleShowMore = (groupId: string) => {
    console.log("Show more offers for group:", groupId);
  };

  return (
    <div className="min-h-screen bg-[#f6f7fa]">

      <main className="mx-auto max-w-[1420px] px-4 py-5 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-4">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            {brand} <span className="text-gray-400">{partNumber}</span>
          </h1>
          <p className="mt-1 text-xs text-gray-700 sm:text-sm">{description}</p>
        </div>

        {sections.map((section) => (
          <OffersTable
            key={section.id}
            section={section}
            onAddToCart={handleAddToCart}
            onShowMore={handleShowMore}
          />
        ))}
      </main>
    </div>
  );
}

export default PartOffersComp;