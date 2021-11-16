import isFunction from './isFunction';

const { hasOwnProperty } = Object.prototype;

const isObject = o => o !== null && typeof o === 'object';

const mapArray = (array, resolve) => array.map(resolve);

const mapObject = (object, resolve) => {
  const mappedObject = {};

  for (const key in object) {
    if (hasOwnProperty.call(object, key)) {
      mappedObject[key] = resolve(object[key]);
    }
  }

  return mappedObject;
};

export default function mapDeep(fn) {
  if (!isFunction(fn)) throw 'iterator must be a function';

  return function resolve(value) {
    return Array.isArray(value)
      ? mapArray(value, resolve)
      : isObject(value)
        ? mapObject(value, resolve)
        : fn(value);
  };
};