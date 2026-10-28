import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ROUTES } from "../../utils/routes";
import { MOCK_ADDRESSES } from "../../data/account/accountData";
import type { AddressRecord } from "../../types/account";
import PageHeading from "../common/PageHeading";
import ConfirmDialog from "../common/ConfirmDialog";
import AddressCard from "./AddressCard";

export default function Addresses() {
  const [addresses, setAddresses] = useState<AddressRecord[]>(MOCK_ADDRESSES);
  const [pendingDelete, setPendingDelete] = useState<AddressRecord | null>(null);

  // Call your API here, then update the list
  const handleConfirmDelete = (): void => {
    if (!pendingDelete) return;
    setAddresses((prev) => prev.filter((item) => item.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <>
      <PageHeading title="My addresses" />

      <div className="rounded-xl bg-white p-5 shadow-sm">
        {addresses.length === 0 ? (
          <p className="py-6 text-center text-sm text-gray-500">No addresses yet</p>
        ) : (
          <ul aria-label="Saved addresses" className="flex flex-col gap-3">
            {addresses.map((address) => (
              <AddressCard key={address.id} address={address} onDelete={setPendingDelete} />
            ))}
          </ul>
        )}

        <Link
          to={ROUTES.profileAddressNew}
          className="mt-4 inline-flex h-10 items-center gap-2.5 rounded-md bg-[#EEEAFB] px-4 text-xs font-medium text-[#5B3FD6] transition-colors hover:bg-[#E2DCF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6]"
        >
          <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-full bg-[#5B3FD6] text-white">
            <Plus size={12} />
          </span>
          Add address
        </Link>
      </div>

      <ConfirmDialog
        open={pendingDelete !== null}
        title="Delete address?"
        message={pendingDelete ? `${pendingDelete.street} will be removed from your account.` : ""}
        onConfirm={handleConfirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </>
  );
}