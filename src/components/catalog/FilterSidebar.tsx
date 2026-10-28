import type {
  FilterOption,
  FilterSectionConfig,
  FilterState,
  RangeBounds,
} from '../../types/catalog';
import CheckboxFilter from './CheckboxFilter';
import FilterSection from './FilterSection';
import RangeFilter from './RangeFilter';

export interface FilterSidebarProps {
  sections: FilterSectionConfig[];
  filters: FilterState;
  optionsByKey: Record<string, FilterOption[]>;
  rangeBounds: Record<string, RangeBounds>;
  activeFilterCount: number;
  onToggleOption: (key: string, value: string) => void;
  onRangeChange: (key: string, bound: 'min' | 'max', value: string) => void;
  onReset: () => void;
}

const FilterSidebar = ({
  sections,
  filters,
  optionsByKey,
  rangeBounds,
  activeFilterCount,
  onToggleOption,
  onRangeChange,
  onReset,
}: FilterSidebarProps) => {
  const renderSection = (section: FilterSectionConfig) => {
    const { key } = section;

    if (section.type === 'checkbox') {
      return (
        <FilterSection key={key} title={section.title}>
          <CheckboxFilter
            options={optionsByKey[key] ?? []}
            selected={filters.checkbox[key] ?? []}
            searchable={section.searchable}
            onToggle={(value) => onToggleOption(key, value)}
          />
        </FilterSection>
      );
    }

    const range = filters.range[key] ?? { min: '', max: '' };
    const bounds = rangeBounds[key] ?? { min: 0, max: 0 };

    return (
      <FilterSection key={key} title={section.title}>
        <RangeFilter
          label={section.title}
          min={range.min}
          max={range.max}
          boundMin={bounds.min}
          boundMax={bounds.max}
          onChange={(bound, value) => onRangeChange(key, bound, value)}
        />
      </FilterSection>
    );
  };

  return (
    <div className="rounded-xl bg-white p-4 shadow-xs">
      {sections.map(renderSection)}

      <button
        type="button"
        onClick={onReset}
        disabled={activeFilterCount === 0}
        className="mt-4 w-full rounded-lg bg-gray-100 py-2.5 text-xs font-medium text-gray-400 transition-colors enabled:bg-[#EEEBFB] enabled:text-[#4A33B8] enabled:hover:bg-[#E2DDF8]"
      >
        Reset filters
      </button>
    </div>
  );
};

export default FilterSidebar;