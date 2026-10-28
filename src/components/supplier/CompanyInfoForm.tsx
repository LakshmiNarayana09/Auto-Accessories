import type { FormEvent } from "react";
import type { CompanyField, CompanyInfo, CompanyType } from "../../types/supplierRegistration";
import { COMPANY_FIELDS, COMPANY_TYPE_OPTIONS } from "../../data/supplierRegistration/supplierRegistrationData";
import TextField from "../../components/common/TextField";
import RadioGroup from "../../components/common/RadioGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface CompanyInfoFormProps {
  values: CompanyInfo;
  errors: Partial<Record<CompanyField, string>>;
  onChange: (field: CompanyField, value: string) => void;
  onTypeChange: (type: CompanyType) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function CompanyInfoForm({
  values,
  errors,
  onChange,
  onTypeChange,
  onBack,
  onSubmit,
}: CompanyInfoFormProps) {
  const isLlc = values.type === "llc";

  // LLC: Tax ID 10 / OGRN 13. Sole proprietor: Tax ID 12 / OGRN 15.
  const lengthLimits: Partial<Record<CompanyField, number>> = {
    taxId: isLlc ? 10 : 12,
    ogrn: isLlc ? 13 : 15,
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <RadioGroup
        name="companyType"
        legend="Company type"
        options={COMPANY_TYPE_OPTIONS}
        value={values.type}
        onChange={onTypeChange}
      />

      {COMPANY_FIELDS.map((f) => (
        <TextField
          key={f.name}
          name={f.name}
          label={f.label}
          required
          inputMode={f.numeric ? "numeric" : "text"}
          maxLength={lengthLimits[f.name] ?? f.maxLength}
          value={values[f.name]}
          error={errors[f.name]}
          onValueChange={(value) => onChange(f.name, f.numeric ? value.replace(/\D/g, "") : value)}
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