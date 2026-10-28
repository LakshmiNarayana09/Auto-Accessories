import type { AuthUser } from "../types/auth";
import { isAuthUser } from "../utils/auth";

export interface LoginPayload {
  method: "email" | "phone";
  login: string;
  password: string;
  remember: boolean;
}

// Adjust the URL and body to match your backend
export async function loginRequest(payload: LoginPayload): Promise<AuthUser> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // lets the server set an httpOnly session cookie
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(
      response.status === 401 ? "Invalid login or password" : "Could not sign in. Please try again.",
    );
  }

  const data: unknown = await response.json();
  if (!isAuthUser(data)) throw new Error("Unexpected response from the server");
  return data;
}