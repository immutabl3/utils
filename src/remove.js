export default function remove(arr, value) {
  const index = arr.indexOf(value);
  if (index === -1) return false;
  arr.splice(index, 1);
  return true;
};