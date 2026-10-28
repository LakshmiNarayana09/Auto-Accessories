import type { FormEvent } from "react";
import type { PersonalField, PersonalInfo } from "../../types/supplierRegistration";
import { PERSONAL_FIELDS } from "../../data/supplierRegistration/supplierRegistrationData";
import TextField from "../../components/common/TextField";
import PrimaryButton from "./PrimaryButton";

interface PersonalInfoFormProps {
  values: PersonalInfo;
  errors: Partial<Record<PersonalField, string>>;
  onChange: (field: PersonalField, value: string) => void;
  onSubmit: () => void;
}

export default function PersonalInfoForm({
  values,
  errors,
  onChange,
  onSubmit,
}: PersonalInfoFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {PERSONAL_FIELDS.map((f) => (
        <TextField
          key={f.name}
          name={f.name}
          label={f.label}
          type={f.type}
          autoComplete={f.autoComplete}
          required={f.name !== "middleName"}
          value={values[f.name]}
          error={errors[f.name]}
          onValueChange={(value) => onChange(f.name, value)}
        />
      ))}

      <div className="pt-2">
        <PrimaryButton type="submit" withArrow>
          Next
        </PrimaryButton>
      </div>
    </form>
  );
}