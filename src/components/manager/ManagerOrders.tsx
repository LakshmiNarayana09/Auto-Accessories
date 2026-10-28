import { useMemo, useState } from "react";
import { MANAGER_ORDER_TABS, MOCK_MANAGER_ORDERS } from "../../data/manager/managerData";
import type { ManagerOrderKind, ManagerOrderRecord } from "../../types/manager";
import PageHeading from "../common/PageHeading";
import Tabs, { panelId, tabId } from "../common/Tabs";
import ManagerOrderTable from "./ManagerOrderTable";

const ID_PREFIX = "manager-orders";

export default function ManagerOrders() {
  const [activeTab, setActiveTab] = useState<ManagerOrderKind>("supplier");
  const [orders, setOrders] = useState<ManagerOrderRecord[]>(MOCK_MANAGER_ORDERS);

  const visibleOrders = useMemo(
    () => orders.filter((order) => order.kind === activeTab),
    [orders, activeTab],
  );

  const handleToggle = (id: string, enabled: boolean): void => {
    setOrders((prev) => prev.map((order) => (order.id === id ? { ...order, enabled } : order)));
  };

  return (
    <>
      <PageHeading title="Order list" />

      <div className="rounded-xl bg-white pb-2 shadow-sm">
        <Tabs
          tabs={MANAGER_ORDER_TABS}
          activeId={activeTab}
          onChange={(id) => setActiveTab(id as ManagerOrderKind)}
          idPrefix={ID_PREFIX}
          ariaLabel="Order types"
        />

        <div
          role="tabpanel"
          id={panelId(ID_PREFIX, activeTab)}
          aria-labelledby={tabId(ID_PREFIX, activeTab)}
          tabIndex={0}
          className="outline-none"
        >
          <ManagerOrderTable orders={visibleOrders} onToggle={handleToggle} />
        </div>
      </div>
    </>
  );
}