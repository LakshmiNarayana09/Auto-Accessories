import { useState } from "react";
import { ACCOUNTING_TABS, MOCK_ACCOUNTING_ORDERS } from "../../data/account/accountData";
import type { AccountingDocument, AccountingOrder } from "../../types/account";
import PageHeading from "../common/PageHeading";
import Tabs, { panelId, tabId } from "../common/Tabs";
import AccountingTable from "./AccountingTable";

const ID_PREFIX = "accounting";

export default function Accounting() {
  const [activeTab, setActiveTab] = useState<string>(ACCOUNTING_TABS[0].id);

  // Open or download the document here (e.g. window.open(document.url) or an API call)
  const handleOpenDocument = (order: AccountingOrder, document: AccountingDocument): void => {
    console.log(`Open "${document.name}" for order ${order.orderNumber}`);
  };

  const activeLabel = ACCOUNTING_TABS.find((tab) => tab.id === activeTab)?.label ?? "";

  return (
    <>
      <PageHeading title="Accounting" />

      <div className="rounded-xl bg-white pb-2 shadow-sm">
        <Tabs
          tabs={ACCOUNTING_TABS}
          activeId={activeTab}
          onChange={setActiveTab}
          idPrefix={ID_PREFIX}
          ariaLabel="Accounting sections"
        />

        <div
          role="tabpanel"
          id={panelId(ID_PREFIX, activeTab)}
          aria-labelledby={tabId(ID_PREFIX, activeTab)}
          tabIndex={0}
          className="outline-none"
        >
          {activeTab === "documents" ? (
            <AccountingTable orders={MOCK_ACCOUNTING_ORDERS} onOpenDocument={handleOpenDocument} />
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