import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ROUTES } from "../../utils/routes";
import { MOCK_STORES } from "../../data/account/accountData";
import type { StoreRecord } from "../../types/account";
import PageHeading from "../common/PageHeading";
import StoreTable from "./StoreTable";

export default function Stores() {
  const [stores, setStores] = useState<StoreRecord[]>(MOCK_STORES);

  const handleToggle = (id: string, enabled: boolean): void => {
    setStores((prev) => prev.map((store) => (store.id === id ? { ...store, enabled } : store)));
  };

  return (
    <>
      <PageHeading
        title="My stores"
        action={
          <Link
            to={ROUTES.accountStoreNew}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#5B3FD6] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#4A32B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6]"
          >
            <Plus size={14} aria-hidden="true" />
            Add store
          </Link>
        }
      />

      <div className="rounded-xl bg-white shadow-sm">
        <StoreTable stores={stores} onToggle={handleToggle} />
      </div>
    </>
  );
}