import { homeData } from '../../data/home/homePromoCards';
import type { CategoryCardData } from '../../types/home';
import CategoryCards from './CategoryCard';

interface CategoryGridProps {
  cards?: CategoryCardData[];
}

const CategoryGrids = ({ cards = homeData.categoryCards }: CategoryGridProps) => (
  <section aria-label="Popular categories" className="w-full">
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {cards.map(({ id, ...card }) => (
        <CategoryCards
          key={id}
          {...card}
          className="sm:[&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1"
        />
      ))}
    </div>
  </section>
);

export default CategoryGrids;