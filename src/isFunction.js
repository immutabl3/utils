export default function isFunction(val) {
  return !!(val && typeof val === 'function');
};