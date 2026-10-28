import type { FormEvent } from "react";
import type { PriceListInfo, PriceListMethod } from "../../types/supplierRegistration";
import { PRICE_LIST_OPTIONS, PRICE_LIST_QUESTION } from "../../data/supplierRegistration/supplierRegistrationData";
import RadioGroup from "../../components/common/RadioGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface PriceListFormProps {
  values: PriceListInfo;
  onChange: (method: PriceListMethod) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function PriceListForm({ values, onChange, onBack, onSubmit }: PriceListFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <RadioGroup
        name="priceListMethod"
        legend={PRICE_LIST_QUESTION}
        options={PRICE_LIST_OPTIONS}
        value={values.method}
        onChange={onChange}
        showLegend
        direction="column"
      />

      <div className="mt-2 flex items-center gap-3 border-t border-slate-100 pt-5">
        <SecondaryButton onClick={onBack} withArrow>
          Back
        </SecondaryButton>
        <PrimaryButton type="submit" withArrow>
          Next
        </PrimaryButton>
      </div>
    </form>
  );
}