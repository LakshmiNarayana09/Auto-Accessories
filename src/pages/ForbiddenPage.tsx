import { Link } from "react-router-dom";
import { ROLE_HOME } from "../utils/roles";
import { ROUTES } from "../utils/routes";
import { useAuth } from "../hooks/useAuth";

export default function ForbiddenPage() {
  const { user } = useAuth();
  const homeHref = user ? ROLE_HOME[user.role] : ROUTES.home;

  return (
    <main className="mx-auto flex w-full max-w-lg flex-col items-center px-5 py-20 text-center">
      <p className="text-4xl font-extrabold text-[#5B3FD6]">403</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">Access denied</h1>
      <p className="mt-2 text-sm text-gray-500">
        Your account does not have permission to open this page.
      </p>
      <Link
        to={homeHref}
        className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#5B3FD6] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#4A32B8]"
      >
        {user ? "Go to my account" : "Back to home"}
      </Link>
    </main>
  );
}