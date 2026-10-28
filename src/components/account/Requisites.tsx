import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ROUTES } from "../../utils/routes";
import { MOCK_REQUISITES } from "../../data/account/accountData";
import type { RequisiteRecord } from "../../types/account";
import PageHeading from "../common/PageHeading";
import ConfirmDialog from "../common/ConfirmDialog";
import RequisiteCard from "./RequisiteCard";

export default function Requisites() {
  const [requisites, setRequisites] = useState<RequisiteRecord[]>(MOCK_REQUISITES);
  const [pendingDelete, setPendingDelete] = useState<RequisiteRecord | null>(null);

  const handleConfirmDelete = (): void => {
    if (!pendingDelete) return;
    setRequisites((prev) => prev.filter((item) => item.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <>
      <PageHeading
        title="My requisites"
        action={
          <Link
            to={ROUTES.accountRequisiteNew}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#5B3FD6] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#4A32B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6]"
          >
            <Plus size={14} aria-hidden="true" />
            Add requisites
          </Link>
        }
      />

      <div className="rounded-xl bg-white p-5 shadow-sm">
        {requisites.length === 0 ? (
          <p className="py-10 text-center text-sm text-gray-500">No requisites added yet</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {requisites.map((requisite) => (
              <RequisiteCard key={requisite.id} requisite={requisite} onDelete={setPendingDelete} />
            ))}
          </ul>
        )}
      </div>

      <ConfirmDialog
        open={pendingDelete !== null}
        title="Delete requisites?"
        message={
          pendingDelete
            ? `${pendingDelete.name} (•••• ${pendingDelete.last4}) will be removed from your account.`
            : ""
        }
        onConfirm={handleConfirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </>
  );
}