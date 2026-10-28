import { Building2, ClipboardList, Users } from "lucide-react";
import { ROUTES } from "../../utils/routes";
import type { AccountNavItem } from "../../types/account";
import type { TabItem } from "../../types/account";
import type { SupplierColumn, SupplierRecord, CustomerRecord, CustomerColumn, ManagerOrderRecord, ManagerOrderKind } from "../../types/manager";


export const MANAGER_NAV_ITEMS: AccountNavItem[] = [
  { id: "suppliers", label: "Supplier list", to: ROUTES.managerSuppliers, icon: Building2 },
  { id: "customers", label: "Customer list", to: ROUTES.managerCustomers, icon: Users },
  { id: "orders", label: "Order list", to: ROUTES.managerOrders, icon: ClipboardList },
];


export const SUPPLIER_COLUMNS: SupplierColumn[] = [
  { id: "name", label: "Name" },
  { id: "taxId", label: "Tax ID" },
  { id: "phone", label: "Contact phone" },
  { id: "contactPerson", label: "Contact person" },
  { id: "actions", label: "Actions" },
];

export const SUPPLIER_GRID =
  "md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1.2fr)_88px]";

const MOCK_SUPPLIER_TOGGLES = [true, false, true, false, true, false, true];

export const MOCK_SUPPLIERS: SupplierRecord[] = MOCK_SUPPLIER_TOGGLES.map((enabled, i) => ({
  id: `supplier-${i + 1}`,
  name: "Auto Favorit Parts LLC",
  taxId: String(2759304563 + i),
  phone: "+7 (347) 229-46-45",
  contactPerson: "Ivanov A. S.",
  enabled,
}));


export const CUSTOMER_COLUMNS: CustomerColumn[] = [
  { id: "id", label: "ID" },
  { id: "lastName", label: "Last name" },
  { id: "firstName", label: "First name" },
  { id: "middleName", label: "Middle name" },
  { id: "phone", label: "Phone" },
  { id: "email", label: "E-mail" },
  { id: "actions", label: "Actions" },
];

export const CUSTOMER_GRID =
  "md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1.8fr)_112px]";

const MOCK_CUSTOMER_TOGGLES = [false, true, true, false, false, true, false];

export const MOCK_CUSTOMERS: CustomerRecord[] = MOCK_CUSTOMER_TOGGLES.map((enabled, i) => ({
  id: String(4348500263 + i),
  lastName: "Ivanov",
  firstName: "Ivan",
  middleName: "Petrovich",
  phone: "+7 (347) 229-46-45",
  email: "ivan.ivanov@example.com",
  enabled,
}));


export const MANAGER_ORDER_TABS: TabItem[] = [
  { id: "supplier", label: "Supplier orders" },
  { id: "customer", label: "Customer orders" },
];

export const MANAGER_ORDER_COLUMNS = CUSTOMER_COLUMNS;
export const MANAGER_ORDER_GRID = CUSTOMER_GRID;

const SUPPLIER_ORDER_TOGGLES = [false, true, false, false, false, false, false];
const CUSTOMER_ORDER_TOGGLES = [true, false, false, true, false, false, false];

const createManagerOrders = (
  kind: ManagerOrderKind,
  startId: number,
  toggles: boolean[],
): ManagerOrderRecord[] =>
  toggles.map((enabled, i) => ({
    id: `id${startId + i}`,
    kind,
    lastName: "Ivanov",
    firstName: "Ivan",
    middleName: "Petrovich",
    phone: "+7 (347) 229-46-45",
    email: "ivan.ivanov@example.com",
    enabled,
  }));

export const MOCK_MANAGER_ORDERS: ManagerOrderRecord[] = [
  ...createManagerOrders("supplier", 49503295, SUPPLIER_ORDER_TOGGLES),
  ...createManagerOrders("customer", 51203410, CUSTOMER_ORDER_TOGGLES),
];
