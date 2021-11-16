export default function isDate(value) {
  return !!(value && value instanceof Date && !Number.isNaN(value));
};