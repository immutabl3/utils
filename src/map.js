import isFunction from './isFunction';

const mapArrayKey = (arr, key) => arr.map(obj => obj[key]);

const mapArrayFn = (arr, fn) => arr.map(fn);

const mapObjectKey = (obj, key) => Object.fromEntries(
  Object.entries(obj).map(([objKey, objValue]) => [objKey, objValue[key]])
);

const mapObjectFn = (obj, fn) => Object.fromEntries(
  Object.entries(obj).map(([objKey, objValue]) => [objKey, fn(objValue)])
);

export default function map(arrOrObj, keyOrFn) {
  const isArr = Array.isArray(arrOrObj);
  const isFn = isFunction(keyOrFn);
  
  if (isArr && isFn) return mapArrayFn(arrOrObj, keyOrFn);
  if (isArr && !isFn) return mapArrayKey(arrOrObj, keyOrFn);
  if (!isArr && isFn) return mapObjectFn(arrOrObj, keyOrFn);
  return mapObjectKey(arrOrObj, keyOrFn);
};