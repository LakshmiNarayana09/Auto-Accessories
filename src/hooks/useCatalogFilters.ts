import { useCallback, useMemo, useState } from 'react';
import type {
  CatalogProduct,
  FilterOption,
  FilterSectionConfig,
  FilterState,
  RangeBounds,
} from '../types/catalog';

export const PAGE_SIZE = 15;

const valueOf = (product: CatalogProduct, key: string) =>
  key === 'brand' ? product.brand : product.attributes[key];

const matches = (product: CatalogProduct, filters: FilterState) => {
  for (const [key, selected] of Object.entries(filters.checkbox)) {
    if (selected.length > 0 && !selected.includes(String(valueOf(product, key)))) return false;
  }
  for (const [key, { min, max }] of Object.entries(filters.range)) {
    const value = Number(valueOf(product, key));
    if (min !== '' && value < Number(min)) return false;
    if (max !== '' && value > Number(max)) return false;
  }
  return true;
};

export function useCatalogFilters(products: CatalogProduct[], sections: FilterSectionConfig[]) {
  const [filters, setFilters] = useState<FilterState>({ checkbox: {}, range: {} });
  const [page, setPage] = useState(1);

  const optionsByKey = useMemo(() => {
    const result: Record<string, FilterOption[]> = {};
    sections.forEach((section) => {
      if (section.type !== 'checkbox') return;
      const counts = new Map<string, number>();
      products.forEach((p) => {
        const v = String(valueOf(p, section.key));
        counts.set(v, (counts.get(v) ?? 0) + 1);
      });
      result[section.key] = [...counts.entries()]
        .map(([value, count]) => ({ value, count }))
        .sort((a, b) => a.value.localeCompare(b.value, 'en', { numeric: true }));
    });
    return result;
  }, [products, sections]);

  const rangeBounds = useMemo(() => {
    const result: Record<string, RangeBounds> = {};
    sections.forEach((section) => {
      if (section.type !== 'range') return;
      const values = products.map((p) => Number(valueOf(p, section.key)));
      result[section.key] = { min: Math.min(...values), max: Math.max(...values) };
    });
    return result;
  }, [products, sections]);

  const results = useMemo(() => products.filter((p) => matches(p, filters)), [products, filters]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const activeFilterCount = useMemo(() => {
    const checkboxCount = Object.values(filters.checkbox).reduce((sum, v) => sum + v.length, 0);
    const rangeCount = Object.values(filters.range).filter((r) => r.min !== '' || r.max !== '').length;
    return checkboxCount + rangeCount;
  }, [filters]);

  const toggleOption = useCallback((key: string, value: string) => {
    setFilters((prev) => {
      const selected = prev.checkbox[key] ?? [];
      const next = selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value];
      return { ...prev, checkbox: { ...prev.checkbox, [key]: next } };
    });
    setPage(1);
  }, []);

  const setRangeValue = useCallback((key: string, bound: 'min' | 'max', value: string) => {
    setFilters((prev) => {
      const current = prev.range[key] ?? { min: '', max: '' };
      return { ...prev, range: { ...prev.range, [key]: { ...current, [bound]: value } } };
    });
    setPage(1);
  }, []);

  const reset = useCallback(() => {
    setFilters({ checkbox: {}, range: {} });
    setPage(1);
  }, []);

  return {
    filters,
    optionsByKey,
    rangeBounds,
    results,
    pageItems,
    page: currentPage,
    setPage,
    totalPages,
    activeFilterCount,
    toggleOption,
    setRangeValue,
    reset,
  };
}