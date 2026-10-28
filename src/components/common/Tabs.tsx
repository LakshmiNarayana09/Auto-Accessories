import type { KeyboardEvent } from "react";
import type { TabItem } from "../../types/account";

interface TabsProps {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  idPrefix: string;
  ariaLabel: string;
}

export const tabId = (prefix: string, id: string): string => `${prefix}-tab-${id}`;
export const panelId = (prefix: string, id: string): string => `${prefix}-panel-${id}`;

export default function Tabs({ tabs, activeId, onChange, idPrefix, ariaLabel }: TabsProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    const index = tabs.findIndex((t) => t.id === activeId);
    let next = index;

    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;

    e.preventDefault();
    onChange(tabs[next].id);
    document.getElementById(tabId(idPrefix, tabs[next].id))?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      className="flex gap-6 overflow-x-auto border-b border-gray-100 px-5"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            id={tabId(idPrefix, tab.id)}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={panelId(idPrefix, tab.id)}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={`-mb-px shrink-0 whitespace-nowrap border-b-2 py-3 text-xs transition-colors ${
              isActive
                ? "border-[#5B3FD6] font-medium text-[#5B3FD6]"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}