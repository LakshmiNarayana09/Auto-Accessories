import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import { ACCOUNT_NAV_ITEMS } from "../../data/account/accountData";
import type { AccountNavItem } from "../../types/account";

interface AccountSidebarProps {
  items?: AccountNavItem[];
  onLogout?: () => void;
}

export default function AccountSidebar({ items = ACCOUNT_NAV_ITEMS, onLogout }: AccountSidebarProps) {
  return (
    <nav aria-label="Account" className="rounded-xl bg-white p-3 shadow-sm">
      <ul className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
        {items.map(({ id, label, to, icon: Icon }) => (
          <li key={id} className="shrink-0">
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-xs transition-colors ${
                  isActive
                    ? "bg-gray-100 font-medium text-gray-900"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              <Icon size={16} aria-hidden="true" className="text-[#5B3FD6]" />
              {label}
            </NavLink>
          </li>
        ))}

        <li className="shrink-0 lg:mt-2 lg:border-t lg:border-gray-100 lg:pt-2">
          <button
            type="button"
            onClick={onLogout}
            className="flex w-full items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
          >
            <LogOut size={16} aria-hidden="true" />
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
}