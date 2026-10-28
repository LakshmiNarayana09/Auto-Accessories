import { useState } from 'react';
import { promoCodes } from '../data/checkout/checkoutData';

export function usePromoCode(initialCode = '') {
  const [code, setCode] = useState(initialCode);
  const [percent, setPercent] = useState(0);
  const [error, setError] = useState('');

  const changeCode = (value: string) => {
    setCode(value);
    setError('');
  };

  const apply = () => {
    const key = code.trim().toUpperCase();
    if (!key) {
      setPercent(0);
      setError('');
      return;
    }
    const found = promoCodes[key];
    if (found) {
      setPercent(found);
      setError('');
    } else {
      setPercent(0);
      setError('Invalid promo code');
    }
  };

  return { code, percent, error, changeCode, apply };
}