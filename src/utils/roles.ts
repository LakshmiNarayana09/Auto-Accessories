import { ROUTES } from "./routes";
import type { Role } from "../types/auth";

export const ROLE_HOME: Record<Role, string> = {
  manager: ROUTES.managerSuppliers,
  supplier: ROUTES.accountCatalog,
  buyer: ROUTES.profile,
};


const ROLE_PREFIXES: Record<Role, string[]> = {
  manager: ["/manager"],
  supplier: ["/account"],
  buyer: ["/profile"],
};

const GUARDED_PREFIXES = Object.values(ROLE_PREFIXES).flat();


export function canAccessPath(role: Role, pathname: string): boolean {
  const isGuarded = GUARDED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  if (!isGuarded) return true;
  return ROLE_PREFIXES[role].some((prefix) => pathname.startsWith(prefix));
}