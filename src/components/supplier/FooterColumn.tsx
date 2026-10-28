import { Link } from "react-router-dom";
import type { FooterColumnData } from "../../types/footer";

export default function FooterColumn({ title, links }: FooterColumnData) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-[11px] text-gray-300 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}