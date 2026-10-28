import type { LucideIcon } from "lucide-react";

/* ---------- Account sidebar ---------- */

export interface AccountNavItem {
  id: string;
  label: string;
  to: string;
  icon: LucideIcon;
}

/* ---------- My catalog ---------- */

export interface CatalogItem {
  id: string;
  partNumber: string;
  rating: number; // out of 5
  description: string;
  quantity: number;
  leadTimeDays: number;
  price: number;
}

export interface CatalogGroup {
  id: string;
  manufacturer: string;
  supplierLabel: string;
  items: CatalogItem[];
}

export type CatalogSortKey = "description" | "quantity" | "leadTimeDays" | "price";

export type SortDirection = "asc" | "desc";

export interface SortState {
  key: CatalogSortKey;
  direction: SortDirection;
}

export interface CatalogColumn {
  id: string;
  label: string;
  sortKey?: CatalogSortKey;
}

/* ---------- My price lists ---------- */

export interface TabItem {
  id: string;
  label: string;
}

export type PriceListStatus = "processed" | "pending" | "error";

export interface PriceListRecord {
  id: string;
  number: string;
  uploadedAt: string; // ISO date, e.g. "2021-05-23"
  processedAt: string;
  status: PriceListStatus;
  comment: string;
}

export interface PriceListColumn {
  id: string;
  label: string;
}

/* ---------- Customer profile ---------- */

export type ProfileField = "fullName" | "phone" | "email";

export type ProfileInfo = Record<ProfileField, string>;

export type ProfileErrors = Partial<Record<ProfileField, string>>;

export interface ProfileFieldConfig {
  name: ProfileField;
  label: string;
  type: "text" | "tel" | "email";
  autoComplete: string;
  inputMode?: "text" | "tel" | "email";
  required?: boolean;
}

export type OrderStatus = "accepted" | "cancelled" | "shipping" | "shipped" | "completed";

export interface OrderRecord {
  id: string;
  number: string; // digits only, shown as "No. <number>"
  orderedAt: string; // ISO date, e.g. "2021-05-23"
  status: OrderStatus;
  contents: string;
  paymentType: string;
  deliveryType: string;
  deliveryCost: number;
  total: number;
  archived: boolean;
}

export interface OrderColumn {
  id: string;
  label: string;
}

export interface DateRange {
  from: string; // ISO date or ""
  to: string;
}

export type StoreStatus = "active" | "inactive" | "moderation";

export interface StoreRecord {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  status: StoreStatus;
  enabled: boolean; // the on/off switch in the Actions column
}

export interface StoreColumn {
  id: string;
  label: string;
}

export interface RequisiteRecord {
  id: string;
  name: string;
  last4: string; // last 4 digits only, never store the full number on the client
}

export type ReceiptStatus = "active" | "completed";

export interface ReceiptRecord {
  id: string;
  orderNumber: string; // digits only, shown as "No. <number>"
  orderedAt: string; // ISO date
  status: ReceiptStatus;
  amount: number;
  transferredAt: string; // ISO date
}

export interface ReceiptColumn {
  id: string;
  label: string;
}

export type ChatStatus = "open" | "closed";

export type MessageAuthor = "me" | "other";

export interface ChatMessage {
  id: string;
  author: MessageAuthor;
  text: string;
  time: string; // "HH:MM"
}

export interface ChatThread {
  id: string;
  orderNumber: string;
  lastDate: string; // ISO date
  preview: string;
  status: ChatStatus;
  unread: number;
  messages: ChatMessage[];
}

export interface AccountingDocument {
  id: string;
  name: string;
  url?: string;
}

export interface AccountingOrder {
  id: string;
  orderNumber: string; // digits only, shown as "No. <number>"
  orderedAt: string; // ISO date
  documents: AccountingDocument[];
}

export interface AccountingColumn {
  id: string;
  label: string;
}

export interface AddressRecord {
  id: string;
  street: string; // e.g. "Revolyutsionnaya St., 197, apt. 27"
  city: string;
  postalCode: string;
}

