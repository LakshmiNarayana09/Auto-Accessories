import { useCallback, useState, type FormEvent } from 'react';
import type { CheckoutErrors, CheckoutFormValues, CustomerType } from '../types/checkout';
import { validateCheckout } from '../utils/validation';
import { pickupStores } from "../data/checkout/checkoutData";

const initialValues: CheckoutFormValues = {
  customerType: 'individual',
  legalForm: 'llc',
  companyName: '',
  taxId: '',
  kpp: '',
  legalAddress: '',
  fullName: '',
  email: '',
  phone: '',
  deliveryMethod: 'courier',
  city: '',
  street: '',
  house: '',
  building: '',
  apartment: '',
  comment: '',
  paymentMethod: 'invoice',
  pickupStoreId: pickupStores[0].id,
};

export function useCheckoutForm(onSubmit: (values: CheckoutFormValues) => void) {
  const [values, setValues] = useState<CheckoutFormValues>(initialValues);
  const [errors, setErrors] = useState<CheckoutErrors>({});

  const setField = useCallback(
    <K extends keyof CheckoutFormValues>(key: K, value: CheckoutFormValues[K]) => {
      setValues((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    },
    [],
  );

  
  const setCustomerType = useCallback((type: CustomerType) => {
    setValues((prev) => ({
      ...prev,
      customerType: type,
      paymentMethod:
        type === 'legal' && prev.paymentMethod === 'courier-cash' ? 'invoice' : prev.paymentMethod,
    }));
    setErrors({});
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validateCheckout(values);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      onSubmit(values);
      return;
    }
    
    requestAnimationFrame(() =>
      document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
    );
  };

  return { values, errors, setField, setCustomerType, handleSubmit };
}