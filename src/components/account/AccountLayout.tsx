import type { ReactNode } from "react";
import AccountSidebar from "./AccountSidebar";

interface AccountLayoutProps {
  title: string;
  children: ReactNode;
  onLogout?: () => void;
}

export default function AccountLayout({ title, children, onLogout }: AccountLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8">
      <div className="grid gap-5 lg:grid-cols-[240px_1fr] lg:items-start">
        <AccountSidebar onLogout={onLogout} />

        <section className="min-w-0">
          <h1 className="mb-4 text-lg font-semibold text-gray-900">{title}</h1>
          {children}
        </section>
      </div>
    </main>
  );
}