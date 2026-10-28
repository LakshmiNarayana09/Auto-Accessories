import { useCallback, useMemo, useState, type ReactNode } from "react";
import type { AuthUser } from "../types/auth";
import { isAuthUser } from "../utils/auth";
import { AuthContext, type AuthContextValue } from "./auth-context";

const STORAGE_KEY = "oner.auth.user";

type StorageKind = "local" | "session";

function getStorage(kind: StorageKind): Storage | null {
  try {
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null; // storage blocked (private mode, strict settings)
  }
}

function readStoredUser(): AuthUser | null {
  for (const kind of ["local", "session"] as const) {
    try {
      const raw = getStorage(kind)?.getItem(STORAGE_KEY);
      if (!raw) continue;
      const parsed: unknown = JSON.parse(raw);
      if (isAuthUser(parsed)) return parsed;
    } catch {
      
    }
  }
  return null;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(readStoredUser);

  const login = useCallback((next: AuthUser, remember: boolean = true): void => {
    setUser(next);
    try {
      getStorage(remember ? "session" : "local")?.removeItem(STORAGE_KEY);
      getStorage(remember ? "local" : "session")?.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      
    }
  }, []);

  const logout = useCallback((): void => {
    setUser(null);
    try {
      getStorage("local")?.removeItem(STORAGE_KEY);
      getStorage("session")?.removeItem(STORAGE_KEY);
    } catch {
      
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthenticated: user !== null, login, logout }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}