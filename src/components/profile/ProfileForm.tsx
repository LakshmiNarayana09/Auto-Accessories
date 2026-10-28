import { useState, type FormEvent } from "react";
import TextField from "../common/TextField";
import PrimaryButton from "../supplier/PrimaryButton";
import { PROFILE_FIELDS } from "../../data/account/accountData";
import { formatPhone } from "../../utils/format";
import type { ProfileErrors, ProfileField, ProfileInfo } from "../../types/account";

interface ProfileFormProps {
  initialValues: ProfileInfo;
  onSave?: (values: ProfileInfo) => void | Promise<void>;
}

type SaveStatus = "idle" | "saving" | "saved" | "error";

function validate(values: ProfileInfo): ProfileErrors {
  const errors: ProfileErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Enter your last name and first name";
  if (values.phone.replace(/\D/g, "").length !== 11) errors.phone = "Enter a valid phone number";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid e-mail address";
  return errors;
}

export default function ProfileForm({ initialValues, onSave }: ProfileFormProps) {
  const [values, setValues] = useState<ProfileInfo>(initialValues);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [status, setStatus] = useState<SaveStatus>("idle");

  const handleChange = (field: ProfileField, value: string): void => {
    setValues((prev) => ({ ...prev, [field]: field === "phone" ? formatPhone(value) : value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("saving");
    try {
      await onSave?.(values);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex max-w-md flex-col gap-4">
        {PROFILE_FIELDS.map((f) => (
          <TextField
            key={f.name}
            name={f.name}
            label={f.label}
            type={f.type}
            autoComplete={f.autoComplete}
            inputMode={f.inputMode}
            required={f.required}
            value={values[f.name]}
            error={errors[f.name]}
            onValueChange={(value) => handleChange(f.name, value)}
          />
        ))}

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <PrimaryButton type="submit" disabled={status === "saving"}>
            {status === "saving" ? "Saving..." : "Save changes"}
          </PrimaryButton>

          {status === "saved" && (
            <p role="status" className="text-xs text-green-600">
              Changes saved
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-xs text-red-500">
              Could not save changes. Please try again.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}