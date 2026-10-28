import { useNavigate } from "react-router-dom";
import type { CategoryItem } from "../../data/home/homeCategories";

interface CategoryCardProps {
  category: CategoryItem;
}

function CategoryMenuCard({ category }: CategoryCardProps) {
  const navigate = useNavigate();

  const Icon = category.icon;

  return (
    <button
      type="button"
      onClick={() => navigate(category.path)}
      className="group flex min-h-[70px] items-center gap-4 border-b border-r border-gray-100 bg-white px-5 py-3 text-left transition hover:bg-[#faf9ff]"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6254d9]">
        <Icon
          size={25}
          strokeWidth={1.5}
          className="transition-transform group-hover:scale-110"
        />
      </div>

      <div className="min-w-0">
        <p className="truncate text-[11px] font-medium text-gray-800">
          {category.title}
        </p>

        <p className="mt-1 text-[9px] text-gray-400">
          {category.count}
        </p>
      </div>
    </button>
  );
}

export default CategoryMenuCard;