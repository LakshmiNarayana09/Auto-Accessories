import { categories } from "../../data/home/homeCategories";

import CategoryMenuCard from "./CategoryMenuCard";
import SupplierCard from "./SupplierCard";

function CategoryMenuGrid() {
  return (
    <section className="overflow-hidden rounded-md bg-white shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryMenuCard
            key={category.id}
            category={category}
          />
        ))}

        <SupplierCard />
      </div>
    </section>
  );
}

export default CategoryMenuGrid;