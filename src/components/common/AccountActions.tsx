import { Link } from "react-router-dom";
import { Bell, User } from "lucide-react";
import { ROUTES } from "../../utils/routes";

interface AccountActionsProps {
  notificationCount?: number;
}

export default function AccountActions({ notificationCount = 0 }: AccountActionsProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        aria-label={`Notifications${notificationCount ? `, ${notificationCount} new` : ""}`}
        className="relative grid h-9 w-9 place-items-center rounded-full text-[#5B3FD6] transition-colors hover:bg-[#EEEAFB]"
      >
        <Bell size={20} />
        {notificationCount > 0 && (
          <span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-orange-500 px-1 text-[10px] font-semibold text-white">
            {notificationCount}
          </span>
        )}
      </button>

      <Link
        to={ROUTES.accountCatalog}
        className="flex items-center gap-2 text-xs text-gray-800 transition-colors hover:text-[#5B3FD6]"
      >
        <User size={18} className="text-[#5B3FD6]" />
        <span className="hidden sm:inline">My account</span>
      </Link>
    </div>
  );
}