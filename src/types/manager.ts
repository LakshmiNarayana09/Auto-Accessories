export interface SupplierRecord {
  id: string;
  name: string;
  taxId: string;
  phone: string;
  contactPerson: string;
  enabled: boolean; // the on/off switch in the Actions column
}

export interface SupplierColumn {
  id: string;
  label: string;
}

export interface CustomerRecord {
  id: string; // shown in the ID column and used in the URL
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  email: string;
  enabled: boolean; // the on/off switch in the Actions column
}

export interface CustomerColumn {
  id: string;
  label: string;
}

export type ManagerOrderKind = "supplier" | "customer";

export interface ManagerOrderRecord {
  id: string; // shown in the ID column and used in the URL
  kind: ManagerOrderKind; // which tab the order appears under
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  email: string;
  enabled: boolean; // the on/off switch in the Actions column
}