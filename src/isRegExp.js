export default function isRegExp(value) {
  return !!(value && value instanceof RegExp);
};