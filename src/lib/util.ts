export const isUndefined: any = (value: any): boolean => value === undefined || value === null; // eslint-disable-line no-null/no-null, max-len
export const isDefined: any = (value: any): boolean => value !== undefined && value !== null; // eslint-disable-line no-null/no-null, max-len
export const isEmpty: any = (obj: any): boolean => obj && Object.keys(obj).length === 0;
