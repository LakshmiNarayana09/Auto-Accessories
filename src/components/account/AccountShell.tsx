import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useAuth } from "../../hooks/useAuth";
import AccountSidebar from "./AccountSidebar";
import type { AccountNavItem } from "../../types/account";

interface AccountShellProps {
  navItems?: AccountNavItem[];
  onLogout?: () => void;
}

export default function AccountShell({ navItems, onLogout }: AccountShellProps) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = (): void => {
    if (onLogout) {
      onLogout();
      return;
    }
    // Leave the guarded area first, then clear the session
    navigate(ROUTES.home, { replace: true });
    logout();
    // Also call your API here to end the server session
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8">
      <div className="grid gap-5 lg:grid-cols-[240px_1fr] lg:items-start">
        <AccountSidebar items={navItems} onLogout={handleLogout} />

        <section className="min-w-0">
          <Outlet />
        </section>
      </div>
    </main>
  );
}