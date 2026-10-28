import { Link } from "react-router-dom";
import { MessageCircle, Circle } from "lucide-react";
import { FOOTER_COLUMNS, FOOTER_LEGAL_LINKS, PAYMENT_METHODS } from "../../data/footer/footerData";
import { ROUTES } from "../../utils/routes";

const linkClass = "text-[11px] text-gray-300 transition-colors hover:text-white";
const legalLinkClass = "text-[9px] text-gray-300 transition-colors hover:text-white";

const Footer = () => {
  return (
    <footer className="w-full bg-[#302B4D] text-white">
      <div className="mx-auto max-w-[1420px] px-5 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.2fr] lg:gap-10">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:flex lg:justify-end">
            <div className="w-full max-w-[230px]">
              <Link
                to={ROUTES.consultation}
                className="flex w-full items-center gap-2 rounded-lg bg-[#4B4668] px-3 py-2.5 text-left transition-colors hover:bg-[#575170]"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-white" />
                <div>
                  <p className="text-[11px] font-medium text-white">Online Consultation</p>
                  <p className="mt-0.5 text-[9px] text-gray-300">Ask a question</p>
                </div>
              </Link>

              <div className="mt-3 flex items-center gap-2">
                <Circle className="h-2.5 w-2.5 shrink-0 fill-[#39C879] text-[#39C879]" />
                <p className="text-[10px] text-white">The service is operating normally</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-7 h-px w-full bg-[#4A4565]" />

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[9px] text-gray-300">
            Copyright © LLC "Oner.ru" 2021. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[9px] text-gray-300">We accept payment</span>
            <div className="flex items-center gap-1.5">
              {PAYMENT_METHODS.map((m) => (
                <span
                  key={m.label}
                  className={`flex h-5 items-center rounded bg-white/20 px-2 text-[10px] font-bold text-white ${m.className}`}
                >
                  {m.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link key={link.label} to={link.to} className={legalLinkClass}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;