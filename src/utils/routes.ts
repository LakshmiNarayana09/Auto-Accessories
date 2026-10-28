export const ROUTES = {
  home: "/",

  login: "/login",
  register: "/register",
  forbidden: "/forbidden",

  about: "/about",
  requisites: "/requisites",
  news: "/news",
  vacancies: "/vacancies",
  supplierRegistration: "/supplier-registration",
  contacts: "/contacts",

  
  originalParts: "/catalog/original-parts",
  nonOriginalParts: "/catalog/non-original-parts",
  maintenanceParts: "/catalog/maintenance-parts",
  motorOils: "/catalog/motor-oils",
  batteries: "/catalog/batteries",
  clearance: "/catalog/clearance",

  
  faq: "/help/faq",
  consultation: "/help/consultation",
  payment: "/help/payment",
  delivery: "/help/delivery",
  returns: "/help/returns",
  forgotPassword: "/forgot-password",

  
  brands: "/brands",
  popularProducts: "/popular-products",
  stock: "/stock",

  
  offer: "/offer",
  privacy: "/privacy-policy",

  
  accountCatalog: "/account/catalog",
  accountPriceLists: "/account/price-lists",
  accountOrders: "/account/orders",
  accountStores: "/account/stores",
  accountStoreNew: "/account/stores/new",
  accountRequisites: "/account/requisites",
  accountRequisiteNew: "/account/requisites/new",
  accountReceipts: "/account/receipts",
  accountChats: "/account/chats",
  accountAccounting: "/account/accounting",

  
  profile: "/profile",
  profileOrders: "/profile/orders",
  profileAddresses: "/profile/addresses",
  profileAddressNew: "/profile/addresses/new",
  profileRequisites: "/profile/requisites",
  profileChats: "/profile/chats",

  
  managerSuppliers: "/manager/suppliers",
  managerCustomers: "/manager/customers",
  managerOrders: "/manager/orders",
} as const;



export const partRoute = (partNumber: string): string =>
  `/parts/${encodeURIComponent(partNumber)}`;

export const orderRoute = (number: string): string => `${ROUTES.accountOrders}/${number}`;

export const storeEditRoute = (id: string): string => `${ROUTES.accountStores}/${id}/edit`;

export const requisiteEditRoute = (id: string): string => `${ROUTES.accountRequisites}/${id}/edit`;

export const addressEditRoute = (id: string): string => `${ROUTES.profileAddresses}/${id}/edit`;

export const managerSupplierRoute = (id: string): string => `${ROUTES.managerSuppliers}/${id}`;

export const managerSupplierEditRoute = (id: string): string =>
  `${ROUTES.managerSuppliers}/${id}/edit`;

export const managerCustomerRoute = (id: string): string => `${ROUTES.managerCustomers}/${id}`;

export const managerCustomerEditRoute = (id: string): string =>
  `${ROUTES.managerCustomers}/${id}/edit`;

export const managerOrderRoute = (id: string): string => `${ROUTES.managerOrders}/${id}`;

export const managerOrderEditRoute = (id: string): string => `${ROUTES.managerOrders}/${id}/edit`;