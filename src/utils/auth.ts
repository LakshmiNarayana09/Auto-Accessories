import { ROLES, type AuthUser } from "../types/auth";

export function isAuthUser(value: unknown): value is AuthUser {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Partial<AuthUser>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.name === "string" &&
    ROLES.includes(candidate.role as AuthUser["role"])
  );
}