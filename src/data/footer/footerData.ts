import { ROUTES } from "../../utils/routes";
import type { FooterColumnData, FooterLink } from "../../types/footer";

export const FOOTER_COLUMNS: FooterColumnData[] = [
  {
    title: "Company menu",
    links: [
      { label: "What is Oner?", to: ROUTES.about },
      { label: "Requisites and information", to: ROUTES.requisites },
      { label: "News", to: ROUTES.news },
      { label: "Vacancies", to: ROUTES.vacancies },
      { label: "Suppliers", to: ROUTES.supplierRegistration },
      { label: "Contacts", to: ROUTES.contacts },
    ],
  },
  {
    title: "Catalogs",
    links: [
      { label: "Original parts", to: ROUTES.originalParts },
      { label: "Non-original parts", to: ROUTES.nonOriginalParts },
      { label: "Parts for maintenance", to: ROUTES.maintenanceParts },
      { label: "Motor oils", to: ROUTES.motorOils },
      { label: "Batteries", to: ROUTES.batteries },
      { label: "Clearance sale", to: ROUTES.clearance },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Frequently asked questions", to: ROUTES.faq },
      { label: "Online consultation", to: ROUTES.consultation },
      { label: "Order payment", to: ROUTES.payment },
      { label: "Order delivery", to: ROUTES.delivery },
      { label: "Product returns", to: ROUTES.returns },
      { label: "Forgot password", to: ROUTES.forgotPassword },
    ],
  },
  {
    title: "Products & Brands",
    links: [
      { label: "Brand list", to: ROUTES.brands },
      { label: "Popular products", to: ROUTES.popularProducts },
      { label: "Warehouse availability", to: ROUTES.stock },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Public Offer", to: ROUTES.offer },
  { label: "Privacy Policy", to: ROUTES.privacy },
];

export const PAYMENT_METHODS = [
  { label: "VISA", className: "italic" },
  { label: "●●", className: "" },
  { label: "MIR", className: "" },
];