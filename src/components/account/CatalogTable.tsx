import { CATALOG_GRID } from "../../data/account/accountData";
import type { CatalogGroup, CatalogSortKey, SortState } from "../../types/account";
import CatalogTableHeader from "./CatalogTableHeader";
import CatalogRow from "./CatalogRow";

interface CatalogTableProps {
  groups: CatalogGroup[];
  sort: SortState | null;
  onSort: (key: CatalogSortKey) => void;
}

export default function CatalogTable({ groups, sort, onSort }: CatalogTableProps) {
  return (
    <div role="table" aria-label="Parts catalog" className="rounded-xl bg-white shadow-sm">
      <CatalogTableHeader sort={sort} onSort={onSort} />

      {groups.length === 0 ? (
        <p role="row" className="px-5 py-10 text-center text-sm text-gray-500">
          No parts found
        </p>
      ) : (
        groups.map((group) => (
          <div key={group.id} role="rowgroup">
            <div
              role="row"
              className={`grid grid-cols-1 items-center gap-x-4 bg-gray-50 px-5 py-2.5 text-xs md:mx-3 md:rounded-md ${CATALOG_GRID}`}
            >
              <div role="cell" className="font-medium text-gray-900">
                {group.manufacturer}
              </div>
              <div role="cell" className="text-gray-700 md:col-span-4">
                {group.supplierLabel}
              </div>
            </div>

            {group.items.map((item) => (
              <CatalogRow key={item.id} item={item} />
            ))}
          </div>
        ))
      )}
    </div>
  );
}