export default function isBuffer(obj) {
  return !!obj?.constructor?.isBuffer?.(obj);
};
