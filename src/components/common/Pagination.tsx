import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const getPages = (page: number, total: number): (number | "ellipsis")[] => {
  const sorted = [...new Set([1, total, page - 1, page, page + 1])]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];

  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push("ellipsis");
    result.push(p);
  });

  return result;
};

const base =
  "flex h-8 min-w-8 items-center justify-center rounded-md border px-2 text-xs transition-colors";

const idle =
  "border-gray-200 bg-white text-gray-700 hover:border-[#5B3FD6] hover:text-[#5B3FD6] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700";

const Pagination = ({ page, totalPages, onChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="mt-6 flex justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-1.5">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={page === 1}
            onClick={() => onChange(page - 1)}
            className={`${base} ${idle}`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </li>

        {getPages(page, totalPages).map((item, i) =>
          item === "ellipsis" ? (
            <li
              key={`ellipsis-${i}`}
              className="px-1 text-xs text-gray-400"
              aria-hidden="true"
            >
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                aria-current={item === page ? "page" : undefined}
                onClick={() => onChange(item)}
                className={`${base} ${
                  item === page
                    ? "border-[#5B3FD6] bg-[#5B3FD6] text-white"
                    : idle
                }`}
              >
                {item}
              </button>
            </li>
          ),
        )}

        <li>
          <button
            type="button"
            aria-label="Next page"
            disabled={page === totalPages}
            onClick={() => onChange(page + 1)}
            className={`${base} ${idle}`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;