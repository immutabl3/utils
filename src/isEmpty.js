export default function isEmpty(obj) {
  if (!obj) return true;
  for (const key in obj) return false;
  return true;
};