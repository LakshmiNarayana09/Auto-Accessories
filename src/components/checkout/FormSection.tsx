import type { ReactNode } from 'react';

interface FormSectionProps {
  title?: string;
  children: ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => (
  <section className="rounded-xl bg-white p-4 shadow-xs sm:p-6">
    {title && <h2 className="mb-4 text-base font-bold text-gray-900 sm:text-lg">{title}</h2>}
    {children}
  </section>
);

export default FormSection;