import type { BreadcrumbItem } from '../../types/partOffers';
import { ChevronRight as ChevronRightIcon } from 'lucide-react';

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="Breadcrumb" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
    <ol className="flex items-center gap-1.5 whitespace-nowrap text-[11px] text-gray-500 sm:text-xs">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <a href={item.href} className="transition-colors hover:text-[#5B3FD6]">
                {item.label}
              </a>
            ) : (
              <span aria-current={isLast ? 'page' : undefined} className={isLast ? 'text-gray-900' : ''}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRightIcon className="h-3 w-3 text-gray-400" />}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;