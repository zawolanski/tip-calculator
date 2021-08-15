export const isRequired = (val: any) => typeof val === 'string' && val.trim().length <= 0;
export const isNumber = (val: any) => isNaN(val);
export const isPositive = (val: any) => !!val && +val <= 0;
export const isZero = (val: any) => typeof val === 'string' && val === '0';
export const isFloat = (val: any) => +val % 1 !== 0;
