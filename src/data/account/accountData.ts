import {
  Boxes,
  Calculator,
  CreditCard,
  FileText,
  Inbox,
  MapPin,
  MessagesSquare,
  ScrollText,
  ShoppingBag,
  User,
} from "lucide-react";
import { ROUTES } from "../../utils/routes";
import type {
  AccountNavItem,
  CatalogColumn,
  CatalogGroup,
  PriceListColumn,
  PriceListRecord,
  PriceListStatus,
  ProfileFieldConfig,
  ProfileInfo,
  TabItem,
  DateRange,
  OrderColumn,
  OrderRecord,
  OrderStatus,
  StoreColumn,
  StoreRecord,
  StoreStatus,
  RequisiteRecord,
  ReceiptStatus,
  ReceiptRecord,
  ReceiptColumn,
  ChatThread,
  ChatMessage,
  AccountingColumn,
  AccountingDocument,
  AccountingOrder,
  AddressRecord
} from "../../types/account";


export const ACCOUNT_NAV_ITEMS: AccountNavItem[] = [
  { id: "catalog", label: "My catalog", to: ROUTES.accountCatalog, icon: Boxes },
  { id: "price-lists", label: "My price lists", to: ROUTES.accountPriceLists, icon: FileText },
  { id: "orders", label: "My orders", to: ROUTES.accountOrders, icon: ShoppingBag },
  { id: "stores", label: "My stores", to: ROUTES.accountStores, icon: MapPin },
  { id: "requisites", label: "My requisites", to: ROUTES.accountRequisites, icon: CreditCard },
  { id: "receipts", label: "My receipts", to: ROUTES.accountReceipts, icon: Inbox },
  { id: "chats", label: "My chats", to: ROUTES.accountChats, icon: MessagesSquare },
  { id: "accounting", label: "Accounting", to: ROUTES.accountAccounting, icon: Calculator },
];



export const CATALOG_COLUMNS: CatalogColumn[] = [
  { id: "part", label: "Manufacturer and number" },
  { id: "description", label: "Description", sortKey: "description" },
  { id: "quantity", label: "Availability", sortKey: "quantity" },
  { id: "leadTime", label: "Lead time", sortKey: "leadTimeDays" },
  { id: "price", label: "Price", sortKey: "price" },
];


export const CATALOG_GRID =
  "md:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_minmax(0,0.9fr)]";


export const MOCK_CATALOG: CatalogGroup[] = [
  {
    id: "bmw",
    manufacturer: "BMW",
    supplierLabel: "Reliable supplier",
    items: Array.from({ length: 10 }, (_, i) => ({
      id: `bmw-${i + 1}`,
      partNumber: "33208609838",
      rating: 4,
      description: "Gasket, cylinder head cover",
      quantity: 1,
      leadTimeDays: 1,
      price: 56564,
    })),
  },
];

export const CATALOG_PAGE_COUNT = 10;


export const PRICE_LIST_TABS: TabItem[] = [
  { id: "active", label: "Active price lists" },
  { id: "checks", label: "Checks and uploads" },
  { id: "messages", label: "Messages and errors" },
  { id: "api", label: "API" },
];

export const PRICE_LIST_COLUMNS: PriceListColumn[] = [
  { id: "number", label: "ID" },
  { id: "uploadedAt", label: "Upload date" },
  { id: "processedAt", label: "Processing date" },
  { id: "status", label: "Status" },
  { id: "comment", label: "Comment" },
  { id: "actions", label: "" },
];


export const PRICE_LIST_GRID =
  "md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,2.2fr)_minmax(0,0.9fr)]";

export const PRICE_LIST_STATUS: Record<PriceListStatus, { label: string; className: string }> = {
  processed: { label: "Processed", className: "bg-green-500 text-white" },
  pending: { label: "Pending", className: "bg-gray-400 text-white" },
  error: { label: "Error", className: "bg-red-500 text-white" },
};

const MOCK_STATUSES: PriceListStatus[] = [
  "processed",
  "pending",
  "error",
  "processed",
  "processed",
  "processed",
  "processed",
  "processed",
  "processed",
  "processed",
  "processed",
];


export const MOCK_PRICE_LISTS: PriceListRecord[] = MOCK_STATUSES.map((status, i) => ({
  id: `price-list-${i + 1}`,
  number: `No. ${362910 + i}/2021`,
  uploadedAt: "2021-05-23",
  processedAt: "2021-05-24",
  status,
  comment: "Stock and price list, warehouse 1",
}));



export const PROFILE_NAV_ITEMS: AccountNavItem[] = [
  { id: "profile", label: "Personal information", to: ROUTES.profile, icon: User },
  { id: "orders", label: "Order history", to: ROUTES.profileOrders, icon: ScrollText },
  { id: "addresses", label: "My addresses", to: ROUTES.profileAddresses, icon: MapPin },
  { id: "requisites", label: "My requisites", to: ROUTES.profileRequisites, icon: CreditCard },
  { id: "chats", label: "My chats", to: ROUTES.profileChats, icon: MessagesSquare },
];

export const PROFILE_FIELDS: ProfileFieldConfig[] = [
  { name: "fullName", label: "Last name and first name", type: "text", autoComplete: "name", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", inputMode: "tel", required: true },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email", inputMode: "email", required: true },
];


export const MOCK_PROFILE: ProfileInfo = {
  fullName: "Ivanov Ivan",
  phone: "+7 (987) 345 - 67 - 49",
  email: "ivan.ivanov@example.com",
};



export const ORDER_TABS: TabItem[] = [
  { id: "customers", label: "Customer orders list" },
  { id: "archive", label: "Order archive" },
];

export const ORDER_COLUMNS: OrderColumn[] = [
  { id: "number", label: "Order number" },
  { id: "orderedAt", label: "Order date" },
  { id: "status", label: "Status" },
  { id: "contents", label: "Order contents" },
  { id: "payment", label: "Payment type" },
  { id: "delivery", label: "Delivery type, cost" },
  { id: "total", label: "Total amount" },
  { id: "actions", label: "Details" },
];


export const ORDER_GRID =
  "md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)_24px]";

export const ORDER_STATUS: Record<OrderStatus, { label: string; className: string }> = {
  accepted: { label: "Accepted", className: "bg-green-500 text-white" },
  cancelled: { label: "Cancelled", className: "bg-orange-500 text-white" },
  shipping: { label: "Being shipped", className: "bg-[#5B3FD6] text-white" },
  shipped: { label: "Shipped", className: "bg-blue-500 text-white" },
  completed: { label: "Completed", className: "bg-cyan-500 text-white" },
};

export const EMPTY_DATE_RANGE: DateRange = { from: "", to: "" };

const MOCK_ORDER_ROWS: Pick<OrderRecord, "status" | "paymentType" | "deliveryType">[] = [
  { status: "accepted", paymentType: "Card payment", deliveryType: "Courier delivery" },
  { status: "cancelled", paymentType: "Bank transfer", deliveryType: "Pickup" },
  { status: "shipping", paymentType: "Payment to courier", deliveryType: "Courier delivery" },
  { status: "shipped", paymentType: "Card payment", deliveryType: "Courier delivery" },
  { status: "completed", paymentType: "Card payment", deliveryType: "Courier delivery" },
  { status: "accepted", paymentType: "Card payment", deliveryType: "Courier delivery" },
  { status: "accepted", paymentType: "Card payment", deliveryType: "Courier delivery" },
  { status: "accepted", paymentType: "Card payment", deliveryType: "Courier delivery" },
  { status: "accepted", paymentType: "Card payment", deliveryType: "Courier delivery" },
  { status: "accepted", paymentType: "Card payment", deliveryType: "Courier delivery" },
];


export const MOCK_ORDERS: OrderRecord[] = MOCK_ORDER_ROWS.map((row, i) => ({
  id: `order-${i + 1}`,
  number: String(36203133837 + i),
  orderedAt: "2021-05-23",
  contents: "Castrol Magnatec Diesel 5W-40, 4 l. Motor oil, synthetic, for diesel engines",
  deliveryCost: 469,
  total: 124739,
  archived: false,
  ...row,
}));



export const STORE_COLUMNS: StoreColumn[] = [
  { id: "name", label: "Name" },
  { id: "city", label: "City" },
  { id: "address", label: "Address" },
  { id: "phone", label: "Phone" },
  { id: "email", label: "E-mail" },
  { id: "status", label: "Status" },
  { id: "actions", label: "Actions" },
];


export const STORE_GRID =
  "md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1.2fr)_minmax(0,1.5fr)_minmax(0,0.9fr)_88px]";

export const STORE_STATUS: Record<StoreStatus, { label: string; className: string }> = {
  active: { label: "Active", className: "bg-green-500 text-white" },
  inactive: { label: "Inactive", className: "bg-gray-400 text-white" },
  moderation: { label: "Moderation", className: "bg-orange-500 text-white" },
};

const MOCK_STORE_ROWS: Pick<StoreRecord, "name" | "city" | "address" | "status" | "enabled">[] = [
  { name: "Auto Favorit", city: "St. Petersburg", address: "ul. Komsomolskaya, 178", status: "active", enabled: false },
  { name: "AutoComplex", city: "Moscow", address: "ul. Lenina, 45", status: "inactive", enabled: true },
  { name: "Wheel World", city: "Ufa", address: "ul. 50 let Oktyabrya, 89", status: "moderation", enabled: false },
  { name: "Silver Wrench", city: "Kazan", address: "ul. Komsomolskaya, 178", status: "active", enabled: false },
  { name: "Auto Favorit", city: "Orenburg", address: "ul. Komsomolskaya, 178", status: "active", enabled: true },
  { name: "Fit Service", city: "Tyumen", address: "ul. Komsomolskaya, 178", status: "active", enabled: false },
  { name: "Retail", city: "Vladivostok", address: "ul. Komsomolskaya, 178", status: "active", enabled: false },
  { name: "Autogrid", city: "N. Novgorod", address: "ul. Komsomolskaya, 178", status: "active", enabled: true },
  { name: "Autoservice Belyaev", city: "Pskov", address: "ul. Komsomolskaya, 178", status: "active", enabled: false },
  { name: "Optima Auto", city: "Murmansk", address: "ul. Komsomolskaya, 178", status: "active", enabled: false },
];


export const MOCK_STORES: StoreRecord[] = MOCK_STORE_ROWS.map((row, i) => ({
  id: `store-${i + 1}`,
  phone: "+7 (495) 58-29-04",
  email: "client@example.com",
  ...row,
}));


export const MOCK_REQUISITES: RequisiteRecord[] = [
  { id: "req-1", name: "Tinkoff Bank", last4: "2089" },
  { id: "req-2", name: "Sberbank", last4: "5601" },
  { id: "req-3", name: "Card for paying for parts", last4: "1989" },
  { id: "req-4", name: "Alfa Bank", last4: "5601" },
  { id: "req-5", name: "Tinkoff Bank", last4: "2089" },
  { id: "req-6", name: "Sberbank", last4: "5601" },
  { id: "req-7", name: "Card for paying for parts", last4: "1989" },
  { id: "req-8", name: "Alfa Bank", last4: "5601" },
];


export const RECEIPT_COLUMNS: ReceiptColumn[] = [
  { id: "orderNumber", label: "Order number" },
  { id: "orderedAt", label: "Order date" },
  { id: "status", label: "Order status" },
  { id: "amount", label: "Transfer amount" },
  { id: "transferredAt", label: "Transfer date" },
  { id: "documents", label: "Documents for order" },
];

export const RECEIPT_GRID =
  "md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1.1fr)]";

export const RECEIPT_STATUS: Record<ReceiptStatus, { label: string; dotClass: string; textClass: string }> = {
  active: { label: "Active", dotClass: "bg-green-500", textClass: "text-green-600" },
  completed: { label: "Completed", dotClass: "bg-gray-400", textClass: "text-gray-500" },
};

export const MOCK_RECEIPTS: ReceiptRecord[] = [
  { id: "receipt-1", orderNumber: "189492678342", orderedAt: "2021-05-16", status: "active", amount: 62567, transferredAt: "2021-05-24" },
  { id: "receipt-2", orderNumber: "189492678359", orderedAt: "2021-05-15", status: "active", amount: 48567, transferredAt: "2021-05-24" },
  { id: "receipt-3", orderNumber: "189492678267", orderedAt: "2021-05-14", status: "active", amount: 36567, transferredAt: "2021-05-24" },
  { id: "receipt-4", orderNumber: "189492678096", orderedAt: "2021-05-12", status: "active", amount: 12567, transferredAt: "2021-05-24" },
  { id: "receipt-5", orderNumber: "189492678341", orderedAt: "2021-05-12", status: "active", amount: 178567, transferredAt: "2021-05-24" },
  { id: "receipt-6", orderNumber: "189492678340", orderedAt: "2021-05-09", status: "active", amount: 293567, transferredAt: "2021-05-24" },
  { id: "receipt-7", orderNumber: "189492678339", orderedAt: "2021-05-09", status: "active", amount: 293567, transferredAt: "2021-05-24" },
];


export const CHAT_TABS: TabItem[] = [
  { id: "open", label: "Open" },
  { id: "closed", label: "Closed" },
];

const SAMPLE_MESSAGES: ChatMessage[] = [
  {
    id: "m1",
    author: "other",
    text: "Our assortment includes auto parts for foreign cars: original parts and high-quality analogs, as well as components for VAZ and UAZ vehicles from official suppliers.",
    time: "10:02",
  },
  { id: "m2", author: "me", text: "This item is not yet in our assortment.", time: "10:07" },
  {
    id: "m3",
    author: "other",
    text: "You can find rare parts for cars, including discontinued models. We work with the largest parts suppliers in Moscow, St. Petersburg and Nizhny Novgorod.",
    time: "10:20",
  },
  { id: "m4", author: "other", text: "Some components are agreed after the order is placed.", time: "10:31" },
];

const CHAT_ORDER_NUMBERS = [
  "178395030", "178395031", "178395032", "178395033",
  "178395034", "178395035", "178395036", "178395037",
];

export const MOCK_CHATS: ChatThread[] = CHAT_ORDER_NUMBERS.map((orderNumber, i) => ({
  id: `chat-${i + 1}`,
  orderNumber,
  lastDate: "2021-05-28",
  preview: "To search for products you can use the catalog and the part number search...",
  status: i >= 6 ? "closed" : "open",
  unread: i === 1 ? 2 : 0,
  messages: SAMPLE_MESSAGES,
}));


export const ACCOUNTING_TABS: TabItem[] = [
  { id: "documents", label: "Document list" },
  { id: "reconciliations", label: "My reconciliations" },
  { id: "request", label: "Request to accounting" },
];

export const ACCOUNTING_COLUMNS: AccountingColumn[] = [
  { id: "orderNumber", label: "Order number" },
  { id: "orderedAt", label: "Order date" },
  { id: "documents", label: "Documents" },
];


export const ACCOUNTING_GRID = "md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_200px]";

const SAMPLE_DOCUMENTS: AccountingDocument[] = [
  { id: "doc-invoice", name: "Invoice" },
  { id: "doc-delivery-note", name: "Delivery note" },
  { id: "doc-act", name: "Act of acceptance" },
];

export const MOCK_ACCOUNTING_ORDERS: AccountingOrder[] = Array.from({ length: 6 }, (_, i) => ({
  id: `accounting-${i + 1}`,
  orderNumber: String(3620133837 + i),
  orderedAt: "2021-05-23",
  documents: SAMPLE_DOCUMENTS,
}));

export const MOCK_ADDRESSES: AddressRecord[] = [
  { id: "address-1", street: "Revolyutsionnaya St., 197, apt. 27", city: "Ufa", postalCode: "453690" },
  { id: "address-2", street: "Leningradskaya St., 190, office 34", city: "Ufa", postalCode: "453690" },
];


