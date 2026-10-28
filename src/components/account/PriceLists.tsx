import { useState } from "react";
import PriceListTable from "./PriceListTable";
import Tabs, { panelId, tabId } from "../common/Tabs";
import { MOCK_PRICE_LISTS, PRICE_LIST_TABS } from "../../data/account/accountData";
import type { PriceListRecord } from "../../types/account";

const ID_PREFIX = "price-lists";

export default function PriceLists() {
  const [activeTab, setActiveTab] = useState<string>(PRICE_LIST_TABS[0].id);
  const [records, setRecords] = useState<PriceListRecord[]>(MOCK_PRICE_LISTS);
  
  const handleCancel = (id: string): void => {
    setRecords((prev) => prev.filter((record) => record.id !== id));
  };

  const activeLabel = PRICE_LIST_TABS.find((t) => t.id === activeTab)?.label ?? "";

  return (
    <>
      <h1 className="mb-4 text-lg font-semibold text-gray-900">My price lists</h1>

      <div className="rounded-xl bg-white shadow-sm">
        <Tabs
          tabs={PRICE_LIST_TABS}
          activeId={activeTab}
          onChange={setActiveTab}
          idPrefix={ID_PREFIX}
          ariaLabel="Price list sections"
        />

        <div
          role="tabpanel"
          id={panelId(ID_PREFIX, activeTab)}
          aria-labelledby={tabId(ID_PREFIX, activeTab)}
          tabIndex={0}
          className="pb-2 outline-none"
        >
          {activeTab === "active" ? (
            <PriceListTable records={records} onCancel={handleCancel} />
          ) : (
            <p className="px-5 py-10 text-center text-sm text-gray-500">
              "{activeLabel}" content goes here.
            </p>
          )}
        </div>
      </div>
    </>
  );
}