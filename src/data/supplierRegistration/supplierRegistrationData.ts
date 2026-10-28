import type { FieldConfig, RegistrationStep, CompanyFieldConfig, CompanyType, RadioOption, 
  SupplierFieldConfig, DeliveryGroupConfig, Store, StoreFieldConfig, PriceListMethod} from "../../types/supplierRegistration";


  import { createId } from "../../utils/createId";

export const REGISTRATION_STEPS: RegistrationStep[] = [
  { id: 1, title: "Personal information" },
  { id: 2, title: "Company details" },
  { id: 3, title: "Supplier details" },
  { id: 4, title: "Delivery types" },
  { id: 5, title: "Stores" },
  { id: 6, title: "Price list information" },
  { id: 7, title: "Final provisions" },
];

export const PERSONAL_FIELDS: FieldConfig[] = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "middleName", label: "Middle name", type: "text", autoComplete: "additional-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email" },
];


export const COMPANY_TYPE_OPTIONS: RadioOption<CompanyType>[] = [
  { value: "llc", label: "LLC" },
  { value: "sole-proprietor", label: "Sole proprietor" },
];

export const COMPANY_FIELDS: CompanyFieldConfig[] = [
  { name: "taxId", label: "Tax ID", numeric: true, maxLength: 12 },
  { name: "ogrn", label: "OGRN", numeric: true, maxLength: 15 },
  { name: "bic", label: "BIC", numeric: true, maxLength: 9 },
  { name: "settlementAccount", label: "Settlement account", numeric: true, maxLength: 20 },
  { name: "legalAddress", label: "Legal address" },
];



export const SUPPLIER_FIELDS: SupplierFieldConfig[] = [
  {
    name: "product",
    label: "Select products",
    options: [
      { value: "original-parts", label: "Original parts" },
      { value: "non-original-parts", label: "Non-original parts" },
      { value: "maintenance-parts", label: "Parts for maintenance" },
      { value: "motor-oils", label: "Motor oils" },
      { value: "batteries", label: "Batteries" },
      { value: "wheels", label: "Wheels" },
    ],
  },
  {
    name: "brand",
    label: "Brand",
    options: [
      { value: "bosch", label: "Bosch" },
      { value: "castrol", label: "Castrol" },
      { value: "mobil", label: "Mobil" },
      { value: "shell", label: "Shell" },
      { value: "brembo", label: "Brembo" },
    ],
  },
  {
    name: "warehouse",
    label: "Warehouse availability",
    options: [
      { value: "in-stock", label: "In stock" },
      { value: "limited", label: "Limited stock" },
      { value: "on-order", label: "On order" },
    ],
  },
];


export const DELIVERY_GROUPS: DeliveryGroupConfig[] = [
  {
    name: "courier",
    legend: "Courier delivery",
    options: [
      { value: "oner", label: "Delivered by Oner" },
      { value: "self", label: "We deliver ourselves" },
    ],
  },
  {
    name: "pickup",
    legend: "Store pickup",
    options: [
      { value: "available", label: "Available" },
      { value: "unavailable", label: "Not available" },
    ],
  },
];


export const MAX_STORE_PHOTOS = 8;

// Shown above the map
export const STORE_PRIMARY_FIELDS: StoreFieldConfig[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "address", label: "Address", type: "text", autoComplete: "street-address", required: true },
];

// Shown below the map
export const STORE_CONTACT_FIELDS: StoreFieldConfig[] = [
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: true },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email", required: true },
  { name: "description", label: 'Description for customers "How to find us"', type: "text" },
];

export const createEmptyStore = (): Store => ({
  id: createId(),
  name: "",
  address: "",
  phone: "",
  email: "",
  description: "",
  photos: [],
});


export const PRICE_LIST_QUESTION = "How will you exchange stock availability information with the system?";

export const PRICE_LIST_OPTIONS: RadioOption<PriceListMethod>[] = [
  { value: "api", label: "API exchange protocol (with a description of the API exchange advantages)" },
  { value: "file", label: "Upload an XLS/CSV price list with stock data" },
];

export const MAX_DESCRIPTION_LENGTH = 1000;

