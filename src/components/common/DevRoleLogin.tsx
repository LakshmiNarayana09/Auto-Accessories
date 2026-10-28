import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROLE_HOME } from "../../utils/roles";
import type { Role } from "../../types/auth";

const DEV_USERS: Record<Role, { id: string; name: string }> = {
  manager: { id: "dev-manager", name: "Test Manager" },
  supplier: { id: "dev-supplier", name: "Test Supplier" },
  buyer: { id: "dev-buyer", name: "Test Buyer" },
};

// Shows only in development builds. Remove once real login works.
export default function DevRoleLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  if (!import.meta.env.DEV) return null;

  const handleClick = (role: Role): void => {
    login({ ...DEV_USERS[role], role });
    navigate(ROLE_HOME[role], { replace: true });
  };

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-dashed border-gray-300 pt-4 text-xs">
      <span className="text-gray-500">Dev only: continue as</span>
      {(Object.keys(DEV_USERS) as Role[]).map((role) => (
        <button
          key={role}
          type="button"
          onClick={() => handleClick(role)}
          className="rounded border border-gray-300 px-3 py-1 capitalize text-gray-700 hover:border-[#5B3FD6] hover:text-[#5B3FD6]"
        >
          {role}
        </button>
      ))}
    </div>
  );
}