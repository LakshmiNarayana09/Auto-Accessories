import type { FormEvent } from "react";
import type { DeliveryField, DeliveryInfo } from "../../types/supplierRegistration";
import { DELIVERY_GROUPS } from "../../data/supplierRegistration/supplierRegistrationData";
import RadioGroup from "../../components/common/RadioGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface DeliveryTypesFormProps {
  values: DeliveryInfo;
  onChange: (field: DeliveryField, value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function DeliveryTypesForm({
  values,
  onChange,
  onBack,
  onSubmit,
}: DeliveryTypesFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {DELIVERY_GROUPS.map((group) => (
        <RadioGroup
          key={group.name}
          name={group.name}
          legend={group.legend}
          options={group.options}
          value={values[group.name]}
          onChange={(value) => onChange(group.name, value)}
          showLegend
        />
      ))}

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