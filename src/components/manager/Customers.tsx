import { useState } from "react";
import { MOCK_CUSTOMERS } from "../../data/manager/managerData";
import type { CustomerRecord } from "../../types/manager";
import PageHeading from "../common/PageHeading";
import CustomerTable from "./CustomerTable";

export default function Customers() {
  const [customers, setCustomers] = useState<CustomerRecord[]>(MOCK_CUSTOMERS);

  const handleToggle = (id: string, enabled: boolean): void => {
    setCustomers((prev) =>
      prev.map((customer) => (customer.id === id ? { ...customer, enabled } : customer)),
    );
  };

  return (
    <>
      <PageHeading title="Customer list" />

      <div className="rounded-xl bg-white shadow-sm">
        <CustomerTable customers={customers} onToggle={handleToggle} />
      </div>
    </>
  );
}