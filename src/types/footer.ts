export interface FooterLink {
  label: string;
  to: string;
}

export interface FooterColumnData {
  title: string;
  links: FooterLink[];
}