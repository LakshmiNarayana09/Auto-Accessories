import { MOCK_RECEIPTS } from "../../data/account/accountData";
import type { ReceiptRecord } from "../../types/account";
import PageHeading from "../common/PageHeading";
import ReceiptTable from "./ReceiptTable";

export default function Receipts() {
  
  const handleOpenDocuments = (receipt: ReceiptRecord): void => {
    console.log("Open documents for order", receipt.orderNumber);
  };

  return (
    <>
      <PageHeading title="My receipts" />

      <div className="rounded-xl bg-white shadow-sm">
        <ReceiptTable receipts={MOCK_RECEIPTS} onOpenDocuments={handleOpenDocuments} />
      </div>
    </>
  );
}