import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import CatalogCard from './CatalogCard';
import FilterDrawer from './FilterDrawer';
import FilterSidebar from './FilterSidebar';
import Pagination from '../common/Pagination';
import { useCatalogFilters } from '../../hooks/useCatalogFilters';
import type { CatalogConfig, CatalogProduct } from '../../types/catalog';

interface CatalogPageProps {
  config: CatalogConfig;
  products: CatalogProduct[];
}

function CatalogPage({ config, products }: CatalogPageProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    filters,
    optionsByKey,
    rangeBounds,
    results,
    pageItems,
    page,
    setPage,
    totalPages,
    activeFilterCount,
    toggleOption,
    setRangeValue,
    reset,
  } = useCatalogFilters(products, config.filters);

  const sidebarProps = {
    sections: config.filters,
    filters,
    optionsByKey,
    rangeBounds,
    activeFilterCount,
    onToggleOption: toggleOption,
    onRangeChange: setRangeValue,
    onReset: reset,
  };

  const handlePageChange = (next: number) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f7fa]">

      <main className="mx-auto max-w-[1420px] px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">{config.title}</h1>

        
        <div className="mt-4 flex items-center justify-between gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-xs"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5B3FD6] px-1 text-[11px] text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
          <span className="text-xs text-gray-500">{results.length} items</span>
        </div>

        <div className="mt-4 flex items-start gap-4 lg:gap-6">
          <aside className="hidden w-[300px] shrink-0 lg:block">
            <FilterSidebar {...sidebarProps} />
          </aside>

          <div className="min-w-0 flex-1">
            {pageItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {pageItems.map((product) => (
                  <CatalogCard key={product.id} product={product} specs={config.specs} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-white p-8 text-center text-sm text-gray-500">
                No items match your filters.
                <button
                  type="button"
                  onClick={reset}
                  className="mt-3 block w-full text-[#5B3FD6] hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}

            <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
          </div>
        </div>
      </main>

      <FilterDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} resultsCount={results.length}>
        <FilterSidebar {...sidebarProps} />
      </FilterDrawer>
    </div>
  );
}

export default CatalogPage;