import type { TabItem } from "../../types/account";

interface PillTabsProps {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  ariaLabel: string;
}

export default function PillTabs({ tabs, activeId, onChange, ariaLabel }: PillTabsProps) {
  return (
    <div role="tablist" aria-label={ariaLabel} className="flex gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`rounded-md border px-4 py-1.5 text-[11px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6] ${
              isActive
                ? "border-[#5B3FD6] bg-[#5B3FD6] font-medium text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-[#5B3FD6]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}