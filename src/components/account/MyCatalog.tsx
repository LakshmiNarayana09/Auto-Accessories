import { useMemo, useState } from "react";
import CatalogTable from "./CatalogTable";
import SearchInput from "../common/SearchInput";
import Pagination from "../common/Pagination";
import { CATALOG_PAGE_COUNT, MOCK_CATALOG } from "../../data/account/accountData";
import type { CatalogGroup, CatalogItem, CatalogSortKey, SortState } from "../../types/account";

function compareItems(a: CatalogItem, b: CatalogItem, sort: SortState): number {
  const direction = sort.direction === "asc" ? 1 : -1;
  const left = a[sort.key];
  const right = b[sort.key];

  if (typeof left === "string" && typeof right === "string") {
    return left.localeCompare(right) * direction;
  }
  return ((left as number) - (right as number)) * direction;
}

export default function MyCatalog() {
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<SortState | null>(null);
  const [page, setPage] = useState<number>(1);

  const groups = useMemo<CatalogGroup[]>(() => {
    const q = query.trim().toLowerCase();

    return MOCK_CATALOG.map((group) => {
      let items = group.items.filter(
        (item) =>
          !q || item.partNumber.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
      );
      if (sort) items = [...items].sort((a, b) => compareItems(a, b, sort));
      return { ...group, items };
    }).filter((group) => group.items.length > 0);
  }, [query, sort]);

  const handleSearch = (value: string): void => {
    setQuery(value);
    setPage(1);
  };

  const handleSort = (key: CatalogSortKey): void => {
    setSort((prev) =>
      prev?.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" },
    );
  };

  return (
    <>
      <h1 className="mb-4 text-lg font-semibold text-gray-900">My catalog</h1>

      <div className="flex flex-col gap-4">
        <SearchInput
          value={query}
          onValueChange={handleSearch}
          placeholder="Search parts"
          className="w-full sm:max-w-xs"
        />

        <CatalogTable groups={groups} sort={sort} onSort={handleSort} />

        {groups.length > 0 && (
          <Pagination page={page} totalPages={CATALOG_PAGE_COUNT} onChange={setPage} />
        )}
      </div>
    </>
  );
}