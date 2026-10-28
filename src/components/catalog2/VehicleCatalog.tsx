import VehicleSearch from "./VehicleSearch";
import ManufacturerCard from "./ManufacturerCard";
import { manufacturers } from "../../data/catalog2/manufacturers";

const VehicleCatalog = () => {
  return (
    <main className="min-h-screen bg-[#f6f7fa]">
      <div className="mx-auto max-w-[1420px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="rounded-sm bg-[#f6f7fa]">
          <h1 className="mb-5 text-base font-semibold text-gray-900 sm:text-lg">
            Original Spare Parts Catalog
          </h1>

          <section className="rounded-sm bg-white px-5 py-5 shadow-sm sm:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div className="md:border-r md:border-gray-100 md:pr-8">
                <VehicleSearch
                  title="Search model by VIN number:"
                  placeholder="Enter VIN"
                  example="WBA3A5C50DF123456"
                />
              </div>

              <div>
                <VehicleSearch
                  title="Search model by body/frame number:"
                  placeholder="Enter body/frame number"
                  example="A6H20-123456"
                />
              </div>
            </div>
          </section>

          <section className="mt-7">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 sm:text-base">
              Search model by manufacturer catalog:
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {manufacturers.map((manufacturer) => (
                <ManufacturerCard
                  key={manufacturer.id}
                  manufacturer={manufacturer}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default VehicleCatalog;