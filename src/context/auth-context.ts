import { createContext } from "react";
import type { AuthUser } from "../types/auth";

export interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (user: AuthUser, remember?: boolean) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);