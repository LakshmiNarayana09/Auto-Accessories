import { useState } from "react";
import { MOCK_SUPPLIERS } from "../../data/manager/managerData";
import type { SupplierRecord } from "../../types/manager";
import PageHeading from "../common/PageHeading";
import SupplierTable from "./SupplierTable";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState<SupplierRecord[]>(MOCK_SUPPLIERS);

  const handleToggle = (id: string, enabled: boolean): void => {
    setSuppliers((prev) =>
      prev.map((supplier) => (supplier.id === id ? { ...supplier, enabled } : supplier)),
    );
  };

  return (
    <>
      <PageHeading title="Supplier list" />

      <div className="rounded-xl bg-white shadow-sm">
        <SupplierTable suppliers={suppliers} onToggle={handleToggle} />
      </div>
    </>
  );
}