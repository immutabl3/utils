export default function size(obj) {
  return obj ? (obj.length ?? Object.keys(obj).length) : 0;
};