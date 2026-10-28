import type { ReactNode } from "react";

interface PageHeadingProps {
  title: string;
  action?: ReactNode;
}

export default function PageHeading({ title, action }: PageHeadingProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      {action}
    </div>
  );
}