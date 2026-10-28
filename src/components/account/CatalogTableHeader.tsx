import { ArrowUpDown } from "lucide-react";
import { CATALOG_COLUMNS, CATALOG_GRID } from "../../data/account/accountData";
import type { CatalogSortKey, SortState } from "../../types/account";

interface CatalogTableHeaderProps {
  sort: SortState | null;
  onSort: (key: CatalogSortKey) => void;
}

export default function CatalogTableHeader({ sort, onSort }: CatalogTableHeaderProps) {
  return (
    <div
      role="row"
      className={`hidden grid-cols-1 gap-x-4 border-b border-gray-100 px-5 py-3 text-xs text-gray-500 md:grid ${CATALOG_GRID}`}
    >
      {CATALOG_COLUMNS.map((column) => {
        const { sortKey } = column;
        const isActive = sortKey !== undefined && sort?.key === sortKey;
        const ariaSort = isActive ? (sort?.direction === "asc" ? "ascending" : "descending") : undefined;

        return (
          <div key={column.id} role="columnheader" aria-sort={ariaSort}>
            {sortKey ? (
              <button
                type="button"
                onClick={() => onSort(sortKey)}
                className={`inline-flex items-center gap-1.5 transition-colors hover:text-gray-900 ${
                  isActive ? "text-gray-900" : ""
                }`}
              >
                {column.label}
                <ArrowUpDown
                  size={12}
                  aria-hidden="true"
                  className={isActive ? "text-[#5B3FD6]" : "text-gray-400"}
                />
              </button>
            ) : (
              column.label
            )}
          </div>
        );
      })}
    </div>
  );
}