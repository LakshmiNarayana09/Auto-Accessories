import { useEffect, useState } from "react";
import StepList from "./StepList";
import MobileProgress from "./MobileProgress";
import RegistrationCard from "./RegistrationCard";
import PersonalInfoForm from "./PersonalInfoForm";
import CompanyInfoForm from "./CompanyInfoForm";
import SupplierDetailsForm from "./SupplierDetailsForm";
import DeliveryTypesForm from "./DeliveryTypesForm";
import StoresForm from "./StoresForm";
import PriceListForm from "./PriceListForm";
import FinalProvisionsForm from "./FinalProvisionsForm";
import RegistrationSuccess from "./RegistrationSuccess";
import { REGISTRATION_STEPS } from "../../data/supplierRegistration/supplierRegistrationData";
import type {
  CompanyField,
  CompanyInfo,
  CompanyType,
  DeliveryField,
  DeliveryInfo,
  FinalInfo,
  PersonalField,
  PersonalInfo,
  PriceListInfo,
  PriceListMethod,
  Store,
  SupplierField,
  SupplierInfo,
  SupplierRegistrationData,
} from "../../types/supplierRegistration";

type PersonalErrors = Partial<Record<PersonalField, string>>;
type CompanyErrors = Partial<Record<CompanyField, string>>;
type SupplierErrors = Partial<Record<SupplierField, string>>;

interface SupplierRegistrationProps {
  onComplete?: (data: SupplierRegistrationData) => void | Promise<void>;
}

const EMPTY_PERSONAL: PersonalInfo = {
  lastName: "",
  firstName: "",
  middleName: "",
  phone: "",
  email: "",
};

const EMPTY_COMPANY: CompanyInfo = {
  type: "llc",
  taxId: "",
  ogrn: "",
  bic: "",
  settlementAccount: "",
  legalAddress: "",
};

const EMPTY_SUPPLIER: SupplierInfo = {
  type: "llc",
  product: "",
  brand: "",
  warehouse: "",
};

const DEFAULT_DELIVERY: DeliveryInfo = {
  courier: "oner",
  pickup: "available",
};

const DEFAULT_PRICE_LIST: PriceListInfo = {
  method: "api",
};

const EMPTY_FINAL: FinalInfo = {
  description: "",
};

function validatePersonal(values: PersonalInfo): PersonalErrors {
  const errors: PersonalErrors = {};
  if (!values.lastName.trim()) errors.lastName = "Enter your last name";
  if (!values.firstName.trim()) errors.firstName = "Enter your first name";
  if (values.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid e-mail address";
  return errors;
}

function validateCompany(values: CompanyInfo): CompanyErrors {
  const errors: CompanyErrors = {};
  const isLlc = values.type === "llc";
  const taxIdLength = isLlc ? 10 : 12;
  const ogrnLength = isLlc ? 13 : 15;

  if (values.taxId.length !== taxIdLength) errors.taxId = `Tax ID must be ${taxIdLength} digits`;
  if (values.ogrn.length !== ogrnLength) errors.ogrn = `OGRN must be ${ogrnLength} digits`;
  if (values.bic.length !== 9) errors.bic = "BIC must be 9 digits";
  if (values.settlementAccount.length !== 20) errors.settlementAccount = "Account number must be 20 digits";
  if (!values.legalAddress.trim()) errors.legalAddress = "Enter the legal address";
  return errors;
}

function validateSupplier(values: SupplierInfo): SupplierErrors {
  const errors: SupplierErrors = {};
  if (!values.product) errors.product = "Select a product";
  if (!values.brand) errors.brand = "Select a brand";
  if (!values.warehouse) errors.warehouse = "Select warehouse availability";
  return errors;
}

export default function SupplierRegistration({
  onComplete = (data) => console.log("Supplier registration data:", data),
}: SupplierRegistrationProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [maxStep, setMaxStep] = useState<number>(1); // furthest step reached so far

  const [personal, setPersonal] = useState<PersonalInfo>(EMPTY_PERSONAL);
  const [company, setCompany] = useState<CompanyInfo>(EMPTY_COMPANY);
  const [supplier, setSupplier] = useState<SupplierInfo>(EMPTY_SUPPLIER);
  const [delivery, setDelivery] = useState<DeliveryInfo>(DEFAULT_DELIVERY);
  const [stores, setStores] = useState<Store[]>([]);
  const [priceList, setPriceList] = useState<PriceListInfo>(DEFAULT_PRICE_LIST);
  const [finalInfo, setFinalInfo] = useState<FinalInfo>(EMPTY_FINAL);

  const [personalErrors, setPersonalErrors] = useState<PersonalErrors>({});
  const [companyErrors, setCompanyErrors] = useState<CompanyErrors>({});
  const [supplierErrors, setSupplierErrors] = useState<SupplierErrors>({});

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const total = REGISTRATION_STEPS.length;
  const step = REGISTRATION_STEPS[currentStep - 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep, completed]);

  /* ---------- change handlers ---------- */
  const handlePersonalChange = (field: PersonalField, value: string): void => {
    setPersonal((prev) => ({ ...prev, [field]: value }));
    setPersonalErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleCompanyChange = (field: CompanyField, value: string): void => {
    setCompany((prev) => ({ ...prev, [field]: value }));
    setCompanyErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleCompanyTypeChange = (type: CompanyType): void => {
    setCompany((prev) => ({ ...prev, type }));
    setCompanyErrors({});
  };

  const handleSupplierChange = (field: SupplierField, value: string): void => {
    setSupplier((prev) => ({ ...prev, [field]: value }));
    setSupplierErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSupplierTypeChange = (type: CompanyType): void => {
    setSupplier((prev) => ({ ...prev, type }));
  };

  const handleDeliveryChange = (field: DeliveryField, value: string): void => {
    setDelivery((prev) => ({ ...prev, [field]: value }));
  };

  const handlePriceListChange = (method: PriceListMethod): void => {
    setPriceList({ method });
  };

  const handleFinalChange = (description: string): void => {
    setFinalInfo({ description });
    setSubmitError("");
  };

  /* ---------- navigation ---------- */
  const goNext = (): void => {
    const next = Math.min(currentStep + 1, total);
    setCurrentStep(next);
    setMaxStep((m) => Math.max(m, next));
  };

  const goBack = (): void => setCurrentStep((s) => Math.max(s - 1, 1));

  // Sidebar click: only steps already reached are allowed
  const goToStep = (stepId: number): void => {
    if (stepId <= maxStep) setCurrentStep(stepId);
  };

  /* ---------- submit handlers ---------- */
  const handlePersonalSubmit = (): void => {
    const found = validatePersonal(personal);
    setPersonalErrors(found);
    if (Object.keys(found).length === 0) goNext();
  };

  const handleCompanySubmit = (): void => {
    const found = validateCompany(company);
    setCompanyErrors(found);
    if (Object.keys(found).length === 0) goNext();
  };

  const handleSupplierSubmit = (): void => {
    const found = validateSupplier(supplier);
    setSupplierErrors(found);
    if (Object.keys(found).length === 0) goNext();
  };

  const handleDeliverySubmit = (): void => {
    goNext(); // radios always have a value, so nothing to validate
  };

  const handleStoresSubmit = (): void => {
    goNext(); // StoresForm already checked that at least one store is saved
  };

  const handlePriceListSubmit = (): void => {
    goNext(); // a radio always has a value, so nothing to validate
  };

  const handleComplete = async (): Promise<void> => {
    const data: SupplierRegistrationData = {
      personal,
      company,
      supplier,
      delivery,
      stores,
      priceList,
      final: finalInfo,
    };

    setSubmitError("");
    setIsSubmitting(true);
    try {
      await onComplete(data);
      setCompleted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------- render ---------- */
  if (completed) {
    return (
      <main className="mx-auto w-full max-w-7xl px-5 py-8">
        <RegistrationSuccess />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8">
      <h1 className="mb-6 text-2xl font-extrabold text-[#1F1B3D]">Supplier registration</h1>

      <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
        <aside className="hidden rounded-lg bg-white p-5 shadow-sm lg:block">
          <StepList
            steps={REGISTRATION_STEPS}
            currentStep={currentStep}
            maxStep={maxStep}
            onStepClick={goToStep}
          />
        </aside>

        <div className="flex flex-col gap-4">
          <MobileProgress current={currentStep} total={total} title={step.title} />

          <RegistrationCard title={step.title} currentStep={currentStep} totalSteps={total}>
            {currentStep === 1 && (
              <PersonalInfoForm
                values={personal}
                errors={personalErrors}
                onChange={handlePersonalChange}
                onSubmit={handlePersonalSubmit}
              />
            )}

            {currentStep === 2 && (
              <CompanyInfoForm
                values={company}
                errors={companyErrors}
                onChange={handleCompanyChange}
                onTypeChange={handleCompanyTypeChange}
                onBack={goBack}
                onSubmit={handleCompanySubmit}
              />
            )}

            {currentStep === 3 && (
              <SupplierDetailsForm
                values={supplier}
                errors={supplierErrors}
                onChange={handleSupplierChange}
                onTypeChange={handleSupplierTypeChange}
                onBack={goBack}
                onSubmit={handleSupplierSubmit}
              />
            )}

            {currentStep === 4 && (
              <DeliveryTypesForm
                values={delivery}
                onChange={handleDeliveryChange}
                onBack={goBack}
                onSubmit={handleDeliverySubmit}
              />
            )}

            {currentStep === 5 && (
              <StoresForm
                stores={stores}
                onStoresChange={setStores}
                onBack={goBack}
                onSubmit={handleStoresSubmit}
              />
            )}

            {currentStep === 6 && (
              <PriceListForm
                values={priceList}
                onChange={handlePriceListChange}
                onBack={goBack}
                onSubmit={handlePriceListSubmit}
              />
            )}

            {currentStep === 7 && (
              <FinalProvisionsForm
                values={finalInfo}
                onChange={handleFinalChange}
                onBack={goBack}
                onSubmit={handleComplete}
                isSubmitting={isSubmitting}
                submitError={submitError}
              />
            )}
          </RegistrationCard>
        </div>
      </div>
    </main>
  );
}