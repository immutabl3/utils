import isFunction from './isFunction';

const mapArrayKey = <T, K extends keyof T>(arr: T[], key: K): T[K][] => arr.map(obj => obj[key]);

const mapArrayFn = <T, R>(arr: T[], fn: (item: T) => R): R[] => arr.map(fn);

const mapObjectKey = <T, K extends keyof T>(obj: Record<string, T>, key: K): Record<string, T[K]> => Object.fromEntries(
  Object.entries(obj).map(([objKey, objValue]) => [objKey, objValue[key]])
);

const mapObjectFn = <T, R>(obj: Record<string, T>, fn: (item: T) => R): Record<string, R> => Object.fromEntries(
  Object.entries(obj).map(([objKey, objValue]) => [objKey, fn(objValue)])
);

export default function map<T, K extends keyof T, R>(arrOrObj: T[] | Record<string, T>, keyOrFn: K | ((item: T) => R)): T[K][] | Record<string, T[K]> | R[] | Record<string, R> {
  const isArr = Array.isArray(arrOrObj);
  const isFn = isFunction(keyOrFn);
  
  if (isArr && isFn) return mapArrayFn(arrOrObj as T[], keyOrFn as (item: T) => R);
  if (isArr && !isFn) return mapArrayKey(arrOrObj as T[], keyOrFn as K);
  if (!isArr && isFn) return mapObjectFn(arrOrObj as Record<string, T>, keyOrFn as (item: T) => R);
  return mapObjectKey(arrOrObj as Record<string, T>, keyOrFn as K);
};
