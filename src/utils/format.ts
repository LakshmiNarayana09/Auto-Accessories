export const formatPrice = (value: number) => `${value.toLocaleString('en-US')} ₽`;
export const formatPieces = (n: number) => `${n} ${n === 1 ? 'pc.' : 'pcs.'}`;
export const formatDays = (n: number) => `${n} ${n === 1 ? 'day' : 'days'}`;


export const formatPhone = (input: string) => {
  let digits = input.replace(/\D/g, '');
  if (digits.startsWith('7') || digits.startsWith('8')) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (digits.length === 0) return '';

  let result = `+7 (${digits.slice(0, 3)}`;
  if (digits.length >= 3) result += ')';
  if (digits.length > 3) result += ` ${digits.slice(3, 6)}`;
  if (digits.length > 6) result += ` - ${digits.slice(6, 8)}`;
  if (digits.length > 8) result += ` - ${digits.slice(8, 10)}`;
  return result;
};

export const isValidPhone = (value: string) => value.replace(/\D/g, '').length === 11;


export const formatDate = (iso: string): string => iso.split("-").reverse().join(".");



