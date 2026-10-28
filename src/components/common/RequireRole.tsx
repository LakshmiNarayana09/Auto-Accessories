import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useAuth } from "../../hooks/useAuth";
import type { Role } from "../../types/auth";

interface RequireRoleProps {
  allowed: Role[];
}

export default function RequireRole({ allowed }: RequireRoleProps) {
  const { user } = useAuth();
  const location = useLocation();

  // Not logged in: go to login and remember where the user was heading
  if (!user) {
    return <Navigate to={ROUTES.login} replace state={{ from: location }} />;
  }

  // Logged in with the wrong role
  if (!allowed.includes(user.role)) {
    return <Navigate to={ROUTES.forbidden} replace />;
  }

  return <Outlet />;
}