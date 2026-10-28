import type { CheckoutErrors, CheckoutFormValues } from '../types/checkout';
import { isValidPhone } from './format';

export function validateCheckout(values: CheckoutFormValues): CheckoutErrors {
  const errors: CheckoutErrors = {};

  if (values.customerType === 'legal') {
    if (!values.companyName.trim()) errors.companyName = 'Enter the company name';

    const taxIdLength = values.legalForm === 'llc' ? 10 : 12;
    if (!new RegExp(`^\\d{${taxIdLength}}$`).test(values.taxId)) {
      errors.taxId = `Tax ID must be ${taxIdLength} digits`;
    }
    if (values.legalForm === 'llc' && !/^\d{9}$/.test(values.kpp)) {
      errors.kpp = 'KPP must be 9 digits';
    }
  } else {
    if (!values.fullName.trim()) errors.fullName = 'Enter your full name';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address';
  }

  if (!isValidPhone(values.phone)) errors.phone = 'Enter a valid phone number';

  if (values.customerType === 'legal' && !values.legalAddress.trim()) {
    errors.legalAddress = 'Enter the legal address';
  }

  if (values.deliveryMethod === 'courier') {
    if (!values.city.trim()) errors.city = 'Enter the city';
    if (!values.street.trim()) errors.street = 'Enter the street';
    if (!values.house.trim()) errors.house = 'Required';
  }

  return errors;
}