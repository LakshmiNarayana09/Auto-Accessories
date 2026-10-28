import type { FormEvent } from "react";
import type { CompanyType, SupplierField, SupplierInfo } from "../../types/supplierRegistration";
import { COMPANY_TYPE_OPTIONS, SUPPLIER_FIELDS } from "../../data/supplierRegistration/supplierRegistrationData";
import SelectField from "../common/SelectField";
import RadioGroup from "../../components/common/RadioGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface SupplierDetailsFormProps {
  values: SupplierInfo;
  errors: Partial<Record<SupplierField, string>>;
  onChange: (field: SupplierField, value: string) => void;
  onTypeChange: (type: CompanyType) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function SupplierDetailsForm({
  values,
  errors,
  onChange,
  onTypeChange,
  onBack,
  onSubmit,
}: SupplierDetailsFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <RadioGroup
        name="supplierType"
        legend="Supplier type"
        options={COMPANY_TYPE_OPTIONS}
        value={values.type}
        onChange={onTypeChange}
      />

      {SUPPLIER_FIELDS.map((f) => (
        <SelectField
          key={f.name}
          name={f.name}
          label={f.label}
          options={f.options}
          value={values[f.name]}
          error={errors[f.name]}
          onValueChange={(value) => onChange(f.name, value)}
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