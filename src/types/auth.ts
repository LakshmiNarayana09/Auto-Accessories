export const ROLES = ["manager", "supplier", "buyer"] as const;

export type Role = (typeof ROLES)[number];

export interface AuthUser {
  id: string;
  name: string;
  role: Role;
}