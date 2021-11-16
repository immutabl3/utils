export default function debounce(fn, delayMs = 0, { leading } = {}) {
  let timerId;

  return function debounced(arg) {
    if (!timerId && leading) fn(arg);

    clearTimeout(timerId);

    timerId = setTimeout(() => fn(arg), delayMs);
  };
};