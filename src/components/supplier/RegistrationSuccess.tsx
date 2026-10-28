import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { ROUTES } from "../../utils/routes";

export default function RegistrationSuccess() {
  return (
    <section
      role="status"
      className="mx-auto flex max-w-lg flex-col items-center rounded-lg bg-white px-6 py-12 text-center shadow-sm"
    >
      <span className="grid h-14 w-14 place-items-center rounded-full bg-green-50 text-green-500">
        <Check size={28} aria-hidden="true" />
      </span>
      <h2 className="mt-5 text-lg font-semibold text-gray-900">Registration complete</h2>
      <p className="mt-2 text-sm text-gray-500">
        Thank you! We have received your application and will contact you after reviewing it.
      </p>
      <Link
        to={ROUTES.home}
        className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#5B3FD6] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#4A32B8]"
      >
        Back to home
      </Link>
    </section>
  );
}