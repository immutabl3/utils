export default function defer(fn: () => void): Timer {
  return setTimeout(fn, 0);
};