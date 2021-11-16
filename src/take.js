export default function take(arr, qty = 1) {
  return [...arr].splice(0, qty);
};