import { useMemo, useState } from "react";
import OrderTable from "./OrderTable";
import SearchInput from "../common/SearchInput";
import DateRangeField from "../common/DateRangeField";
import Tabs, { panelId, tabId } from "../common/Tabs";
import { EMPTY_DATE_RANGE, MOCK_ORDERS, ORDER_TABS } from "../../data/account/accountData";
import type { DateRange, OrderRecord } from "../../types/account";

const ID_PREFIX = "orders";

export default function Orders() {
  const [query, setQuery] = useState<string>("");
  const [range, setRange] = useState<DateRange>(EMPTY_DATE_RANGE);
  const [activeTab, setActiveTab] = useState<string>(ORDER_TABS[0].id);

  const orders = useMemo<OrderRecord[]>(() => {
    const q = query.trim();
    const wantArchived = activeTab === "archive";

    return MOCK_ORDERS.filter(
      (order) =>
        order.archived === wantArchived &&
        (!q || order.number.includes(q)) &&
        (!range.from || order.orderedAt >= range.from) &&
        (!range.to || order.orderedAt <= range.to),
    );
  }, [query, range, activeTab]);

  return (
    <>
      <h1 className="mb-4 text-lg font-semibold text-gray-900">My orders</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <SearchInput
            value={query}
            onValueChange={setQuery}
            placeholder="Search by order ID"
            className="flex-1"
          />
          <DateRangeField value={range} onChange={setRange} className="w-full sm:w-auto" />
        </div>

        <div className="rounded-xl bg-white shadow-sm">
          <Tabs
            tabs={ORDER_TABS}
            activeId={activeTab}
            onChange={setActiveTab}
            idPrefix={ID_PREFIX}
            ariaLabel="Order lists"
          />

          <div
            role="tabpanel"
            id={panelId(ID_PREFIX, activeTab)}
            aria-labelledby={tabId(ID_PREFIX, activeTab)}
            tabIndex={0}
            className="pb-2 outline-none"
          >
            <OrderTable orders={orders} />
          </div>
        </div>
      </div>
    </>
  );
}