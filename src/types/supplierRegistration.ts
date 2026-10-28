export interface RegistrationStep {
  id: number;
  title: string;
}

export type PersonalField = "firstName" | "middleName" |"lastName"| "phone" | "email";

export type PersonalInfo = Record<PersonalField, string>;

export interface FieldConfig {
  name: PersonalField;
  label: string;
  type: "text" | "tel" | "email";
  autoComplete: string;
}

export type CompanyType = "llc" | "sole-proprietor";

export type CompanyField = "taxId" | "ogrn" | "bic" | "settlementAccount" | "legalAddress";

export type CompanyInfo = Record<CompanyField, string> & { type: CompanyType };

export interface CompanyFieldConfig {
  name: CompanyField;
  label: string;
  numeric?: boolean;
  maxLength?: number;
}

export interface RadioOption<T extends string = string> {
  value: T;
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export type SupplierField = "product" | "brand" | "warehouse";

export type SupplierInfo = Record<SupplierField, string> & { type: CompanyType };

export interface SupplierFieldConfig {
  name: SupplierField;
  label: string;
  options: SelectOption[];
}


export type DeliveryField = "courier" | "pickup";

export type DeliveryInfo = Record<DeliveryField, string>;

export interface DeliveryGroupConfig {
  name: DeliveryField;
  legend: string;
  options: RadioOption[];
}

export type StoreField = "name" | "address" | "phone" | "email" | "description";

export type StoreErrors = Partial<Record<StoreField, string>>;

export interface StorePhoto {
  id: string;
  name: string;
  url: string;
}

export interface Store extends Record<StoreField, string> {
  id: string;
  photos: StorePhoto[];
}

export interface StoreFieldConfig {
  name: StoreField;
  label: string;
  type: "text" | "tel" | "email";
  autoComplete?: string;
  required?: boolean;
}

export type PriceListMethod = "api" | "file";

export interface PriceListInfo {
  method: PriceListMethod;
}

export interface FinalInfo {
  description: string;
}

export interface SupplierRegistrationData {
  personal: PersonalInfo;
  company: CompanyInfo;
  supplier: SupplierInfo;
  delivery: DeliveryInfo;
  stores: Store[];
  priceList: PriceListInfo;
  final: FinalInfo;
}