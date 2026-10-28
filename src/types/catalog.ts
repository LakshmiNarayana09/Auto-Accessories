
export interface CatalogProduct {
  id: number;
  brand: string;
  title: string;
  article: string;
  image: string;
  imageAlt: string;
  priceFrom: number;
  attributes: Record<string, string | number>;
}

export type FilterSectionConfig =
  | { type: 'checkbox'; key: string; title: string; searchable?: boolean }
  | { type: 'range'; key: string; title: string };

export interface SpecRow {
  key: string;
  label: string;
}

export interface CatalogConfig {
  title: string;
  filters: FilterSectionConfig[];
  specs: SpecRow[];
}

export interface FilterOption {
  value: string;
  count: number;
}

export interface RangeValue {
  min: string;
  max: string;
}

export interface RangeBounds {
  min: number;
  max: number;
}

export interface FilterState {
  checkbox: Record<string, string[]>;
  range: Record<string, RangeValue>;
}