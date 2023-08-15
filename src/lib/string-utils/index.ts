export const trimLeft: Function = (value: string): string => value.replace(/^\s+/, '');

export const trimRight: Function = (value: string): string => value.replace(/[\s]+$/, '');

export const removeAllWhiteSpace: Function = (value: string): string => trimLeft(trimRight(value.replace(/\s/g, '')));

export const collapseWhiteSpace: Function = (value: string): string => trimLeft(trimRight(value.replace(/\s+/g, ' ')));
